<template>
  <div>
    <div class="main-wrap">
      <main-header home :menu="singleMenu.inner" />
      <div class="container-wrap container-wrap">
        <div class="inner-page">
          <section id="banner">
            <basic-banner
              :bg-title="$t('team_bgtitle')"
              :title="$t('team_title')"
              :desc="$t('team_desc')"
            >
              <template v-slot:decoration>
                <parallax-deco type="scroll" />
              </template>
            </basic-banner>
          </section>
          <div>
            <carousel-gallery overlap />
          </div>
          <section id="team" class="space-top-short">
            <team bg="parallax" />
          </section>
          <call-action />
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
import { onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import MainHeader from '@/components/Header';
import BasicBanner from '@/components/HeroBanner/BasicBanner';
import ParallaxDeco from '@/components/Parallax3d/Flower';
import CarouselGallery from '@/components/Company/Collage/Carousel';
import Team from '@/components/Company/Team';
import CallAction from '~/components/Company/CallAction';
import MainFooter from '@/components/Footer';
import FooterDeco from '@/components/Footer/Decoration/General';
import Hidden from '@/components/Utils/Hidden';
import Corner from '@/components/Utils/Corner';
import Notification from '@/components/Notification';
import singleMenu from '@/components/Header/data/single';
import brand from '@/assets/text/brand';
import { useHead, useRouter, useCookie } from '#app';
import imgAPI from '@/assets/images/imgAPI';

useHead({
  title: brand.name + ' - Team',
});

// push route to the stored cookie languages only for index page
const router = useRouter();
const storedLang = useCookie('i18n_redirected');
const i18nLocale = useI18n();

const defaultLocale = '/' + i18nLocale.fallbackLocale.value;
onMounted(() => {
  const rootUrl = document.location.pathname === '/' || document.location.pathname === defaultLocale;
  if (storedLang.value && rootUrl) {
    router.push({ path: `/${storedLang.value}` });
  }
});
</script>
