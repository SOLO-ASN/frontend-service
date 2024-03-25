<template>
  <div class="root">
    <div class="slider-wrap">
      <div class="carousel">
        <splide :options="settings">
          <splide-slide v-for="(item, index) in expertise" :key="index">
            <div class="item">
              <icon-card :img="item" />
            </div>
          </splide-slide>
        </splide>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './styles/expertise-style.scss';
</style>

<script setup>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import imgAPI from '@/assets/images/imgAPI';
import IconCard from './Icon';

const expertise = [
  imgAPI.logos[31],
  imgAPI.logos[32],
  imgAPI.logos[3],
  imgAPI.logos[34],
  imgAPI.logos[35],
  imgAPI.logos[36],
  imgAPI.logos[37],
  imgAPI.logos[5],
  imgAPI.logos[60],
];

const settings = {
  pagination: false,
  speed: 90000,
  autoplay: true,
  interval: 1,
  type: 'loop',
  perPage: 3,
  perMove: 1,
  arrows: false,
  autoWidth: true,
  easing: 'linear',
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