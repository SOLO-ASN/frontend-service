<template>
  <div class="root">
    <splide ref="slider" :options="settings">
      <splide-slide v-for="(item, index) in nftList" :key="index">
        <div class="slide">
          <div class="inner">
            <figure>
              <img :src="item.img" alt="nft" />
            </figure>
            <h4 component="h3" class="title">
              {{ item.title }}
            </h4>
            <div class="countdown">
              <count-down info="Sale starts in" :miliseconds="item.timeleft" />
            </div>
            <div class="property">
              <p>
                Circulation:&nbsp;
                {{ item.circulation }}
              </p>
              <strong>
                Price
                <span class="price">
                  {{ item.price }}
                  ETH
                </span>
              </strong>
            </div>
          </div>
          <a v-ripple :href="item.href" />
        </div>
      </splide-slide>
    </splide>
    <v-btn
      icon
      fab
      class="nav prev"
      @click="prev"
      size="large"
    >
      <i class="ion-ios-arrow-back" />
    </v-btn>
    <v-btn
      icon
      fab
      class="nav next"
      @click="next"
      size="large"
    >
      <i class="ion-ios-arrow-forward" />
    </v-btn>
  </div>
</template>

<style lang="scss" scoped>
@import './auction-style.scss';
</style>

<script setup>
import { ref } from 'vue';
import { useTheme } from 'vuetify';
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import imgAPI from '@/assets/images/imgAPI';
import link from '@/assets/text/link';
import CountDown from '../../Counter/Countdown';

const nftList = [
  {
    img: imgAPI.photosL[46],
    circulation: '100000',
    timeleft: 30000000,
    title: 'Lorem Ipsum Dolor 1',
    price: '0.5',
    href: link.productDetail,
  },
  {
    img: imgAPI.photosL[8],
    circulation: '100000',
    timeleft: 560000000,
    title: 'Lorem Ipsum Dolor 2',
    price: '0.5',
    href: link.productDetail,
  },
  {
    img: imgAPI.photosL[7],
    circulation: '100000',
    timeleft: 250000000,
    title: 'Lorem Ipsum Dolor 3',
    price: '0.5',
    href: link.productDetail,
  },
  {
    img: imgAPI.photosL[50],
    circulation: '100000',
    timeleft: 110000000,
    title: 'Lorem Ipsum Dolor 4',
    price: '0.5',
    href: link.productDetail,
  },
  {
    img: imgAPI.photosL[5],
    circulation: '100000',
    timeleft: 500000000,
    title: 'Lorem Ipsum Dolor 5',
    price: '0.5',
    href: link.productDetail,
  },
  {
    img: imgAPI.photosL[7],
    circulation: '100,000',
    timeleft: 1000000,
    title: 'Lorem Ipsum Dolor 6',
    price: '0.5',
    href: link.productDetail,
  }
];

const slider = ref(null);

const settings = ref({
  pagination: true,
  arrows: false,
  speed: 500,
  perMove: true,
  interval: 5000,
  autoplay: true,
  easing: 'ease',
  type: 'fade',
  rewind: true,
  reducedMotion: {
    speed: 1000,
    rewindSpeed: 1000,
  },
});

function next() {
  slider.value.go('>');
}

function prev() {
  slider.value.go('<');
}
</script>
