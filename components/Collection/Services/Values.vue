<template>
  <v-container class="root">
    <v-row :class="{ spacing4: !isMobile }">
      <v-col md="4" cols="12">
        <title-main :text="$t('values_title')" />
      </v-col>
      <v-col md="7" cols="12">
        <p class="use-text-subtitle2">
          {{ $t('values_subtitle') }}
        </p>
      </v-col>
      <v-col md="4" sm="6" cols="12">
        <div
          data-aos="fade-left"
          data-aos-offset="100"
          data-aos-delay="100"
          data-aos-duration="500"
        >
          <div>
            <number-card
              icon="ion-ios-radio-button-on"
              :title="$t('values_info_title1')"
              :desc="$t('values_info_desc2')"
              number="01"
              color="triple-dark"
            />
          </div>
        </div>
        <div
          data-aos="fade-left"
          data-aos-offset="100"
          data-aos-delay="300"
          data-aos-duration="500"
        >
          <div>
            <number-card
              icon="ion-ios-medical-outline"
              :title="$t('values_info_title2')"
              :desc="$t('values_info_desc2')"
              number="02"
              color="triple-main"
            />
          </div>
        </div>
      </v-col>
      <v-col md="4" sm="6" cols="12">
        <div
          data-aos="fade-left"
          data-aos-offset="100"
          data-aos-delay="500"
          data-aos-duration="500"
        >
          <div>
            <number-card
              icon="ion-ios-color-filter-outline"
              :title="$t('values_info_title3')"
              :desc="$t('values_info_desc3')"
              number="03"
              color="triple-light"
            />
          </div>
        </div>
        <div
          data-aos="fade-left"
          data-aos-offset="100"
          data-aos-delay="700"
          data-aos-duration="500"
        >
          <div>
            <number-card
              icon="ion-ios-sunny-outline"
              :title="$t('values_info_title4')"
              :desc="$t('values_info_desc4')"
              number="04"
              color="double-main"
            />
          </div>
        </div>
      </v-col>
      <v-col item md="4" cols="12">
        <div class="action">
          <arrow-button :href="link.contact" :text="$t('register_subtitle')" full-height />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss" scoped>
@import './services-style.scss';
</style>

<script setup>
import { onMounted } from 'vue';
import { useDisplay } from 'vuetify';
import AOS from 'aos';
import link from '@/assets/text/link';
import NumberCard from '../../Cards/Info/NumberCard';
import ArrowButton from '../../Forms/ArrowButton/Large';
import TitleMain from '../../Title';

onMounted(() => {
  AOS.init({
    once: true,
  });
});

const { smAndDown: isMobile } = useDisplay();
</script>