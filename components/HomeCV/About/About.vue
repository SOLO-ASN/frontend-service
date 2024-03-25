<template>
  <div class="about">
    <parallax-right />
    <parallax-title
      :bg-title="$t('profile.about_bgtitle')"
      :main-title="$t('profile.about_title')"
      :color="currentTheme === 'dark' ? 'double-main' : 'double-light'"
    />
    <v-container class="fixed-width mt-md-15">
      <v-row class="spacing6">
        <v-col class="pa-3" v-if="!isTablet" lg="1" cols="12">
          <h2 class="name-deco">
            {{ brand.profileName }}
          </h2>
        </v-col>
        <v-col class="pa-6" lg="7" md="9" cols="12">
          <div class="use-text-subtitle2" :class="isMobile ? 'text-center' : 'text-start'">
            <p class="mb-10">
              {{ $t('profile.about_desc1') }}
              {{ $t('profile.about_desc2') }}
            </p>
            <p class="mb-5">
              {{ $t('profile.pricing_desc1') }}
              {{ $t('profile.pricing_desc2') }}
            </p>
          </div>
          <v-row align="start" class="mt-12 spacing6">
            <v-col class="px-6 py-0" md="7" cols="12">
              <v-row class="spacing2 px-sm-3 icon-profile">
                <v-col v-for="(item, index) in profileList" :key="index" class="mb-3 pt-0 icon" cols="4">
                  <i :class="['use-text-grd-'+item.color, item.icon]" />
                  <p>{{ item.text }}</p>
                </v-col>
              </v-row>
            </v-col>
            <v-col class="px-6" v-if="isDesktop" md="5" cols="12">
              <app-card
                :thumb="appHighlight[0].img"
                :icon="appHighlight[0].icon"
              />
            </v-col>
          </v-row>
        </v-col>
        <v-col class="pa-6" lg="3" md="3" cols="12">
          <div :class="{ 'd-flex': isMobile }">
            <app-card
              :thumb="appHighlight[1].img"
              :icon="appHighlight[1].icon"
            />
            <div class="lower">
              <app-card
                :thumb="appHighlight[2].img"
                :icon="appHighlight[2].icon"
              />
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import './about-style.scss';
</style>

<script setup>
import { useDisplay, useTheme } from 'vuetify';
import imgAPI from '@/assets/images/imgAPI';
import brand from '@/assets/text/brand';
import ParallaxRight from '../Parallax/ParallaxRight';
import AppCard from '../../Cards/Thumbnail/PreviewCard';
import ParallaxTitle from '../../Title/ParallaxTitle';

const { smAndDown: isMobile } = useDisplay();
const { lgAndDown: isTablet } = useDisplay();
const { mdAndUp: isDesktop } = useDisplay();

const { name: currentTheme } = useTheme();
const profileList = [
  {
    icon: 'ion-md-contact',
    text: 'Senior UI UX Designer',
    color: 'primary-light',
  },
  {
    icon: 'ion-ios-briefcase',
    text: 'Work at Lorem Company ',
    color: 'secondary-light',
  },
  {
    icon: 'ion-ios-school',
    text: 'Alumni from Lipsum University',
    color: 'primary-light',
  },
  {
    icon: 'ion-md-globe',
    text: 'From England',
    color: 'secondary-light',
  },
  {
    icon: 'ion-md-checkmark-circle-outline',
    text: 'Verified Account',
    color: 'primary-light',
  },
  {
    icon: 'ion-ios-radio-button-on',
    text: 'Available for Hire',
    color: 'success',
  }
];

const appHighlight = [
  {
    img: imgAPI.photosP[26],
    icon: imgAPI.logos[34]
  },
  {
    img: imgAPI.photosP[27],
    icon: imgAPI.logos[36]
  },
  {
    img: imgAPI.photosS[7],
    icon: imgAPI.logos[31]
  },
];
</script>