<template>
  <v-container class="desc">
    <parallax-title
      :bg-title="$t('about_bgtitle')"
      :main-title="$t('about_title')"
      :color="currentTheme === 'dark' ? 'triple-main' : 'triple-light'"
    />
    <v-card class="paper">
      <v-row class="isMobile ? spacing2 : spacing6">
        <v-col md="7" cols="12">
          <p>
            {{ $t('about_desc1') }}
          </p>
          <p>
            {{ $t('about_desc2') }}
          </p>
          <h5 class="quote use-text-subtitle2">
            <i class="ion-ios-quote" />
            <em>{{ $t('about_quote') }}</em>
          </h5>
        </v-col>
        <v-col item md="5" cols="12">
          <div class="counter">
            <v-card class="card primary">
              <v-img
                :src="imgAPI.photosP[15]"
                title="work"
                cover
              />
              <div class="count">
                <h2 class="use-text-title">+300</h2>
                <h5 class="use-text-subtitle2">Developers</h5>
              </div>
            </v-card>
            <v-card class="card secondary">
              <v-img
                :src="imgAPI.photosS[9]"
                title="founded"
                cover
              />
              <div class="count">
                <h5 class="use-text-subtitle2">Founded In</h5>
                <h2 class="use-text-title">2011</h2>
              </div>
            </v-card>
            <v-card class="card accent">
              <v-img
                :src="imgAPI.photosL[54]"
                title="project"
                cover
              />
              <div class="count">
                <h2 class="use-text-title">+1000</h2>
                <h5 class="use-text-subtitle">Projects</h5>
              </div>
            </v-card>
          </div>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<style lang="scss" scoped>
@import './about-style.scss';
</style>

<script setup>
import { useDisplay, useTheme } from 'vuetify';
import imgAPI from '@/assets/images/imgAPI';
import ParallaxTitle from '../../Title/ParallaxTitle';

const { name: currentTheme } = useTheme();
const { smAndDown: isMobile } = useDisplay();
</script>