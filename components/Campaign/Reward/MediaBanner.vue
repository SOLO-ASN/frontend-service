<template>
  <v-dialog
    v-if="videoPopup"
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
    </v-card>
  </v-dialog>
  <div class="deco-wrap">
    <slot name="decoration" />
  </div>
  <v-container class="root">
    <v-row :class="isTablet ? 'spacing6' : 'spacing2'">
      <v-col :md="isDesktop ? 11 : 12" cols="12">
        <v-card class="banner">
        </v-card>
      </v-col>
    </v-row>
    <v-row
      :class="[thumb ? 'content-thumb' : 'content', { spacing2: isTablet }]"
      align="end"
    >
      <v-col :sm="thumb || featured ? 7 : (isDesktop ? 10 : 12)" cols="12">
        <div class="ps-4 ps-sm-2">
          <div v-if="tags" class="tags">
            <h6
              v-for="(tag, index) in tags"
              :key="index"
              class="use-text-subtitle use-text-primary"
            >
              {{ tag }}
            </h6>
          </div>
        </div>
      </v-col>

      
    </v-row>
  </v-container>
</template>

<style lang="scss" scoped>
@import "./hero-style.scss";
</style>

<script setup>
import { useTheme, useDisplay } from 'vuetify';
import yt from '@/config/youtube';
import MediaCard from '../../Cards/Media/MediaCard';
import TitleMain from '../../Title';

const {
  title, cover, thumb,
  videoBg, videoPopup, featured,
  tags, decoration: Decoration
} = defineProps({
  title: {
    type: String,
    required: true
  },
  cover: {
    type: String,
    required: true
  },
  thumb: {
    type: String,
    default: null
  },
  videoPopup: {
    type: String,
    default: null
  },
  videoBg: {
    type: String,
    default: null
  },
  featured: {
    type: Array,
    default: null
  },
  tags: {
    type: Array,
    default: null
  },
});

const { name: currentTheme } = useTheme();
const { mdAndDown: isMobile } = useDisplay();
const { smAndUp: isTablet } = useDisplay();
const { lgAndUp: isDesktop } = useDisplay();

// Video Popup Settings
const dialog = ref(false);
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

// Video Background
const youtubeBg = ref(null);
const play = ref(false);
const playerVarsBg = {
  autoplay: 1,
  controls: 0,
  rel: 0,
  showinfo: 0,
  mute: 1,
  origin: 'http://localhost:8000'
};

function playing() {
  play.value = true;
}
  
function ended(val) {
  if (val.data === 0) {
    youtubeBg.value.playVideo();
  }
}
</script>
