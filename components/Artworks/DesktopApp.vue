<template>
  <div class="root">
    <div class="desktop">
      <div class="screen">
        <img :src="screen" alt="screen" />
      </div>
    </div>
    <div class="desktop reflect">
      <div class="screen">
        <img :src="screen" alt="screen" />
      </div>
    </div>
    <div class="widget">
      <span class="top">
        <img :src="top" alt="app" />
      </span>
      <span class="left">
        <img :src="left" alt="app" />
      </span>
      <span class="right">
        <img :src="right" alt="app" />
      </span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './desktop-style.scss';
</style>

<script setup>
const {
  screen, top,
  left, right,
} = defineProps({
  screen: {
    type: String,
    required: true
  },
  top: {
    type: String,
    required: true
  },
  left: {
    type: String,
    required: true
  },
  right: {
    type: String,
    required: true
  }
});
</script>