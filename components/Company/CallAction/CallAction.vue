<template>
  <v-container :class="{ 'fixed-width': isDesktop }" class="max-width-lg root">
    <div
      data-aos="fade-up"
      data-aos-offset="100"
      data-aos-delay="500"
      data-aos-duration="500"
    >
      <div class="action">
        <div class="wrap">
          <div class="fog">
            <div class="triple-main" :style="randomShape(100, 300, 600, 500, 120)" />
            <div class="triple-light" :style="randomShape(200, 400, 100, 300, 60)" />
            <div class="double-main" :style="randomShape(200, 200, 100, 400, 90)" />
          </div>
          <h4 class="use-text-title2">
            {{ $t('career_cta') }}
          </h4>
          <div class="btn-area">
            <v-btn size="large" color="black" :href="link.career" class="pa-4 button">
              {{ $t('btn_join') }}
            </v-btn>
          </div>
        </div>
      </div>
    </div>
  </v-container>
</template>

<style lang="scss" scoped>
@import './action-style.scss';
</style>

<script setup>
import { onMounted, ref } from 'vue';
import { useDisplay } from 'vuetify';
import AOS from 'aos';
import link from '@/assets/text/link';

const { lgAndUp: isDesktop } = useDisplay();

const loaded = ref(false);
const randomShape = (top, left, width, height, rotate) => ({
  top: Math.floor(Math.random() * top) + 'px',
  left: Math.floor(Math.random() * left) + 'px',
  width: Math.floor(Math.random() * (width - 100) + 100) + 'px',
  height: Math.floor(Math.random() * (height - 100) + 100) + 'px',
  transform: `rotate(${Math.floor(Math.random() * rotate)}deg)`,
});

onMounted(() => {
  loaded.value = true;
  AOS.init({
    once: true,
  });
});
</script>
