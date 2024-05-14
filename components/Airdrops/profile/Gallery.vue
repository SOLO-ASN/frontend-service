<template>
  <div class="root">
    <div class="mt-5">
      <v-tabs
        :align-tabs="isTablet ? 'center' : 'left'"
        :show-arrows="isTablet"
        v-model="valtab"
        @update:model-value="handleChange"
        class="tabs"
      >
        <v-tab class="tab-label" value="token">
          <span>Tokens</span>
        </v-tab>
        <v-tab class="tab-label" value="nft">
          <span>NFTs</span>
        </v-tab>
        <v-tab class="tab-label" value="tx">
          <span>Tx History</span>
        </v-tab>
<!--        <v-tab class="tab-label" value="blog">-->
<!--          <span>Blog</span>-->
<!--        </v-tab>-->
      </v-tabs>
      <div class="mt-5">
        <v-row :class="isMobile ? 'spacing2' : 'spacing4'">
          <v-col
            v-for="(item, index) in combinedData"
            :key="index"
            :sm="item.type === 'nft' ? 12 : 12"
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
            <div v-if="item.type === 'token'" class="token-card">
              <token-card />
            </div>
            <div v-if="item.type === 'nft'" class="nft-card">
              <nft-card />
            </div>
            <div v-if="item.type === 'tx'" class="news-card">
              <txs-card />
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
import TokenCard from '../cards/token-card';
import NftCard from '../cards/nft-card';
import TxsCard from '../cards/txs-card';


import {
  collectionData, blogData, postData,
  mediaData, tokensData, nftData, txsData, longestArray
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
  /*for (let i = 0; i < longestArray.length; i += 1) {
    if (collectionData[i]) result.push(collectionData[i]);
    if (blogData[i]) result.push(blogData[i]);
    if (postData[i]) result.push(postData[i]);
    if (mediaData[i] && (i % 2) === 0) {
      result.push(mediaData[i]);
      result.push(mediaData[i + 1]);
    }
  }*/

  for (let i = 0; i < longestArray.length; i += 1) {
    if (collectionData[i]) result.push(collectionData[i]);
    if (tokensData[i]) result.push(tokensData[i]);
    if (nftData[i]) result.push(nftData[i]);
    if (txsData[i]) result.push(txsData[i]);
  }

  rawData.value = result;
  combinedData.value = result;
});
</script>
