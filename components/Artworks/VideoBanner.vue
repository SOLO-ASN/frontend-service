<template>
  <div class="root">
    <v-btn
      v-if="action"
      @click="action"
      class="play-btn"
      color="secondary"
      icon="mdi-play"
      variant="flat"
      size="x-large"
    />
    <div class="video">
      <div class="cover">
        <img :src="cover" alt="cover" />
      </div>
      <span class="top-left">
        <img :src="topLeft" alt="app" />
      </span>
      <span class="top-right">
        <img :src="topRight" alt="app" />
      </span>
      <span class="bottom-left">
        <img :src="bottomLeft" alt="app" />
      </span>
      <span class="bottom-right">
        <img :src="bottomRight" alt="app" />
      </span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './video-style.scss';
</style>

<script setup>
const {
  cover, topLeft, topRight,
  bottomLeft, bottomRight, action,
} = defineProps({
  cover: {
    type: String,
    reqired: true,
  },
  topLeft: {
    type: String,
    reqired: true,
  },
  topRight: {
    type: String,
    reqired: true,
  },
  bottomLeft: {
    type: String,
    reqired: true,
  },
  bottomRight: {
    type: String,
    reqired: true,
  },
  action: {
    type: Function,
    default: null,
  },
});
</script>
