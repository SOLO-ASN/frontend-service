<template>
  <div>
    <div class="main-wrap">
      <main-header home :menu="singleMenu.inner" />
      <div class="container-wrap container-wrap">
        <div class="inner-page">
          <section id="banner">
            <basic-banner
              :bg-title="$t('career_bgtitle')"
              :title="$t('career_title')"
              :desc="$t('career_subtitle')"
              :btn-primary="$t('career_joblist')"
              :btn-secondary="$t('about_bgtitle')"
              link1="#joblist"
              :link2="link.about"
            >
              <template v-slot:decoration>
                <parallax-deco type="scroll" />
              </template>
            </basic-banner>
          </section>
          <div>
            <static-gallery overlap />
          </div>
          <section id="benefit" :class="{ 'space-top': isTablet }">
            <benefit />
          </section>
          <section id="joblist" class="space-top-short">
            <job-list />
          </section>
          <section id="news" :class="isDesktop ? 'space-top-short' : 'space-top'">
            <news-event />
          </section>
        </div>
      </div>
      <footer-deco>
        <main-footer />
      </footer-deco>
      <hidden point="smDown">
        <corner :menu="singleMenu.inner" />
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
import { useDisplay } from 'vuetify';
import MainHeader from '@/components/Header';
import BasicBanner from '@/components/HeroBanner/BasicBanner';
import ParallaxDeco from '@/components/Parallax3d/Planet';
import StaticGallery from '@/components/Company/Collage/Static';
import Benefit from '@/components/Company/Career/Benefit';
import JobList from '@/components/Company/Career/JobList';
import NewsEvent from '@/components/Company/NewsEvent';
import Hidden from '@/components/Utils/Hidden';
import MainFooter from '@/components/Footer';
import FooterDeco from '@/components/Footer/Decoration/General';
import Corner from '@/components/Utils/Corner';
import Notification from '@/components/Notification';
import singleMenu from '@/components/Header/data/single';
import brand from '@/assets/text/brand';
import link from '@/assets/text/link';
import { useHead } from '#app';
import imgAPI from '@/assets/images/imgAPI';

useHead({
  title: brand.name + ' - Career',
});

const { mdAndUp: isDesktop } = useDisplay();
const { smAndUp: isTablet } = useDisplay();
</script>
