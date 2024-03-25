<template>
  <div class="icon3d">
    <span class="icon" :class="color">
      <i class="shadow mdi" :class="icon" />
      <i class="emboss1 mdi" :class="icon" />
      <i class="emboss2 mdi" :class="icon" />
      <i class="front mdi" :class="[icon, color]" />
      <i class="emboss3 mdi" :class="icon" />
      <i class="overlay mdi" :class="icon" />
    </span>
  </div>
</template>

<style lang="scss" scoped>
@import './icons-3d-style.scss';
</style>

<script setup>
const { icon, color } = defineProps({
  icon: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    default: 'primary',
  },
})
</script>
