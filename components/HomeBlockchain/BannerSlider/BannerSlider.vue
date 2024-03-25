<template>
  <div class="banner-wrap">
    <div class="carousel">
      <splide
        ref="sliderBanner"
        class="slider"
        :options="slickOptions"
        @splide:active="handleAfterChange"
      >
        <splide-slide>
          <div id="slide1" class="slide">
            <div class="inner">
              <div class="img background-banner">
                <img :src="imgAPI.blockchain[0]" alt="background" />
              </div>
              <v-container>
                <v-row align="center">
                  <v-col md="7" cols="12">
                    <div class="text px-sm-3">
                      <h4 :class="isTablet ? 'use-text-title2' : 'use-text-title'">
                        {{ $t('blockchain.banner_title') }}
                        <span class="text-uppercase" :class="currentTheme === 'dark' ? 'use-text-grd-triple-light' : 'use-text-grd-triple-main'">
                          {{ $t('blockchain.banner_highlight') }}
                        </span>
                      </h4>
                      <h5 :class="isTablet ? 'use-text-subtitle2' : 'use-text-subtitle'">
                        {{ $t('blockchain.banner_desc') }}
                      </h5>
                      <div class="btn-area">
                        <v-btn
                          size="large"
                          color="secondary"
                          class="button"
                          :href="link.register"
                        >
                          {{ $t('btn_get') }}
                        </v-btn>
                        <v-btn
                          size="large"
                          color="primary"
                          class="button"
                          variant="outlined"
                          href="#"
                        >
                          {{ $t('btn_detail') }}
                        </v-btn>
                      </div>
                    </div>
                  </v-col>
                  <v-col md="5" cols="12">
                    <div class="deco-banner" v-if="isDesktop">
                      <div class="parallax-scene right-scene">
                        <kinesis-container
                          :duration="3000"
                          easing="ease-out"
                        >
                          <kinesis-element
                            :strength="80"
                            type="translate"
                            tag="div"
                          >
                            <span class="hexa">
                              <img :src="imgAPI.blockchain[1]" alt="parallax" />
                            </span>
                          </kinesis-element>
                          <kinesis-element
                            :strength="150"
                            type="translate"
                            tag="div"
                          >
                            <span class="cube">
                              <img :src="imgAPI.blockchain[2]" alt="parallax" />
                            </span>
                          </kinesis-element>
                          <kinesis-element
                            :strength="80"
                            type="translate"
                            tag="div"
                          >
                            <span class="cube-blur">
                              <img :src="imgAPI.blockchain[3]" alt="parallax" />
                            </span>
                          </kinesis-element>
                          <kinesis-element
                            :strength="130"
                            type="translate"
                            tag="div"
                          >
                            <span class="accent-blur" />
                          </kinesis-element>
                        </kinesis-container>
                      </div>
                    </div>
                  </v-col>
                </v-row>
              </v-container>
            </div>
          </div>
        </splide-slide>
        <splide-slide>
          <div id="slide2" class="slide">
            <div class="inner">
              <v-container>
                <v-row justify="end" align="center" :class="isMobile ? 'column-reverse' : 'row'">
                  <v-col md="5" cols="12">
                    <div class="deco-banner" v-if="isDesktop">
                      <div class="parallax-scene left-scene">
                        <kinesis-container
                          :duration="3000"
                          easing="ease-out"
                        >
                          <kinesis-element
                            :strength="50"
                            type="translate"
                            tag="div"
                          >
                            <span class="pyramid">
                              <img :src="imgAPI.blockchain[4]" alt="parallax" />
                            </span>
                          </kinesis-element>
                          <kinesis-element
                            :strength="150"
                            type="translate"
                            tag="div"
                          >
                            <span class="box">
                              <img :src="imgAPI.blockchain[5]" alt="parallax" />
                            </span>
                          </kinesis-element>
                          <kinesis-element
                            :strength="80"
                            type="translate"
                            tag="div"
                          >
                            <span class="round">
                              <img :src="imgAPI.blockchain[6]" alt="parallax" />
                            </span>
                          </kinesis-element>
                          <kinesis-element
                            :strength="50"
                            type="translate"
                            tag="div"
                          >
                            <span class="primary-blur" />
                          </kinesis-element>
                        </kinesis-container>
                      </div>
                    </div>
                  </v-col>
                  <v-col md="7" cols="12">
                    <div class="text px-sm-3">
                      <h4 :class="isTablet ? 'use-text-title2' : 'use-text-title'">
                        {{ $t('blockchain.banner_title') }}
                        <span class="text-uppercase" :class="currentTheme === 'dark' ? 'use-text-grd-triple-light' : 'use-text-grd-triple-main'">
                          {{ $t('blockchain.banner_highlight') }}
                        </span>
                      </h4>
                      <h5 :class="isTablet ? 'use-text-subtitle2' : 'use-text-subtitle'">
                        {{ $t('blockchain.banner_desc') }}
                      </h5>
                      <div class="btn-area">
                        <v-btn
                          size="large"
                          color="secondary"
                          class="button"
                          :href="link.register"
                        >
                          {{ $t('btn_get') }}
                        </v-btn>
                        <v-btn
                          size="large"
                          color="primary"
                          class="button"
                          variant="outlined"
                          href="#"
                        >
                          {{ $t('btn_detail') }}
                        </v-btn>
                      </div>
                    </div>
                  </v-col>
                </v-row>
              </v-container>
            </div>
          </div>
        </splide-slide>
        <splide-slide>
          <div id="slide3" class="slide center-content">
            <div class="inner">
              <v-container>
                <v-row justify="center">
                  <v-col md="8" cols="12" class="px-sm-12 pt-md-12">
                    <div class="text text-center">
                      <h4 :class="isTablet ? 'use-text-title2' : 'use-text-title'">
                        {{ $t('blockchain.banner_title') }}
                        <span class="text-uppercase" :class="currentTheme === 'dark' ? 'use-text-grd-triple-light' : 'use-text-grd-triple-main'">
                          {{ $t('blockchain.banner_highlight') }}
                        </span>
                      </h4>
                      <h5 :class="isTablet ? 'use-text-subtitle2' : 'use-text-subtitle'">
                        {{ $t('blockchain.banner_desc') }}
                      </h5>
                      <div class="btn-area justify-center">
                        <v-btn
                          size="large"
                          color="secondary"
                          class="button"
                          :href="link.register"
                        >
                          {{ $t('btn_get') }}
                        </v-btn>
                        <v-btn
                          size="large"
                          color="black"
                          class="button"
                          href="#"
                        >
                          {{ $t('btn_detail') }}
                        </v-btn>
                      </div>
                    </div>
                  </v-col>
                  <v-col cols="12">
                    <div className="img h-banner">
                      <div class="deco-banner" v-if="isDesktop">
                        <div class="parallax-scene center-scene">
                          <kinesis-container
                            :duration="3000"
                            easing="ease-out"
                          >
                            <kinesis-element
                              :strength="50"
                              type="translate"
                              tag="div"
                            >
                              <span class="hexa2">
                                <img :src="imgAPI.blockchain[9]" alt="parallax" />
                              </span>
                            </kinesis-element>
                            <kinesis-element
                              :strength="40"
                              type="translate"
                              tag="div"
                            >
                              <span class="pyramid-blur">
                                <img :src="imgAPI.blockchain[4]" alt="parallax" />
                              </span>
                            </kinesis-element>
                            <kinesis-element
                              :strength="120"
                              type="translate"
                              tag="div"
                            >
                              <span class="tube">
                                <img :src="imgAPI.blockchain[8]" alt="parallax" />
                              </span>
                            </kinesis-element>
                            <kinesis-element
                              :strength="120"
                              type="translate"
                              tag="div"
                            >
                              <span class="round2">
                                <img :src="imgAPI.blockchain[6]" alt="parallax" />
                              </span>
                            </kinesis-element>
                          </kinesis-container>
                        </div>
                      </div>
                      <img :src="imgAPI.blockchain[7]" alt="background" />
                    </div>
                  </v-col>
                </v-row>
              </v-container>
            </div>
          </div>
        </splide-slide>
      </splide>
    </div>
    <div class="slide-nav-group">
      <hidden point="smDown">
        <v-container>
          <nav class="slide-nav">
            <v-btn
              :class="{ active: currentSlide === 0 }"
              variant="text"
              @click="gotoSlide(0)"
            >
              <strong>First Slide</strong>
              Interdum et malesuada fames ac ante
            </v-btn>
            <v-divider class="divider" vertical inset />
            <v-btn
              :class="{ active: currentSlide === 1 }"
              variant="text"
              @click="gotoSlide(1)"
            >
              <strong>Second Slide</strong>
              Interdum et malesuada fames ac ante
            </v-btn>
            <v-divider class="divider" vertical inset />
            <v-btn
              :class="{ active: currentSlide === 2 }"
              variant="text"
              @click="gotoSlide(2)"
            >
              <strong>Third Slide</strong>
              Interdum et malesuada fames ac ante
            </v-btn>
          </nav>
        </v-container>
      </hidden>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import './banner-style';
</style>

<script setup>
import { ref, onMounted } from 'vue';
import { useDisplay, useRtl, useTheme } from 'vuetify';
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import link from '@/assets/text/link';
import imgAPI from '@/assets/images/imgAPI';
import Hidden from '../../Utils/Hidden';

const currentSlide = ref(0);
const sliderBanner = ref(null);
const slickOptions = ref({
  pagination: false,
  arrows: false,
  perPage: 1,
  type: 'loop',
  speed: 1000,
  easing: 'ease',
  direction: 'ltr',
  reducedMotion: {
    speed: 1000,
    rewindSpeed: 1000,
  },
  breakpoints: {
    800: {
      pagination: true,
    },
  },
});

const { smAndDown: isMobile } = useDisplay();
const { mdAndUp: isDesktop } = useDisplay();
const { md: isTablet } = useDisplay();

const { name: currentTheme } = useTheme();
const { isRtl } = useRtl();

onMounted(() => {
  setTimeout(() => {
    if (isRtl.value) {
      slickOptions.value.direction = 'rtl';
    } else {
      slickOptions.value.direction = 'ltr';
    }
  }, 100);
});


function handleAfterChange(slide) {
  currentSlide.value = slide.index;
}

function gotoSlide(index) {
  sliderBanner.value.go(index);
}
</script>
