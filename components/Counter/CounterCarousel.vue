<template>
  <div class="root">
    <div class="bg">
      <v-container>
        <figure>
          <img :src="cover" alt="background" />
        </figure>
      </v-container>
    </div>
    <div class="slider-wrap">
      <v-container class="max-md">
        <p class="use-text-title">
          {{ title }}
        </p>
        <p class="use-text-subtitle2">
          {{ desc }}
        </p>
      </v-container>
      <div class="carousel">
        <splide :options="settings">
          <splide-slide v-for="(item, index) in logos" :key="index">
            <div class="item">
              <img :src="item" alt="logo" />
            </div>
          </splide-slide>
        </splide>
      </div>
    </div>
    <counter
      :text-first="{ title: $t('about_counter1'), count: 123, prefix: '+', suffix: 'M' }"
      :text-middle="{ title: $t('about_counter2'), count: 456, prefix: '+', suffix: 'K' }"
      :text-last="{ title: $t('about_counter3'), count: 789, prefix: '+' }"
    />
  </div>
</template>

<style lang="scss" scoped>
@import './counter-carousel-style.scss';
</style>

<script setup>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import imgAPI from '@/assets/images/imgAPI';
import counter from './counter';

const { cover, title, desc } = defineProps({
  cover: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  }
});

const logos = [
  imgAPI.logos[17],
  imgAPI.logos[21],
  imgAPI.logos[26],
  imgAPI.logos[16],
  imgAPI.logos[28],
  imgAPI.logos[15],
  imgAPI.logos[23],
  imgAPI.logos[25],
  imgAPI.logos[14],
  imgAPI.logos[24],
  imgAPI.logos[13],
  imgAPI.logos[22],
  imgAPI.logos[20],
  imgAPI.logos[18],
  imgAPI.logos[30],
  imgAPI.logos[27],
  imgAPI.logos[19],
  imgAPI.logos[29],
];

const settings = {
  pagination: false,
  speed: 90000,
  autoplay: true,
  interval: 1,
  type: 'loop',
  perMove: 1,
  arrows: false,
  autoWidth: true,
  reducedMotion: {
    speed: 90000,
    autoplay: true,
    rewindSpeed: 1000,
  },
  breakpoints: {
    960: {
      perPage: 3,
    },
    800: {
      perPage: 2,
    },
    600: {
      perPage: 1,
    }
  }
}
</script>
