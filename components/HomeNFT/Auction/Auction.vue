<template>
  <div class="root">
    <parallax-title
      :bg-title="$t('nft.header_explore')"
      :mainTitle="$t('nft.auction_title')"
      color="double-main"
    />
    <v-container class="wrap">
      <div class="background">
        <div class="floating-artwork">
          <slider-art :fade="fade">
            <div>
              <h2 class="use-text-title">
                <span />
                LIVE
              </h2>
              <p class="mb-6">
                {{ $t('nft.auction_desc') }}
              </p>
              <v-btn class="btn" variant="outlined" :color="currentTheme === 'dark' ? 'white' : 'black'" size="large">
                {{ $t('btn_seeall') }}
              </v-btn>
            </div>
          </slider-art>
        </div>
      </div>
    </v-container>
    <div :style="{ 'z-index': zIndex }" class="slider-wrap">
      <div class="carousel">
        <splide
          ref="slider"
          :options="settings"
          @splide:active="handleAfterChange"
        >
          <splide-slide>
            <div class="props item-props-first">
              <div />
            </div>
          </splide-slide>
          <splide-slide
            v-for="(item, index) in nftList"
            :key="index"
          >
            <div
              class="item"
              @mouseover="() => setZIndex(11)"
              @mouseleave="() => setZIndex(0)"
            >
              <product-count
                :img="item.img"
                :title="item.title"
                :desc="item.circulation"
                :like="item.like"
                :price="item.price"
                :href="item.href"
                :avatars="item.avatars"
                :bid="item.bid"
                :timeleft="item.timeleft"
              />
            </div>
          </splide-slide>
          <splide-slide>
            <div class="props item-props-first">
              <div />
            </div>
          </splide-slide>
        </splide>
        <v-btn
          class="nav prev"
          @click="prev"
          size="large"
          icon
          :disabled="slideCount <= 0"
        >
          <i class="ion-ios-arrow-back" />
        </v-btn>
        <v-btn
          class="nav next"
          @click="next"
          size="large"
          icon
        >
          <i class="ion-ios-arrow-forward" />
        </v-btn>
      </div>
    </div>
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
import ParallaxTitle from '../../Title/ParallaxTitle';
import SliderArt from '../SliderArt';
import ProductCount from '../../Cards/Product/CountdownCard';

const nftList = [
  {
    img: imgAPI.photosL[46],
    circulation: '100000',
    timeleft: 30000000,
    title: 'Lorem Ipsum Dolor 1',
    bid: 20,
    like: 100,
    price: 0.5,
    href: link.productDetail,
    avatars: [
      imgAPI.avatar[0],
      imgAPI.avatar[1],
      imgAPI.avatar[4],
      imgAPI.avatar[5],
    ]
  },
  {
    img: imgAPI.photosL[8],
    circulation: '100000',
    timeleft: 560000000,
    title: 'Lorem Ipsum Dolor 2',
    bid: 20,
    like: 100,
    price: 0.5,
    href: link.productDetail,
    avatars: [
      imgAPI.logos[0],
      imgAPI.avatar[2],
      imgAPI.logos[4],
      imgAPI.avatar[4],
    ]
  },
  {
    img: imgAPI.photosL[7],
    circulation: '100000',
    timeleft: 250000000,
    title: 'Lorem Ipsum Dolor 3',
    bid: 20,
    like: 100,
    price: 0.5,
    href: link.productDetail,
    avatars: [
      imgAPI.logos[1],
      imgAPI.logos[2],
      imgAPI.logos[5],
      imgAPI.avatar[6],
    ]
  },
  {
    img: imgAPI.photosL[50],
    circulation: '100000',
    timeleft: 110000000,
    title: 'Lorem Ipsum Dolor 4',
    bid: 20,
    like: 100,
    price: 0.5,
    href: link.productDetail,
    avatars: [
      imgAPI.avatar[6],
      imgAPI.logos[7],
      imgAPI.avatar[8],
      imgAPI.avatar[10],
    ]
  },
  {
    img: imgAPI.photosL[5],
    circulation: '100000',
    timeleft: 500000000,
    title: 'Lorem Ipsum Dolor 5',
    bid: 20,
    like: 100,
    price: 0.5,
    href: link.productDetail,
    avatars: [
      imgAPI.logos[10],
      imgAPI.logos[11],
      imgAPI.logos[12],
      imgAPI.logos[20],
    ]
  },
  {
    img: imgAPI.photosL[7],
    circulation: '100,000',
    timeleft: 1000000,
    title: 'Lorem Ipsum Dolor 6',
    bid: 20,
    like: 100,
    price: 0.5,
    href: link.productDetail,
    avatars: [
      imgAPI.avatar[10],
      imgAPI.logos[11],
      imgAPI.avatar[3],
      imgAPI.avatar[4],
    ]
  }
];

const { name: currentTheme } = useTheme();

const slider = ref(null);
const slideCount = ref(0);
const fade = ref(false);
const zIndex = ref(0);

const settings = ref({
  pagination: true,
  speed: 500,
  perPage: 3,
  perMove: 1,
  easing: 'ease',
  arrows: false,
  direction: 'ltr',
  autoWidth: true,
  reducedMotion: {
    speed: 1000,
    rewindSpeed: 1000,
  },
  breakpoints: {
    1100: {
      perPage: 3,
    },
    800: {
      perPage: 2,
    },
    600: {
      perPage: 1,
    },
  },
});

function setZIndex(index) {
  zIndex.value = index;
}

function handleAfterChange(slide) {
  slideCount.value = slide.index;
  if (slide.index >= 1) {
    fade.value = true;
  } else {
    fade.value = false;
  }
}
  
function next() {
  slick.value.go('>');
}

function prev() {
  slick.value.go('<');
}
</script>