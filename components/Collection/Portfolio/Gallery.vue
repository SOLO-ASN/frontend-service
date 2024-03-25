<template>
  <v-container class="root">
    <div class="mt-sm-5">
      <div class="tab">
        <v-tabs
          v-model="tab"
          class="tabs"
          :align-tabs="isTablet ? 'left' : 'center'"
          @update:modelValue="handleChange"
        >
          <v-tab class="tab-label" value="all">
            <span>All</span>
          </v-tab>
          <v-tab class="tab-label" value="collection">
            <span>Collection</span>
          </v-tab>
          <v-tab class="tab-label" value="apps">
            <span>Apps</span>
          </v-tab>
          <v-tab class="tab-label" value="website">
            <span>Website</span>
          </v-tab>
          <v-tab class="tab-label" value="nft">
            <span>NFT</span>
          </v-tab>
          <v-tab class="tab-label" value="design">
            <span>Designs</span>
          </v-tab>
          <v-tab class="tab-label" value="art">
            <span>Art</span>
          </v-tab>
        </v-tabs>
      </div>
      <div class="mt-5">
        <v-row class="{ 'spacing4': !isMobile }">
          <v-col md="4" sm="6" cols="12">
            <template v-for="(item, index) in combinedData" :key="index">
              <div v-if="index < divider">
                <div
                  v-if="item.type === 'collection'"
                  data-aos="fade-up"
                  data-aos-delay="400"
                  data-duration-delay="300"
                >
                  <playlist-card
                    text-center
                    :bgcolor="item.bgColor"
                    :title="item.title"
                    :desc="item.desc"
                    :href="item.href"
                    :count="item.count"
                    :items="item.items"
                  />
                </div>
                <div
                  class="photo-card mb-4"
                  v-if="item.type === 'media'"
                  data-aos="fade-up"
                  data-aos-delay="400"
                  data-duration-delay="300"
                >
                  <photo-card
                    :img="item.img"
                    :title="item.title"
                    :link="item.link"
                    :href="item.href"
                    :size="item.size"
                  />
                </div>
              </div>
            </template>
          </v-col>
          <v-col md="4" sm="6" cols="12">
            <template v-for="(item, index) in combinedData" :key="index">
              <div v-if="index >= divider && index < divider * 2" class="mb-4">
                <div
                  v-if="item.type === 'collection'"
                  data-aos="fade-up"
                  data-aos-delay="400"
                  data-duration-delay="300"
                >
                  <playlist-card
                    text-center
                    :bgcolor="item.bgColor"
                    :title="item.title"
                    :desc="item.desc"
                    :href="item.href"
                    :count="item.count"
                    :items="item.items"
                  />
                </div>
                <div
                  v-if="item.type === 'media'"
                  class="photo-card"
                  data-aos="fade-up"
                  data-aos-delay="400"
                  data-duration-delay="300"
                >
                  <photo-card
                    :img="item.img"
                    :title="item.title"
                    :link="item.link"
                    :href="item.href"
                    :size="item.size"
                  />
                </div>
              </div>
            </template>
          </v-col>
          <v-col md="4" cols="12">
            <v-row :class="{ spacing4: betweenTablet }">
              <template v-for="(item, index) in combinedData" :key="index">
                <v-col
                  v-if="index >= divider * 2"
                  class="mb-4"
                  md="12"
                  sm="6"
                  cols="12"
                >
                  <div
                    v-if="item.type === 'collection'"
                    data-aos="fade-up"
                    data-aos-delay="400"
                    data-duration-delay="300"
                  >
                    <playlist-card
                      text-center
                      :bgcolor="item.bgColor"
                      :title="item.title"
                      :desc="item.desc"
                      :href="item.href"
                      :count="item.count"
                      :items="item.items"
                    />
                  </div>
                  <div
                    v-if="item.type === 'media'"
                    class="photo-card"
                    data-aos="fade-up"
                    data-aos-delay="400"
                    data-duration-delay="300"
                  >
                    <photo-card
                      :img="item.img"
                      :title="item.title"
                      :link="item.link"
                      :href="item.href"
                      :size="item.size"
                    />
                  </div>
                </v-col>
              </template>
            </v-row>
          </v-col>
        </v-row>
      </div>
    </div>
  </v-container>
</template>

<style lang="scss" scoped>
@import './gallery-style.scss';
</style>

<script setup>
import { onMounted, ref } from 'vue';
import { useDisplay } from 'vuetify';
import AOS from 'aos';
import PlaylistCard from '../../Cards/Media/PlaylistCard';
import PhotoCard from '../../Cards/Media/PhotoCard';
import { collectionData, mediaData, longestArray } from './gallery-data';

const divider = ref(1);
const value = ref('all');
const combinedData = ref([]);
const rawData = ref([]);
const tab = ref('all');

const { mdAndDown: isTablet } = useDisplay();
const { smAndDown: isMobile } = useDisplay();
const { sm: betweenTablet } = useDisplay();

function handleChange(category) {
  value.value = category;
  combinedData.value = [];

  setTimeout(() => {
    if (category !== 'all') {
      const filteredData = rawData.value.filter(item => item.type === category);
      combinedData.value = filteredData;
    } else {
      combinedData.value = rawData.value;
    }
  }, 10);
}

onMounted(() => {
  const result = [];
  for (let i = 0; i < longestArray.length; i += 1) {
    if (collectionData[i]) result.push(collectionData[i]);
    if (mediaData[i]) result.push(mediaData[i]);
  }

  rawData.value = result;
  combinedData.value = result;
  console.log(combinedData.value);
  divider.value = Math.round(result.length / 3);

  AOS.init({
    once: true,
  });
})
</script>