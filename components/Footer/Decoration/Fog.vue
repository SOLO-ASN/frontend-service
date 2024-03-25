<template>
  <div class="fogs">
    <slot />
    <div v-if="loaded" class="fog">
      <div class="start">
        <div class="double-main" :style="randomShape(100, 300, 600, 500, 120)" />
        <div class="accent" :style="randomShape(200, 400, 400, 300, 60)" />
        <div class="triple-light" :style="randomShape(200, 200, 100, 400, 90)" />
        <div class="triple-main" :style="randomShape(400, 500, 400, 500, 160)" />
      </div>
      <div class="end">
        <div class="double-main" :style="randomShape(100, 300, 600, 500, 120)" />
        <div class="accent" :style="randomShape(200, 400, 100, 300, 60)" />
        <div class="triple-light" :style="randomShape(200, 200, 100, 400, 90)" />
        <div class="triple-main" :style="randomShape(400, 100, 400, 500, 160)" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './decoration-style';
</style>

<script setup>
import { ref, onMounted } from 'vue';

const loaded = ref(false);
const randomShape = (top, left, width, height, rotate) => ({
  top: Math.floor(Math.random() * top) + 'px',
  left: Math.floor(Math.random() * left) + 'px',
  width: Math.floor(Math.random() * (width - 100) + 100) + 'px',
  height: Math.floor(Math.random() * (height - 100) + 100) + 'px',
  transform: `rotate(${Math.floor(Math.random() * rotate)}deg)`,
});

onMounted(() => {
  loaded.value = true;
})
</script>
