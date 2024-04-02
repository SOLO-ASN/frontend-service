<template>
  <v-container class="root">
    <div class="mt-sm-5">
      <div class="mt-5">
        <v-row class="{ 'spacing4': !isMobile }">
          <v-col md="4" cols="12">
            <v-row :class="{ spacing4: betweenTablet }">
              <template v-for="(item, index) in combinedData" :key="index">
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
import PhotoCard from '../Card/PhotoCard';
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