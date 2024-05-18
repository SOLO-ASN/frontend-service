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

                    <br/>
                    <div class="" id="profile">
                      <profile-setting-card
                          :name="username"
                      />
                    </div>

                    <br/> <v-divider /> <br/>
                    <div class="" id="wallet">
                      <wallet-setting-card
                          v-if="userChainAddresses"
                          :username="username"
                          :user-chain-addresses="userChainAddresses"
                      />
                    </div>

                    <h3 style="color: #4d59d5;"> Add Address</h3>

                    <v-container class="wallet-address-setting-container">
                      <v-row>
                        <v-col cols="12" style="">

                          <wallet-network-more-box
                              :username="username"
                          />
                        </v-col>
                      </v-row>

                    </v-container>

                    <br/> <v-divider /> <br/>
                    <div class="" id="social">
                      <social-setting-card
                          v-if="userSocialAccounts"
                          :social-account-object="userSocialAccounts"
                      />
                    </div>

                </v-col>
              </v-row>
            </v-container>
          </div>
        </div>
      </transition>

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
import WalletNetworkMoreBox from "~/components/Airdrops/cards/WalletNetworkMoreBox.vue";

const { mdAndDown: isMobile } = useDisplay();
const { lgAndDown: isTablet } = useDisplay();

// for server request use
const SERVER = url.serverUrl;

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
  console.log("fetching data", username.value);
}

async function storeTgInfo(tgInfo) {
  try{
    await axios.post(SERVER + '/api/user/update/socialAccount', {
      "username": username.value,
      "telegramAccount": {
      "id": tgInfo.id.toString(),
        "name":tgInfo.username
      }});
  } catch (e) {
    console.error(e);
  }
}

async function decodeTgAuthResult() {
  const url = new URL(window.location.href);
  const oriPath = url.origin + url.pathname;
  const hash = url.hash.substring(1); // removes "#"
  const jsonObjectStr = decodeURIComponent(hash.substring(13)); // removes "tgAuthResult=" and decode
  if (jsonObjectStr.length > 0) {
    const tgInfo = JSON.parse(atob(jsonObjectStr));
    console.log(tgInfo);

    try {
      await storeTgInfo(tgInfo);
    } catch (e) {
      console.error("Failed to store Telegram info: ", e);
    }

    window.open(oriPath, "_self");
  }
}


const userSocialAccounts = ref(null);
const userChainAddresses = ref(null);
async function fetchAndPackData(username) {
  try {
    const userInfo = await axios.post(SERVER + '/api/user/info/' + username, {});
    console.log(userInfo.data);
    if (userInfo.data.msg === "success") {
      const newSocialAccounts = {};
      const newChainAddresses = {};
      let _userInfo = userInfo.data.data.addressInfo;
      if (_userInfo.xAccountId !== "") {
        newSocialAccounts["X"] = {
        "id": _userInfo.xAccountId,
        "name": _userInfo.xAccountName,
      }}
      if (_userInfo.githubAccountId !== "") {
        newSocialAccounts["Github"] = {
          "id": _userInfo.githubAccountId,
          "name": _userInfo.githubAccountName,
        }
      }
      if (_userInfo.discordAccountId !== "") {
        newSocialAccounts["Discord"] = {
          "id": _userInfo.discordAccountId,
          "name": _userInfo.discordAccountName,
        }
      }
      if (_userInfo.telegramAccountId !== "") {
        newSocialAccounts["Telegram"] = {
          "id": _userInfo.telegramAccountId,
          "name": _userInfo.telegramAccountName,
        }
      }
      userSocialAccounts.value = {...userSocialAccounts.value, ...newSocialAccounts};

      // bind new chain addresses
      if (_userInfo.mainAddr !== "") {
        newChainAddresses["eth"] = _userInfo.mainAddr;
      }
      userChainAddresses.value = {...userChainAddresses.value,...newChainAddresses};
    }

  } catch (e) {
    console.error(e);
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

  fetchAndPackData(username.value);

});
</script>
