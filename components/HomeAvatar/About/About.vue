<template>
  <div class="about">
    <parallax-right />
    <parallax-title
      :bg-title="$t('avatar.about_bgtitle')"
      :main-title="$t('avatar.about_title')"
      :color="currentTheme === 'dark' ? 'double-main' : 'double-light'"
    />
    <v-container class="fixed-width mt-md-15">
      <v-row class="spacing6">
        <v-col class="pa-6" v-if="!isTablet" lg="1" cols="12">
          <h2 class="name-deco">
            {{ brand.profileName }}
          </h2>
        </v-col>
        <v-col class="pa-6" lg="7" md="9" cols="12">
          <div class="use-text-subtitle2" :class="isMobile ? 'text-center' : 'text-start'">
            <p class="mb-5">
              {{ $t('avatar.about_desc1') }}
            </p>
            <p class="mb-5">
              {{ $t('avatar.about_desc2') }}
            </p>
          </div>
          <v-row :align="isTablet ? 'end' : 'start'" class="mt-12 spacing6">
            <v-col class="pa-6" sm="7" cols="12">
              <v-row class="spacing12">
                <v-col v-for="(item, index) in gameList" :key="index" class="mb-3" cols="4">
                  <v-avatar class="avatar" rounded="8" :image="item" alt="thumb" />
                </v-col>
              </v-row>
            </v-col>
            <v-col class="pa-6" v-if="isDesktop" sm="5" cols="12">
              <app-card
                :thumb="gameHighlight[0].img"
                :icon="gameHighlight[0].icon"
              />
            </v-col>
          </v-row>
        </v-col>
        <v-col class="pa-6" lg="3" md="3" cols="12">
          <div :class="{ 'd-flex': isMobile }">
            <app-card
              :thumb="gameHighlight[1].img"
              :icon="gameHighlight[1].icon"
            />
            <div class="lower">
              <app-card
                :thumb="gameHighlight[2].img"
                :icon="gameHighlight[2].icon"
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
const { smAndUp: isDesktop } = useDisplay();

const { name: currentTheme } = useTheme();
const gameList = [imgAPI.logos[38], imgAPI.logos[39], imgAPI.logos[40], imgAPI.logos[41], imgAPI.logos[42], imgAPI.logos[43]];
const gameHighlight = [
  {
    img: imgAPI.photosP[19],
    icon: imgAPI.logos[44]
  },
  {
    img: imgAPI.photosS[5],
    icon: imgAPI.logos[45]
  },
  {
    img: imgAPI.photosS[6],
    icon: imgAPI.logos[46]
  },
];
</script>