<template>
  <div class="deco">
    <div v-if="isDesktop" class="figure" :class="{ fade: fade }">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './slider-art.scss';
</style>

<script setup>
import { useDisplay } from 'vuetify';

const { fade } = defineProps({
  fade: {
    type: Boolean,
    default: false
  }
});

const { lgAndUp: isDesktop } = useDisplay();
</script>