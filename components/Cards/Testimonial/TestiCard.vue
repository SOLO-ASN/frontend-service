<template>
  <div class="testimonial">
    <div class="deco" />
    <div class="text">
      <p class="content">
        <span>
          {{ text }}
        </span>
      </p>
      <h6 class="title use-text-subtitle2">
        {{ name }}
      </h6>
      <p class="caption-title">
        {{ title }}
      </p>
    </div>
    <figure>
      <img :src="img" alt="testimonial">
    </figure>
  </div>
</template>

<style lang="scss" scoped>
@import './testi-card.scss';
</style>

<script setup>
const {
  text, name,
  title, img
} = defineProps({
  name: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    default: '',
  },
});
</script>
