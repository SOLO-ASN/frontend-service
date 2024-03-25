<template>
  <div class="root">
    <v-container :class="{ 'fixed-width': isDesktop }">
      <title-main :text="$t('service_bundle_title')" align="center" />
      <p class="text-center use-text-subtitle2">
        {{ $t('service_banner_title') }}
      </p>
      <v-row class="spacing2 mt-5">
        <v-col v-for="(item, index) in items" :key="index" md="2" sm="4" cols="6">
          <icon-card href="#" :icon="item.icon" :text="item.text" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import './services-style.scss';
</style>

<script setup>
import { useDisplay } from 'vuetify';
import TitleMain from '../../Title';
import IconCard from '../../Cards/Info/IconCard';

const items = [
  {
    icon: 'mdi-monitor-shimmer',
    text: 'Website Design',
  },
  {
    icon: 'mdi-cloud-outline',
    text: 'Hosting',
  },
  {
    icon: 'mdi-chart-bar',
    text: 'Big Data Analysis',
  },
  {
    icon: 'mdi-file-document-outline',
    text: 'Reporting',
  },
  {
    icon: 'mdi-bullseye-arrow',
    text: 'Digital Strategy',
  },
  {
    icon: 'mdi-briefcase-outline',
    text: 'Business Consulting',
  },
];

const { lgAndUp: isDesktop } = useDisplay();
</script>