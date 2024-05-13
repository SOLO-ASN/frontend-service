<template>
  <div>
    <div class="main-wrap">

      <main-header home :menu="singleMenu.inner" />
      <div class="container-wrap container-wrap">
        <div class="inner-page account-setting-box">
          <v-container >
            <h4 class="use-text-title"> Settings </h4>

              <AccountSetting />

          </v-container>
        </div>
      </div>

      <main-footer></main-footer>
    </div>
  </div>
</template>

<style scoped lang="scss">
  @import '@/assets/scss/pages';

  .account-setting-box {
    //margin-top: 140px;
    margin-bottom: 280px;
  }

  .glass-bg {
    background-color: rgba(226, 226, 226, 0.8);
    backdrop-filter: blur(100px);
  }

</style>

<script setup>
  import { useHead } from '#app';
  import { useDisplay } from 'vuetify';
  import brand from '@/assets/text/brand';
  import MainHeader from '~/components/Header';
  import MainFooter from '~/components/Footer';
  import singleMenu from '@/components/Header/data/single';
  import AccountSetting from '@/components/Airdrops/profile/AccountSetting.vue';

  import { defineComponent } from "vue";


  const tab = ref('option_profile')

  useHead({
    title: brand.name + ' - Account Settings',
  });

  const { smAndUp: isTablet } = useDisplay();

</script>
