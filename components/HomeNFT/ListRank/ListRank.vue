<template>
  <div class="root">
    <parallax-left />
    <v-container>
      <v-row :class="isDesktop ? spacing4 : spacing2">
        <v-col md="5" cold="12">
          <title-main dark :text="$t('nft.creators_title')" />
        </v-col>
        <v-col md="7" cols="12">
          <profile-card
            :number="1"
            :name="rankData[0].name"
            :verified="rankData[0].verified"
            :avatar="rankData[0].avatar"
            :items="rankData[0].items"
            :sales="rankData[0].sales"
            :change="rankData[0].change"
            :volume="rankData[0].volume"
            :href="rankData[0].href"
            first
          />
        </v-col>
        <v-col v-for="(item, index) in rankData.slice(1, 10)" :key="index" sm="4" cols="12">
          <profile-card
            :number="index + 2"
            :name="item.name"
            :verified="item.verified"
            :avatar="item.avatar"
            :items="item.items"
            :sales="item.sales"
            :change="item.change"
            :volume="item.volume"
            :href="item.href"
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import './list-rank-style.scss';
</style>

<script setup>
import { useDisplay } from 'vuetify';
import imgAPI from '@/assets/images/imgAPI';
import ParallaxLeft from '../Parallax/ParallaxLeft';
import ProfileCard from '../../Cards/Profile/ProfileCard';
import TitleMain from '../../Title';

const rankData = [
  {
    avatar: imgAPI.avatar[20],
    name: 'John Doe',
    verified: true,
    sales: 100,
    items: 10,
    volume: 1040,
    change: 40
  },
  {
    avatar: imgAPI.avatar[21],
    name: 'John Doe',
    verified: true,
    sales: 100,
    items: 10,
    volume: 1040,
    change: 40
  },
  {
    avatar: imgAPI.avatar[7],
    name: 'John Doe',
    verified: true,
    sales: 100,
    items: 10,
    volume: 1040,
    change: 40
  },
  {
    avatar: imgAPI.photosP[21],
    name: 'John Doe',
    verified: true,
    sales: 100,
    items: 10,
    volume: 1040,
    change: 40
  },
  {
    avatar: imgAPI.photosP[18],
    name: 'John Doe',
    verified: true,
    sales: 100,
    items: 10,
    volume: 1040,
    change: 40
  },
  {
    avatar: imgAPI.photosL[31],
    name: 'John Doe',
    verified: true,
    sales: 100,
    items: 10,
    volume: 1040,
    change: 40
  },
  {
    avatar: imgAPI.photosL[42],
    name: 'John Doe',
    verified: true,
    sales: 100,
    items: 10,
    volume: 1040,
    change: 40
  },
  {
    avatar: imgAPI.avatar[6],
    name: 'John Doe',
    verified: true,
    sales: 100,
    items: 10,
    volume: 1040,
    change: 40
  },
  {
    avatar: imgAPI.avatar[11],
    name: 'John Doe',
    verified: true,
    sales: 100,
    items: 10,
    volume: 1040,
    change: 40
  },
  {
    avatar: imgAPI.avatar[29],
    name: 'John Doe',
    verified: true,
    sales: 100,
    items: 10,
    volume: 1040,
    change: 40
  },
];

const { mdAndUp: isDesktop } = useDisplay();
</script>