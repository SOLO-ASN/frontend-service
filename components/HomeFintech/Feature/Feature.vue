<template>
  <div class="root">
    <v-dialog
      v-model="dialog"
      max-width="690"
    >
      <v-card class="video-popup">
        <v-card-title class="headline d-flex justify-space-between">
          <h4 class="use-text-subtitle2">
            {{ $t('fintech.feature_title3') }}
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
        :bg-title="$t('fintech.feature_bgtitle')"
        :main-title="$t('fintech.feature_title')"
        :color="currentTheme === 'dark' ? 'triple-main' : 'triple-light'"
      />
      <p class="text-center use-text-subtitle2 mb-15">
        {{ $t('fintech.feature_desc') }}
      </p>
      <div>
        <div class="item">
          <v-row align="center" :class="[isMobile ? 'column-reverse' : 'row']">
            <v-col md="6" sm="4" cols="12" class="px-sm-4">
              <div
                data-aos-offset="0"
                data-aos="fade-right"
                data-aos-delay="500"
                data-aos-duration="500"
              >
                <div class="illustration">
                  <div class="person-art">
                    <person-art :person="imgAPI.avatar[19]" />
                  </div>
                </div>
              </div>
            </v-col>
            <v-col md="6" cols="12" class="px-md-8">
              <div class="desc" :class="[isMobile ? 'text-center' : 'text-start']">
                <title-secondary
                  color="secondary"
                  :text="$t('fintech.feature_title1')"
                  :align="isMobile ? 'center' : 'left'"
                />
                <h6 class="use-text-subtitle2" :class="[isMobile ? 'text-center' : 'text-start']">
                  {{ $t('fintech.feature_desc1') }}
                </h6>
                <h6 class="use-text-subtitle2" :class="[isMobile ? 'text-center' : 'text-start']">
                  {{ $t('fintech.feature_desc2') }}
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
            <v-col md="6" cols="12" class="px-lg-8">
              <div class="desc" :class="[isMobile ? 'text-center' : 'text-end']">
                <title-secondary
                  :text="$t('fintech.feature_title2')"
                  color="primary"
                  :align="isMobile ? 'center' : 'right'"
                />
                <h6 class="use-text-subtitle2" :class="[isMobile ? 'text-center' : 'text-end']">
                  {{ $t('fintech.feature_desc2') }}
                </h6>
                <h6 class="use-text-subtitle2" :class="[isMobile ? 'text-center' : 'text-end']">
                  {{ $t('fintech.feature_desc1') }}
                </h6>
                <v-btn href="#" variant="outlined" color="primary">
                  {{ $t('btn_detail') }}
                </v-btn>
              </div>
            </v-col>
            <v-col md="6" cols="12" class="px-15">
              <div
                data-aos-offset="0"
                data-aos="fade-left"
                data-aos-delay="500"
                data-aos-duration="500"
              >
                <div class="illustration">
                  <div class="app-art">
                    <desktop-app
                      :screen="imgAPI.apps[15]"
                      :top="imgAPI.apps[11]"
                      :left="imgAPI.apps[12]"
                      :right="imgAPI.apps[13]"
                    />
                  </div>
                </div>
              </div>
            </v-col>
          </v-row>
        </div>
        <div class="item">
          <v-container class="max-md">
            <v-row align="center">
              <v-col md="12" cols="12">
                <div class="desc px-md-4">
                  <title-secondary
                    color="primary"
                    :text="$t('fintech.feature_title3')"
                    align="center"
                  />
                  <h6 class="use-text-subtitle2 text-center">
                    {{ $t('fintech.feature_desc3') }}
                  </h6>
                </div>
              </v-col>
              <v-col md="12" cols="12" class="px-0 px-sm-8">
                <div
                  data-aos-offset="100"
                  data-aos="fade-up"
                  data-aos-delay="500"
                  data-aos-duration="500"
                >
                  <div class="illustration">
                    <div class="video-art">
                      <video-banner
                        :action="handleVideoOpen"
                        :cover="imgAPI.apps[16]"
                        :topLeft="imgAPI.apps[4]"
                        :topRight="imgAPI.apps[5]"
                        :bottomLeft="imgAPI.apps[7]"
                        :bottomRight="imgAPI.apps[6]"
                      />
                    </div>
                  </div>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </div>
      </div>
    </v-container>
    <div :style="{ backgroundImage: `url(${imgAPI.fintech[2]})` }" class="parallaxLogo" />
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
import PersonArt from '../../Artworks/Person';
import DesktopApp from '../../Artworks/DesktopApp';
import VideoBanner from '../../Artworks/VideoBanner';
import ParallaxBall from '../Parallax/ParallaxBall';

const { lgAndUp: isDesktop } = useDisplay();
const { smAndDown: isMobile } = useDisplay();
const { name: currentTheme } = useTheme();

// Video Popup Settings
const dialog = ref(false);
const videoIdPopup = '9vPfeczePww';
const youtubePopup = ref(null);
const playerVarsPopup = {
  autoplay: 0,
  controls: 1,
  rel: 0,
  showinfo: 1,
  mute: 0,
  origin: 'https://localhost:8000',
};

// Video Popup Function
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

// Video Background Function
function playing() {
  play.value = true;
}
  
function ended(val) {
  if (val.data === 0) {
    youtubeBg.value.playVideo();
  }
}


onMounted(() => {
  AOS.init({
    once: true,
  });
})
</script>
