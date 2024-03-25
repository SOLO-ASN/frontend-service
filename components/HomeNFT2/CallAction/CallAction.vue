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
            <v-col v-if="isTablet" md="6" sm="5" cols="12" class="pa-0 d-flex justify-center">
              <div class="illustration">
                <img :src="imgAPI.nft[0]" alt="illustration" />
              </div>
            </v-col>
            <v-col md="6" sm="7" cols="12" class="pe-sm-2 d-flex align-center">
              <div class="pe-sm-8">
                <h4 :class="isTabletMd ? 'use-text-title2' : 'use-text-title'">
                  {{ $t('nft.cta_title') }}
                </h4>
                <p class="use-text-subtitle2">
                  {{ $t('nft.cta_desc') }}
                </p>
                <div class="btn-area">
                  <v-btn :href="link.register" color="black" size="large">
                    {{ $t('nft.cta_btn') }}
                  </v-btn>
                </div>
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
import imgAPI from '@/assets/images/imgAPI';
import link from '@/assets/text/link';

const { lgAndUp: isDesktop } = useDisplay();
const { smAndUp: isTablet } = useDisplay();
const { md: isTabletMd } = useDisplay();
const { mdAndDown: isMobile } = useDisplay();

onMounted(() => {
  AOS.init({
    once: true,
  });
});
</script>