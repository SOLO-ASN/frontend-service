<template>
  <v-dialog
    v-model="dialog"
    max-width="690"
  >
    <v-card class="connect-popup cyber">
      <v-card-title class="text-center headline">
        <h4 class="use-text-subtitle">
          Connect your wallet
        </h4>
        <v-btn class="close-btn" variant="text" icon @click="handleClose()">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>
      <div class="mb-3">
        <p>If you don't have a wallet, you can select a provider and create one now.</p>
        <v-list class="content-popup" tag="nav" aria-label="main mailbox folders">
          <v-list-item href="#" title="Wallet Lorem" class="wallet-list">
            <template v-slot:prepend>
              <v-avatar>
                <img :src="imgAPI.logos[1]" />
              </v-avatar>
            </template>
            <template v-slot:append>
              <v-chip variant="outlined">Most Popular</v-chip>
            </template>
          </v-list-item>
          <v-divider />
          <v-list-item href="#" title="Wallet Lorem" class="wallet-list">
            <template v-slot:prepend>
              <v-avatar>
                <img :src="imgAPI.logos[2]" />
              </v-avatar>
            </template>
          </v-list-item>
          <v-divider />
          <v-list-item href="#" title="Wallet Lorem" class="wallet-list">
            <template v-slot:prepend>
              <v-avatar>
                <img :src="imgAPI.logos[3]" />
              </v-avatar>
            </template>
          </v-list-item>
          <v-divider />
          <v-list-item href="#" title="Wallet Lorem" class="wallet-list">
            <template v-slot:prepend>
              <v-avatar>
                <img :src="imgAPI.logos[11]" />
              </v-avatar>
            </template>
          </v-list-item>
          <v-divider />
          <v-list-item href="#" title="Wallet Lorem" class="wallet-list">
            <template v-slot:prepend>
              <v-avatar>
                <img :src="imgAPI.logos[12]" />
              </v-avatar>
            </template>
          </v-list-item>
          <v-divider />
          <v-list-item href="#" title="Wallet Lorem" class="wallet-list">
            <template v-slot:prepend>
              <v-avatar>
                <img :src="imgAPI.logos[21]" />
              </v-avatar>
            </template>
          </v-list-item>
          <v-divider />
          <v-list-item href="#" title="Wallet Lorem" class="wallet-list">
            <template v-slot:prepend>
              <v-avatar>
                <img :src="imgAPI.logos[23]" />
              </v-avatar>
            </template>
          </v-list-item>
          <v-divider />
          <v-list-item href="#" title="Wallet Lorem" class="wallet-list">
            <template v-slot:prepend>
              <v-avatar>
                <img :src="imgAPI.logos[9]" />
              </v-avatar>
            </template>
          </v-list-item>
        </v-list>
      </div>
    </v-card>
  </v-dialog>
  <div class="banner-wrap">
    <div class="inner">
      <v-container>
        <v-row class="spacing6">
          <v-col lg="6" cols="12">
            <div class="px-sm-3 text">
              <h4 :class="isTablet ? 'use-text-title2' : 'use-text-title'">
                {{ $t('nft.banner_title') }}
                <span class="text-uppercase" :class="currentTheme === 'dark' ? 'use-text-grd-triple-main' : 'use-text-grd-triple-main'">
                  {{ $t('nft.banner_highlight') }}
                </span>
              </h4>
              <h5 :class="isTablet ? 'use-text-subtitle2' : 'use-text-subtitle'">
                {{ $t('nft.banner_desc') }}
              </h5>
              <v-card class="search-banner">
                <v-text-field
                  :label="isMobileXs ? 'Search...' : 'Search items, arts ors creators...'"
                  class="search"
                  hide-details
                  variant="filled"
                />
                <div class="action">
                  <v-btn class="button" color="secondary">
                    <v-icon v-if="isMobile" class="icon">
                      mdi-magnify
                    </v-icon>
                    <span v-else>
                      {{ $t('header_search') }}
                    </span>
                  </v-btn>
                </div>
              </v-card>
              <div class="connect">
                <h5><hr />Connect to your wallet<hr /></h5>
                <ul>
                  <li>
                    <v-btn variant="text" size="small" class="btn">
                      <img :src="imgAPI.logos[1]" /> Wallet Lorem
                    </v-btn>
                  </li>
                  <li>
                    <v-btn variant="text" size="small" class="btn">
                      <img :src="imgAPI.logos[2]" /> Wallet Ipsum
                    </v-btn>
                  </li>
                  <li>
                    <v-btn variant="text" size="small" class="btn">
                      <img :src="imgAPI.logos[3]" /> Wallet Dolor
                    </v-btn>
                  </li>
                  <li>
                    <v-btn variant="text" size="small" class="btn">
                      <img :src="imgAPI.logos[11]" /> Wallet Sit Amet
                    </v-btn>
                  </li>
                  <li>
                    <v-btn
                      class="mt-5"
                      variant="outlined"
                      color="primary"
                      @click="handleOpen"
                    >
                      Show All Wallet
                    </v-btn>
                  </li>
                </ul>
              </div>
            </div>
          </v-col>
          <v-col lg="6" cols="12">
            <div v-if="loaded" class="art-wrap">
              <div class="art-scene">
                <div class="mt-lg-10 fade-slider">
                  <span class="deco-line" />
                  <div class="carousel">
                    <splide :options="{ interval: 5000, ...slickOptionsFade }">
                      <splide-slide
                        v-for="(item, index) in nftList.sort(() => Math.random() - 0.5)"
                        :key="index"
                      >
                        <div class="card-main">
                          <product-nft-card
                            :img="item.img"
                            :avatar="item.avatar"
                            :name="item.name"
                            :title="item.title"
                            :price="item.price"
                            :href="item.href"
                            :verified="item.verified"
                            small
                          />
                        </div>
                      </splide-slide>
                    </splide>
                  </div>
                </div>
                <div v-if="!isTabletSm" class="fade-slider">
                  <span class="deco-line" />
                  <div class="carousel">
                    <splide :options="{ interval: 6000, ...slickOptionsFade }">
                      <splide-slide
                        v-for="(item, index) in nftList.sort(() => Math.random() - 0.5)"
                        :key="index"
                      >
                        <div class="card-main">
                          <product-nft-card
                            :img="item.img"
                            :avatar="item.avatar"
                            :name="item.name"
                            :title="item.title"
                            :price="item.price"
                            :href="item.href"
                            :verified="item.verified"
                            small
                          />
                        </div>
                      </splide-slide>
                    </splide>
                  </div>
                </div>
                <div class="mt-lg-10 fade-slider">
                  <span class="deco-line" />
                  <div class="carousel">
                    <splide :options="{ interval: 7000, ...slickOptionsFade }">
                      <splide-slide
                        v-for="(item, index) in nftList.sort(() => Math.random() - 0.5)"
                        :key="index"
                      >
                        <div class="card-main">
                          <product-nft-card
                            :img="item.img"
                            :avatar="item.avatar"
                            :name="item.name"
                            :title="item.title"
                            :price="item.price"
                            :href="item.href"
                            :verified="item.verified"
                            small
                          />
                        </div>
                      </splide-slide>
                    </splide>
                  </div>
                </div>
                <div class="fade-slider">
                  <span class="deco-line" />
                  <div class="carousel">
                    <splide :options="{ interval: 8000, ...slickOptionsFade }">
                      <splide-slide
                        v-for="(item, index) in nftList.sort(() => Math.random() - 0.5)"
                        :key="index"
                      >
                        <div class="card-main">
                          <product-nft-card
                            :img="item.img"
                            :avatar="item.avatar"
                            :name="item.name"
                            :title="item.title"
                            :price="item.price"
                            :href="item.href"
                            :verified="item.verified"
                            small
                          />
                        </div>
                      </splide-slide>
                    </splide>
                  </div>
                </div>
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
  },
  {
    img: imgAPI.photosL[26],
    avatar: imgAPI.avatar[8],
    name: 'John Doe',
    title: 'Lorem Ipsum Dolor',
    price: '0.5',
    href: '#',
    verified: true,
  },
  {
    img: imgAPI.photosS[1],
    avatar: imgAPI.avatar[8],
    name: 'John Doe',
    title: 'Lorem Ipsum Dolor',
    price: '0.5',
    href: '#',
    verified: true,
  }
];

const loaded = ref(false);
const { xs: isMobileXs } = useDisplay();
const { smAndDown: isMobile } = useDisplay();
const { md: isTablet  } = useDisplay();
const { sm: isTabletSm  } = useDisplay();

const { name: currentTheme } = useTheme();

// Slider
const slickOptionsFade = {
  pagination: false,
  arrows: false,
  type: 'fade',
  speed: 500,
  autoplay: true,
  easing: 'ease',
  direction: 'ltr',
  reducedMotion: {
    autoplay: true,
    speed: 500,
    rewindSpeed: 1000,
  },
};

// Popup Function
const dialog = ref(false);

function handleOpen() {
  dialog.value = true;
}

function handleClose() {
  dialog.value = false;
}
  
onMounted(() => {
  loaded.value = true;
});

</script>
