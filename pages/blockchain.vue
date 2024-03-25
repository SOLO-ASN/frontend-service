<template>
  <div>
    <div class="main-wrap">
      <main-header home prefix="blockchain" :menu="singleMenu.blockchain" />
      <div class="container-wrap scroll-nav-content">
        <div id="home">
          <banner-slider />
        </div>
        <section id="about" :class="isTablet ? 'space-top-short' : 'space-top'">
          <about />
        </section>
        <section id="feature" class="space-top-short">
          <feature />
        </section>
        <section id="discover" class="space-top-short">
          <step />
        </section>
        <section id="projects" :class="isMobile ? 'space-top-short' : 'space-top'">
          <projects />
        </section>
        <section id="events" :class="isMobile ? 'space-top-short' : 'space-top'">
          <event-slider />
        </section>
        <section id="event-list" class="space-top">
          <event-list />
        </section>
        <section id="blog" class="space-top-short">
          <news-event />
        </section>
        <section id="call-action" :class="isDesktop ? 'space-top space-bottom' : 'space-top-short space-bottom-short'">
          <call-action />
        </section>
      </div>
      <footer-deco>
        <main-footer />
      </footer-deco>
      <hidden point="smDown">
        <corner prefix="blockchain" :menu="singleMenu.blockchain" />
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
import BannerSlider from '@/components/HomeBlockchain/BannerSlider';
import About from '@/components/HomeBlockchain/About';
import Feature from '@/components/HomeBlockchain/Feature';
import Step from '@/components/HomeBlockchain/Step';
import Projects from '@/components/HomeBlockchain/Projects';
import EventSlider from '@/components/HomeBlockchain/EventSlider';
import EventList from '@/components/HomeBlockchain/EventList';
import CallAction from '@/components/HomeBlockchain/CallAction';
import NewsEvent from '@/components/HomeBlockchain/NewsEvent';
import singleMenu from '@/components/Header/data/single';
import FooterDeco from '@/components/Footer/Decoration/Stone';
import MainFooter from '@/components/Footer';
import Hidden from '@/components/Utils/Hidden';
import Corner from '@/components/Utils/Corner';
import Notification from '@/components/Notification';
import brand from '@/assets/text/brand';
import { useHead, useRouter, useCookie } from '#app';

useHead({
  title: brand.name + ' - Blockchain Home Pages',
});

// push route to the stored cookie languages only for index page
const router = useRouter();
const storedLang = useCookie('i18n_redirected');
const i18nLocale = useI18n();

const { lgAndUp: isDesktop} = useDisplay();
const { mdAndDown: isTablet} = useDisplay();
const { smAndDown: isMobile} = useDisplay();
  
const defaultLocale = '/' + i18nLocale.fallbackLocale.value;
onMounted(() => {
  const rootUrl = document.location.pathname === '/' || document.location.pathname === defaultLocale;
  if (storedLang.value && rootUrl) {
    router.push({ path: `/${storedLang.value}` });
  }
});
</script>
