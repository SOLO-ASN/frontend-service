<template>
  <div class="main-feature">
    <v-container :class="{ 'fixed-width': !isTablet }">
      <v-row :class="isMobile ? 'spacing2' : 'spacing4'" class="d-flex justify-center">
        <v-col lg="3" md="4" cols="12">
          <div class="pt-lg-3">
            <title-main :text="$t('nft.new_release_title')" :strict-align="!isMobile" />
            <p class="mb-5 use-text-subtitle2" :class="isMobile ? 'text-center' : 'text-start'">
              {{ $t('nft.new_release_desc') }}
            </p>
          </div>
        </v-col>
        <v-col v-for="(item, index) in nftList" :key="index" lg="3" md="4" cols="6">
          <div class="card">
            <product-nft-card
              :img="item.img"
              :avatar="item.avatar"
              :name="item.name"
              :title="item.title"
              :price="item.price"
              :href="item.href"
              :verified="item.verified"
            />
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import './new-release-style.scss';
</style>

<script setup>
import { useDisplay } from 'vuetify';
import imgAPI from '@/assets/images/imgAPI';
import link from '@/assets/text/link';
import ProductNftCard from '../../Cards/Product/NftCard';
import TitleMain from '../../Title';

const nftList = [
  {
    img: imgAPI.photosL[41],
    avatar: imgAPI.logos[13],
    name: 'John Doe',
    title: 'Lorem Ipsum Dolor',
    price: '0.5',
    href: link.productDetail,
    verified: true,
  },
  {
    img: imgAPI.photosP[23],
    avatar: imgAPI.logos[1],
    name: 'John Doe',
    title: 'Lorem Ipsum Dolor',
    price: '0.5',
    href: link.productDetail,
    verified: true,
  },
  {
    img: imgAPI.photosS[7],
    avatar: imgAPI.logos[2],
    name: 'John Doe',
    title: 'Lorem Ipsum Dolor',
    price: '0.5',
    href: link.productDetail,
    verified: true,
  },
  {
    img: imgAPI.photosL[42],
    avatar: imgAPI.avatar[13],
    name: 'John Doe',
    title: 'Lorem Ipsum Dolor',
    price: '0.5',
    href: link.productDetail,
    verified: true,
  },
  {
    img: imgAPI.photosL[9],
    avatar: imgAPI.avatar[1],
    name: 'John Doe',
    title: 'Lorem Ipsum Dolor',
    price: '0.5',
    href: link.productDetail,
    verified: true,
  },
  {
    img: imgAPI.photosS[3],
    avatar: imgAPI.avatar[8],
    name: 'John Doe',
    title: 'Lorem Ipsum Dolor',
    price: '0.5',
    href: link.productDetail,
    verified: true,
  },
  {
    img: imgAPI.photosP[12],
    avatar: imgAPI.avatar[8],
    name: 'John Doe',
    title: 'Lorem Ipsum Dolor',
    price: '0.5',
    href: link.productDetail,
    verified: true,
  }
];

const { smAndDown: isMobile } = useDisplay();
const { mdAndDown: isTablet } = useDisplay();
</script>