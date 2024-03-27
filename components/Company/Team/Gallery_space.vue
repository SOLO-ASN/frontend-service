<template>
  <div class="root">
    <div class="mt-5">
      <v-tabs
        :align-tabs="isTablet ? 'center' : 'left'"
        :show-arrows="isTablet"
        v-model="valtab"
        @update:modelValue="handleChange"
        class="tabs"
      >
        <v-tab class="tab-label" value="all">
          <span>All</span>
        </v-tab>
        <v-tab class="tab-label" value="OAT&NFT">
          <span>OAT&NFT</span>
        </v-tab>
        <v-tab class="tab-label" value="Custom Reward">
          <span>Custom Reward</span>
        </v-tab>
        <v-tab class="tab-label" value="Token Reward">
          <span>Token Reward</span>
        </v-tab>
        <v-tab class="tab-label" value="Point">
          <span>Point</span>
        </v-tab>
        <v-tab class="tab-label" value="Mintlist">
          <span>Mintlist</span>
        </v-tab>
      </v-tabs>
      <div class="mt-5">
        <v-row :class="isMobile ? 'spacing2' : 'spacing4'">
          <v-col
            v-for="(item, index) in combinedData"
            :key="index"
            :sm=4
            cols="10"
          >
            <playlist-card
              v-if="item.type === 'collection'"
              text-center
              :bgcolor="item.bgColor"
              :title="item.title"
              :img="item.img"
              :desc="item.desc"
              :logo="item.logo"
              :href="item.href"
              :count="item.count"
              :items="item.items"
            />
          </v-col>
        </v-row>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './gallery-style.scss';
</style>

<script setup>
import { onMounted, ref } from 'vue';
import { useDisplay } from 'vuetify';
import link from '@/assets/text/link';
import PlaylistCard from '../../Cards/Media/PlaylistCard';
import PhotoCard from '../../Cards/Media/PhotoCard';
import PostCard from '../../Cards/Post/PostCard';
import NewsCard from '../../Cards/Post/NewsCard';
import collection from '@/assets/api/collection';
import {
  collectionData, blogData, postData,
  mediaData, longestArray
} from './gallery-data';

const { mdAndDown: isMobile } = useDisplay();
const { lgAndDown: isTablet } = useDisplay();

const valtab = ref('all');
const combinedData = ref(collection);
const rawData = ref(collection);

function handleChange(category) {
  valtab.value = category;

}

onMounted(() => {
  const result = [];
  for (let i = 0; i < longestArray.length; i += 1) {
    if (collectionData[i]) result.push(collectionData[i]);
  }

  rawData.value = result;
  combinedData.value = result;
});
</script>
