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
        <v-tab class="tab-label" value="post">
          <span>Post</span>
        </v-tab>
        <v-tab class="tab-label" value="media">
          <span>Media</span>
        </v-tab>
        <v-tab class="tab-label" value="collection">
          <span>Collection</span>
        </v-tab>
        <v-tab class="tab-label" value="blog">
          <span>Blog</span>
        </v-tab>
      </v-tabs>
      <div class="mt-5">
        <v-row :class="isMobile ? 'spacing2' : 'spacing4'">
          <v-col
            v-for="(item, index) in combinedData"
            :key="index"
            :sm="item.type === 'collection' ? 12 : 6"
            cols="12"
          >
            <playlist-card
              v-if="item.type === 'collection'"
              text-center
              :bgcolor="item.bgColor"
              :title="item.title"
              :desc="item.desc"
              :href="item.href"
              :count="item.count"
              :items="item.items"
            />
            <div v-if="item.type === 'media'" class="photo-card">
              <photo-card
                :img="item.img"
                :title="item.title"
                :link="item.link"
                size="medium"
              />
            </div>
            <div v-if="item.type === 'post'" class="post-card">
              <post-card
                :img="item.img"
                :title="item.title"
                :desc="item.text"
                :href="link.portfolioDetail"
                source="Facebook"
              />
            </div>
            <div v-if="item.type === 'blog'" class="news-card">
              <news-card
                :img="item.img"
                :title="item.desc"
                :headline="item.title"
                :href="item.href"
                type="over"
              />
            </div>
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
import {
  collectionData, blogData, postData,
  mediaData, longestArray
} from './gallery-data';

const { mdAndDown: isMobile } = useDisplay();
const { lgAndDown: isTablet } = useDisplay();

const valtab = ref('all');
const combinedData = ref([]);
const rawData = ref([]);

function handleChange(category) {
  valtab.value = category;
  
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
    if (blogData[i]) result.push(blogData[i]);
    if (postData[i]) result.push(postData[i]);
    if (mediaData[i] && (i % 2) === 0) {
      result.push(mediaData[i]);
      result.push(mediaData[i + 1]);
    }
  }

  rawData.value = result;
  combinedData.value = result;
});
</script>
