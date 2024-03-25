<template>
  <div class="parallax-wrap">
    <div class="inner-parallax right">
      <div class="figure">
        <div v-if="loaded">
          <scroll-parallax
            :speed="0.15"
            direction="y"
          >
            <div class="fog">
              <div class="triple-dark" :style="randomShape(100, 300, 600, 500, 120)" />
              <div class="secondary-dark" :style="randomShape(200, 400, 100, 300, 60)" />
              <div class="triple-dark" :style="randomShape(200, 200, 100, 400, 90)" />
              <div class="secondary-main" :style="randomShape(400, 100, 400, 500, 160)" />
            </div>
          </scroll-parallax>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './parallax-style';
</style>

<script setup>
import { onMounted, ref } from 'vue';
import imgAPI from '@/assets/images/imgAPI';

const loaded = ref(false)
const randomShape = (top, left, width, height, rotate) => ({
  top: Math.floor(Math.random() * top) + 'px',
  left: Math.floor(Math.random() * left) + 'px',
  width: Math.floor(Math.random() * (width - 100) + 100) + 'px',
  height: Math.floor(Math.random() * (height - 100) + 100) + 'px',
  transform: `rotate(${Math.floor(Math.random() * rotate)}deg)`,
});

onMounted(() => {
  loaded.value = true;
});
</script>