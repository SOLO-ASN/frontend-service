<template>
  <div class="root">
    <div class="background">
      <div class="bg-gradient">
        <span class="oval-right" />
        <span class="oval-top" />
        <span class="oval-bottom" />
      </div>
      <div :class="{ 'px-3': isTablet }">
        <title-main :text="$t('profile.stats_title')" align="center" />
      </div>
      <expertise />
      <v-row class="wrapper" justify="center">
        <v-col v-if="!isTablet" lg="4" md="4" cols="12">
          <div class="avatar">
            <img :src="imgAPI.profile[4]" alt="avatar full" />
          </div>
        </v-col>
        <v-col lg="7" md="8" sm="10" cols="12">
          <div class="section">
            <progress-main />
          </div>
          <div class="section floating">
            <categories />
          </div>
          <div class="section">
            <history />
          </div>
          <div class="section floating">
            <div class="float-right mt-5 mt-md-0">
              <counter />
            </div>
          </div>
        </v-col>
      </v-row>
      <span class="rounded-bottom" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './styles/statistics-style.scss';
</style>

<script setup>
import { useDisplay } from 'vuetify';
import imgAPI from '@/assets/images/imgAPI';
import TitleMain from '../../Title';
import Expertise from './Expertise';
import ProgressMain from './Progress';
import Categories from './Categories';
import History from './History';
import Counter from './Counter';

const { smAndDown: isTablet } = useDisplay();
</script>
