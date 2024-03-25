<template>
  <div class="main-wrap">
    <main-header :menu="singleMenu.inner" />
    <blur-gradient />
    <div class="container-front container-wrap">
      <div class="inner-page">
        <v-container>
          <detail />
          <div class="space-top-short">
            <description />
          </div>
        </v-container>
      </div>
      <div class="space-top-short">
        <related-items />
      </div>
    </div>
    <div id="footer" class="space-top-short">
      <main-footer />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/pages';
</style>

<script setup>
import MainHeader from '@/components/Header';
import singleMenu from '@/components/Header/data/single';
import MainFooter from '@/components/Footer';
import BlurGradient from '@/components/Artworks/BlurGradient';
import Detail from '@/components/Collection/Product/Detail';
import Description from '@/components/Collection/Product/Description';
import RelatedItems from '@/components/Collection/Product/RelatedItems';
import Group from '@/components/Comment/Group';
import brand from '@/assets/text/brand';
import { useHead } from '#app';

useHead({
  title: brand.name + ' - Products Detail',
});
</script>
