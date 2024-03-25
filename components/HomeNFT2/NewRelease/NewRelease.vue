<template>
  <div class="main-feature">
    <v-container :class="{ 'fixed-width': isDesktop }">
      <v-row :class="isMobile ? 'spacing2' : 'spacing6'">
        <v-col md="6" cols="12">
          <div class="pt-3">
            <title-main :text="$t('nft2.new_release_title')" :strict-align="!isMobile" />
            <p
              class="mb-10 use-text-subtitle2"
              :class="isMobile ? 'text-center': 'text-start'"
            >
              {{ $t('nft2.new_release_desc') }}
            </p>
          </div>
          <div class="group">
            <playlist-card
              :img="imgAPI.photosL[8]"
              :avatar="imgAPI.avatar[7]"
              :logo="imgAPI.logos[12]"
              :items="[imgAPI.photosP[7], imgAPI.photosL[49], imgAPI.photosL[2], imgAPI.photosL[8]]"
              :href="link.productDetail"
              title="Lorem ipsum"
              name="John Doe"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed urna in justo euismod condimentum. "
              count="20"
              verified-user
              verified-item
              with-deco
            />
          </div>
        </v-col>
        <v-col md="6" cols="12" class="feature-wrap px-0">
          <div class="cards">
            <div class="lower">
              <div class="card">
                <product-nft-card
                  :img="imgAPI.photosL[42]"
                  :avatar="imgAPI.avatar[4]"
                  name="John Doe"
                  title="Lorem Ipsum dolor"
                  price="0.5"
                  :href="link.productDetail"
                  verified
                />
              </div>
              <div class="card">
                <product-nft-card
                  :img="imgAPI.photosS[3]"
                  :avatar="imgAPI.avatar[10]"
                  name="John Doe"
                  title="Lorem Ipsum dolor"
                  price="0.5"
                  :href="link.productDetail"
                  verified
                />
              </div>
            </div>
            <div class="higher">
              <div class="card">
                <product-nft-card
                  :img="imgAPI.photosP[12]"
                  :avatar="imgAPI.logos[20]"
                  name="John Doe"
                  title="Lorem Ipsum dolor"
                  price="0.5"
                  :href="link.productDetail"
                  verified
                />
              </div>
              <div class="card">
                <product-nft-card
                  :img="imgAPI.photosP[7]"
                  :avatar="imgAPI.avatar[10]"
                  name="John Doe"
                  title="Lorem Ipsum dolor"
                  price="0.5"
                  :href="link.productDetail"
                  verified
                />
              </div>
            </div>
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
import PlaylistCard from '../../Cards/Media/PlaylistCard';
import ProductNftCard from '../../Cards/Product/NftCard';
import TitleMain from '../../Title';

const { smAndDown: isMobile } = useDisplay();
const { lgAndUp: isDesktop } = useDisplay();
</script>