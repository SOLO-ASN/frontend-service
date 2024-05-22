<template>
  <div>
    <div class="main-wrap">
      <main-header home :menu="singleMenu.inner" />
      <!--      <blue-gradient />-->
      <div class="container-wrap container-wrap">
        <div class="inner-page">
          <v-container>
            <section id="banner">
              <v-row
                  :class="isMobile ? 'spacing2' : 'spacing6'"
                  id="big"
                  justify="center"
              >
                <v-col md="9" cols="12">
                  <profile-card
                      size="small"
                      :name="username"
                      :socmed="['facebook', 'linkedin', 'twitter', 'instagram']"
                  />
                </v-col>

              </v-row>
            </section>
          </v-container>

          <v-container>
            <v-row class="spacing2">
              <v-col class="px-0" md="8" cols="12">
                <gallery
                    v-if="done"
                    :main-address="mainAddress"
                />
              </v-col>
              <v-col class="px-6" md="4" cols="12">
                <sidebar
                    v-if="done"
                    campaignViews="156"
                    memberSince="2024"
                    :main-address="mainAddress"
                    max-length="12"
                    watching-topics='Web3, NFTs, Solana, Ethereum'
                />
              </v-col>
            </v-row>
          </v-container>
        </div>
      </div>
      <footer-deco>
        <main-footer />
      </footer-deco>
      <hidden point="mdDown">
        <notification />
      </hidden>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/scss/pages';
</style>

<script setup>
import { useDisplay } from 'vuetify';
import MainHeader from '@/components/Header';
import BlueGradient from '@/components/Artworks/BlurGradient';
import ProfileBanner from '@/components/HeroBanner/ProfileBanner';
import ProfileCard from '~/components/Airdrops/cards/ProfileCard';
import ParallaxDeco from '@/components/Parallax3d/Snail';
import Gallery from '@/components/Airdrops/profile/Gallery';
import Sidebar from '@/components/Airdrops/profile/Sidebar';
import MainFooter from '@/components/Footer';
import FooterDeco from '@/components/Footer/Decoration/General';
import Hidden from '@/components/Utils/Hidden';
import Corner from '@/components/Utils/Corner';
import Notification from '@/components/Notification';
import singleMenu from '@/components/Header/data/single';
import brand from '@/assets/text/brand';
import link from '@/assets/text/link';
import imgAPI from '@/assets/images/imgAPI';
import { useHead } from '#app';
import {ref} from "vue";
import axios from "axios";
import url from '@/assets/text/url';

// for server request use
const SERVER = url.serverUrl;

let username = ref("");
let mainAddress = ref("");
let done = ref(false);
async function fetchUsernameAndAddress() {

  username.value = localStorage.getItem('username');
  mainAddress.value = localStorage.getItem('mainRewardAddress');
  if (mainAddress.value === '' || mainAddress.value === null) {
    mainAddress.value = "needs to be set";
  }
  console.log("fetching data", username.value, mainAddress.value);
  if (username.value === '' || username.value === null) {
    router.push('/menus/explore');
  }

}

async function fetchAndPackData(username) {
  try {
    const userInfo = await axios.post(SERVER + '/api/user/info/' + username, {});
    console.log(userInfo.data);
    if (userInfo.data.msg === "success") {
      let _userInfo = userInfo.data.data.addressInfo;
      if (_userInfo.mainAddr !== '' || _userInfo.mainAddr !== null) {
        localStorage.setItem('mainRewardAddress', _userInfo.mainAddr);
        mainAddress.value = _userInfo.mainAddr;
      }
    }

  } catch (e) {
    console.error(e);
  }
  done.value = true;
}


onMounted(() => {
  fetchUsernameAndAddress();
  fetchAndPackData(username.value);
});

function imgUrl(name) {
  return "boring"
}

useHead({
  title: brand.name + ' - Profile',
});

const { smAndUp: isTablet } = useDisplay();
const { lgAndUp: isDesktop } = useDisplay();
const { smAndDown: isMobile } = useDisplay();
</script>
