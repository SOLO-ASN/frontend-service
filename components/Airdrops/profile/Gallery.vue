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
              <token-card
                  v-if="tokenInfoDone && tokenAndNftDone"
                  :native="nativeToken"
                  :token="tokenAssets"
                  :info-list="tokensInfoList"
              />
            </div>
            <div v-if="item.type === 'nft'" class="nft-card">
              <nft-card
                  v-if="tokenInfoDone && tokenAndNftDone"
                  :nft="nftAssets"
              />
            </div>
            <div v-if="item.type === 'tx'" class="news-card">
              <txs-card
                  v-if="txsInfoDone"
                  :txs-list="txsInfoList"
                  :main-address="mainAddress"
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
import {onMounted, ref} from 'vue';
import {useDisplay} from 'vuetify';
import link from '@/assets/text/link';
import PlaylistCard from '../../Cards/Media/PlaylistCard';
import TokenCard from '../cards/token-card';
import NftCard from '../cards/nft-card';
import TxsCard from '../cards/txs-card';
import EvmChainApiProvider from "@/assets/api/addressAssets";

const {mainAddress} = defineProps({
  mainAddress: {
    type: String,
    required: true,
  },
});

// for address assets request use
const chainApiProvider = new EvmChainApiProvider("evm-chain-api-provider", "https://rpc.particle.network");

import {
  collectionData, blogData, postData,
  mediaData, tokensData, nftData, txsData, longestArray
} from './gallery-data';
import axios from 'axios';

const {mdAndDown: isMobile} = useDisplay();
const {lgAndDown: isTablet} = useDisplay();

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


const nativeToken = ref("");
const tokenAssets = ref([]);
const nftAssets = ref([]);
const tokensInfoList = ref([]);
const txsInfoList = ref([]);

const tokenInfoDone = ref(false);
const tokenAndNftDone = ref(false);
const txsInfoDone = ref(false);

async function getTokensInfoList() {
  const result = await axios.get('https://li.quest/v1/tokens?chains=1&chainTypes=EVM').catch((e) => {
    console.error(e);
  });
  return result.data;
}

onMounted(() => {
  const result = [];

  for (let i = 0; i < longestArray.length; i += 1) {
    if (collectionData[i]) result.push(collectionData[i]);
    if (tokensData[i]) result.push(tokensData[i]);
    if (nftData[i]) result.push(nftData[i]);
    if (txsData[i]) result.push(txsData[i]);
  }

  rawData.value = result;
  combinedData.value = result;

  chainApiProvider.GetTokensAndNFTs(mainAddress).then((result) => {
    nativeToken.value = result.native;
    tokenAssets.value = result.token;
    nftAssets.value = result.nft;
    tokenAndNftDone.value = true;

  }).catch((e) => {
    console.error(e);
    tokenAndNftDone.value = true;
  });

  getTokensInfoList().then((result) => {
    tokensInfoList.value = result.tokens['1'];
    tokenInfoDone.value = true;
  }).catch((e) => {
    console.error(e);
    tokenInfoDone.value = true;
  });

  chainApiProvider.GetTransactionsByAddress(mainAddress).then((result) => {

    txsInfoList.value = result;
    txsInfoDone.value = true;
  }).catch((e) => {
    console.error(e);
    txsInfoDone.value = true;
  });

});
</script>
