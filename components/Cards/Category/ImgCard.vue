<template>
  <a
    v-ripple
    draggable="false"
    class="category-card"
    :href="href"
  >
    <span class="images" :class="color">
      <span
        v-for="(item, index) in images"
        :key="index"
        :class="{ center: index === 1 }"
        class="figure"
      >
        <img :src="item" alt="collection preview" />
      </span>
    </span>
    <span class="title">
      {{ title }}
    </span>
  </a>
</template>

<style lang="scss" scoped>
@import './img-style.scss';
</style>

<script setup>
const {
  color, title,
  href, images,
} = defineProps({
  color: {
    type: String,
    default: 'purple'
  },
  title: {
    type: String,
    required: true
  },
  href: {
    type: String,
    default: '#'
  },
  images: {
    type: Array,
    required: true
  }
});
</script>