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
                <img :src="imgAPI.ai[0]" alt="background" />
              </div>
              <v-container>
                <v-row align="center">
                  <v-col md="7" cols="12">
                    <div class="text px-sm-3">
                      <h4 :class="isTablet ? 'use-text-title2' : 'use-text-title'">
                        {{ $t('ai-landing.banner_title') }}
                        <span class="text-uppercase" :class="currentTheme === 'dark' ? 'use-text-grd-triple-light' : 'use-text-grd-triple-main'">
                          {{ $t('ai-landing.banner_highlight') }}
                        </span>
                      </h4>
                      <h5 :class="isTablet ? 'use-text-subtitle2' : 'use-text-subtitle'">
                        {{ $t('ai-landing.banner_desc') }}
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
                              <img :src="imgAPI.ai[1]" alt="parallax" />
                            </span>
                          </kinesis-element>
                          <kinesis-element
                            :strength="150"
                            type="translate"
                            tag="div"
                          >
                            <span class="diamond">
                              <img :src="imgAPI.ai[2]" alt="parallax" />
                            </span>
                          </kinesis-element>
                          <kinesis-element
                            :strength="80"
                            type="translate"
                            tag="div"
                          >
                            <span class="egg">
                              <img :src="imgAPI.ai[3]" alt="parallax" />
                            </span>
                          </kinesis-element>
                          <kinesis-element
                            :strength="130"
                            type="translate"
                            tag="div"
                          >
                            <span class="nail">
                              <img :src="imgAPI.ai[4]" alt="parallax" />
                            </span>
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
                            <span class="gem">
                              <img :src="imgAPI.ai[5]" alt="parallax" />
                            </span>
                          </kinesis-element>
                          <kinesis-element
                            :strength="150"
                            type="translate"
                            tag="div"
                          >
                            <span class="bar">
                              <img :src="imgAPI.ai[6]" alt="parallax" />
                            </span>
                          </kinesis-element>
                          <kinesis-element
                            :strength="80"
                            type="translate"
                            tag="div"
                          >
                            <span class="pyramid">
                              <img :src="imgAPI.ai[7]" alt="parallax" />
                            </span>
                          </kinesis-element>
                          <kinesis-element
                            :strength="50"
                            type="translate"
                            tag="div"
                          >
                            <span class="shield">
                              <img :src="imgAPI.ai[8]" alt="parallax" />
                            </span>
                          </kinesis-element>
                        </kinesis-container>
                      </div>
                    </div>
                  </v-col>
                  <v-col md="7" cols="12">
                    <div class="text px-sm-3">
                      <h4 :class="isTablet ? 'use-text-title2' : 'use-text-title'">
                        {{ $t('ai-landing.banner_title') }}
                        <span class="text-uppercase" :class="currentTheme === 'dark' ? 'use-text-grd-triple-light' : 'use-text-grd-triple-main'">
                          {{ $t('ai-landing.banner_highlight') }}
                        </span>
                      </h4>
                      <h5 :class="isTablet ? 'use-text-subtitle2' : 'use-text-subtitle'">
                        {{ $t('ai-landing.banner_desc') }}
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
                  <v-col cols="12" class="px-sm-12">
                    <div class="text text-center">
                      <h4 :class="isTablet ? 'use-text-title2' : 'use-text-title'">
                        {{ $t('ai-landing.banner_title') }}
                        <span class="text-uppercase" :class="currentTheme === 'dark' ? 'use-text-grd-triple-light' : 'use-text-grd-triple-main'">
                          {{ $t('ai-landing.banner_highlight') }}
                        </span>
                      </h4>
                      <h5 :class="isTablet ? 'use-text-subtitle2' : 'use-text-subtitle'">
                        {{ $t('ai-landing.banner_desc') }}
                      </h5>
                      <div class="btn-area justify-center">
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
                              <span class="duo">
                                <img :src="imgAPI.ai[10]" alt="parallax" />
                              </span>
                            </kinesis-element>
                            <kinesis-element
                              :strength="40"
                              type="translate"
                              tag="div"
                            >
                              <span class="ring">
                                <img :src="imgAPI.ai[11]" alt="parallax" />
                              </span>
                            </kinesis-element>
                            <kinesis-element
                              :strength="120"
                              type="translate"
                              tag="div"
                            >
                              <span class="pearl">
                                <img :src="imgAPI.ai[12]" alt="parallax" />
                              </span>
                            </kinesis-element>
                          </kinesis-container>
                        </div>
                      </div>
                      <img :src="imgAPI.ai[9]" alt="background" />
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
const { md: isTablet } = useDisplay();
const { mdAndUp: isDesktop } = useDisplay();

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
