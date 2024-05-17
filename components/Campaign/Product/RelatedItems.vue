<template>
  <v-row justify="center">
    <v-col lg="11" md="12" cols="12">
      <v-container class="pt-5 carousel-header">
        <title-main
          strict-align
          :text="$t('explore more')"
          :align="isMobile ? 'center' : 'left'"
        />
        <v-btn variant="text" 
               size="large" 
               class="view-all" 
               @click="navigateToExplore">
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
import { useRouter } from 'vue-router';

const router = useRouter();

const navigateToExplore = () => {
  console.log('Button clicked');
  // jump to the right page based on the type of credential
  let route = { path: '../menus/explore'};
  router.push(route);
};

const nftList = [
  {
    img: 'https://cdn.galxe.com/galaxy/nftfeed/12e81e1a-88ad-41df-8e3d-32a715abb536.png',
    avatar: imgAPI.photosP[23],
    name: 'NFTFeed',
    title: 'Hunting Airdrop on Blast',
    href: '#',
    verified: true,
  },
  {
    img: 'https://cdn.galxe.com/galaxy/skate/196d6c5a-6948-4448-b7e0-e3c7c34ab0c0.png',
    avatar: imgAPI.logos[1],
    name: 'Skate',
    title: 'Welcome to the SkatePark',
    href: '#',
    verified: true,
  },
  {
    img: 'https://cdn.galxe.com/galaxy/dexodus/29874df6-ca95-467b-be18-37507aa850fe.png',
    avatar: imgAPI.logos[2],
    name: 'Dexodus',
    title: 'Dexodian Odyssey',
    href: '#',
    verified: false,
  },
  {
    img: 'https://cdn.galxe.com/galaxy/artela/9cdbd2c3-f10c-4e56-b7e9-57f1770bf5d8.png',
    avatar: imgAPI.avatar[13],
    name: 'Artela',
    title: 'Artela DeFi Voyage',
    href: '#',
    verified: true,
  },
  {
    img: 'https://cdn.galxe.com/galaxy/magpiexyz/4084a28e-7287-4931-bff6-c5884dfe66c5.jpeg',
    avatar: imgAPI.avatar[1],
    name: 'Magpie XYZ',
    title: 'Magpie School of MGP',
    href: '#',
    verified: true,
  },
  {
    img: 'https://cdn.galxe.com/galaxy/subspacenetwork/f148f49a-6418-45dd-b7b9-ba7e7046d7ae.png',
    avatar: imgAPI.avatar[8],
    name: 'Subspace Network',
    title: 'Subspace Network Quiz Campaign',
    href: '#',
    verified: true,
  },
  {
    img: 'https://cdn.galxe.com/galaxy/mememaker/0f1ee12a-3e06-45ef-b97b-ce03f3b1834e.png',
    avatar: imgAPI.avatar[8],
    name: 'MemeMaker',
    title: 'MemeMaker MEGA AirDrop',
    href: '#',
    verified: false,
  }
];

const { xs: isMobile } = useDisplay();
</script>
