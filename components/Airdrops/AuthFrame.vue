<template>
  <div v-if="type === 'login'">
    <div class="decoration left">
      <div class="ball">
        <clay-deco img="/images/decoration/clay-ball.png" color="triple-main" />
      </div>
      <div class="plate">
        <clay-deco img="/images/decoration/clay-plate.png" color="secondary-light" />
      </div>
    </div>
    <div class="decoration right">
      <div class="flower">
        <clay-deco img="/images/decoration/clay-flower.png" color="primary-light" />
      </div>
      <div class="bowl">
        <clay-deco img="/images/decoration/clay-bowl.png" color="secondary-light" />
      </div>
    </div>
  </div>
  <div v-else>
    <div class="decoration left">
      <div class="ufo">
        <clay-deco img="/images/decoration/clay-ufo.png" color="triple-main" />
      </div>
      <div class="bom">
        <clay-deco img="/images/decoration/clay-bom.png" color="double-main" />
      </div>
    </div>
    <div class="decoration right">
      <div class="snail">
        <clay-deco img="/images/decoration/clay-snail.png" color="primary-light" />
      </div>
      <div class="bowl">
        <clay-deco img="/images/decoration/clay-bowl.png" color="accent" />
      </div>
    </div>
  </div>
  <div class="page-wrap">
    <v-container class="max-lg inner-wrap">
      <div class="auth-frame">
        <v-row class="spacing0">
          <v-col class="me-n8" lg="6" md="5" cols="12">
            <div v-if="!isMobile" class="greeting">
              <img v-if="type === 'login'" class="img-login" src="/images/inner/abstract.png" alt="decoration" />
              <img v-else class="img-register" src="/images/inner/fog.png" alt="decoration" />
              <div class="inner">
                <div class="fog">
                  <div class="triple-main" :style="styleGr[0]" />
                  <div class="primary-light" :style="styleGr[1]" />
                  <div class="double-main" :style="styleGr[2]" />
                  <div class="triple-light" :style="styleGr[3]" />
                </div>
              </div>
              <v-icon class="arrow-icon">mdi-arrow-right</v-icon>
              <div class="text">
                <h4 :class="isMobile ? 'use-text-title2' : 'use-text-title'">
                  {{ title }}
                </h4>
                <h6 :class="isMobile ? 'use-text-subtitle2' : 'use-text-subtitle'">
                  {{ subtitle }}
                </h6>
              </div>
            </div>
          </v-col>
          <v-col lg="6" md="7" cols="12">
            <div class="form-wrap">
              <slot />
            </div>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import './form-style.scss';
</style>

<script setup>
import { onMounted, ref } from 'vue';
import { useDisplay } from 'vuetify';
import brand from '@/assets/text/brand';
import imgAPI from '@/assets/images/imgAPI';
import ClayDeco from '../Artworks/ClayDeco';

const {
  children, title,
  subtitle, type
} = defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    default: '',
  },
  type: {
    type: String,
    default: 'login',
  },
});

const styleGr = ref({});
const { smAndDown: isMobile } = useDisplay();

onMounted(() => {
  const randomShape = (top, left, width, height, rotate) => ({
    top: Math.floor(Math.random() * top) + 'px',
    left: Math.floor(Math.random() * left),
    width: Math.floor(Math.random() * (width - 100) + 100) + 'px',
    height: Math.floor(Math.random() * (height - 100) + 100) + 'px',
    transform: `rotate(${Math.floor(Math.random() * rotate)}deg)`,
  });

  styleGr.value = [
    randomShape(100, 300, 600, 500, 120),
    randomShape(200, 200, 400, 300, 60),
    randomShape(200, 200, 700, 400, 90),
    randomShape(400, 100, 400, 500, 160)
  ];
});
</script>
