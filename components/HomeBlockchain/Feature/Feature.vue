<template>
  <div class="root">
    <parallax-right />
    <v-container :class="{ 'fixed-width' : isDesktop }">
      <parallax-title
        :bg-title="$t('blockchain.feature_bgtitle')"
        :main-title="$t('blockchain.feature_title')"
        :color="currentTheme === 'dark' ? 'triple-main' : 'triple-light'"
      />
      <p class="text-center use-text-subtitle2 mb-5">
        {{ $t('blockchain.feature_desc') }}
      </p>
      <div>
        <div class="item">
          <v-row align="center" :class="[isMobile ? 'column-reverse' : 'row']">
            <v-col cols="12" md="6" class="px-8">
              <div
                data-aos-offset="0"
                data-aos="fade-right"
                data-aos-delay="500"
                data-aos-duration="500"
              >
                <div class="illustration" :class="{ start: !isMobile }">
                  <figure class="text-center">
                    <img :src="imgAPI.blockchain[10]" alt="illustration" />
                  </figure>
                </div>
              </div>
            </v-col>
            <v-col md="6" cols="12" class="px-lg-8">
              <div class="desc">
                <title-secondary
                  :text="$t('blockchain.feature_title1')"
                  :align="isMobile ? 'center' : 'left'"
                />
                <h6 class="use-text-subtitle2" :class="[isMobile ? 'text-center' : 'text-start']">
                  {{ $t('blockchain.feature_desc1') }}
                </h6>
              </div>
            </v-col>
          </v-row>
        </div>
        <div class="item">
          <v-row align="center">
            <v-col md="6" cols="12" class="px-lg-8">
              <div class="desc">
                <title-secondary
                  :text="$t('blockchain.feature_title2')"
                  color="secondary"
                  :align="isMobile ? 'center' : 'right'"
                />
                <h6 class="use-text-subtitle2" :class="[isMobile ? 'text-center' : 'text-end']">
                  {{ $t('blockchain.feature_desc2') }}
                </h6>
              </div>
            </v-col>
            <v-col md="6" cols="12" class="px-15">
              <div
                data-aos-offset="0"
                data-aos="fade-left"
                data-aos-delay="500"
                data-aos-duration="500"
              >
                <div class="illustration">
                  <figure>
                    <img :src="imgAPI.blockchain[11]" alt="illustration" />
                  </figure>
                </div>
              </div>
            </v-col>
          </v-row>
        </div>
        <div class="item last">
          <v-row align="center" :class="[isMobile ? 'column-reverse' : 'row']">
            <v-col cols="12" md="6" class="px-8">
              <div
                data-aos-offset="-200"
                data-aos="fade-right"
                data-aos-delay="500"
                data-aos-duration="500"
              >
                <div class="illustration" :class="{ start: !isMobile }">
                  <figure class="text-center">
                    <img :src="imgAPI.blockchain[12]" alt="illustration" />
                  </figure>
                </div>
              </div>
            </v-col>
            <v-col md="6" cols="12">
              <div class="desc px-md-4">
                <title-secondary
                  color="primary"
                  :text="$t('blockchain.feature_title3')"
                  :align="isMobile ? 'center' : 'left'"
                />
                <h6 class="use-text-subtitle2" :class="[isMobile ? 'text-center' : 'text-start']">
                  {{ $t('blockchain.feature_desc3') }}
                </h6>
              </div>
            </v-col>
          </v-row>
        </div>
      </div>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import './feature-style.scss';
</style>

<script setup>
import { onMounted } from 'vue';
import AOS from 'aos';
import { useDisplay, useTheme } from 'vuetify';
import imgAPI from '@/assets/images/imgAPI';
import ParallaxRight from '../Parallax/ParallaxRight';
import ParallaxTitle from '../../Title/ParallaxTitle';
import TitleSecondary from '../../Title/TitleSecondary';

const { lgAndUp: isDesktop } = useDisplay();
const { smAndDown: isMobile } = useDisplay();
const { name: currentTheme } = useTheme();

onMounted(() => {
  AOS.init({
    once: true,
  });
})
</script>
