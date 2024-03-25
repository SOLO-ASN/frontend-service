<template>
  <div class="main-wrap">
    <main-header :menu="singleMenu.inner" />
    <main class="container-front container-wrap">
      <div class="inner-page">
        <section id="banner">
          <icon-banner
            :cover="imgAPI.photosL[6]"
            :title="$t('login_create')"
            :desc="$t('contact_subtitle')"
            :features="['200+ DEVELOPERS', 'FLEXIBLE SCOPE', 'SPRINT BASED', 'FULL TEAM']"
            :icon="['mdi-shopping', 'mdi-music', 'mdi-folder-multiple-image']"
            :btn-primary="{ href: link.contact, text: $t('btn_get') }"
            :btn-secondary="{ href: link.faq, text: $t('btn_read_more') }"
            :counter-primary="{ title: 'Project Success', count: 345 }"
            :counter-secondary="{ title: 'Experts', count: 56 }"
          />
        </section>
        <div id="logo_group" class="space-top-short">
          <logo-group />
        </div>
        <section id="feature" class="space-top-short">
          <feature />
        </section>
        <section id="infographic" class="space-top">
          <infographic />
        </section>
        <section id="related" :class="isTablet ? 'space-top-short' : 'space-top'">
          <related />
        </section>
        <section id="categories" class="space-top">
          <categories />
        </section>
      </div>
    </main>
    <div class="space-top-short">
      <footer-deco>
        <main-footer />
      </footer-deco>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/scss/pages';
</style>

<script setup>
import { useDisplay } from 'vuetify';
import MainHeader from '@/components/Header';
import singleMenu from '@/components/Header/data/single';
import IconBanner from '@/components/HeroBanner/IconBanner';
import LogoGroup from '@/components/Branding/LogoGroup';
import Feature from '@/components/Collection/Services/Feature';
import Infographic from '@/components/Collection/Services/Infographic';
import Related from '@/components/Collection/Services/Related';
import Categories from '@/components/Collection/Services/Categories';
import MainFooter from '@/components/Footer';
import FooterDeco from '@/components/Footer/Decoration/General';
import brand from '@/assets/text/brand';
import link from '@/assets/text/link';
import imgAPI from '@/assets/images/imgAPI';
import { useHead } from '#app';

useHead({
  title: brand.name + ' - Service Detail',
});

const { smAndUp: isTablet } = useDisplay();
</script>
