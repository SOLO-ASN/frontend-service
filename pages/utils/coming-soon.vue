<template>
  <div class="main-wrap">
    <blur-gradient />
    <line-deco v-if="isDesktop" />
    <v-container class="max-sm">
      <div class="py-15 full-screen-container">
        <v-row align="center">
          <v-col md="12" class="text-center">
            <div class="logo d-flex justify-center align-center mb-5">
              <logo type="landscape" size="large" />
            </div>
            <div class="text-center">
              <h3
                class="use-text-title text-uppercase"
                :class="currentTheme === 'dark' ? 'use-text-grd-triple-light' : 'use-text-grd-primary-light'"
              >
                {{ $t('util_soon') }}
              </h3>
              <count-down :miliseconds="300000000" />
              <h5 class="use-text-subtitle2" :class="{ 'mb-10': isDesktop}">
                {{ $t('util_soon_desc') }}
              </h5>
              <div class="form mt-10" :class="{ 'mb-15': isDesktop}">
                <v-row justify="center">
                  <v-col sm="12" cols="12">
                    <v-text-field
                      :label="$t('form_email')"
                      :elevation="0"
                      rounded
                      color="secondary"
                      variant="solo"
                      class="input-field"
                    >
                      <template v-if="isDesktop" #append-inner>
                        <v-btn class="my-2" color="primary">
                          {{ $t('util_notif') }}
                        </v-btn>
                      </template>
                    </v-text-field>
                    <v-btn v-if="!isDesktop" block class="mb-2" color="primary">
                      {{ $t('util_notif') }}
                    </v-btn>
                  </v-col>
                </v-row>
              </div>
              <div class="socmed-btn mt-10">
                <v-btn icon size="large" variant="text" href="#">
                  <v-icon color="indigo">
                    mdi-facebook
                  </v-icon>
                </v-btn>
                <v-btn icon size="large" variant="text" href="#">
                  <v-icon color="blue">
                    mdi-twitter
                  </v-icon>
                </v-btn>
                <v-btn icon size="large" variant="text" href="#">
                  <v-icon color="purple">
                    mdi-instagram
                  </v-icon>
                </v-btn>
                <v-btn icon size="large" variant="text" href="#">
                  <v-icon color="blue">
                    mdi-linkedin
                  </v-icon>
                </v-btn>
              </div>
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
import Logo from '@/components/Branding/Logo';
import BlurGradient from '@/components/Artworks/BlurGradient';
import LineDeco from '@/components/Artworks/LineDeco';
import CountDown from '@/components/Counter/Countdown';
import brand from '@/assets/text/brand';
import { useHead } from '#app';

useHead({
  title: brand.name + ' - Coming Soon',
});

const { name: currentTheme } = useTheme();
const { smAndUp: isDesktop } = useDisplay();
</script>
