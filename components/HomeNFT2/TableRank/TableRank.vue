<template>
  <div class="root">
    <parallax-left />
    <v-container>
      <title-main dark align="center" :text="$t('nft2.creators_title')" />
      <v-row :class="isDesktop ? 'spacing4' : 'spacing2'">
        <v-col sm="6" cols="12">
          <v-table class="table">
            <thead>
              <tr>
                <th colSpan="2">Creator</th>
                <th>Sales</th>
                <th>Item</th>
                <th>Volume</th>
                <th>Change</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in rankData.slice(0, isMobile ? 10 : 5)" :key="index">
                <td align="right">
                  <span :class="{ one: index <= 0 }">
                    #{{ index + 1 }}
                  </span>
                </td>
                <td class="pe-0">
                  <div class="d-flex align-center">
                    <v-avatar class="avatar" :image="item.avatar" alt="avatar" />
                    <strong>{{ item.name }}</strong>
                    <v-icon v-if="item.verified" class="verified">mdi-check-decagram</v-icon>
                  </div>
                </td>
                <td align="right">{{ item.sales }}</td>
                <td align="right">{{ item.items }}</td>
                <td align="right">{{ item.volume }}</td>
                <td align="right">
                  <strong class="text-light-green">
                    +
                    {{ item.change }}
                    %
                  </strong>
                </td>
              </tr>
            </tbody>
          </v-table>
        </v-col>
        <v-divider v-if="isTablet" class="divider" vertical />
        <v-col v-if="isTablet" sm="6" cols="12">
          <v-table class="table">
            <thead>
              <tr>
                <th colSpan="2">Creator</th>
                <th>Sales</th>
                <th>Item</th>
                <th>Volume</th>
                <th>Change</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in rankData.slice(5, 10)" :key="index">
                <td align="right">
                    #{{ index + 6 }}
                </td>
                <td class="pe-0">
                  <div class="d-flex align-center">
                    <v-avatar class="avatar" :image="item.avatar" alt="avatar" />
                    <strong>{{ item.name }}</strong>
                    <v-icon v-if="item.verified" class="verified">mdi-check-decagram</v-icon>
                  </div>
                </td>
                <td align="right">{{ item.sales }}</td>
                <td align="right">{{ item.items }}</td>
                <td align="right">{{ item.volume }}</td>
                <td align="right">
                  <strong class="text-light-green">
                    +
                    {{ item.change }}
                    %
                  </strong>
                </td>
              </tr>
            </tbody>
          </v-table>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import './table-rank-style.scss';
</style>

<script setup>
import { useDisplay } from 'vuetify';
import imgAPI from '@/assets/images/imgAPI';
import ParallaxLeft from '../Parallax/ParallaxLeft';
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
const { smAndUp: isTablet } = useDisplay();
const { xs: isMobile } = useDisplay();

</script>