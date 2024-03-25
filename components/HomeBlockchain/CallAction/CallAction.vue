<template>
  <v-container :class="{ 'fixed-width': isDesktop }" class="max-lg">
    <div
      data-aos="fade-up"
      data-aos-delay="500"
      data-aos-offset="50"
      data-aos-duration="500"
    >
      <div class="action">
        <div class="wrap">
          <v-row align="end">
            <v-col lg="6" md="7" sm="12" class="px-0">
              <h4 class="use-text-title2">
                {{ $t('blockchain.cta_title') }}
              </h4>
              <p class="use-text-subtitle2">
                {{ $t('blockchain.cta_desc') }}
              </p>
              <div class="btn-area">
                <v-btn size="large" color="black" :href="link.register" class="button">
                  {{ $t('btn_get') }}
                  </v-btn>
                <v-btn size="large" color="black" variant="outlined" :href="link.about" class="button">
                  {{ $t('btn_detail') }}
                </v-btn>
              </div>
            </v-col>
            <v-col v-if="!isMobile" lg="6" md="5" sm="12" class="px-0">
              <img :src="imgAPI.blockchain[15]" alt="action" />
            </v-col>
          </v-row>
        </div>
      </div>
    </div>
  </v-container>
</template>

<style lang="scss" scoped>
@import './action-style';
</style>

<script setup>
import { onMounted } from 'vue';
import { useDisplay } from 'vuetify';
import AOS from 'aos';
import imgAPI from '@/assets/images/imgAPI';
import link from '@/assets/text/link';

const { lgAndUp: isDesktop } = useDisplay();
const { smAndDown: isMobile } = useDisplay();

onMounted(() => {
  AOS.init({
    once: true,
  });
});
</script>
