<template>
  <div id="vantaRef" class="illustration" />
</template>

<style lang="scss" scoped>
@import './hero-style.scss';
</style>

<script>
import * as THREE from 'three';

export default {
  async mounted() {
    if (process.client) {
      window.THREE = THREE;
      const { default: HALO } = await import('vanta/dist/vanta.halo.min');

      HALO({
        el: '#vantaRef',
        THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 400,
        minWidth: 400,
        size: 3,
      });
    }
  },
};
</script>
