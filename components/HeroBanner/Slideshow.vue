<template>
  <div class="animation-slider">
    <div class="slideshow">
      <splide ref="slick" :options="slickOptions">
        <splide-slide v-for="(item, index) in images" :key="index">
          <div class="slide-item">
            <div class="img" :style="'background-image: url('+item+')'" />
          </div>
        </splide-slide>
      </splide>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './hero-style.scss';
</style>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import imgAPI from '@/assets/images/imgAPI';

export default {
  components: {
    Splide,
    SplideSlide,
  },
  data() {
    return {
      images: [
        imgAPI.photosL[1],
        imgAPI.photosL[2],
        imgAPI.photosL[3],
        imgAPI.photosL[4],
        imgAPI.photosL[5],
      ],
      slickOptions: {
        type: 'fade',
        pagination: false,
        speed: 700,
        interval: 5000,
        autoplay: true,
        arrows: false,
        reducedMotion: {
          autoplay: true,
          speed: 700,
          rewindSpeed: 1000,
          interval: 5000,
        },
      },
    };
  },
};
</script>
