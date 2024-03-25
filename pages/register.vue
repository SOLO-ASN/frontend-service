<template>
  <div class="main-wrap">
    <main-header :href="link.login" text="login" />
    <div class="container-front">
      <register-form />
    </div>
    <footer-deco>
      <main-footer />
    </footer-deco>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/scss/pages';
</style>

<script>
import brand from '@/assets/text/brand';
import Header from '@/components/Header/Basic';
import FooterDeco from '@/components/Footer/Decoration/General';
import Footer from '@/components/Footer';
import RegisterForm from '@/components/Forms/Register';
import link from '@/assets/text/link';
import { defineNuxtComponent } from '#app';

export default defineNuxtComponent({
  components: {
    'main-header': Header,
    'main-footer': Footer,
    FooterDeco,
    RegisterForm,
  },
  data() {
    return {
      link,
    };
  },
  head() {
    return {
      title: 'Register | ' + brand.desc,
    };
  },
});
</script>
