<template>
  <div class="root">
    <v-container class="carousel-header px-md-15">
      <title-main
        :text="$t('blockchain.project_title')"
        :align="isMobile ? 'center' : 'left'"
      />
      <p class="use-text-subtitle2">
        {{ $t('blockchain.project_desc') }}
        <v-btn
          :href="link.services"
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
            :data-aos-offset="isTablet ? -500 : 80"
            data-aos-delay="300"
            data-aos-duration="500"
          >
            <img :src="imgAPI.blockchain[13]" alt="research" />
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
          <splide-slide>
            <div class="item">
              <case-card
                :bg="caseData[0].bg"
                :logo="caseData[0].logo"
                :title="caseData[0].title"
                :desc="caseData[0].desc"
                :href="link.serviceDetail"
                orientation="square"
              />
              <case-card
                :bg="caseData[1].bg"
                :logo="caseData[1].logo"
                :title="caseData[1].title"
                :desc="caseData[1].desc"
                :href="link.serviceDetail"
                orientation="landscape"
              />
            </div>
          </splide-slide>
          <splide-slide>
            <div class="item">
              <case-card
                :bg="caseData[2].bg"
                :logo="caseData[2].logo"
                :title="caseData[2].title"
                :desc="caseData[2].desc"
                :href="link.serviceDetail"
                orientation="landscape"
              />
              <case-card
                :bg="caseData[3].bg"
                :logo="caseData[3].logo"
                :title="caseData[3].title"
                :desc="caseData[3].desc"
                :href="link.serviceDetail"
                orientation="landscape"
              />
              <case-card
                :bg="caseData[4].bg"
                :logo="caseData[4].logo"
                :title="caseData[4].title"
                :desc="caseData[4].desc"
                :href="link.serviceDetail"
                orientation="landscape"
              />
            </div>
          </splide-slide>
          <splide-slide>
            <div class="item">
              <case-card
                :bg="caseData[5].bg"
                :logo="caseData[5].logo"
                :title="caseData[5].title"
                :desc="caseData[5].desc"
                :href="link.serviceDetail"
                orientation="square"
              />
              <case-card
                :bg="caseData[6].bg"
                :logo="caseData[6].logo"
                :title="caseData[6].title"
                :desc="caseData[6].desc"
                :href="link.serviceDetail"
                orientation="landscape"
              />
            </div>
          </splide-slide>
          <splide-slide>
            <div class="item">
              <case-card
                :bg="caseData[7].bg"
                :logo="caseData[7].logo"
                :title="caseData[7].title"
                :desc="caseData[7].desc"
                :href="link.serviceDetail"
                orientation="landscape"
              />
              <case-card
                :bg="caseData[8].bg"
                :logo="caseData[8].logo"
                :title="caseData[8].title"
                :desc="caseData[8].desc"
                :href="link.serviceDetail"
                orientation="landscape"
              />
              <case-card
                :bg="caseData[9].bg"
                :logo="caseData[9].logo"
                :title="caseData[9].title"
                :desc="caseData[9].desc"
                :href="link.serviceDetail"
                orientation="landscape"
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
@import './projects-style.scss';
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
    bg: imgAPI.photosP[11],
    logo: imgAPI.logos[1],
    title: 'Convallis ligula',
    desc: 'Vestibulum consequat hendrerit',
  },
  {
    bg: imgAPI.photosL[7],
    logo: imgAPI.logos[2],
    title: 'Donec commodo',
    desc: 'Vestibulum consequat hendrerit',
  },
  {
    bg: imgAPI.photosP[12],
    logo: imgAPI.logos[3],
    title: 'Donec commodo',
    desc: 'Vestibulum consequat hendrerit',
  },
  {
    bg: imgAPI.photosS[3],
    logo: imgAPI.logos[4],
    title: 'Donec commodo',
    desc: 'Vestibulum consequat hendrerit',
  },
  {
    bg: imgAPI.photosL[1],
    logo: imgAPI.logos[5],
    title: 'Convallis ligula',
    desc: 'Vestibulum consequat hendrerit',
  },
  {
    bg: imgAPI.photosL[9],
    logo: imgAPI.logos[6],
    title: 'Convallis ligula',
    desc: 'Vestibulum consequat hendrerit',
  },
  {
    bg: imgAPI.photosL[2],
    logo: imgAPI.logos[7],
    title: 'Convallis ligula',
    desc: 'Vestibulum consequat hendrerit',
  },
  {
    bg: imgAPI.photosL[11],
    logo: imgAPI.logos[8],
    title: 'Convallis ligula',
    desc: 'Vestibulum consequat hendrerit',
  },
  {
    bg: imgAPI.photosL[8],
    logo: imgAPI.logos[9],
    title: 'Donec commodo',
    desc: 'Vestibulum consequat hendrerit',
  },
  {
    bg: imgAPI.photosL[10],
    logo: imgAPI.logos[10],
    title: 'Donec commodo',
    desc: 'Vestibulum consequat hendrerit',
  },
];

const slick = ref(null);
const loaded = ref(false);
const fade = ref(false);
const slickOptions = ref({
    pagination: false,
    speed: 500,
    perPage: 1,
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
const { lgAndDown: isTablet } = useDisplay();

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
