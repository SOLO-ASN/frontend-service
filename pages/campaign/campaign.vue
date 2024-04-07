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

import axios from 'axios';

// 网页标签显示的名字
useHead({
  title: brand.name + ' - Campaign Detail',
});

// 尝试在跳转到该页面时向后端获取数据来渲染页面
onMounted(() => {
  // 获取当前网页的URL
  const url = window.location.href
  const params = url.split('?')[1]
  const searchParams = new URLSearchParams(params)
  const campaignId = searchParams.get('id')
  axios.get(`https://15c3a83a-495b-41af-b0be-07a23e277d5c.mock.pstmn.io/api/campaign?id=${campaignId}`).then((response) => {
    //this.items = response.data
    console.info(response.data)
    console.info(campaignId)
  })
})


</script>

