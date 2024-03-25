<template>
  <div class="main-wrap">
    <blog-header />
    <blue-gradient />
    <div class="higher-top">
      <div class="inner-page">
        <div class="space-bottom-short">
          <v-container>
            <v-row>
              <v-col md="8" cols="12" class="py-0">
                <article-blog />
              </v-col>
              <v-col md="4" cols="12">
                <sidebar />
              </v-col>
            </v-row>
          </v-container>
        </div>
      </div>
    </div>
    <div id="footer">
      <main-footer />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/pages';
</style>

<script setup>
import { onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import brand from '@/assets/text/brand';
import BlogHeader from '@/components/Header/BlogHeader';
import BlueGradient from '@/components/Artworks/BlurGradient';
import ArticleBlog from '@/components/Company/Blog/Article';
import Sidebar from '@/components/Company/Blog/Sidebar';
import MainFooter from '@/components/Footer';
import { useHead, useRouter, useCookie } from '#app';

useHead({
  title: brand.name + ' - Blog Detail',
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
