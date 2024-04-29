<template>
  <div class="main-wrap">
    <main-header :menu="singleMenu.inner" />
    <main class="container-front container-wrap">
      <div class="inner-page">
        <section id="feature">
          <feature />
        </section>
      </div>
    </main>
    <div class="space-top-short">
      <footer-deco>
        <main-footer />
      </footer-deco>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/scss/pages';
</style>

<script setup>
import { useDisplay } from 'vuetify';
import MainHeader from '@/components/Header';
import singleMenu from '@/components/Header/data/single';
import IconBanner from '@/components/HeroBanner/IconBanner';
import LogoGroup from '@/components/Branding/LogoGroup';
import Feature from '@/components/Campaign/Twitter/Feature';
import Infographic from '@/components/Collection/Services/Infographic';
import Related from '@/components/Collection/Services/Related';
import Categories from '@/components/Collection/Services/Categories';
import MainFooter from '@/components/Footer';
import FooterDeco from '@/components/Footer/Decoration/General';
import brand from '@/assets/text/brand';
import link from '@/assets/text/link';
import imgAPI from '@/assets/images/imgAPI';
import { useHead } from '#app';

useHead({
  title: brand.name + ' - Service Detail',
});

const { smAndUp: isTablet } = useDisplay();
</script>
