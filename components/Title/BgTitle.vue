<template>
  <div class="root">
    <h2 class="deco-title static" :class="'use-text-grd-'+color">
      {{ bgTitle }}
    </h2>
    <title-main align="center" :text="mainTitle" />
  </div>
</template>

<style lang="scss" scoped>
@import './parallax-title-style.scss';
</style>

<script setup>
import TitleMain from './Title';

const { mainTitle, bgTitle, color } = defineProps({
  mainTitle: {
    type: String,
    required: true,
  },
  bgTitle: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    default: 'double-main',
  }
});
</script>
