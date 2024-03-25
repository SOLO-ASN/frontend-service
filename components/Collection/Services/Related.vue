<template>
  <div class="root">
    <v-container class="carousel-header">
      <title-main
        strict-align
        :text="$t('service_related_title2')"
        :align="isMobile ? 'center' : 'left'"
      />
      <v-btn
        :href="link.product"
        size="large"
        variant="text"
        class="view-all"
      >
        {{ $t('btn_seeall') }}
        <v-icon class="icon">mdi-arrow-right</v-icon>
      </v-btn>
    </v-container>
    <div class="slider-wrap">
      <v-container>
        <div v-if="isDesktop" class="floating-text">
          <p>{{ $t('service_related_desc2') }}</p>
        </div>
      </v-container>
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
          <splide-slide v-for="(item, index) in caseData" :index="index">
            <div class="item">
              <case-card
                :bg="caseData[index].bg"
                :logo="caseData[index].logo"
                :title="caseData[index].title"
                :desc="caseData[index].desc"
                :href="link.portfolioDetail"
              />
            </div>
          </splide-slide>
          <splide-slide>
            <div class="props item-props-first">
              <div />
            </div>
          </splide-slide>
        </splide>
      </div>
      <v-btn
        icon
        fab
        class="nav prev"
        @click="prev"
        size="large"
        :disabled="slideCount <= 0"
      >
        <i class="ion-md-arrow-back" />
      </v-btn>
      <v-btn
        icon
        fab
        class="nav next"
        @click="next"
        size="large"
      >
        <i class="ion-md-arrow-forward" />
      </v-btn>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './services-style.scss';
</style>

<script setup>
import { ref } from 'vue';
import { useDisplay } from 'vuetify';
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import imgAPI from '@/assets/images/imgAPI';
import link from '@/assets/text/link';
import TitleMain from '../../Title';
import CaseCard from '../../Cards/Thumbnail/CaseCard';

const caseData = [
  {
    bg: imgAPI.photosP[7],
    logo: imgAPI.logos[1],
    title: 'Convallis ligula',
    desc: 'Vestibulum consequat hendrerit',
  },
  {
    bg: imgAPI.photosP[10],
    logo: imgAPI.logos[2],
    title: 'Donec commodo',
    desc: 'Vestibulum consequat hendrerit',
  },
  {
    bg: imgAPI.photosP[13],
    logo: imgAPI.logos[3],
    title: 'Donec commodo',
    desc: 'Vestibulum consequat hendrerit',
  },
  {
    bg: imgAPI.photosS[1],
    logo: imgAPI.logos[4],
    title: 'Donec commodo',
    desc: 'Vestibulum consequat hendrerit',
  },
  {
    bg: imgAPI.photosP[12],
    logo: imgAPI.logos[5],
    title: 'Convallis ligula',
    desc: 'Vestibulum consequat hendrerit',
  },
  {
    bg: imgAPI.photosP[6],
    logo: imgAPI.logos[6],
    title: 'Convallis ligula',
    desc: 'Vestibulum consequat hendrerit',
  },
  {
    bg: imgAPI.photosP[4],
    logo: imgAPI.logos[7],
    title: 'Convallis ligula',
    desc: 'Vestibulum consequat hendrerit',
  },
  {
    bg: imgAPI.photosP[28],
    logo: imgAPI.logos[8],
    title: 'Convallis ligula',
    desc: 'Vestibulum consequat hendrerit',
  },
  {
    bg: imgAPI.photosS[3],
    logo: imgAPI.logos[9],
    title: 'Donec commodo',
    desc: 'Vestibulum consequat hendrerit',
  },
  {
    bg: imgAPI.photosS[2],
    logo: imgAPI.logos[10],
    title: 'Donec commodo',
    desc: 'Vestibulum consequat hendrerit',
  }
];

const { mdAndUp: isDesktop } = useDisplay();
const { xs: isMobile } = useDisplay();

const slideCount = ref(0);
const slider = ref(null);

const settings = {
  pagination: true,
  speed: 500,
  autoplay: false,
  perPage: 3,
  perMove: 1,
  arrows: false,
  autoWidth: true,
  reducedMotion: {
    speed: 500,
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
    }
  }
};

function handleAfterChange(slide) {
  slideCount.value = slide.index;
}

function next() {
  slider.value.go('>');
}

function prev() {
  slider.value.go('<');
}
</script>