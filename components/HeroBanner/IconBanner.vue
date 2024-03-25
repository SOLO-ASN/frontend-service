<template>
  <div v-if="isDesktop" class="deco-line">
    <svg class="line-primary">
      <use xlink:href="/images/decoration/banner-deco.svg#main" />
    </svg>
    <svg class="line-secondary">
      <use xlink:href="/images/decoration/banner-deco.svg#main" />
    </svg>
  </div>
  <v-container class="icon-banner">
    <v-row>
      <v-col lg="11" md="12" cols="12" class="content-banner">
        <figure>
          <img :src="cover" alt="cover" />
        </figure>
        <v-row :class="{ spacing4: isDesktop }">
          <v-col v-if="isDesktop" md="4" cols="12">
            <div class="icon">
              <div class="center">
                <icons3d :icon="icon[0]" color="secondary-double" />
              </div>
              <div class="left">
                <icons3d :icon="icon[1]" color="primary" />
              </div>
              <div class="right">
                <icons3d :icon="icon[2]" color="accent" />
              </div>
            </div>
          </v-col>
          <v-col md="8" cols="12">
            <div class="banner-content">
              <h3>{{ title }}</h3>
              <div class="properties">
                <div class="desc">
                  <p>{{ desc }}</p>
                  <ul>
                    <li v-for="(item, index) in features" :key="index">
                      {{ item }}
                    </li>
                  </ul>
                  <div class="btn-area">
                    <v-btn
                      v-if="btnPrimary"
                      size="large"
                      :href="btnPrimary.href"
                      color="primary"
                      :variant="currentTheme === 'dark' ? 'tonal' : 'flat'"
                    >
                      {{ btnPrimary.text }}
                    </v-btn>
                    <v-btn
                      v-if="btnSecondary"
                      size="large"
                      variant="outlined"
                      :href="btnSecondary.href"
                      :color="currentTheme === 'dark' ? 'white' : 'black'"
                    >
                      {{ btnSecondary.text }}
                    </v-btn>
                  </div>
                </div>
                <div class="counter">
                  <v-card v-if="counterPrimary" class="paper bg-primary">
                    <h2>{{ counterPrimary.count }}</h2>
                    {{ counterPrimary.title }}
                  </v-card>
                  <v-card v-if="counterSecondary" class="paper bg-secondary">
                    <h2>{{ counterSecondary.count }}</h2>
                    {{ counterSecondary.title }}
                  </v-card>
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss" scoped>
@import "./hero-style.scss";
</style>

<script setup>
import { useTheme, useDisplay } from 'vuetify';
import Icons3d from '../Icons3d';

const {
  cover, title, desc,
  features, icon,
  btnPrimary, btnSecondary,
  counterPrimary, counterSecondary,
} = defineProps({
  cover: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  features: {
    type: Array,
    required: true,
  },
  icon: {
    type: Array,
    required: true,
  },
  btnPrimary: {
    type: Object,
    default: null
  },
  btnSecondary: {
    type: Object,
    default: null
  },
  counterPrimary: {
    type: Object,
    default: null
  },
  counterSecondary: {
    type: Object,
    default: null
  },
});

const { name: currentTheme } = useTheme();
const { mdAndUp: isDesktop } = useDisplay();
</script>
