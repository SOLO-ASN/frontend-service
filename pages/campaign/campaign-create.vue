<template>
  <div class="main-wrap">
    <blur-gradient />
    <main-header home :menu="singleMenu.inner" />
    <contact />
    <footer-deco>
      <main-footer />
    </footer-deco>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/scss/pages';
</style>

<script setup>
import brand from '@/assets/text/brand';
import BlurGradient from '@/components/Artworks/BlurGradient';
import MainHeader from '@/components/Header';
import FooterDeco from '@/components/Footer/Decoration/General';
import MainFooter from '@/components/Footer';
import Contact from '@/components/Campaign/Contact/contact';
import singleMenu from '@/components/Header/data/single';
import { useHead } from '#app';

useHead({
  title: brand.name + ' - Contact',
});
</script>
