<template>
  <div class="slider" :class="{ overlap: overlap }">
    <div class="strings">
      <div v-if="isTablet" class="string-deco string1">
        <span />
      </div>
      <div v-if="isTablet" class="string-deco string3">
        <span />
      </div>
    </div>
    <div class="gallery">
      <div class="carousel">
        <splide :options="settings">
          <splide-slide>
            <div class="item mt-15">
              <figure>
                <img :src="imgAPI.photosS[12]" alt="collage" />
              </figure>
            </div>
          </splide-slide>
          <splide-slide>
            <div class="item mt-7">
              <figure>
                <img :src="imgAPI.photosL[19]" alt="collage" />
              </figure>
            </div>
          </splide-slide>
          <splide-slide>
            <div class="item">
              <figure>
                <img :src="imgAPI.photosP[32]" alt="collage" />
              </figure>
            </div>
          </splide-slide>
          <splide-slide>
            <div class="item mt-15">
              <br />
              <figure class="mt-15">
                <img :src="imgAPI.photosL[14]" alt="collage" />
              </figure>
            </div>
          </splide-slide>
          <splide-slide>
            <div class="item mt-15">
              <br />
              <figure class="mt-12">
                <img :src="imgAPI.photosS[13]" alt="collage" />
              </figure>
            </div>
          </splide-slide>
          <splide-slide>
            <div class="item mt-15">
              <figure>
                <img :src="imgAPI.photosS[12]" alt="collage" />
              </figure>
            </div>
          </splide-slide>
          <splide-slide>
            <div class="item mt-12">
              <figure>
                <img :src="imgAPI.photosS[11]" alt="collage" />
              </figure>
            </div>
          </splide-slide>
          <splide-slide>
            <div class="item mt-3">
              <figure>
                <img :src="imgAPI.photosP[32]" alt="collage" />
              </figure>
            </div>
          </splide-slide>
          <splide-slide>
            <div class="item mt-5">
              <figure>
                <img :src="imgAPI.photosP[31]" alt="collage" />
              </figure>
            </div>
          </splide-slide>
          <splide-slide>
            <div class="item mt-17">
              <figure>
                <img :src="imgAPI.photosS[13]" alt="collage" />
              </figure>
            </div>
          </splide-slide>
        </splide>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './collage-style.scss';
</style>

<script setup>
import { useDisplay } from 'vuetify';
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import imgAPI from '@/assets/images/imgAPI';

const { overlap } = defineProps({
  overlap: {
    type: Boolean,
    defaul: false,
  }
});

const { smAndUp: isTablet } = useDisplay();

const settings = {
  pagination: false,
  speed: 90000,
  autoplay: true,
  interval: 1,
  type: 'loop',
  perPage: 5,
  perMove: 1,
  arrows: false,
  easing: 'linear',
  breakpoints: {
    600: {
      perPage: 2,
    }
  }
}
</script>
