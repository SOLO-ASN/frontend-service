<template>
  <div class="root">
    <v-row class="spacing2">
      <v-col v-if="isDesktop" lg="1" cols="12">
        <side-navigation :nav-menu="menu" />
      </v-col>
      <v-col lg="11" cols="12" class="pa-0">
        <div class="banner">
          <div class="cover">
            <div class="figure">
              <div v-if="bannerHero === 'image'" class="img" :style="'background-image: url('+brand.cover+')'" />
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
              {{ $t('avatar.banner_greeting') }},
            </h4>
            <h2 class="use-text-title">
              {{ $t('avatar.banner_iam') }}
              {{ brand.profileName }}, {{ brand.profileTitle2 }}
            </h2>
            <template v-if="!isMobile">
              <h5 class="use-text-subtitle2">
                {{ $t('avatar.banner_desc') }}
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
import SideNavigation from '../SideNavigation';
import Settings from '../../Header/TopNav/Settings';
import Animation from '../../HeroBanner/Animation';
import AnimationSlideshow from '../../HeroBanner/AnimationSlideshow';
import Slideshow from '../../HeroBanner/Slideshow';
import VideoHero from '../../HeroBanner/Video';

const { lgAndUp: isDesktop } = useDisplay();
const { smAndDown: isMobile } = useDisplay();
const bannerHero = ref('animation');

const { menu } = defineProps({
  menu: {
    type: Array,
    required: true,
  }
});
</script>
