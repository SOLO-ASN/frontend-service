<template>
  <div class="main-wrap">
    <main-header :menu="singleMenu.inner" />
    <main class="container-front container-wrap">
      <div class="inner-page">
        <section id="banner">
          <media-banner
            :title="$t('portfolio_title')"
            :cover="imgAPI.inner[19]"
            :featured="[imgAPI.photosP[27], imgAPI.photosS[12], imgAPI.photosL[54]]"
          >
            <template v-slot:decoration>
              <parallax-deco type="scroll" />
            </template>
          </media-banner>
        </section>
        <div id="gallery" :class="{ 'space-top-short': isDesktop }">
          <gallery />
        </div>
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
import { useDisplay } from 'vuetify';
import MainHeader from '@/components/Header';
import singleMenu from '@/components/Header/data/single';
import MediaBanner from '@/components/HeroBanner/MediaBanner';
import ParallaxDeco from '@/components/Parallax3d/Ufo';
import Gallery from '@/components/Collection/Portfolio/Gallery';
import MainFooter from '@/components/Footer';
import FooterDeco from '@/components/Footer/Decoration/General';
import brand from '@/assets/text/brand';
import imgAPI from '@/assets/images/imgAPI';
import { useHead } from '#app';

useHead({
  title: brand.name + ' - Portfolio',
});

const { smAndUp: isDesktop } = useDisplay();
</script>