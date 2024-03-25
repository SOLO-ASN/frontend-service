<template>
  <div class="title-main" :class="[align, { dark: dark, 'center-mobile': !strictAlign }]">
    <h3>
      {{ text }}
    </h3>
  </div>
</template>

<style lang="scss" scoped>
@import './title-style.scss';
</style>

<script setup>
const {text, strictAlign, align, dark} = defineProps({
  text: {
    type: String,
    required: true,
  },
  strictAlign: {
    type: Boolean,
    default: false,
  },
  align: {
    type: String,
    default: 'left',
  },
  dark: {
    type: Boolean,
    default: false,
  },
});
</script>
