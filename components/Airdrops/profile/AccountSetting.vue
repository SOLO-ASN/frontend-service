<template>
  <div class="root">
    <div class="mt-5">

      <transition name="fade">
        <div v-if="openDrawer" class="paper-nav">
          <div class="mobile-nav">
            <v-container class="max-md">
              <v-row class="spacing2">
                <v-col sm="3">
                  <div class="root-menu">
<!--                    <ul class="menu">-->
<!--                      <li-->
<!--                          v-for="(item, index) in menu"-->
<!--                          :key="index"-->
<!--                          :style="{ 'animation-duration': index * 0.15 + 's' }"-->
<!--                      >-->
<!--                        <v-btn-->
<!--                            :class="{ active: activeMenu === item.name }"-->
<!--                            variant="text"-->
<!--                            @click="scrollToMyEl(item.name)"-->
<!--                            v-text="$t('setting_'+item.name)"-->
<!--                        />-->
<!--                      </li>-->
<!--                    </ul>-->
                    <v-tab
                        v-for="(item, index) in menu"
                        :key="index"
                        v-text="$t('setting_'+item.name)"
                        v-value="item.name"
                        @click="scrollToMyEl(item.name)"
                    ></v-tab>
                  </div>


                </v-col>
                <v-col sm="9">
<!--&lt;!&ndash;                  <div class="detail">&ndash;&gt;-->
<!--&lt;!&ndash;                    <div class="logo-name">&ndash;&gt;-->
<!--&lt;!&ndash;                      <h3 class="use-text-title">&ndash;&gt;-->
<!--&lt;!&ndash;                        {{ brand.name }}&ndash;&gt;-->
<!--&lt;!&ndash;                      </h3>&ndash;&gt;-->
<!--&lt;!&ndash;                      <h4 class="use-text-subtitle">&ndash;&gt;-->
<!--&lt;!&ndash;                        {{ brand.title }}&ndash;&gt;-->
<!--&lt;!&ndash;                      </h4>&ndash;&gt;-->
<!--&lt;!&ndash;                    </div>&ndash;&gt;-->



<!--&lt;!&ndash;                  </div>&ndash;&gt;-->

<!--                  <v-row :class="isMobile ? 'spacing2' : 'spacing4'">-->

<!--                  <div-->
<!--                      v-for="(item, index) in combinedData"-->
<!--                      :key="index"-->
<!--                      cols="12"-->
<!--                  >-->
<!--                    &lt;!&ndash;                <playlist-card&ndash;&gt;-->
<!--                    &lt;!&ndash;                    v-if="item.type === 'collection'"&ndash;&gt;-->
<!--                    &lt;!&ndash;                    text-center&ndash;&gt;-->
<!--                    &lt;!&ndash;                    :bgcolor="item.bgColor"&ndash;&gt;-->
<!--                    &lt;!&ndash;                    :title="item.title"&ndash;&gt;-->
<!--                    &lt;!&ndash;                    :desc="item.desc"&ndash;&gt;-->
<!--                    &lt;!&ndash;                    :href="item.href"&ndash;&gt;-->
<!--                    &lt;!&ndash;                    :count="item.count"&ndash;&gt;-->
<!--                    &lt;!&ndash;                    :items="item.items"&ndash;&gt;-->
<!--                    &lt;!&ndash;                />&ndash;&gt;-->

                    <br/>
                    <div class="" id="profile">
                      <profile-setting-card
                          :name="username"
                      />
                    </div>

                    <br/> <v-divider /> <br/>
                    <div class="" id="wallet">
                      <wallet-setting-card />
                    </div>

                    <br/> <v-divider /> <br/>
                    <div class="" id="social">
                      <social-setting-card />
                    </div>

<!--                  </div>-->
<!--                                </v-row>-->
                </v-col>
              </v-row>
            </v-container>
          </div>
        </div>
      </transition>

<!--      <v-row>-->
<!--        <v-col :cols="3">-->
<!--          <v-tabs-->
<!--              :align-tabs="isTablet ? 'center' : 'left'"-->
<!--              :show-arrows="isTablet"-->
<!--              v-model="valtab"-->
<!--              direction="vertical"-->
<!--              @update:model-value="handleChange"-->
<!--              class="tabs"-->
<!--          >-->
<!--            <v-tab class="tab-label mt2" value="profile">-->
<!--              <span>Profile Setting</span>-->
<!--            </v-tab>-->
<!--            <v-tab class="tab-label" value="wallet">-->
<!--              <span>Wallet Address</span>-->
<!--            </v-tab>-->
<!--            <v-tab class="tab-label" value="social">-->
<!--              <span>Social Accounts</span>-->
<!--            </v-tab>-->
<!--            &lt;!&ndash;        <v-tab class="tab-label" value="blog">&ndash;&gt;-->
<!--            &lt;!&ndash;          <span>Blog</span>&ndash;&gt;-->
<!--            &lt;!&ndash;        </v-tab>&ndash;&gt;-->
<!--          </v-tabs>-->
<!--        </v-col>-->
<!--        <v-col :cols="9">-->
<!--&lt;!&ndash;          <div class="mt-5">&ndash;&gt;-->
<!--            <v-row :class="isMobile ? 'spacing2' : 'spacing4'">-->
<!--              <v-col-->
<!--                  v-for="(item, index) in combinedData"-->
<!--                  :key="index"-->
<!--                  cols="12"-->
<!--              >-->
<!--&lt;!&ndash;                <playlist-card&ndash;&gt;-->
<!--&lt;!&ndash;                    v-if="item.type === 'collection'"&ndash;&gt;-->
<!--&lt;!&ndash;                    text-center&ndash;&gt;-->
<!--&lt;!&ndash;                    :bgcolor="item.bgColor"&ndash;&gt;-->
<!--&lt;!&ndash;                    :title="item.title"&ndash;&gt;-->
<!--&lt;!&ndash;                    :desc="item.desc"&ndash;&gt;-->
<!--&lt;!&ndash;                    :href="item.href"&ndash;&gt;-->
<!--&lt;!&ndash;                    :count="item.count"&ndash;&gt;-->
<!--&lt;!&ndash;                    :items="item.items"&ndash;&gt;-->
<!--&lt;!&ndash;                />&ndash;&gt;-->
<!--                <div v-if="item.type === 'profile'" class="">-->
<!--                  <profile-setting-card />-->
<!--                </div>-->
<!--                <div v-if="item.type === 'wallet'" class="">-->
<!--                  <wallet-setting-card />-->
<!--                </div>-->
<!--                <div v-if="item.type === 'social'" class="">-->
<!--                  <social-setting-card />-->
<!--                </div>-->
<!--              </v-col>-->
<!--            </v-row>-->
<!--&lt;!&ndash;          </div>&ndash;&gt;-->
<!--        </v-col>-->
<!--      </v-row>-->
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './gallery-style.scss';
@import './header-style.scss';
</style>

<script setup>
import { onMounted, inject, ref } from 'vue';
import { useDisplay } from 'vuetify';
import link from '@/assets/text/link';
import PlaylistCard from '../../Cards/Media/PlaylistCard';
import TokenCard from '../cards/token-card';
import NftCard from '../cards/nft-card';
import TxsCard from '../cards/txs-card';

import ProfileSettingCard from '@/components/Airdrops/cards/ProfileSettingCard.vue'
import WalletSettingCard from '@/components/Airdrops/cards/WalletSettingCard.vue'
import SocialSettingCard from '@/components/Airdrops/cards/SocialSettingCard.vue'

import url from '@/assets/text/url';
import axios from 'axios';

import {
  collectionData, blogData, postData,
  mediaData, tokensData, nftData, txsData, longestArray,
  profileData, walletData, socialData
} from './gallery-data';
import brand from "assets/text/brand";
import Hidden from "~/components/Utils/Hidden/Hidden.vue";
import {useRouter} from "#app";

const { mdAndDown: isMobile } = useDisplay();
const { lgAndDown: isTablet } = useDisplay();

// for server request use
const SERVER = url.serverUrl;


// const { invert, menu } = defineProps({
//   invert: {
//     type: Boolean,
//     default: false,
//   },
//   menu: {
//     type: Array,
//     required: true,
//   },
// });

const valtab = ref('all');
const combinedData = ref([]);
const rawData = ref([]);

const menu = ref([]);

const openDrawer = ref(true);
let currentSelect = "profile";

let tab = 'option-1';

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


function scrollToMyEl(select) {
  const router = useRouter();
  currentSelect = select;

  router.push(`#${currentSelect}`);

  console.log(currentSelect);
}




function createListing(name) {
  return { name };
}

let username = ref("");
async function fetchUsername() {
  username.value = localStorage.getItem('username');
}

async function storeTgInfo(tgInfo) {
  axios.post(SERVER + '/api/user/update/socialAccount', {
    "username": username.value,
    "telegramAccount": {
    "id": tgInfo.id.toString(),
      "name":tgInfo.username
    }}).then((response) => {
    console.log(response.data);
  }).catch(error => {
    console.log(error);
  })
}

async function decodeTgAuthResult() {
  const url = new URL(window.location.href);
  const hash = url.hash.substring(1); // removes "#"
  const jsonObjectStr = decodeURIComponent(hash.substring(13)); // removes "tgAuthResult=" and decode
  if (jsonObjectStr.length > 0) {
    const tgInfo = JSON.parse(atob(jsonObjectStr));
    console.log(tgInfo);


    await storeTgInfo(tgInfo);

    window.close();
  }
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
    if (profileData[i]) result.push(profileData[i]);
    if (walletData[i]) result.push(walletData[i]);
    if (socialData[i]) result.push(socialData[i]);
  }

  rawData.value = result;
  combinedData.value = result;

  menu.value = [
      createListing("profile"),
      createListing("wallet"),
      createListing("social")
  ];

  // get username from local storage
  fetchUsername();

  // redirected from telegram, decode the result and close the window
  decodeTgAuthResult();


});
</script>
