<template>
  <div class="main-wrap">
    <blur-gradient />
    <v-container class="max-md">
      <div class="full-screen-container">
        <v-row align="center">
          <v-col md="12" class="text-center">
            <div class="mb-5 d-flex justify-center">
              <div v-if="isTablet" class="primary-icon maintenance-icon">
                <icons3d icon="mdi-cog" color="primary-double" />
              </div>
              <div>
                <div v-if="isTablet" class="secondary-icon maintenance-icon">
                  <icons3d icon="mdi-code-greater-than-or-equal" color="primary" />
                </div>
                <div class="accent-icon maintenance-icon">
                  <icons3d icon="mdi-wrench" color="accent-double" />
                </div>
              </div>
            </div>
            <div class="text-center text-white">
              <h3
                class="use-text-title"
                :class="currentTheme === 'dark' ? 'use-text-grd-triple-light' : 'use-text-grd-primary-light'"
              >
                {{ $t('util_maintenance') }}
              </h3>
              <h5 class="use-text-subtitle2">
                {{ $t('util_maintenance_dec') }}
              </h5>
            </div>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/scss/pages.scss';
</style>

<script setup>
import { useDisplay, useTheme } from 'vuetify';
import brand from '@/assets/text/brand';
import BlurGradient from '@/components/Artworks/BlurGradient';
import Icons3d from '@/components/Icons3d';
import { useHead } from '#app';

useHead({
  title: brand.name + ' - Maintenance',
});

const { name: currentTheme } = useTheme();
const { smAndUp: isTablet } = useDisplay();
</script>
