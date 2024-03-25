<template>
  <div class="main-wrap">
    <main-header />
    <div class="container-general">
      <div class="space-top space-bottom">
        <h2 class="display-3 text-center mb-4">
          {{ $t('title') }}
        </h2>
        <h4 class="display-1 text-center">
          {{ $t('subtitle') }}
        </h4>
      </div>
    </div>
    <main-footer />
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/scss/pages';
</style>

<script>
import brand from '@/assets/text/brand';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default {
  components: {
    'main-header': Header,
    'main-footer': Footer,
  },
  head() {
    return {
      title: 'Blank Page | ' + brand.desc,
    };
  },
};
</script>
