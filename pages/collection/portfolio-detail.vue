<template>
  <div class="main-wrap">
    <main-header :menu="singleMenu.inner" />
    <main class="container-front container-wrap">
      <div class="inner-page">
        <section id="banner">
          <media-banner
            title="Interdum et Malesuada Fames"
            :cover="imgAPI.photosL[43]"
            :thumb="imgAPI.photosP[5]"
            :tags="['branding', 'creative']"
          >
            <template v-slot:decoration>
              <parallax-deco type="scroll" />
            </template>
          </media-banner>
        </section>
        <section id="content">
          <v-container class="px-0">
            <v-row justify="center">
              <v-col lg="7" md="8" cols="12">
                <detail />
              </v-col>
              <v-col lg="5" md="4" sm="8" cols="12">
                <sidebar />
              </v-col>
            </v-row>
          </v-container>
        </section>
      </div>
    </main>
    <footer-deco>
      <main-footer />
    </footer-deco>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/pages';
</style>

<script setup>
import MainHeader from '@/components/Header';
import singleMenu from '@/components/Header/data/single';
import MediaBanner from '@/components/HeroBanner/MediaBanner';
import ParallaxDeco from '@/components/Parallax3d/Basket';
import Sidebar from '@/components/Collection/Portfolio/Sidebar';
import Detail from '@/components/Collection/Portfolio/Detail';
import MainFooter from '@/components/Footer';
import FooterDeco from '@/components/Footer/Decoration/General';
import brand from '@/assets/text/brand';
import imgAPI from '@/assets/images/imgAPI';
import { useHead } from '#app';

useHead({
  title: brand.name + ' - Portfolio Detail',
});
</script>