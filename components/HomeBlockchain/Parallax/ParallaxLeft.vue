<template>
  <div class="parallax-wrap">
    <div class="inner-parallax left">
      <div class="figure">
        <div v-if="loaded">
          <scroll-parallax
            :speed="0.05"
            direction="y"
          >
            <img :src="imgAPI.blockchain[14]" alt="parallax" />
          </scroll-parallax>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './parallax-style';
</style>

<script setup>
import { onMounted, ref } from 'vue';
import imgAPI from '@/assets/images/imgAPI';

const loaded = ref(false)

onMounted(() => {
  loaded.value = true;
});
</script>