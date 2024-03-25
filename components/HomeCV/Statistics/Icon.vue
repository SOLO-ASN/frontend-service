<template>
  <div class="img">
    <img :src="img" alt="expertise" />
  </div>
</template>

<style style="scss" scoped>
@import './styles/icon-style.scss';
</style>

<script setup>
const { img } = defineProps({
  img: {
    type: String,
    required: true,
  },
});
</script>