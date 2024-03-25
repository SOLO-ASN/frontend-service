<template>
  <v-container>
    <parallax-title
      :bgTitle="$t('blockchain.discover_bgtitle')"
      :mainTitle="$t('blockchain.discover_title')"
      color="double-main"
    />
    <v-row class="step" :class="{ spacing6: isDesktop }">
      <v-col sm="4" cols="12">
        <div class="item">
          <div class="icon">
            <div class="center">
              <icons3d icon="mdi-bitcoin" color="primary-double" />
            </div>
            <div class="left">
              <icons3d icon="mdi-arrow-top-right-bold-box" color="accent" />
            </div>
            <div class="right">
              <icons3d icon="mdi-shield-check-outline" color="secondary" />
            </div>
          </div>
          <div class="glow primary">
            <h6 class="use-text-subtitle2">
              {{ $t('blockchain.step_title1') }}
            </h6>
            <p class="use-text-paragraph">
              {{ $t('blockchain.step_desc1') }}
            </p>
          </div>
          <hr class="divider primary" />
        </div>
      </v-col>
      <v-col sm="4" cols="12">
        <div class="item">
          <div class="icon">
            <div class="center">
              <icons3d icon="mdi-wallet" color="secondary-double" />
            </div>
            <div class="left">
              <icons3d icon="mdi-bitcoin" color="primary" />
            </div>
            <div class="right">
              <icons3d icon="mdi-image" color="accent" />
            </div>
          </div>
          <div class="glow primary">
            <h6 class="use-text-subtitle2">
              {{ $t('blockchain.step_title2') }}
            </h6>
            <p class="use-text-paragraph">
              {{ $t('blockchain.step_desc2') }}
            </p>
          </div>
          <hr class="divider secondary" />
        </div>
      </v-col>
      <v-col sm="4" cols="12">
        <div class="item">
          <div class="icon">
            <div class="center">
              <icons3d icon="mdi-cog" color="accent-double" />
            </div>
            <div class="left">
              <icons3d icon="mdi-hammer-screwdriver" color="primary" />
            </div>
            <div class="right">
              <icons3d icon="mdi-code-braces-box" color="secondary" />
            </div>
          </div>
          <div class="glow primary">
            <h6 class="use-text-subtitle2">
              {{ $t('blockchain.step_title3') }}
            </h6>
            <p class="use-text-paragraph">
              {{ $t('blockchain.step_desc3') }}
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
import ParallaxTitle from '../../Title/ParallaxTitle';
import Icons3d from '../../Icons3d';

const { mdAndUp: isDesktop } = useDisplay();
</script>
