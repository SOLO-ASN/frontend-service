<template>
  <div class="root">
    <div class="background">
      <div class="bg-gradient">
        <span class="oval-right" />
        <span class="oval-top" />
        <span class="oval-bottom" />
      </div>
      <v-container class="container">
        <title-main :text="$t('wallet.security_title')" align="center" />
        <div class="list">
          <v-row class="spacing3 mb-sm-15 mb-0 row" justify="center">
            <v-col lg="12" cols="12" class="px-md-4">
              <v-row class="spacing3 mb-sm-15">
                <v-col
                  sm="6"
                  cols="12"
                  class="px-md-4"
                >
                  <div
                    data-aos-offset="-100"
                    data-aos="fade-up"
                    data-aos-delay="500"
                    data-aos-duration="500"
                    class="px-md-4"
                  >
                    <div :class="isDesktop ? 'text-end' : 'text-center'">
                      <div class="illustration left">
                        <div class="obj">
                          <div class="deco liquid">
                            <span class="bg bg-primary" />
                            <span class="shadow" />
                          </div>
                          <div class="photo">
                            <img :src="imgAPI.wallet[0]" alt="person big" />
                          </div>
                          <div class="icon3D">
                            <div class="medium" :style="{ bottom: 0, left: 0 }">
                              <icons3d icon="mdi-fingerprint" color="secondary" />
                            </div>
                            <div class="small" :style="{ top: 0, right: '60px' }">
                              <icons3d icon="mdi-eye-off" color="primary" />
                            </div>
                            <div class="big" :style="{ top: 10, right: '-10px' }">
                              <icons3d icon="mdi-shield-lock" color="primary" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <h3 class="use-text-primary use-text-subtitle">
                        {{ $t('wallet.security_subtitle2') }}
                      </h3>
                      <p class="use-text-subtitle2">
                        {{ $t('wallet.security_desc2') }}
                      </p>
                    </div>
                  </div>
                </v-col>
                <v-col
                  sm="6"
                  cols="12"
                  class="px-md-8"
                >
                  <div
                    data-aos="fade-up"
                    data-aos-offset="-100"
                    data-aos-delay="800"
                    data-aos-duration="500"
                  >
                    <div class="list-wrap">
                      <ul class="list-primary">
                        <li v-for="(item, index) in integration1" :key="index">
                          <v-icon>{{ item.icon }}</v-icon>
                          {{ item.title }}
                        </li>
                      </ul>
                    </div>
                  </div>
                </v-col>
              </v-row>
              <v-row :class="[isMobile ? 'column-reverse' : 'row']">
                <v-col
                  sm="6"
                  cols="12"
                  class="px-sm-8"
                >
                  <div
                    data-aos="fade-up"
                    data-aos-offset="-100"
                    data-aos-delay="800"
                    data-aos-duration="500"
                  >
                    <div class="list-wrap">
                      <ul class="list-secondary">
                        <li v-for="(item, index) in integration2" :key="index">
                          {{ item.title }}
                          <v-icon>{{ item.icon }}</v-icon>
                        </li>
                      </ul>
                    </div>
                  </div>
                </v-col>
                <v-col
                  sm="6"
                  cols="12"
                  class="px-sm-8"
                >
                  <div
                    data-aos="fade-up"
                    data-aos-offset="-100"
                    data-aos-delay="500"
                    data-aos-duration="500"
                  >
                    <div :class="isDesktop ? 'text-start' : 'text-center'">
                      <figure class="illustration">
                        <div class="obj">
                          <div class="deco leaf">
                            <span class="bg bg-secondary" />
                            <span class="shadow" />
                          </div>
                          <div class="photo">
                            <img :src="imgAPI.wallet[1]" alt="person big" />
                          </div>
                          <div class="icon3D">
                            <div class="medium" :style="{ bottom: '40px', left: '-30px' }">
                              <icons3d icon="mdi-key" color="secondary" />
                            </div>
                            <div class="big" :style="{ top: '-20px', right: '-40px' }">
                              <icons3d icon="mdi-wall" color="secondary" />
                            </div>
                            <div class="medium" :style="{ top: '-30px', right: '-60px'}">
                              <icons3d icon="mdi-fire" color="accent" />
                            </div>
                          </div>
                        </div>
                      </figure>
                      <h3 class="use-text-secondary use-text-subtitle">
                        {{ $t('wallet.security_subtitle1') }}
                      </h3>
                      <p class="use-text-subtitle2">
                        {{ $t('wallet.security_desc1') }}
                      </p>
                    </div>
                  </div>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </div>
      </v-container>
      <parallax-flower />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './security-style.scss';
</style>

<script setup>
import { onMounted } from 'vue';
import { useDisplay } from 'vuetify';
import AOS from 'aos';
import imgAPI from '@/assets/images/imgAPI';
import Icons3d from '../../Icons3d';
import ParallaxFlower from '../Parallax/ParallaxFlower';
import TitleMain from '../../Title';

const integration1 = [
  {
    icon: 'mdi-magnify',
    title: 'Vestibulum a massa',
  },
  {
    icon: 'mdi-shuffle-variant',
    title: 'Interdum et malesuada',
  },
  {
    icon: 'mdi-layers',
    title: 'Cras convallis lacus orci',
  },
  {
    icon: 'mdi-rss',
    title: 'Nulla vehicula',
  },
  {
    icon: 'mdi-speedometer',
    title: 'Interdum et malesuada',
  },
  {
    icon: 'mdi-thumb-up',
    title: 'Cras convallis lacus orci',
  },
  {
    icon: 'mdi-cloud-upload',
    title: 'Donec sit amet nulla',
  },
  {
    icon: 'mdi-wrench',
    title: 'Donec sit amet nulla',
  },
];

const integration2 = [
  {
    icon: 'mdi-access-point',
    title: 'Vestibulum a massa',
  },
  {
    icon: 'mdi-shuffle-variant',
    title: 'Interdum et malesuada',
  },
  {
    icon: 'mdi-poll',
    title: 'Cras convallis lacus orci',
  },
  {
    icon: 'mdi-plus-circle',
    title: 'Nulla vehicula',
  },
  {
    icon: 'mdi-chart-pie',
    title: 'Interdum et malesuada',
  },
  {
    icon: 'mdi-account-multiple',
    title: 'Cras convallis lacus orci',
  },
  {
    icon: 'mdi-source-merge',
    title: 'Donec sit amet nulla',
  },
  {
    icon: 'mdi-sync',
    title: 'Donec sit amet nulla',
  },
];

const { xs: isMobile } = useDisplay();
const { smAndUp: isDesktop } = useDisplay();

onMounted(() => {
  AOS.init({
    once: true,
  });
});
</script>
