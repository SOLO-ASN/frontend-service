<template>
  <a
    v-ripple
    draggable="false"
    class="category-card"
    :class="color"
    :href="href"
  >
    <span class="icons">
      <icons3d :color="color" :icon="icon" />
    </span>
    <span component="span" class="title">
      {{ title }}
    </span>
  </a>
</template>

<style lang="scss" scoped>
@import './icon3d-style.scss';
</style>

<script setup>
import Icons3d from '../../Icons3d';

const {
  color, title,
  icon, href,
} = defineProps({
  title: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    default: 'purple',
  },
  href: {
    type: String,
    default: '#',
  }
});
</script>