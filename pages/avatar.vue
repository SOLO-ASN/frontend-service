<template>
  <div>
    <div class="main-wrap mt-n16" :class="{ 'has-fixed-scroll': isTablet }">
      <main-header :menu="singleMenu.avatar" />
      <main class="container-wrap container-front scroll-nav-content">
        <section id="home">
          <banner-nav :menu="singleMenu.avatar" />
          <profile />
        </section>
        <section id="about" class="space-top">
          <about />
        </section>
        <section id="stats" class="space-top">
          <statistics />
        </section>
        <section id="portfolios">
          <portfolios />
        </section>
        <section id="testimonial" class="space-top-short">
          <testimonials />
        </section>
        <section id="blog" :class="isMobile ? 'space-top-short' : 'space-top'">
          <blog />
        </section>
      </main>
      <section id="contact" :class="isMobile ? 'space-top-short' : 'space-top'">
        <main-footer />
      </section>
      <hidden point="smDown">
        <corner prefix="avatar" :menu="singleMenu.avatar" />
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
import MainHeader from '@/components/HomeAvatar/Header';
import BannerNav from '@/components/HomeAvatar/BannerNav';
import Profile from '@/components/HomeAvatar/Profile';
import About from '@/components/HomeAvatar/About';
import Statistics from '@/components/HomeAvatar/Statistics';
import Portfolios from '@/components/HomeAvatar/Portfolios';
import Testimonials from '@/components/HomeAvatar/Testimonials';
import Blog from '@/components/HomeAvatar/Blog';
import MainFooter from '@/components/HomeAvatar/Footer';
import Hidden from '@/components/Utils/Hidden';
import Corner from '@/components/Utils/Corner';
import Notification from '@/components/Notification';
import singleMenu from '@/components/Header/data/single';
import brand from '@/assets/text/brand';
import { useHead } from '#app';

useHead({
  title: brand.name + ' - Avatar',
});

const { smAndDown: isMobile } = useDisplay();
const { mdAndUp: isTablet } = useDisplay();
</script>
