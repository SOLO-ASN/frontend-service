<template>
  <div class="root">
    <v-container :class="{ 'fixed-width': isDesktop }">
      <title-main :text="$t('service_feature')" align="center" />
      <div class="mt-sm-15 pt-sm-15 px-md-5">
        <div class="item-text">
          <v-row :class="isTablet ? 'spacing4' : 'spacing2'" align="center">
            <v-col
              md="6"
              sm="4"
              cols="12"
              class="px-sm-8"
              :order="isMobile ? 'last' : 'first'"
            >
              <div class="mx-md-4">
                <div
                  data-aos="fade-left"
                  data-aos-offset="100"
                  data-aos-delay="500"
                  data-aos-duration="500"
                >
                  <div :class="isMobile ? 'text-center' : 'text-end'">
                    <div class="illustration primary">
                      <icons3d icon="mdi-clock-time-eight-outline" color="primary" />
                    </div>
                  </div>
                </div>
              </div>
            </v-col>
            <v-col
              md="6"
              sm="8"
              cols="12"
              class="px-sm-8"
              :order="isMobile ? 'first' : 'last'"
            >
              <div class="px-lg-4">
                <div class="desc">
                  <title-secondary
                    :text="$t('service_estimation')"
                    :align="isMobile ? 'center' : 'left'"
                    color="primary"
                  />
                  <p class="use-text-subtitle2" :class="isMobile ? 'text-center' : 'text-start'">
                    {{ $t('auth_desc') }}
                  </p>
                  <p class="use-text-subtitle2" :class="isMobile ? 'text-center' : 'text-start'">
                    {{ $t('service_banner_title') }}
                  </p>
                </div>
              </div>
            </v-col>
          </v-row>
        </div>
        <div class="item-text">
          <v-row :class="isTablet ? 'spacing4' : 'spacing2'" align="center">
            <v-col class="px-sm-8" md="6" sm="8" cols="12">
              <div class="px-lg-4 desc">
                <title-secondary
                  :text="$t('service_timeline')"
                  color="secondary"
                  :align="isMobile ? 'center' : 'right'"
                />
                <p class="use-text-subtitle2" :class="isMobile ? 'text-center' : 'text-end'">
                  {{ $t('auth_desc') }}
                </p>
                <p class="use-text-subtitle2" :class="isMobile ? 'text-center' : 'text-end'">
                  {{ $t('service_banner_title') }}
                </p>
              </div>
            </v-col>
            <v-col class="px-sm-8" md="6" sm="4" cols="12">
              <div class="px-md-5">
                <div
                  data-aos="fade-right"
                  data-aos-offset="200"
                  data-aos-delay="500"
                  data-aos-duration="500"
                >
                  <div :class="isMobile ? 'text-center' : 'text-start'">
                    <div class="illustration secondary">
                      <icons3d icon="mdi-cloud" color="secondary" />
                    </div>
                  </div>
                </div>
              </div>
            </v-col>
          </v-row>
        </div>
        <div class="item-text last">
          <v-row :class="isTablet ? 'spacing4' : 'spacing2'" align="center">
            <v-col
              md="6"
              sm="4"
              cols="12"
              class="px-sm-8"
              :order="isMobile ? 'last' : 'first'"
            >
              <div class="px-md-4">
                <div
                  data-aos="fade-left"
                  data-aos-offset="100"
                  data-aos-delay="500"
                  data-aos-duration="500"
                >
                  <div :class="isMobile ? 'text-center' : 'text-end'">
                    <div class="illustration accent">
                      <icons3d icon="mdi-source-branch" color="accent" />
                    </div>
                  </div>
                </div>
              </div>
            </v-col>
            <v-col class="px-sm-8" md="6" sm="8" cols="12">
              <div class="px-lg-4">
                <div class="desc">
                  <title-secondary
                    :text="$t('values_title')"
                    color="accent"
                    :align="isMobile ? 'center' : 'left'"
                  />
                  <p class="use-text-subtitle2" :class="isMobile ? 'text-center' : 'text-start'">
                    {{ $t('values_info_desc1') }}
                  </p>
                  <p class="use-text-subtitle2" :class="isMobile ? 'text-center' : 'text-start'">
                    {{ $t('values_info_desc2') }}
                  </p>
                </div>
              </div>
            </v-col>
          </v-row>
        </div>
      </div>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import './services-style.scss';
</style>

<script setup>
import { onMounted } from 'vue';
import AOS from 'aos';
import { useDisplay } from 'vuetify';
import TitleMain from '../../Title';
import Icons3d from '../../Icons3d';
import TitleSecondary from '../../Title/TitleSecondary';

const { lgAndUp: isDesktop } = useDisplay();
const { smAndUp: isTablet } = useDisplay();
const { xs: isMobile } = useDisplay();

onMounted(() => {
  AOS.init({
    once: true,
  });
});
</script>