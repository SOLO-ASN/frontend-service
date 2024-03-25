<template>
  <div class="main-wrap">
    <blur-gradient />
    <main-header :menu="singleMenu.inner" />
    <div class="container-general container-front">
      <pricing-group-card />
      <div class="space-top">
        <faq />
      </div>
    </div>
    <footer-deco>
      <main-footer />
    </footer-deco>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/scss/pages';
</style>

<script setup>
import MainHeader from '@/components/Header';
import singleMenu from '@/components/Header/data/single';
import Footer from '@/components/Footer';
import BlurGradient from '@/components/Artworks/BlurGradient';
import PricingGroupCard from '@/components/Cards/Pricing/PricingGroupCard';
import Faq from '@/components/Utils/Faq';
import MainFooter from '@/components/Footer';
import FooterDeco from '@/components/Footer/Decoration/General';
import brand from '@/assets/text/brand';
import { useHead } from '#app';

useHead({
  title: brand.name + ' - Pricing',
});
</script>
