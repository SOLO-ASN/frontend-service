<template>
  <v-container class="container max-lg" :class="{ 'fixed-width': isDesktop }">
    <parallax-title
      :bg-title="$t('wallet.discover_bgtitle')"
      :main-title="$t('wallet.discover_title')"
      color="double-main"
    />
    <div class="root">
      <v-container class="deco-wrap max-md fixed-width">
        <div class="deco">
          <div class="orbit border-secondary">
            <div class="inner border-secondary">
              <svg class="line-round">
                <use xlink:href="/images/decoration/line-round.svg#main" />
              </svg>
              <svg class="line-round-big">
                <use xlink:href="/images/decoration/line-round-big.svg#main" />
              </svg>
            </div>
          </div>
          <div class="orbit border-primary">
            <div class="inner border-primary">
              <svg class="line-round">
                <use xlink:href="/images/decoration/line-round.svg#main" />
              </svg>
              <svg class="line-round-big">
                <use xlink:href="/images/decoration/line-round-big.svg#main" />
              </svg>
            </div>
          </div>
        </div>
      </v-container>
      <v-row align="center">
        <v-col md="3" sm="7" cols="12">
          <div
            data-aos="fade-right"
            data-aos-offset="100"
            data-aos-delay="500"
            data-aos-duration="500"
          >
            <ul class="list primary text-end">
              <li class="use-text-primary">
                <icons3d icon="mdi-clock-time-eight-outline" color="primary" />
                <h6 class="use-text-primary">{{ $t('wallet.benefit_title1') }}</h6>
                {{ $t('wallet.benefit_desc1') }}
              </li>
              <li>
                <icons3d icon="mdi-shield-lock" color="primary" />
                <h6 class="use-text-primary">{{ $t('wallet.benefit_title2') }}</h6>
                {{ $t('wallet.benefit_desc2') }}
              </li>
              <li>
                <icons3d icon="mdi-check-circle" color="primary" />
                <h6 class="use-text-primary">{{ $t('wallet.benefit_title3') }}</h6>
                {{ $t('wallet.benefit_desc3') }}
              </li>
            </ul>
          </div>
        </v-col>
        <v-col md="3" sm="5" cols="6" class="px-0 px-sm-6">
          <div class="person">
            <div class="background bg-primary"><span /></div>
            <span class="img">
              <img :src="imgAPI.avatar[22]" alt="male" />
            </span>
          </div>
        </v-col>
        <v-col md="3" sm="5" cols="6" class="px-0 px-sm-6">
          <div class="person">
            <div class="background bg-secondary">
              <span />
            </div>
            <span class="img">
              <img :src="imgAPI.avatar[13]" alt="female" />
            </span>
          </div>
        </v-col>
        <v-col md="3" sm="7" cols="12">
          <div
            data-aos="fade-left"
            data-aos-offset="100"
            data-aos-delay="500"
            data-aos-duration="500"
          >
            <ul class="list secondary">
              <li>
                <icons3d icon="mdi-cog" color="secondary" />
                <h6 class="use-text-secondary">{{ $t('wallet.benefit_title4') }}</h6>
                {{ $t('wallet.benefit_desc4') }}
              </li>
              <li>
                <icons3d icon="mdi-emoticon" color="secondary" />
                <h6 class="use-text-secondary">{{ $t('wallet.benefit_title5') }}</h6>
                {{ $t('wallet.benefit_desc5') }}
              </li>
              <li>
                <icons3d icon="mdi-plus-circle" color="secondary" />
                <h6 class="use-text-secondary">{{ $t('wallet.benefit_title6') }}</h6>
                {{ $t('wallet.benefit_desc6') }}
              </li>
            </ul>
          </div>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<style lang="scss" scoped>
@import './benefit-style.scss';
</style>

<script setup>
import { onMounted } from 'vue';
import AOS from 'aos';
import { useDisplay } from 'vuetify';
import imgAPI from '@/assets/images/imgAPI';
import ParallaxTitle from '../../Title/ParallaxTitle';
import Icons3d from '../../Icons3d';

const { lgAndUp: isDesktop } = useDisplay();

onMounted(() => {
  AOS.init({
    once: true,
  });
});
</script>