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
            {{ $t('blockchain.feature_title') }}
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
      <v-row>
        <v-col md="6" cols="12">
          <title-main :text="$t('blockchain.feature_title2')" :align="isMobile ? 'center' : 'left'" />
          <p class="pb-2 use-text-subtitle2" :class="[isMobile ? 'text-center' : 'text-start']">
            {{ $t('blockchain.feature_desc1') }}
          </p>
          <div v-ripple @click="handleVideoOpen" @keydown.enter="handleVideoOpen">
            <div class="video">
              <media-card
                :thumb="imgAPI.photosL[9]"
                :title="$t('blockchain.feature_title2')"
                orientation="landscape"
                type="video"
              />
            </div>
          </div>
        </v-col>
        <v-col md="6" cols="12" class="feature-wrap">
          <div class="counter">
            <div class="lower">
              <v-card class="paper">
                <div class="icon">
                  <icons3d icon="mdi-code-not-equal-variant" color="primary" />
                </div>
                <div class="glow primary">
                  <h4 class="use-text-title2">+600</h4>
                  <p>
                    {{ $t('blockchain.about_counter1') }}
                  </p>
                </div>
              </v-card>
              <v-card class="paper">
                <div class="icon">
                  <icons3d icon="mdi mdi-hexagon-slice-4" color="light-blue" />
                </div>
                <div class="glow light-blue">
                  <h4 class="use-text-title2">+200x</h4>
                  <p>
                    {{ $t('blockchain.about_counter2') }}
                  </p>
                </div>
              </v-card>
            </div>
            <div class="higher">
              <v-card class="paper">
                <div class="icon">
                  <icons3d icon="mdi-lightning-bolt-circle" color="secondary" />
                </div>
                <div class="glow secondary">
                  <h4 class="use-text-title2">50x</h4>
                  <p>
                    {{ $t('blockchain.about_counter3') }}
                  </p>
                </div>
              </v-card>
              <v-card class="paper">
                <div class="icon">
                  <icons3d icon="mdi-source-branch" color="accent" />
                </div>
                <div class="glow accent">
                  <h4 class="use-text-title2">+20M</h4>
                  <p>
                    {{ $t('blockchain.about_counter4') }}
                  </p>
                </div>
              </v-card>
            </div>
          </div>
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
import MediaCard from '../../Cards/Media/MediaCard';
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
  origin: 'https://localhost:8000',
};

const videoId = 'f82BZoIR7TA';
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
