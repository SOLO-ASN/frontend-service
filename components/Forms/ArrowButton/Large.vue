<template>
  <v-btn size="large" :href="href" class="btn-large" :class="{ 'full-height': fullHeight }">
    <img src="/images/inner/fog.png" alt="background" />
    <span class="deco">
      <span />
      <span />
      <span />
    </span>
    <h2>{{ text }}</h2>
    <v-icon class="icon">mdi-arrow-right</v-icon>
  </v-btn>
</template>

<style lang="scss" scoped>
@import './arrow-button-style.scss';
</style>

<script setup>
const { text, fullHeight, href } = defineProps({
  text: {
    type: String,
    required: true,
  },
  fullHeight: {
    type: Boolean,
    default: false,
  },
  href: {
    type: String,
    default: '#',
  },
});
</script>