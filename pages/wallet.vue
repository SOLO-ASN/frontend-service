<template>
  <div>
    <div class="main-wrap">
      <main-header home prefix="wallet" :menu="singleMenu.wallet" />
      <div class="container-wrap container-front scroll-nav-content">
        <div id="home">
          <banner-slider />
        </div>
        <section id="howto" class="space-top">
          <step />
        </section>
        <section id="chart" :class="isMobile ? 'space-top-short' : 'space-top'">
          <chart-price />
        </section>
        <section id="feature" :class="isMobile ? 'space-top-short' : 'space-top'">
          <feature />
        </section>
        <section id="discover" class="space-top">
          <benefit />
        </section>
        <section id="security" class="space-top-short">
          <security />
        </section>
        <section id="community" :class="{ 'space-top': !isMobile }">
          <counter />
        </section>
        <section id="testimonials" class="space-top-short">
          <testimonials />
        </section>
        <section id="call-action" class="space-bottom" :class="isMobile ? 'space-top-short' : 'space-top'">
          <call-action />
        </section>
      </div>
      <footer-deco>
        <main-footer />
      </footer-deco>
      <hidden point="smDown">
        <corner prefix="blockchain" :menu="singleMenu.wallet" />
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
import BannerSlider from '@/components/HomeWallet/BannerSlider';
import Step from '@/components/HomeWallet/Step';
import ChartPrice from '@/components/HomeWallet/ChartPrice';
import Feature from '@/components/HomeWallet/Feature';
import Benefit from '@/components/HomeWallet/Benefit';
import Security from '@/components/HomeWallet/Security';
import Counter from '@/components/HomeWallet/Counter';
import Testimonials from '@/components/HomeWallet/Testimonials';
import CallAction from '@/components/HomeWallet/CallAction';
import singleMenu from '@/components/Header/data/single';
import FooterDeco from '@/components/Footer/Decoration/Line';
import MainFooter from '@/components/Footer';
import Hidden from '@/components/Utils/Hidden';
import Corner from '@/components/Utils/Corner';
import Notification from '@/components/Notification';
import brand from '@/assets/text/brand';
import { useHead, useRouter, useCookie } from '#app';

useHead({
  title: brand.name + ' - Crypto Wallet Home Pages',
});

// push route to the stored cookie languages only for index page
const router = useRouter();
const storedLang = useCookie('i18n_redirected');
const i18nLocale = useI18n();

const { lgAndDown: isTablet} = useDisplay();
const { smAndDown: isMobile} = useDisplay();
  
const defaultLocale = '/' + i18nLocale.fallbackLocale.value;
onMounted(() => {
  const rootUrl = document.location.pathname === '/' || document.location.pathname === defaultLocale;
  if (storedLang.value && rootUrl) {
    router.push({ path: `/${storedLang.value}` });
  }
});
</script>
