<template>
  <div class="root">
    <v-dialog
      v-model="dialog"
      max-width="690"
    >
      <v-card class="video-popup">
        <v-card-title class="headline d-flex justify-space-between">
          <h4 class="use-text-subtitle2">
            {{ $t('wallet.feature_title3') }}
          </h4>
          <v-btn class="close-btn" variant="text" icon @click="handleVideoClose()">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <div v-if="yt.use" class="text-center mb-3">
          <YouTube
            ref="youtubePopup"
            :src="videoIdPopup"
            :vars="playerVarsPopup"
            :width="640"
            :height="360"
            class="youtube"
            @ready="onReadyPopup"
          />
        </div>
      </v-card>
    </v-dialog>
    <div class="parallax-wrap">
      <parallax-ball />
    </div>
    <v-container :class="{ 'fixed-width' : isDesktop }">
      <parallax-title
        :bg-title="$t('wallet.feature_bgtitle')"
        :main-title="$t('wallet.feature_title')"
        :color="currentTheme === 'dark' ? 'triple-main' : 'triple-light'"
      />
      <p class="text-center use-text-subtitle2 mb-5">
        {{ $t('wallet.feature_desc') }}
      </p>
      <div>
        <div class="item">
          <v-row :class="[isMobile ? 'column-reverse' : 'row']">
            <v-col md="6" sm="5" cols="12" class="px-md-8">
              <div
                data-aos-offset="0"
                data-aos="fade-right"
                data-aos-delay="500"
                data-aos-duration="500"
              >
                <div class="illustration">
                  <div class="mobile-art">
                    <mobile-app
                      :screen="imgAPI.apps[14]"
                      :top="imgAPI.apps[8]"
                      :left="imgAPI.apps[10]"
                      :right="imgAPI.apps[9]"
                    />
                  </div>
                </div>
              </div>
            </v-col>
            <v-col md="6" sm="7" cols="12" class="px-md-8">
              <div class="desc">
                <title-secondary
                  color="secondary"
                  :text="$t('wallet.feature_title1')"
                  :align="isMobile ? 'center' : 'left'"
                />
                <h6 class="use-text-subtitle2" :class="[isMobile ? 'text-center' : 'text-start']">
                  {{ $t('wallet.feature_desc1') }}
                </h6>
                <h6 class="use-text-subtitle2" :class="[isMobile ? 'text-center' : 'text-start']">
                  {{ $t('wallet.feature_desc2') }}
                </h6>
                <v-btn href="#" variant="outlined" color="secondary">
                  {{ $t('btn_detail') }}
                </v-btn>
              </div>
            </v-col>
          </v-row>
        </div>
        <div class="item">
          <v-row align="center">
            <v-col md="6" sm="7" cols="12" class="px-md-8">
              <div class="desc" :class="[isMobile ? 'text-center' : 'text-end']">
                <title-secondary
                  :text="$t('wallet.feature_title2')"
                  color="primary"
                  :align="isMobile ? 'center' : 'right'"
                />
                <h6 class="use-text-subtitle2" :class="[isMobile ? 'text-center' : 'text-end']">
                  {{ $t('wallet.feature_desc2') }}
                </h6>
                <h6 class="use-text-subtitle2" :class="[isMobile ? 'text-center' : 'text-end']">
                  {{ $t('wallet.feature_desc1') }}
                </h6>
                <v-btn href="#" variant="outlined" color="primary">
                  {{ $t('btn_detail') }}
                </v-btn>
              </div>
            </v-col>
            <v-col md="6" sm="5" cols="12" class="px-md-6">
              <div
                data-aos-offset="0"
                data-aos="fade-left"
                data-aos-delay="500"
                data-aos-duration="500"
              >
                <div class="illustration">
                  <div class="share-art">
                    <sharing-art
                      :personBig="imgAPI.avatar[12]"
                      :personMedium="imgAPI.avatar[11]"
                      :personSmall1="imgAPI.avatar[20]"
                      :personSmall2="imgAPI.avatar[21]"
                    />
                  </div>
                </div>
              </div>
            </v-col>
          </v-row>
        </div>
        <div class="item last">
          <v-container class="max-md">
            <v-row align="center">
              <v-col md="12" cols="12">
                <div class="desc px-md-4">
                  <title-secondary
                    color="secondary"
                    :text="$t('wallet.feature_title3')"
                    align="center"
                  />
                  <h6 class="use-text-subtitle2 text-center">
                    {{ $t('wallet.feature_desc3') }}
                  </h6>
                </div>
              </v-col>
              <v-col md="12" cols="12" class="px-sm-8">
                <div
                  data-aos-offset="100"
                  data-aos="fade-up"
                  data-aos-delay="500"
                  data-aos-duration="500"
                >
                  <div class="illustration">
                    <video-banner
                      :action="handleVideoOpen"
                      :cover="imgAPI.photosL[48]"
                      :topLeft="imgAPI.apps[4]"
                      :topRight="imgAPI.apps[5]"
                      :bottomLeft="imgAPI.apps[7]"
                      :bottomRight="imgAPI.apps[6]"
                    />
                  </div>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </div>
      </div>
    </v-container>
    <div class="parallax-logo" />
  </div>
</template>

<style lang="scss" scoped>
@import './feature-style.scss';
</style>

<script setup>
import { onMounted } from 'vue';
import AOS from 'aos';
import { useDisplay, useTheme } from 'vuetify';
import imgAPI from '@/assets/images/imgAPI';
import yt from '@/config/youtube';
import ParallaxTitle from '../../Title/ParallaxTitle';
import TitleSecondary from '../../Title/TitleSecondary';
import MobileApp from '../../Artworks/MobileApp';
import VideoBanner from '../../Artworks/VideoBanner';
import SharingArt from '../../Artworks/Sharing';
import ParallaxBall from '../Parallax/ParallaxBall';

const { lgAndUp: isDesktop } = useDisplay();
const { xs: isMobile } = useDisplay();
const { name: currentTheme } = useTheme();

// Video Popup Settings
const dialog = ref(false);
const videoIdPopup = 'MgnXhbuxVF0';
const youtubePopup = ref(null);
const playerVarsPopup = {
  autoplay: 0,
  controls: 1,
  rel: 0,
  showinfo: 1,
  mute: 0,
  origin: 'https://localhost:8000',
};

function handleVideoOpen() {
  if (yt.use) {
    dialog.value = true;
  }
}
  
function onReadyPopup() {
  youtubePopup.value.playVideo();
}

function handleVideoClose() {
  dialog.value = false;
  youtubePopup.value.pauseVideo();
}

onMounted(() => {
  AOS.init({
    once: true,
  });
})
</script>
