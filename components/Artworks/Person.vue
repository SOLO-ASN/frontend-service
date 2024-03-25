<template>
  <div class="person">
    <div class="background">
      <div class="secondary">
        <svg class="filled">
          <use xlink:href="/images/decoration/deco-liquid-fill.svg#main" />
        </svg>
        <svg class="outlined">
          <use xlink:href="/images/decoration/deco-liquid-fill.svg#main" />
        </svg>
      </div>
      <div class="primary">
        <svg class="filled">
          <use xlink:href="/images/decoration/deco-liquid-fill.svg#main" />
        </svg>
        <svg class="outlined">
          <use xlink:href="/images/decoration/deco-liquid-fill.svg#main" />
        </svg>
      </div>
    </div>
    <div class="photo">
      <img :src="person" alt="person" />
    </div>
    <div class="icons">
      <div class="secondary">
        <icons3d icon="mdi-cloud" color="secondary" />
      </div>
      <div class="accent">
        <icons3d icon="mdi-gamepad-square" color="accent" />
      </div>
    </div>
    <div class="screen">
      <span class="top">
        <img :src="imgAPI.apps[1]" alt="apps" />
      </span>
      <span class="center">
        <img :src="imgAPI.apps[3]" alt="apps" />
      </span>
      <span class="bottom">
        <img :src="imgAPI.apps[2]" alt="apps" />
      </span>
    </div>
    <div class="app-ui">
      <div class="resume">
        <span>Total Assets</span>
        <h3>
          $
          &nbsp;
          <strong>1200.31</strong>
          &nbsp;
          (21%)
          <i class="mdi mdi-arrow-up">&nbsp;</i>
        </h3>
      </div>
      <div class="counter">
        <div class="asset">
          <span>
            <img :src="imgAPI.logos[52]" alt="logo" />
            &nbsp;
            ION
          </span>
          <strong>1120.65</strong>
        </div>
        <v-divider vertical />
        <div class="asset">
          <span>
            <img :src="imgAPI.logos[48]" alt="logo" />
            &nbsp;
            BTC
          </span>
          <strong>0.000123</strong>
        </div>
        <v-divider vertical />
        <div class="asset">
          <span>
            <img :src="imgAPI.logos[53]" alt="logo" />
            &nbsp;
            IOT
          </span>
          <strong>0.000555</strong>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './person-style.scss';
</style>

<script setup>
import imgAPI from '@/assets/images/imgAPI';
import icons3d from '../Icons3d';

const { person } = defineProps({
  person: {
    type: String,
    required: true,
  },
})
</script>
