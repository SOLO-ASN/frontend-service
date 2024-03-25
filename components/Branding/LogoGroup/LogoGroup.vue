<template>
  <v-container class="root" :class="{ 'fixed-width': isDesktop }">
    <figure v-for="(logo, index) in logos" :key="index">
      <img
        :src="logo"
        :alt="'logo' + index"
      >
    </figure>
  </v-container>
</template>

<style lang="scss" scoped>
@import './logo-group-style.scss';
</style>

<script setup>
import { useDisplay } from 'vuetify';
import imgAPI from '@/assets/images/imgAPI';

const logos = [
  imgAPI.logos[20],
  imgAPI.logos[62],
  imgAPI.logos[26],
  imgAPI.logos[35],
  imgAPI.logos[40],
  imgAPI.logos[30],
  imgAPI.logos[52],
];

const { mdAndUp: isDesktop } = useDisplay();
</script>
