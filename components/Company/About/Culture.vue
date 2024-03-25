<template>
  <v-container class="culture">
    <parallax-title
      :bg-title="$t('culture_bgtitle')"
      :main-title="$t('culture_title')"
      :color="currentTheme === 'dark' ? 'triple-main' : 'triple-light'"
    />
    <v-row :class="isMobile ? 'spacing2' : 'spacing6'">
      <v-col order="isMobile ? 'last' : 'first'" class="collages-wrap" md="6" cols="12">
        <div class="collages">
          <div class="mt-15">
            <div
              data-aos="flip-y"
              data-aos-offset="100"
              data-aos-delay="100"
              data-aos-duration="500"
            >
              <figure>
                <img :src="imgAPI.photosL[15]" alt="collage" />
              </figure>
            </div>
            <div
              data-aos="flip-y"
              data-aos-offset="100"
              data-aos-delay="300"
              data-aos-duration="500"
            >
              <figure>
                <img :src="imgAPI.photosL[22]" alt="collage" />
              </figure>
            </div>
          </div>
          <div class="mt-7">
            <div
              data-aos="flip-y"
              data-aos-offset="100"
              data-aos-delay="500"
              data-aos-duration="500"
            >
              <figure>
                <img :src="imgAPI.photosP[17]" alt="collage" />
              </figure>
            </div>
            <div
              data-aos="flip-y"
              data-aos-offset="100"
              data-aos-delay="700"
              data-aos-duration="500"
            >
              <figure>
                <img :src="imgAPI.photosS[10]" alt="collage" />
              </figure>
            </div>
          </div>
          <div>
            <div
              data-aos="flip-y"
              data-aos-offset="100"
              data-aos-delay="900"
              data-aos-duration="500"
            >
              <figure>
                <img :src="imgAPI.photosP[31]" alt="collage" />
              </figure>
            </div>
            <div
              data-aos="flip-y"
              data-aos-offset="100"
              data-aos-delay="1100"
              data-aos-duration="500"
            >
              <figure>
                <img :src="imgAPI.photosS[11]" alt="collage" />
              </figure>
            </div>
          </div>
        </div>
      </v-col>
      <v-col :order="isMobile ? 'first' : 'last'" item md="6" cols="12">
        <div class="pt-md-10">
          <p class="use-text-subtitle2">
            <strong class="use-text-medium">
              {{ $t('culture_subtitle') }}
            </strong>
          </p>
          <p>
            {{ $t('culture_desc1') }}
          </p>
          <p>
            {{ $t('culture_desc2') }}
          </p>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss" scoped>
@import './about-style.scss';
</style>

<script setup>
import { onMounted } from 'vue';
import { useDisplay, useTheme } from 'vuetify';
import AOS from 'aos';
import imgAPI from '@/assets/images/imgAPI';
import ParallaxTitle from '../../Title/ParallaxTitle';

const { name: currentTheme } = useTheme();
const { smAndDown: isMobile } = useDisplay();

onMounted(() => {
  AOS.init({
    once: true,
  });
})
</script>