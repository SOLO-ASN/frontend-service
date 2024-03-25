<template>
  <div class="fogs">
    <div v-if="loaded" class="fog start">
      <div class="ctx">
        <div class="double-main" :style="style[0]" />
        <div class="accent" :style="style[1]" />
        <div class="triple-light" :style="style[2]" />
        <div class="triple-main" :style="style[3]" />
      </div>
    </div>
    <div class="fog end">
      <div class="ctx">
        <div class="double-main" :style="style[4]" />
        <div class="accent" :style="style[5]" />
        <div class="triple-light" :style="style[6]" />
        <div class="triple-main" :style="style[7]" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './blur-gradient-style.scss';
</style>

<script setup>
import { onMounted, ref } from 'vue';

const loaded = ref(false);
const style = ref({});

onMounted(() => {
  const randomShape = (top, left, width, height, rotate) => ({
    top: Math.floor(Math.random() * top) + 'px',
    left: Math.floor(Math.random() * left)+ 'px',
    width: Math.floor(Math.random() * (width - 100) + 100) + 'px',
    height: Math.floor(Math.random() * (height - 100) + 100) + 'px',
    transform: `rotate(${Math.floor(Math.random() * rotate)}deg)`,
  });

  loaded.value = true;
  style.value = [
    randomShape(40, 300, 600, 500, 120),
    randomShape(50, 400, 400, 300, 60),
    randomShape(20, 200, 100, 400, 90),
    randomShape(40, 500, 400, 500, 160),
    randomShape(10, 300, 600, 500, 120),
    randomShape(60, 400, 100, 300, 60),
    randomShape(20, 200, 100, 400, 90),
    randomShape(70, 100, 400, 500, 160)
  ];
});
</script>
