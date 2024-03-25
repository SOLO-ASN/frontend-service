<template>
  <div class="root">
    <v-container>
      <parallax-title
        :bg-title="$t('nft2.header_explore')"
        :main-title="$t('nft2.category_title')"
        color="double-main"
      />
      <v-row
        class="categories"
        :class="isDesktop ? 'spacing6' : 'spacing2'"
        :justify="isTablet ? 'center' : 'start'"
      >
        <parallax-right />
        <v-col
          v-for="(item, index) in categories"
          :key="index"
          sm="6"
          md="4"
          cols="12"
          class="px-4"
        >
          <category-img-card
            :color="item.color"
            :href="item.href"
            :title="item.title"
            :images="item.images"
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
import imgAPI from '@/assets/images/imgAPI';
import CategoryImgCard from '../../Cards/Category/ImgCard';
import ParallaxRight from '../Parallax/ParallaxRight';
import ParallaxTitle from '../../Title/ParallaxTitle';

const categories = [
  {
    color: 'red',
    href: link.product,
    title: 'Animation',
    images: [imgAPI.photosP[25], imgAPI.photosP[13], imgAPI.photosL[4]],
  },
  {
    color: 'purple',
    href: link.product,
    title: 'Collectibles',
    images: [imgAPI.photosL[5], imgAPI.photosP[8], imgAPI.photosS[3]],
  },
  {
    color: 'indigo',
    href: link.product,
    title: 'Art',
    images: [imgAPI.photosP[29], imgAPI.photosS[7], imgAPI.photosS[8]],
  },
  {
    color: 'blue',
    href: link.product,
    title: 'Domain Name',
    images: [imgAPI.photosP[4], imgAPI.photosP[3], imgAPI.photosP[6]],
  },
  {
    color: 'green',
    href: link.product,
    title: 'Trading Cards',
    images: [imgAPI.photosP[26], imgAPI.photosP[27], imgAPI.photosP[23]],
  },
  {
    color: 'yellow',
    href: link.product,
    title: 'Abstract',
    images: [imgAPI.photosL[35], imgAPI.photosL[36], imgAPI.photosL[40]],
  },
  {
    color: 'deep-orange',
    href: link.product,
    title: 'Sports',
    images: [imgAPI.photosS[4], imgAPI.photosL[33], imgAPI.photosL[32]],
  },
  {
    color: 'cyan',
    href: link.product,
    title: 'Virtual Worlds',
    images: [imgAPI.photosP[16], imgAPI.photosS[5], imgAPI.photosS[6]],
  },
  {
    color: 'grey',
    href: link.product,
    title: 'Photography',
    images: [imgAPI.photosL[52], imgAPI.photosP[30], imgAPI.photosL[51]],
  },
];

const { lgAndUp: isDesktop } = useDisplay();
const { mdAndDown: isTablet } = useDisplay();

</script>