<template>
  <v-container>
    <parallax-title
      :bg-title="$t('nft.sell_bgtitle')"
      :main-title="$t('nft.sell_title')"
      color="double-main"
    />
    <v-row class="step" :class="{ spacing6: isDesktop }">
      <v-col sm="4" cols="12">
        <div class="item">
          <div class="icon">
            <div class="center">
              <icons3d icon="mdi-image-multiple" color="secondary-double" />
            </div>
            <div class="left">
              <icons3d icon="mdi-cog" color="primary" />
            </div>
            <div class="right">
              <icons3d icon="mdi-plus-thick" color="accent" />
            </div>
          </div>
          <div class="glow primary">
            <h6 class="use-text-subtitle2">
              {{ $t('nft.step_title1') }}
            </h6>
            <p class="use-text-paragraph">
              {{ $t('nft.step_desc1') }}
            </p>
          </div>
          <hr class="divider primary" />
        </div>
      </v-col>
      <v-col sm="4" cols="12">
        <div class="item">
          <div class="icon">
            <div class="center">
              <icons3d icon="mdi-arrow-up-circle" color="primary-double" />
            </div>
            <div class="left">
              <icons3d icon="mdi-hexagon" color="accent" />
            </div>
            <div class="right">
              <icons3d icon="mdi-source-branch" color="secondary" />
            </div>
          </div>
          <div class="glow primary">
            <h6 class="use-text-subtitle2">
              {{ $t('nft.step_title2') }}
            </h6>
            <p class="use-text-paragraph">
              {{ $t('nft.step_desc2') }}
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
              <icons3d icon="mdi-chart-timeline-variant" color="primary" />
            </div>
            <div class="right">
              <icons3d icon="mdi-tag" color="secondary" />
            </div>
          </div>
          <div class="glow primary">
            <h6 class="use-text-subtitle2">
              {{ $t('nft.step_title3') }}
            </h6>
            <p class="use-text-paragraph">
              {{ $t('nft.step_desc3') }}
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
