<template>
  <div>
    <div class="main-wrap mt-n16" id="mainwrap" :class="{ 'has-fixed-scroll': isTablet }">
      <main-header :menu="singleMenu.profile" />
      <main class="container-wrap container-front scroll-nav-content">
        <section id="home">
          <banner-nav :menu="singleMenu.profile" />
          <profile />
        </section>
        <section id="about" class="space-top">
          <about />
        </section>
        <section id="stats" class="space-top-short">
          <statistics />
        </section>
        <section id="portfolios">
          <portfolios />
        </section>
        <section id="testimonial" class="space-top-short">
          <testimonials />
        </section>
        <section id="pricing" :class="isTablet ? 'space-top' : 'space-top-short'">
          <pricing />
        </section>
      </main>
      <section id="contact" :class="{ 'space-top-short': isMobile }">
        <main-footer />
      </section>
      <hidden point="smDown">
        <corner prefix="avatar" :menu="singleMenu.profile" />
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
import MainHeader from '@/components/HomeCV/Header';
import BannerNav from '@/components/HomeCV/BannerNav';
import Profile from '@/components/HomeCV/Profile';
import About from '@/components/HomeCV/About';
import Statistics from '@/components/HomeCV/Statistics';
import Portfolios from '@/components/HomeCV/Portfolios';
import Testimonials from '@/components/HomeCV/Testimonials';
import Pricing from '@/components/HomeCV/Pricing';
import MainFooter from '@/components/HomeCV/Footer';
import Hidden from '@/components/Utils/Hidden';
import Corner from '@/components/Utils/Corner';
import Notification from '@/components/Notification';
import singleMenu from '@/components/Header/data/single';
import brand from '@/assets/text/brand';
import { useHead, useRouter, useCookie } from '#app';

useHead({
  title: brand.name + ' - Online CV',
});

// push route to the stored cookie languages only for index page
const router = useRouter();
const storedLang = useCookie('i18n_redirected');
const i18nLocale = useI18n();

const { smAndDown: isMobile } = useDisplay();
const { mdAndUp: isTablet } = useDisplay();
const { lgAndUp: isDesktop } = useDisplay();
  
const defaultLocale = '/' + i18nLocale.fallbackLocale.value;
onMounted(() => {
  const rootUrl = document.location.pathname === '/' || document.location.pathname === defaultLocale;
  if (storedLang.value && rootUrl) {
    router.push({ path: `/${storedLang.value}` });
  }
});
</script>
