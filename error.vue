<template>
  <theme-wrapper theme="cyber">
    <v-app>
      <div class="main-wrap">
        <main-header :menu="singleMenu.inner" />
        <error-main
          error-code="errObj.statusCode"
          :text="$t('404')"
        />
        <main-footer />
      </div>
    </v-app>
  </theme-wrapper>
</template>
e
<style scoped lang="scss">
@import '@/assets/scss/pages.scss';
</style>

<script setup>
import singleMenu from '@/components/Header/data/single';
import brand from './assets/text/brand';
import ThemeWrapper from './components/ThemeWrapper';
import MainHeader from './components/Header';
import MainFooter from './components/Footer';
import ErrorMain from './components/Utils/Error';
import { useHead, useError } from '#app';

const error = useError();
const errObj = error._object.error;
useHead({
  title: errObj.statusCode === 404
    ? brand.name + ' - Not Found'
    : brand.name + ' - An error occurred',
});
</script>
