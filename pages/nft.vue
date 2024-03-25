<template>
  <div>
    <div class="main-wrap">
      <main-header home prefix="nft" :menu="singleMenu.nft" />
      <div class="container-wrap container-front scroll-nav-content">
        <parallax-banner v-if="isDesktop" />
        <div id="home">
          <banner-slider />
        </div>
        <section id="collection" class="space-top">
          <explore />
        </section>
        <section id="trending" :class="isMobile ? 'space-top-short' : 'space-top'">
          <trending />
        </section>
        <section id="rank" class="space-top">
          <list-rank />
        </section>
        <section id="explore" :class="{ 'space-top-short': !isMobile }">
          <auction />
        </section>
        <section id="new-release" :class="isTablet ? 'space-top' : 'space-top-short'">
          <new-release />
        </section>
        <section id="sell" class="space-top">
          <step />
        </section>
        <section id="call-action" class="space-bottom" :class="isMobile ? 'space-top-short' : 'space-top'">
          <call-action />
        </section>
        <section id="news" :class="isMobile && 'space-bottom-short'">
          <news-event />
        </section>
      </div>
      <footer-deco>
        <div>
          <main-footer />
        </div>
      </footer-deco>
      <hidden point="smDown">
        <corner prefix="nft" :menu="singleMenu.nft" />
      </hidden>
      <hidden point="mdDown">
        <notification />
      </hidden>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/scss/pages';
</style>

<script setup>
import { onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import { useDisplay } from 'vuetify';
import MainHeader from '@/components/Header';
import BannerSlider from '@/components/HomeNFT/BannerSlider';
import ParallaxBanner from '@/components/HomeNFT/Parallax/ParallaxDouble';
import Explore from '@/components/HomeNFT/Explore';
import Trending from '@/components/HomeNFT/Trending';
import ListRank from '@/components/HomeNFT/ListRank';
import Auction from '@/components/HomeNFT/Auction';
import NewRelease from '@/components/HomeNFT/NewRelease';
import CallAction from '@/components/HomeNFT/CallAction';
import Step from '@/components/HomeNFT/Step';
import NewsEvent from '@/components/HomeNFT/NewsEvent';
import singleMenu from '@/components/Header/data/single';
import FooterDeco from '@/components/Footer/Decoration/Fog';
import MainFooter from '@/components/Footer';
import Hidden from '@/components/Utils/Hidden';
import Corner from '@/components/Utils/Corner';
import Notification from '@/components/Notification';
import brand from '@/assets/text/brand';
import { useHead, useRouter, useCookie } from '#app';

useHead({
  title: brand.name + ' - NFT Marketplace',
});

// push route to the stored cookie languages only for index page
const router = useRouter();
const storedLang = useCookie('i18n_redirected');
const i18nLocale = useI18n();

const { lgAndUp: isDesktop } = useDisplay();
const { lgAndDown: isTablet } = useDisplay();
const { smAndDown: isMobile } = useDisplay();
  
const defaultLocale = '/' + i18nLocale.fallbackLocale.value;
onMounted(() => {
  const rootUrl = document.location.pathname === '/' || document.location.pathname === defaultLocale;
  if (storedLang.value && rootUrl) {
    router.push({ path: `/${storedLang.value}` });
  }
});
</script>
