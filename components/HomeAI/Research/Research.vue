<template>
  <div class="root">
    <v-container class="carousel-header px-md-15">
      <title-main
        :text="$t('ai-landing.research_title')"
        :align="isMobile ? 'center' : 'left'"
      />
      <p class="use-text-subtitle2">
        {{ $t('ai-landing.research_desc') }}
        <v-btn
          :href="link.portfolio"
          :color="currentTheme === 'dark' ? 'secondary' : 'primary'"
          variant="text"
          class="view-all px-3 py-0"
          size="large"
        >
          {{ $t('btn_seeall') }}
          <v-icon>mdi-arrow-right</v-icon>
        </v-btn>
      </p>
    </v-container>
    <v-container>
      <div class="floating-artwork">
        <slider-art :fade="fade">
          <div
            data-aos="fade-right"
            :data-aos-offset="isDesktop ? 80 : -800"
            data-aos-delay="300"
            data-aos-duration="500"
          >
            <img :src="imgAPI.ai[18]" alt="research" />
          </div>
        </slider-art>
      </div>
    </v-container>
    <div class="slider-wrap">
      <div v-if="loaded" class="carousel">
        <splide
          ref="slick"
          :options="slickOptions"
          @splide:active="handleAfterChange"
        >
          <splide-slide>
            <div class="props item-props-first">
              <div />
            </div>
          </splide-slide>
          <splide-slide
            v-for="(item, index) in caseData"
            :key="index"
          >
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
        </splide>
      </div>
      <v-btn
        icon
        fab
        :disabled="!fade"
        class="nav prev"
        @click="prev()"
      >
        <i class="ion-ios-arrow-back" />
      </v-btn>
      <v-btn
        icon
        fab
        class="nav next"
        @click="next()"
      >
        <i class="ion-ios-arrow-forward" />
      </v-btn>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './research-style.scss';
</style>

<script setup>
import { ref, onMounted } from 'vue';
import { useDisplay, useRtl, useTheme } from 'vuetify';
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import AOS from 'aos';
import link from '@/assets/text/link';
import imgAPI from '@/assets/images/imgAPI';
import SliderArt from '../SliderArt';
import CaseCard from '../../Cards/Thumbnail/CaseCard';
import TitleMain from '../../Title';

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

const slick = ref(null);
const loaded = ref(false);
const fade = ref(false);
const slickOptions = ref({
    pagination: false,
    speed: 500,
    perPage: 4,
    arrows: false,
    autoWidth: true,
    direction: 'ltr',
    reducedMotion: {
      speed: 1000,
      rewindSpeed: 1000,
    },
    breakpoints: {
      1100: {
        perPage: 3,
        perMove: 1,
      },
      800: {
        perPage: 2,
        perMove: 1,
      },
      600: {
        perPage: 1,
        perMove: 1,
      },
    },
});

const { xs: isMobile } = useDisplay();
const { lgAndUp: isDesktop } = useDisplay();
const { isRtl } = useRtl();
const { name: currentTheme } = useTheme();

onMounted(() => {
  loaded.value = true;
  AOS.init({
    once: true,
  });
  setTimeout(() => {
    if (isRtl.value) {
      slickOptions.value.direction = 'rtl';
    } else {
      slickOptions.value.direction = 'ltr';
    }
  }, 200);
});

function next() {
  slick.value.go('>');
}

function prev() {
  slick.value.go('<');
}

function handleAfterChange(slide) {
  if (slide.index >= 1) {
    fade.value = true;
  } else {
    fade.value = false;
  }
}
</script>
