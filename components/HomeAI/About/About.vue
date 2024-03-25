<template>
  <div class="main-feature">
    <parallax-left />
    <v-dialog
      v-model="dialog"
      max-width="690"
    >
      <v-card class="video-popup">
        <v-card-title class="headline d-flex justify-space-between">
          <h4 class="use-text-subtitle2">
            {{ $t('ai-landing.feature_title') }}
          </h4>
          <v-btn class="close-btn" variant="text" icon @click="handleVideoClose()">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <div v-if="yt.use" class="text-center mb-3">
          <YouTube
            ref="youtube"
            :src="videoId"
            :vars="playerVars"
            :width="640"
            :height="360"
            class="youtube"
            @ready="onReady"
          />
        </div>
      </v-card>
    </v-dialog>
    <v-container :class="{ 'fixed-width': isTablet }">
      <v-row :class="[isMobile ? 'column-reverse' : 'row']" class="spacing6">
        <v-col md="6" cols="12" class="feature-wrap">
          <div class="counter">
            <div class="lower">
              <v-card class="paper">
                <div class="icon">
                  <icons3d icon="mdi-memory" color="primary" />
                </div>
                <div class="glow primary">
                  <h4 class="use-text-title2">+600</h4>
                  <p>
                    {{ $t('ai-landing.about_counter1') }}
                  </p>
                </div>
              </v-card>
              <v-card class="paper">
                <div class="icon">
                  <icons3d icon="mdi-clock-time-eight-outline" color="light-blue" />
                </div>
                <div class="glow light-blue">
                  <h4 class="use-text-title2">+200x</h4>
                  <p>
                    {{ $t('ai-landing.about_counter2') }}
                  </p>
                </div>
              </v-card>
            </div>
            <div class="higher">
              <v-card class="paper">
                <div class="icon">
                  <icons3d icon="mdi-atom" color="secondary" />
                </div>
                <div class="glow secondary">
                  <h4 class="use-text-title2">50x</h4>
                  <p>
                    {{ $t('ai-landing.about_counter3') }}
                  </p>
                </div>
              </v-card>
              <v-card class="paper">
                <div class="icon">
                  <icons3d icon="mdi-robot-vacuum" color="accent" />
                </div>
                <div class="glow accent">
                  <h4 class="use-text-title2">+20M</h4>
                  <p>
                    {{ $t('ai-landing.about_counter4') }}
                  </p>
                </div>
              </v-card>
            </div>
          </div>
        </v-col>
        <v-col md="6" cols="12" class="px-6">
          <title-main :text="$t('ai-landing.feature_title2')" :align="isMobile ? 'center' : 'left'" />
          <p class="pb-2 use-text-subtitle2" :class="[isMobile ? 'text-center px-5' : 'text-start']">
            {{ $t('ai-landing.feature_desc1') }}
          </p>
          <v-card class="video">
            <figure>
              <img :src="imgAPI.photosL[4]" alt="cover">
            </figure>
            <v-btn icon class="play-btn" @click="handleVideoOpen">
              <span class="ion-ios-play-outline" />
            </v-btn>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import './about-styles.scss';
</style>

<script setup>
import { onMounted, ref } from 'vue';
import { useDisplay } from 'vuetify';
import yt from '@/config/youtube';
import theme from '@/config/theme';
import imgAPI from '@/assets/images/imgAPI';
import ParallaxLeft from '../Parallax/ParallaxLeft';
import Icons3d from '../../Icons3d';
import TitleMain from '../../Title';

const player = ref(null);
const loaded = ref(false);
const dialog = ref(false);
const youtube = ref(null);
const playerVars = {
  autoplay: 0,
  controls: 1,
  rel: 0,
  showinfo: 1,
  mute: 0,
  origin: 'https://localhost:8008',
};

const videoId = 'ugGOo8_ufXM';
const { smAndDown: isMobile } = useDisplay();
const { mdAndUp: isTablet } = useDisplay();

onMounted(() => {
  loaded.value = true;
});

function handleVideoOpen() {
  if (yt.use) {
    dialog.value = true;
  }
}

function onReady() {
  youtube.value.playVideo();
}

function handleVideoClose() {
  dialog.value = false;
  youtube.value.pauseVideo();
}
</script>
