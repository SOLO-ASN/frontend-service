<template>
  <div class="title-secondary" :class="[color, align]">
    <h4>{{ text }}</h4>
  </div>
</template>

<style lang="scss" scoped>
@import './title-style.scss';
</style>

<script setup>
const { text, align, color } = defineProps({
  align: {
    type: String,
    default: 'left',
  },
  text: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    default: 'primary',
  },
})
</script>
