<template>
  <div class="root">
    <div class="mt-5">
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

const data = defineProps({
  data: {
    type: Object,
    required: true
  }
});

onMounted(() => {
  
});
</script>
