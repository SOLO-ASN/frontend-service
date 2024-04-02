<template>
    <div class="main-wrap">
      <main-header :menu="singleMenu.inner" />
      <blur-gradient />
  
      <div class="container-front container-wrap">
        <div class="inner-page">
          <v-container>
            <detail />
            <div class="space-top-short">
              <faq-list />
            </div>
          </v-container>
        </div>
        
        <div>
            <main class="container-front container-wrap">
                <div class="inner-page">
                    <media-banner
                        :tags="['NFT', 'points']"
                    >
                    </media-banner>
                    <div>
                        <section id="single" class="space-button">
                            <single />
                        </section>
                    </div>
                    <div id="gallery" class="space-photo">
                      <gallery />
                    </div>  
                </div>
            </main>
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
  import BlurGradient from '@/components/Artworks/BlurGradient';
  import RelatedItems from '@/components/Campaign/Product/RelatedItems';
  import singleMenu from '@/components/Header/data/single';
  import MainFooter from '@/components/Footer';
  import FaqList from '@/components/Campaign/Faq/FaqList';
  import MediaBanner from '@/components/Campaign/Reward/MediaBanner';
  import Gallery from '@/components/Campaign/Reward/Gallery';
  import Single from '@/components/Campaign/Button/Single';

  import Detail from '@/components/Campaign/Product/Detail';

  import brand from '@/assets/text/brand';
  import { useHead } from '#app';
  
  useHead({
    title: brand.name + ' - Products Detail',
  });
  </script>
  