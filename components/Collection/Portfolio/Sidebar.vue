<template>
  <aside class="sidebar">
    <v-btn
      v-if="isTablet"
      size="large"
      block
      color="primary"
      variant="tonal"
      class="action-btn"
    >
      {{ $t('footer_quick_links') }}
    </v-btn>
    <ul class="property">
      <li>
        <i class="ion-md-calendar" />
        Published on June 12, 2023
      </li>
      <li>
        <i class="ion-md-eye" />
        204 Views
      </li>
      <li>
        <i class="ion-md-text" />
        10 Comments
      </li>
      <li>
        <i class="ion-md-contacts" />
        8 Engineers
      </li>
    </ul>
    <h4 class="mb-4 use-text-subtitle2 font-weight-medium text-uppercase">{{ $t('portfolio_tools') }}</h4>
    <div class="apps">
      <figure v-for="(item, index) in apps" :key="index">
        <img :src="item" alt="apps" />
      </figure>
    </div>
    <h4 class="mb-3 use-text-subtitle2 font-weight-medium text-uppercase">Tags</h4>
    <div class="tags">
      <v-chip class="use-bg-primary-light me-1 use-text-medium">Designs</v-chip>
      <v-chip class="use-bg-secondary-light me-1 use-text-medium">Architect</v-chip>
      <v-chip class="use-bg-accent2-light me-1 use-text-medium">Photography</v-chip>
      <v-chip class="use-bg-accent-light use-text-medium">Programming</v-chip>
    </div>
    <arrow-button :href="link.contact" :text="$t('register_subtitle')" />
  </aside>
</template>

<style lang="scss" scoped>
@import './sidebar-style.scss';
</style>

<script setup>
import { useDisplay } from 'vuetify';
import imgAPI from '@/assets/images/imgAPI';
import link from '@/assets/text/link';
import ArrowButton from '../../Forms/ArrowButton/Large';

const apps = [
  imgAPI.logos[31],
  imgAPI.logos[37],
  imgAPI.logos[34],
  imgAPI.logos[36],
  imgAPI.logos[35],
];

const { mdAndDown: isTablet } = useDisplay();
</script>