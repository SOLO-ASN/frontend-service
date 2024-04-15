<template>
  <vue-easy-lightbox
    v-if="loaded"
    :visible="visible"
    :imgs="imgs"
    :index="index"
    @hide="handleHide"
  />
  <v-row :class="isDesktop ? 'spacing4' : 'spacing2'" justify="center">
    <v-col lg="4" md="5" sm="5" cols="12" class="pa-md-0">
      <div class="carousel">
        <splide
          ref="slick"
          :options="slickOptions"
        >
          <splide-slide
            v-for="index in imgs.length"
            :key="index"
          >
            <div
              class="image"
              @click="() => showImg(index - 1)"
              @keydown.enter="() => showImg(index - 1)"
            >
              <div class="figure">
                <v-img
                  v-ripple
                  cover
                  :src="imgs[index - 1]"
                  class="image-detail"
                  height="200px"
                />
                <v-icon class="zoom-icon">
                  mdi-magnify-plus-outline
                </v-icon>
              </div>
            </div>
          </splide-slide>
        </splide>
      </div>
    </v-col>
    <v-col md="7" sm="7" cols="12">
      <div class="text">
        <div class="options">
          <v-btn size="small" icon><v-icon>mdi-share-variant</v-icon></v-btn>
          <v-btn size="small" icon><v-icon>mdi-dots-horizontal</v-icon></v-btn>
        </div>
        <h4 class="use-text-title2">
          <span class="use-text-subtitle use-text-secondary-color">
            John Doe
            <v-icon size="x-small">mdi-check-decagram</v-icon>
          </span>
          The Lorem Ipsum Dolor
        </h4>
        <div class="property">
          <i class="ion-md-star" />
          &nbsp;
          4.5 &nbsp;&nbsp;
          <i class="ion-md-contacts" />
          &nbsp;
          1.0K
          <template v-if="isDesktop">Owners</template>
          &nbsp; &nbsp;
          <i class="ion-ios-apps" />
          &nbsp;
          17
          <template v-if="isDesktop">Items</template>
          &nbsp;&nbsp;
          <i class="ion-md-eye" />
          &nbsp;
          168K
          <template v-if="isDesktop">Views</template>
          &nbsp;&nbsp;
          <i class="ion-md-heart" />
          &nbsp;
          1.4K
          <template v-if="isDesktop">Favorites</template>
        </div>
        <div class="counter-wrap">
          <count-down
            :miliseconds="30000000"
            mini
            :info="$t('list_sale_ends') + ' Nov 24, 2022 at 3:50 AM GMT+7'"
          />
        </div>
        <section class="btn-area">
          <div class="price">
            <p>{{ $t('list_current_price') }}</p>
            <h3 class="use-text-primary">
              0.27 ETH
              <span>$315.26</span>
            </h3>
          </div>
          <v-btn
            href="#"
            class="button"
            :variant="currentTheme === 'dark' ? 'tonal' : 'flat'"
            :color="currentTheme === 'dark' ? 'secondarydark' : 'black'"
            size="large"
          >
            {{ $t('list_cart') }}
          </v-btn>
          <v-btn
            href="#"
            variant="outlined"
            size="large"
            class="button"
            :color="currentTheme === 'dark' ? 'white' : 'black'"
          >
            {{ $t('list_whislist') }}
          </v-btn>
        </section>
      </div>
    </v-col>
  </v-row>
</template>

<style lang="scss" scoped>
@import './product-style.scss';
</style>

<script setup>
import { ref, onMounted } from 'vue';
import { useDisplay, useTheme } from 'vuetify';
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import imgAPI from '@/assets/images/imgAPI';
import CountDown from '../../Counter/Countdown';

const loaded = ref(false);
const visible = ref(false);
const index = ref(0);
const item = ref(0);
const slick = ref(null);

const imgs = [
  imgAPI.photosP[7],
  imgAPI.photosS[6],
  imgAPI.photosS[7],
  imgAPI.photosS[8],
  imgAPI.photosP[22],
  imgAPI.photosP[23]
]

const slickOptions = {
  pagination: true,
  arrows: false,
  perPage: 1,
  direction: 'ltr',
  reducedMotion: {
    autoplay: true,
    speed: 500,
    rewindSpeed: 1000,
  },
};

const { mdAndUp: isDesktop } = useDisplay();
const { name: currentTheme } = useTheme();

onMounted(() => {
  loaded.value = true;
});

function showImg(idx) {
  index.value = idx;
  visible.value = true;
}

function handleHide() {
  visible.value = false;
}
</script>
