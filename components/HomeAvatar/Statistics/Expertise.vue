<template>
  <div class="root">
    <div class="slider-wrap">
      <div class="carousel">
        <splide :options="settings">
          <splide-slide v-for="(item, index) in expertise" :key="index">
            <div class="item">
              <icon-card :icon="item.icon" :color="item.color" />
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
import IconCard from './Icon';

const expertise = [
  {
    icon: 'mdi-target',
    color: 'teal',
  },
  {
    icon: 'mdi-flash',
    color: 'lightBlue'
  },
  {
    icon: 'mdi-sign-yield',
    color: 'cyan',
  },
  {
    icon: 'mdi-shield-crown',
    color: 'yellow',
  },
  {
    icon: 'mdi-fire',
    color: 'red',
  },
  {
    icon: 'mdi-microsoft-xbox-controller',
    color: 'green',
  },
  {
    icon: 'mdi-steam',
    color: 'grey',
  },
  {
    icon: 'mdi-one-up',
    color: 'orange'
  },
  {
    icon: 'mdi-sword',
    color: 'pink',
  },
  {
    icon: 'mdi-snowflake',
    color: 'purple',
  },
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
  reducedMotion: {
    speed: 90000,
    rewindSpeed: 1000,
    autoplay: true,
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