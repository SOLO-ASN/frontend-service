<template>
  <v-container :class="{ 'fixed-width': isDesktop }" class="max-lg">
    <div
      data-aos="fade-up"
      data-aos-offset="100"
      data-aos-delay="500"
      data-aos-duration="500"
    >
      <div class="action">
        <div class="wrap">
          <v-row>
            <v-col v-if="isTablet" sm="4" class="d-flex justify-center">
              <div class="phone">
                <div>
                  <logo type="portrait" />
                </div>
              </div>
            </v-col>
            <v-col sm="8" cols="12">
              <h4 class="use-text-title2">
                {{ $t('wallet.cta_title') }}
              </h4>
              <p class="use-text-subtitle2">
                {{ $t('wallet.cta_desc') }}
              </p>
              <div class="btn-area">
                <a href="#">
                  <img src="/images/wallet/app-store.png" alt="app store" />
                </a>
                <a href="#">
                  <img src="/images/wallet/play-store.png" alt="play store" />
                </a>
              </div>
            </v-col>
          </v-row>
        </div>
      </div>
    </div>
  </v-container>
</template>

<style lang="scss" scoped>
@import './action-style.scss';
</style>

<script setup>
import { onMounted } from 'vue';
import { useDisplay } from 'vuetify';
import AOS from 'aos';
import Logo from '../../Branding/Logo';

const { lgAndUp: isDesktop } = useDisplay();
const { smAndUp: isTablet } = useDisplay();

onMounted(() => {
  AOS.init({
    once: true,
  });
});
</script>