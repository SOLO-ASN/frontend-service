<template>
  <div class="root">
    <v-row class="mx-0">
      <v-col v-if="isDesktop" lg="1" cols="12">
        <side-navigation :nav-menu="menu" />
      </v-col>
      <v-col lg="11" cols="12" class="pa-0">
        <div class="banner">
          <div class="cover">
            <div class="figure">
              <div v-if="bannerHero === 'image'" class="img" :style="'background-image: url('+imgAPI.photosL[10]+')'" />
              <video-hero v-if="bannerHero === 'video'" />
              <animation v-if="bannerHero === 'animation'" />
              <animation-slideshow v-if="bannerHero === 'animation-slideshow'" />
              <slideshow v-if="bannerHero === 'slideshow'" />
            </div>
          </div>
          <div v-if="isDesktop" class="setting-icon">
            <settings />
          </div>
          <div class="text">
            <h4 class="use-text-title2">
              {{ $t('profile.banner_greeting') }},
            </h4>
            <h2 class="use-text-title">
              {{ $t('profile.banner_iam') }}
              {{ brand.profileName }}, {{ brand.profileTitle }}
            </h2>
            <template v-if="!isMobile">
              <h5 class="use-text-subtitle2">
                {{ $t('profile.about_desc1') }}
              </h5>
              <div class="socmed">
                <v-btn icon size="small" variant="text" class="margin">
                  <i class="ion-logo-facebook" />
                </v-btn>
                <v-btn icon size="small" variant="text" class="margin">
                  <i class="ion-logo-twitter " />
                </v-btn>
                <v-btn icon size="small" variant="text" class="margin">
                  <i class="ion-logo-instagram" />
                </v-btn>
                <v-btn icon size="small" variant="text" class="margin">
                  <i class="ion-logo-linkedin" />
                </v-btn>
                <v-btn href="#" variant="outlined" size="small" class="download">Download CV</v-btn>
              </div>
            </template>
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<style lang="scss" scoped>
@import './banner-style.scss';
</style>

<script setup>
import { ref } from 'vue';
import { useDisplay } from 'vuetify';
import brand from '@/assets/text/brand';
import imgAPI from '@/assets/images/imgAPI';
import SideNavigation from '../SideNavigation';
import Settings from '../../Header/TopNav/Settings';
import Animation from '../../HeroBanner/Animation';
import AnimationSlideshow from '../../HeroBanner/AnimationSlideshow';
import Slideshow from '../../HeroBanner/Slideshow';
import VideoHero from '../../HeroBanner/Video';

const { lgAndUp: isDesktop } = useDisplay();
const { smAndDown: isMobile } = useDisplay();
const bannerHero = ref('image');

const { menu } = defineProps({
  menu: {
    type: Array,
    required: true,
  }
});
</script>
