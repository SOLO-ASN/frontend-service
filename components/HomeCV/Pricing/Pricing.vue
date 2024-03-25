<template>
  <div class="root">
    <parallax-title
      :bg-title="$t('profile.pricing_bgtitle')"
      :main-title="$t('profile.pricing_title')"
      :color="currentTheme === 'dark' ? 'triple-main' : 'triple-light'"
    />
    <v-container>
      <v-row :justify="isMobile ? 'center' : 'start'" :class="isMobile ? 'spacing8' : 'spacing4'">
        <v-col class="item px-sm-4 px-8" md="4" sm="6" cols="12">
          <div
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-delay="300"
            data-aos-duration="500"
          >
            <div>
              <title-secondary
                :text="$t('profile.pricing_title1')"
                :align="isMobile ? 'center' : 'left'"
                color="secondary"
              />
              <p :class="isMobile ? 'text-center' : 'text-left'">
                {{ $t('profile.pricing_desc1')}}
              </p>
              <pricing-card
                color="secondary"
                title="Fixed Project"
                price="50"
                description="Minimum fixed price budget"
                :features="[' Lorem ipsum dolor', 'Suspendisse sed urna', ' Cras convallis lacus orci', 'Quisque ut metus sit']"
                :button-text="$t('profile.banner_contact')"
                :href="link.pricing"
              />
            </div>
          </div>
        </v-col>
        <v-col md="4" sm="6" cols="12" class="px-sm-4 px-8">
          <div
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-delay="500"
            data-aos-duration="0.5"
          >
            <div class="item ml-lg-n6 mt-sm-0 mt-xs-n5">
              <pricing-card
                color="primary"
                title="Hourly Project"
                price="20"
                per="hr"
                description="Minimum 8 hours"
                :features="['Lorem ipsum dolor', 'Suspendisse sed urna', ' Cras convallis lacus orci', 'Quisque ut metus sit', 'Cras convallis lacus orci', 'Interdum et malesuada']"
                :button-text="$t('profile.banner_contact')"
                :href="link.pricing"
              />
            </div>
          </div>
        </v-col>
        <v-col md="4" sm="9" cols="12" class="pt-10 pa-lg-0">
          <div
            data-aos="fade-left"
            data-aos-offset="150"
            data-aos-delay="700"
            data-aos-duration="0.5"
          >
            <div>
              <title-secondary
                :text="$t('profile.pricing_title2')"
                :align="isMobile ? 'center' : 'left'"
                color="primary"
              />
              <p :class="isMobile ? 'text-center' : 'text-left'">
                {{ $t('profile.pricing_desc2') }}
              </p>
              <ul class="feature-list">
                <li>
                  <div class="primary">
                    <icons3d color="primary" icon="mdi-check-circle" />
                  </div>
                  <strong>{{ $t('profile.pricing_icon_title1') }}</strong>
                  <p>{{ $t('profile.pricing_icon_desc1') }}</p>
                </li>
                <li>
                  <div class="secondary">
                    <icons3d color="secondary" icon="mdi-creation" />
                  </div>
                  <strong>{{ $t('profile.pricing_icon_title2') }}</strong>
                  <p>{{ $t('profile.pricing_icon_desc2') }}</p>
                </li>
                <li>
                  <div class="accent">
                    <icons3d color="accent" icon="mdi-eye" />
                  </div>
                  <strong>{{ $t('profile.pricing_icon_title3') }}</strong>
                  <p>{{ $t('profile.pricing_icon_desc3') }}</p>
                </li>
                <li>
                  <div class="primary">
                    <icons3d color="primary" icon="mdi-clock-time-eight-outline" />
                  </div>
                  <strong>{{ $t('profile.pricing_icon_title4') }}</strong>
                  <p>{{ $t('profile.pricing_icon_desc4') }}</p>
                </li>
              </ul>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import './pricing-style.scss';
</style>

<script setup>
import { useDisplay, useTheme } from 'vuetify';
import link from '@/assets/text/link';
import Icons3d from '../../Icons3d';
import PricingCard from '../../Cards/Pricing/PricingCard';
import ParallaxTitle from '../../Title/ParallaxTitle';
import TitleSecondary from '../../Title/TitleSecondary';

const { smAndDown: isMobile } = useDisplay();
const { name: currentTheme } = useTheme();
</script>
