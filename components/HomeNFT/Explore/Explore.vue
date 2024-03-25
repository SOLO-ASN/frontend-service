<template>
  <div class="root">
    <v-container>
      <title-main align="center" :text="$t('nft.category_title')" />
      <v-row class="categories" :class="isDesktop ? spacing6 : spacing2">
        <v-col
          v-for="(item, index) in categories"
          :key="index"
          sm="3"
          cols="6"
          class="px-4"
        >
          <category-icon-card
            :color="item.color"
            :href="item.href"
            :title="item.title"
            :icon="item.icon"
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import './explore-style.scss';
</style>

<script setup>
import { useDisplay } from 'vuetify';
import link from '@/assets/text/link';
import CategoryIconCard from '../../Cards/Category/Icon3dCard';
import TitleMain from '../../Title';

const categories = [
  {
    color: 'pink',
    href: link.product,
    title: 'Animation',
    icon: 'mdi-animation-play'
  },
  {
    color: 'purple',
    href: link.product,
    title: 'Collectibles',
    icon: 'mdi-collage'
  },
  {
    color: 'deep-purple',
    href: link.product,
    title: 'Art',
    icon: 'mdi-palette'
  },
  {
    color: 'cyan',
    href: link.product,
    title: 'Music',
    icon: 'mdi-music-note-eighth'
  },
  {
    color: 'deep-orange',
    href: link.product,
    title: 'Sports',
    icon: 'mdi-basketball'
  },
  {
    color: 'blue',
    href: link.product,
    title: 'Virtual Worlds',
    icon: 'mdi-earth'
  },
  {
    color: 'grey',
    href: link.product,
    title: 'Photography',
    icon: 'mdi-camera-image'
  },
  {
    color: 'light-green',
    href: link.product,
    title: '3D',
    icon: 'mdi-cube-outline'
  },
];

const { lgAndUp: isDesktop } = useDisplay();

</script>