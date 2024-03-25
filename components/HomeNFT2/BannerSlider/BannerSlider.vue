<template>
  <div class="banner-wrap">
    <div class="inner">
      <v-container>
        <v-row class="spacing6">
          <v-col md="6" cols="12">
            <div class="px-sm-3 text">
              <h4 :class="isTablet ? 'use-text-title2' : 'use-text-title'">
                {{ $t('nft2.banner_title') }}
                <span class="text-uppercase" :class="currentTheme === 'dark' ? 'use-text-grd-triple-main' : 'use-text-grd-triple-main'">
                  {{ $t('nft2.banner_highlight') }}
                </span>
              </h4>
              <h5 :class="isTablet ? 'use-text-subtitle2' : 'use-text-subtitle'">
                {{ $t('nft2.banner_desc') }}
              </h5>
              <div class="btn-area">
                <v-btn
                  size="large"
                  color="primary"
                  class="button"
                  :href="link.register"
                >
                  {{ $t('btn_get') }}
                </v-btn>
                <v-btn
                  size="large"
                  color="secondary"
                  class="button"
                  variant="outlined"
                  :href="link.product"
                >
                  {{ $t('nft2.header_explore') }}
                </v-btn>
              </div>
            </div>
          </v-col>
          <v-col md="6" cols="12">
            <div class="art-scene">
              <div v-if="isDesktop" class="fade-slider">
                <span class="deco-line" />
                <splide
                  :options="slickOptionsFade"
                  ref="sliderFade"
                  @splide:move="handleSyncRoll"
                >
                  <splide-slide v-for="(item, index) in nftList" :key="index">
                    <div class="card-main">
                      <product-nft-card
                        :img="item.img"
                        :avatar="item.avatar"
                        :name="item.name"
                        :title="item.title"
                        :price="item.price"
                        :href="item.href"
                        :verified="item.verified"
                      />
                    </div>
                  </splide-slide>
                </splide>
              </div>
              <div class="roll-slider">
                <splide
                  :options="slickOptionsRoll"
                  ref="sliderRoll"
                  @splide:move="handleSyncFade"
                >
                  <splide-slide v-for="(item, index) in nftList" :key="index">
                    <div class="card-secondary">
                      <product-nft-card
                        :img="item.img"
                        :avatar="item.avatar"
                        :name="item.name"
                        :title="item.title"
                        :price="item.price"
                        :href="item.href"
                        :verified="item.verified"
                      />
                    </div>
                  </splide-slide>
                </splide>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import './banner-style';
</style>

<script setup>
import { ref, onMounted } from 'vue';
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import { useDisplay, useTheme } from 'vuetify';
import link from '@/assets/text/link';
import imgAPI from '@/assets/images/imgAPI';
import ProductNftCard from '../../Cards/Product/NftCard';

const nftList = [
  {
    img: imgAPI.photosL[46],
    avatar: imgAPI.logos[13],
    name: 'John Doe',
    title: 'Lorem Ipsum Dolor',
    price: '0.5',
    href: '#',
    verified: true,
  },
  {
    img: imgAPI.photosS[8],
    avatar: imgAPI.logos[1],
    name: 'John Doe',
    title: 'Lorem Ipsum Dolor',
    price: '0.5',
    href: '#',
    verified: true,
  },
  {
    img: imgAPI.photosS[7],
    avatar: imgAPI.logos[2],
    name: 'John Doe',
    title: 'Lorem Ipsum Dolor',
    price: '0.5',
    href: '#',
    verified: true,
  },
  {
    img: imgAPI.photosL[50],
    avatar: imgAPI.avatar[13],
    name: 'John Doe',
    title: 'Lorem Ipsum Dolor',
    price: '0.5',
    href: '#',
    verified: true,
  },
  {
    img: imgAPI.photosP[27],
    avatar: imgAPI.avatar[1],
    name: 'John Doe',
    title: 'Lorem Ipsum Dolor',
    price: '0.5',
    href: '#',
    verified: true,
  },
  {
    img: imgAPI.photosP[26],
    avatar: imgAPI.avatar[8],
    name: 'John Doe',
    title: 'Lorem Ipsum Dolor',
    price: '0.5',
    href: '#',
    verified: true,
  }
];

const loaded = ref(false);
const { mdAndUp: isDesktop  } = useDisplay();
const { md: isTablet } = useDisplay();

const { name: currentTheme } = useTheme();

// Slider
const sliderRoll= ref(null);
const sliderFade = ref(null);

const slickOptionsFade = {
  pagination: false,
  arrows: false,
  type: 'fade',
  speed: 500,
  autoplay: false,
  easing: 'ease',
  direction: 'ltr',
  reducedMotion: {
    speed: 500,
    rewindSpeed: 1000,
  },
};
  
const slickOptionsRoll = {
  pagination: false,
  arrows: false,
  type: 'fade',
  speed: 1000,
  type: 'loop',
  perPage: 3,
  perMove: 1,
  autoplay: false,
  interval: 10000,
  easing: 'ease',
  direction: 'ltr',
  reducedMotion: {
    speed: 500,
    rewindSpeed: 1000,
  },
  breakpoints: {
    600: {
      autoWidth: true,
      perPage: 1,
      perMove: 1,
    }
  }
};
  
onMounted(() => {
  loaded.value = true;
});

function handleSyncFade(slide) {
  sliderFade.value.go(slide.index);
}

function handleSyncRoll(slide) {
  sliderRoll.value.go(slide.index);
}

</script>
