<template>
  <span :class="[type, size]" class="logo">
    <img :src="logo" alt="logo">
    {{ type !== 'only' ? brand.name : '' }}
  </span>
</template>

<style scoped lang="scss">
@import './logo-style.scss';
</style>

<script>
import logo from '@/assets/images/logo-suinet.png';
import brand from '@/assets/text/brand';

export default {
  props: {
    type: {
      type: String,
      default: 'only',
    },
    size: {
      type: String,
      default: 'medium',
    }
  },
  data() {
    return {
      brand,
      logo,
    };
  },
};
</script>
