<template>
  <div class="deco">
    <div class="figure" :class="{fade: fade}">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './slider-art-style';
</style>

<script setup>
const { fade } = defineProps({
  fade: {
    type: Boolean,
    default: false,
  }
});
</script>
