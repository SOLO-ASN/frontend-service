<template>
  <v-container class="values">
    <div class="title">
      <div>
        <h1>3 Key Values</h1>
      </div>
    </div>
    <v-row class="px-md-5" justify="space-between">
      <v-col md="3" cols="12">
        <title-main :text="$t('values_title')" />
        <div
          data-aos="fade-left"
          data-aos-offset="100"
          data-aos-delay="0"
          data-aos-duration="500"
        >
          <div class="text">
            <p class="mb-3 use-text-bold">
              {{ $t('about_key_subtitle') }}
            </p>
            <p>
              {{ $t('about_key_desc') }}
            </p>
          </div>
        </div>
      </v-col>
      <v-col class="key-group" md="6" cols="12">
        <div
          data-aos="zoom-in"
          data-aos-offset="100"
          data-aos-delay="100"
          data-aos-duration="500"
        >
          <v-card class="value">
            <i class="use-text-grd-triple-light ion-ios-ionic" />
            <strong class="use-text-subtitle2 font-weight-bold)">
              {{ $t('values_info_title1') }}
            </strong>
            <p>{{ $t('values_info_desc1') }}</p>
          </v-card>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-offset="100"
          data-aos-delay="500"
          data-aos-duration="500"
        >
          <div class="d-md-flex justify-end">
            <v-card class="value">
              <i class="use-text-grd-triple-light ion-ios-medical-outline" />
              <strong class="use-text-subtitle2 font-weight-bold">
                {{ $t('values_info_title2') }}
              </strong>
              <p>{{ $t('values_info_desc2') }}</p>
            </v-card>
          </div>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-offset="100"
          data-aos-delay="700"
          data-aos-duration="500"
        >
          <v-card class="value">
            <i class="use-text-grd-triple-light ion-ios-color-filter-outline" />
            <strong class="use-text-subtitle2 font-weight-bold">
              {{ $t('values_info_title3') }}
            </strong>
            <p>{{ $t('values_info_desc4') }}</p>
          </v-card>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss" scoped>
@import './about-style.scss';
</style>

<script setup>
import { onMounted } from 'vue';
import AOS from 'aos';
import TitleMain from '../../Title';

onMounted(() => {
  AOS.init({
    once: true,
  });
})
</script>