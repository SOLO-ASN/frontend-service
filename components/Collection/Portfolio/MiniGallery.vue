<template>
  <div class="root">
    <v-dialog
      v-model="dialog"
      max-width="690"
    >
      <v-card class="video-popup">
        <v-card-title class="headline d-flex justify-space-between">
          <h4 class="use-text-subtitle2">
            Lorem ipsum dolor sit amet
          </h4>
          <v-btn class="close-btn" variant="text" icon @click="handleVideoClose()">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <div v-if="yt.use" class="text-center mb-3">
          <YouTube
            ref="youtubePopup"
            :src="videoId"
            :vars="playerVarsPopup"
            :width="640"
            :height="360"
            class="youtube"
            @ready="onReadyPopup"
          />
        </div>
      </v-card>
    </v-dialog>
    <vue-easy-lightbox
      v-if="loaded"
      :visible="visible"
      :imgs="imgs"
      :index="index"
      @hide="handleHide"
    />
    <div class="massonry" :class="{ expand: expanded }">
      <div class="masonry-content">
        <div
          v-for="(item, index) in gallery"
          :key="index"
          class="item"
          :class="item.orientation === 'landscape' ? 'landscape' : 'portrait'"
        >
          <media-card
            :thumb="item.thumb"
            :type="item.type"
            :orientation="item.orientation"
            href="#!"
            :plain="item.type === 'photo'"
            :video-id="item.videoId"
            :action="handleVideoOpen"
          />
          <a
            v-if="item.type === 'photo'"
            v-ripple
            @click="showImg(index)"
            class="img-button"
          />
        </div>
      </div>
      <v-btn
        class="btn"
        size="large"
        color="black"
        @click="toggleExpand"
        :text="expanded ? 'Hide Some Media' : 'Show All Media'"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './mini-gallery-style.scss';
</style>

<script setup>
import { ref, onMounted, computed } from 'vue';
import yt from '@/config/youtube';
import imgAPI from '@/assets/images/imgAPI';
import MediaCard from '../../Cards/Media/MediaCard';

const gallery = [
  {
    thumb: imgAPI.photosL[25],
    type: 'video',
    videoId: 'MgnXhbuxVF0',
    orientation: 'landscape',
    title: 'Sed lacinia velit, ut malesuada eros interdum a'
  },
  {
    thumb: imgAPI.photosL[23],
    type: 'photo',
    orientation: 'landscape'
  },
  {
    thumb: imgAPI.photosL[35],
    type: 'video',
    videoId: '5QFvlhX_DmM',
    orientation: 'landscape'
  },
  {
    thumb: imgAPI.photosP[2],
    type: 'photo',
    orientation: 'portrait'
  },
  {
    thumb: imgAPI.photosL[27],
    type: 'photo',
    orientation: 'landscape'
  },
  {
    thumb: imgAPI.photosP[5],
    type: 'photo',
    orientation: 'portrait'
  },
  {
    thumb: imgAPI.photosL[53],
    type: 'photo',
    orientation: 'landscape',
    title: 'Sed lacinia velit, ut malesuada eros interdum a'
  },
  {
    thumb: imgAPI.photosL[11],
    type: 'photo',
    orientation: 'landscape'
  },
];

// Gallery Settings
const expanded = ref(false);
const loaded = ref(false);

function toggleExpand() {
  expanded.value = !expanded.value;
}

// Video Popup Settings
const dialog = ref(false);
const youtubePopup = ref(null);
const videoId = ref('MgnXhbuxVF0');
const playerVarsPopup = {
  autoplay: 0,
  controls: 1,
  rel: 0,
  showinfo: 1,
  mute: 0,
  origin: 'https://localhost:8000',
};

// Video Popup Function
function handleVideoOpen(id) {
  if (yt.use) {
    videoId.value = id;
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

// Image Popup Settings
const visible = ref(false);
const index = ref(0);

const imgs = computed(() => {
  const arr = [];
  gallery.map(item => {
    arr.push(item.thumb);
    return arr;
  });
  return arr;
});

function showImg(idx) {
  index.value = idx;
  visible.value = true;
}

function handleHide() {
  visible.value = false;
}

onMounted(() => {
  loaded.value = true;
});
</script>