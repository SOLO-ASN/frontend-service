<template>
  <v-btn :size="size" :href="href" class="btn-standard" :class="color">
    {{ text }}
    <v-icon>mdi-arrow-right</v-icon>
  </v-btn>
</template>

<style lang="scss" scoped>
@import './arrow-button-style.scss';
</style>

<script setup>
const { text, color, href } = defineProps({
  text: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    default: 'primary',
  },
  href: {
    type: String,
    default: '#',
  },
  size: {
    type: String,
    default: 'large'
  }
});
</script>