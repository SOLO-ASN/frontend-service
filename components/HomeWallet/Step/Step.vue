<template>
  <v-container>
    <title-main
      align="center"
      :text="$t('wallet.step_title')"
    />
    <p class="text-center use-text-subtitle2">
      {{ $t('wallet.step_desc') }}
    </p>
    <v-row class="step" :class="{ spacing6: isDesktop }">
      <v-col sm="4" cols="12">
        <div class="item">
          <div class="icon">
            <div class="center">
              <icons3d icon="mdi-download-circle" color="primary-double" />
            </div>
            <div class="left">
              <icons3d icon="mdi-hexagon" color="accent" />
            </div>
            <div class="right">
              <icons3d icon="mdi-shield-check-outline" color="secondary" />
            </div>
          </div>
          <div class="glow primary">
            <h6 class="use-text-subtitle2">
              {{ $t('wallet.step_title1') }}
            </h6>
            <p class="use-text-paragraph">
              {{ $t('wallet.step_desc1') }}
            </p>
          </div>
          <hr class="divider primary" />
        </div>
      </v-col>
      <v-col sm="4" cols="12">
        <div class="item">
          <div class="icon">
            <div class="center">
              <icons3d icon="mdi-bitcoin" color="secondary-double" />
            </div>
            <div class="left">
              <icons3d icon="mdi-chart-bubble" color="primary" />
            </div>
            <div class="right">
              <icons3d icon="mdi-plus-thick" color="accent" />
            </div>
          </div>
          <div class="glow primary">
            <h6 class="use-text-subtitle2">
              {{ $t('wallet.step_title2') }}
            </h6>
            <p class="use-text-paragraph">
              {{ $t('wallet.step_desc2') }}
            </p>
          </div>
          <hr class="divider secondary" />
        </div>
      </v-col>
      <v-col sm="4" cols="12">
        <div class="item">
          <div class="icon">
            <div class="center">
              <icons3d icon="mdi-shopping" color="accent-double" />
            </div>
            <div class="left">
              <icons3d icon="mdi-music" color="primary" />
            </div>
            <div class="right">
              <icons3d icon="mdi-folder-multiple-image" color="secondary" />
            </div>
          </div>
          <div class="glow primary">
            <h6 class="use-text-subtitle2">
              {{ $t('wallet.step_title3') }}
            </h6>
            <p class="use-text-paragraph">
              {{ $t('wallet.step_desc3') }}
            </p>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss" scoped>
@import './step-style';
</style>

<script setup>
import { useDisplay } from 'vuetify';
import TitleMain from '../../Title';
import ParallaxTitle from '../../Title/ParallaxTitle';
import Icons3d from '../../Icons3d';

const { mdAndUp: isDesktop } = useDisplay();
</script>
