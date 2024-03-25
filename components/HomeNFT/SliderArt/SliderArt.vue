<template>
  <div class="deco">
    <div class="figure" :class="{ fade: fade }">
      <div class="inner">
        <div class="fog">
          <div class="triple-main" :style="randomShape(100, 300, 600, 500, 120)" />
          <div class="triple-dark" :style="randomShape(200, 400, 100, 300, 60)" />
          <div class="secondary-dark" :style="randomShape(200, 200, 100, 400, 90)" />
          <div class="triple-light" :style="randomShape(400, 100, 400, 500, 160)" />
        </div>
      </div>
      <div class="content">
        <slot />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './slider-art.scss';
</style>

<script setup>
const { fade } = defineProps({
  fade: {
    type: Boolean,
    default: false,
  }
});

const randomShape = (top, left, width, height, rotate) => ({
  top: Math.floor(Math.random() * top) + 'px',
  left: Math.floor(Math.random() * left) + 'px',
  width: Math.floor(Math.random() * (width - 100) + 100) + 'px',
  height: Math.floor(Math.random() * (height - 100) + 100) + 'px',
  transform: `rotate(${Math.floor(Math.random() * rotate)}deg)`,
});
</script>