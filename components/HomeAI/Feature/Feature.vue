<template>
  <div class="root">
    <parallax-double />
    <v-container :class="{ 'fixed-width' : isDesktop }">
      <parallax-title
        :bg-title="$t('ai-landing.feature_bgtitle')"
        :main-title="$t('ai-landing.feature_title')"
        :color="currentTheme === 'dark' ? 'triple-main' : 'triple-light'"
      />
      <p class="text-center use-text-subtitle2 mb-5">
        {{ $t('ai-landing.feature_desc') }}
      </p>
      <div>
        <div class="item">
          <v-row align="center" :class="[isMobile ? 'column-reverse' : 'row']">
            <v-col cols="12" md="6" class="px-8">
              <div
                :data-aos-offset="isDesktop ? 80 : -800"
                data-aos="fade-right"
                data-aos-delay="500"
                data-aos-duration="500"
              >
                <div class="px-sm-4 illustration">
                  <div class="bg liquid1" />
                  <figure class="illustration">
                    <img :src="imgAPI.ai[15]" alt="illustration" />
                  </figure>
                </div>
              </div>
            </v-col>
            <v-col md="6" cols="12" class="px-8">
              <div class="desc">
                <title-secondary
                  :text="$t('ai-landing.feature_title1')"
                  :align="isMobile ? 'center' : 'left'"
                />
                <h6 class="use-text-subtitle2" :class="[isMobile ? 'text-center' : 'text-start']">
                  {{ $t('ai-landing.feature_desc1') }}
                </h6>
              </div>
            </v-col>
          </v-row>
        </div>
        <div class="item">
          <v-row align="center">
            <v-col md="6" cols="12" class="px-8">
              <div class="desc">
                <title-secondary
                  :text="$t('ai-landing.feature_title2')"
                  color="secondary"
                  :align="isMobile ? 'center' : 'right'"
                />
                <h6 class="use-text-subtitle2" :class="[isMobile ? 'text-center' : 'text-end']">
                  {{ $t('ai-landing.feature_desc2') }}
                </h6>
              </div>
            </v-col>
            <v-col md="6" cols="12" class="px-15">
              <div
                :data-aos-offset="isDesktop ? 80 : -800"
                data-aos="fade-left"
                data-aos-delay="500"
                data-aos-duration="500"
              >
                <div class="illustration">
                  <figure>
                    <img :src="imgAPI.ai[16]" alt="illustration" />
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
                :data-aos-offset="isDesktop ? 80 : -800"
                data-aos="fade-right"
                data-aos-delay="500"
                data-aos-duration="500"
              >
                <div class="illustration">
                  <figure>
                    <img :src="imgAPI.ai[17]" alt="illustration" />
                  </figure>
                </div>
              </div>
            </v-col>
            <v-col md="6" cols="12">
              <div class="desc px-sm-4">
                <title-secondary
                  :text="$t('ai-landing.feature_title3')"
                  :align="isMobile ? 'center' : 'left'"
                />
                <h6 class="use-text-subtitle2" :class="[isMobile ? 'text-center' : 'text-start']">
                  {{ $t('ai-landing.feature_desc3') }}
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
import ParallaxDouble from '../Parallax/ParallaxDouble';
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
