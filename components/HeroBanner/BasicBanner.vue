<template>
  <slot name="decoration" />
  <v-container>
    <div class="basic-hero">
      <bg-title
        :bg-title="bgTitle"
        :main-title="title"
        :color="currentTheme === 'dark' ? 'triple-dark' : 'triple-light'"
      />
      <p class="px-md-10">{{ desc }}</p>
      <div class="btn-area-simple" v-if="btnPrimary || btnSecondary">
        <v-btn
          v-if="btnPrimary"
          :href="link1"
          color="primary"
          size="large"
        >
          {{ btnPrimary }}
        </v-btn>
        <v-btn
          v-if="btnSecondary"
          :href="link2"
          variant="outlined"
          :color="currentTheme === 'dark' ? 'white' : 'black'"
          size="large"
        >
          {{ btnSecondary }}
        </v-btn>
      </div>
    </div>
  </v-container>
</template>

<style lang="scss" scoped>
@import "./hero-style.scss";
</style>

<script setup>
import { useTheme } from 'vuetify';
import BgTitle from '../Title/BgTitle';

const {
  title, bgTitle, desc,
  btnPrimary, btnSecondary,
  link1, link2,
} = defineProps({
  title: {
    type: String,
    required: true,
  },
  bgTitle: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  btnPrimary: {
    type: String,
    default: null,
  },
  btnSecondary: {
    type: String,
    default: null,
  },
  link1: {
    type: String,
    default: '#',
  },
  link2: {
    type: String,
    default: '#',
  },
});

const { name: currentTheme } = useTheme();
</script>
