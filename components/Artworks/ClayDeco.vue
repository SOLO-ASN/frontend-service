<template>
  <div class="clay">
    <span
      :style="{
        maskImage: `url(${img})`,
        maskRepeat: 'no-repeat',
        maskSize: '100%',
        '-webkit-mask-image': `url(${img})`,
        '-webkit-mask-repeat': 'no-repeat',
        '-webkit-mask-size': '100%',
      }"
      class="mask"
      :class="color"
    >
      <img :src="img" alt="clay" />
    </span>
  </div>
</template>

<style lang="scss" scoped>
@import './clay-deco-style.scss';
</style>

<script setup>
const { img, color } = defineProps({
  img: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    default: 'primary'
  }
});
</script>
