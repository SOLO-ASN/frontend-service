<template>
  <div class="root">
    <div class="content">
      <i :class="icon" />
      <h5 class="mb-2 use-text-subtitle2 font-weight-bold">{{ title }}</h5>
      <p class="use-text-paragraph">{{ desc }}</p>
    </div>
    <h1 :class="'gradient'+color">{{ number }}</h1>
  </div>
</template>

<style lang="scss" scoped>
@import './number-card-style.scss';
</style>

<script setup>
const {
  icon, title, desc,
  number, color
} = defineProps({
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
  number: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    default: 'double-main',
  }
});
</script>