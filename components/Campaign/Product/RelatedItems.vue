<template>
  <v-row justify="center">
    <v-col lg="11" md="12" cols="12">
      <v-container class="pt-5 carousel-header">
        <title-main
          strict-align
          :text="$t('explore more')"
          :align="isMobile ? 'center' : 'left'"
        />
        <v-btn
          href="#"
          variant="text"
          size="large"
          class="view-all"
        >
          see more
          <v-icon class="icon ms-1">mdi-arrow-right</v-icon>
        </v-btn>
      </v-container>
      <v-container>
        <v-row class="spacing2 scroll-tablet">
          <v-col v-for="(item, index) in nftList" :key="index" md="3" sm="4" cols="10">
            <div class="card-related">
              <product-nft-card
                :img="item.img"
                :avatar="item.avatar"
                :name="item.name"
                :title="item.title"
                :href="item.href"
                :verified="item.verified"
              />
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-col>
  </v-row>
</template>

<style lang="scss" scoped>
@import './product-style.scss';
</style>

<script setup>
import { useDisplay } from 'vuetify';
import imgAPI from '@/assets/images/imgAPI';
import TitleMain from '../../Title';
import ProductNftCard from '../Card/NftCard';

const nftList = [
  {
    img: imgAPI.photosL[41],
    avatar: imgAPI.logos[13],
    name: 'John Doe',
    title: 'Lorem Ipsum Dolor',
    href: '#',
    verified: true,
  },
  {
    img: imgAPI.photosP[23],
    avatar: imgAPI.logos[1],
    name: 'John Doe',
    title: 'Lorem Ipsum Dolor',
    href: '#',
    verified: true,
  },
  {
    img: imgAPI.photosS[7],
    avatar: imgAPI.logos[2],
    name: 'John Doe',
    title: 'Lorem Ipsum Dolor',
    href: '#',
    verified: true,
  },
  {
    img: imgAPI.photosL[42],
    avatar: imgAPI.avatar[13],
    name: 'John Doe',
    title: 'Lorem Ipsum Dolor',
    href: '#',
    verified: true,
  },
  {
    img: imgAPI.photosL[9],
    avatar: imgAPI.avatar[1],
    name: 'John Doe',
    title: 'Lorem Ipsum Dolor',
    href: '#',
    verified: true,
  },
  {
    img: imgAPI.photosS[3],
    avatar: imgAPI.avatar[8],
    name: 'John Doe',
    title: 'Lorem Ipsum Dolor',
    href: '#',
    verified: true,
  },
  {
    img: imgAPI.photosP[12],
    avatar: imgAPI.avatar[8],
    name: 'John Doe',
    title: 'Lorem Ipsum Dolor',
    href: '#',
    verified: true,
  }
];

const { xs: isMobile } = useDisplay();
</script>
