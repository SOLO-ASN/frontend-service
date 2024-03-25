<template>
  <v-container class="root">
    <parallax-title
      :bg-title="$t('service_bgtitle')"
      :main-title="$t('service_bundle_title')"
      :color="currentTheme === 'dark' ? 'triple-dark' : 'triple-light'"
    />
    <p class="text-center use-text-subtitle2">
      {{ $t('service_subtitle') }}
    </p>
    <v-row class="spacing4 mt-md-10 mt-sm-5">
      <v-col md="8" cols="12" class="py-5">
        <div
          data-aos="fade-up"
          data-aos-offset="100"
          data-aos-delay="500"
          data-aos-duration="500"
        >
          <group-card
            title="Designs"
            desc="Vestibulum consequat hendrerit nam sollicitudin dignissim nunc. Nam sollicitudin dignissim nunc, cursus ullamcorper eros vulputate sed."
            color="primary"
            type="full"
            align="right"
            :img="imgAPI.inner[10]"
            :href="link.serviceDetail"
            darken
            :items="[
              {
                name: 'Logo & Branding',
                icon: 'mdi-star-outline'
              },
              {
                name: 'Apps Design',
                icon: 'mdi-cellphone-cog'
              },
              {
                name: 'Graphic Design',
                icon: 'mdi-palette-outline'
              },
              {
                name: 'Logo & Branding',
                icon: 'mdi-monitor-shimmer'
              }
            ]"
          />
        </div>
      </v-col>
      <v-col md="4" cols="12" class="py-5">
        <div
          data-aos="fade-up"
          data-aos-offset="100"
          data-aos-delay="500"
          data-aos-duration="500"
        >
          <group-card
            title="Business"
            desc="Vestibulum consequat hendrerit nam sollicitudin dignissim nunc. Nam sollicitudin dignissim nunc."
            color="accent"
            :href="link.serviceDetail"
            item-color="primary-color"
            :items="[
              {
                name: 'Digital Strategy',
                icon: 'mdi-dice-5-outline'
              },
              {
                name: 'Content Writing',
                icon: 'mdi-pencil-box-multiple-outline'
              },
              {
                name: 'Business Consulting',
                icon: 'mdi-briefcase-outline'
              },
              {
                name: 'Reporting',
                icon: 'mdi-file-document-outline'
              }
            ]"
          />
        </div>
      </v-col>
      <v-col md="4" cols="12" class="py-5">
        <div
          data-aos="fade-up"
          data-aos-offset="100"
          data-aos-delay="500"
          data-aos-duration="500"
        >
          <group-card
            title="Technology"
            desc="Vestibulum consequat hendrerit nam sollicitudin dignissim nunc. Nam sollicitudin dignissim nunc."
            color="bright"
            :href="link.serviceDetail"
            item-color="secondary-color"
            :items="[
              {
                name: 'Hosting',
                icon: 'mdi-cloud-outline'
              },
              {
                name: 'Big Data Analysis',
                icon: 'mdi-chart-bar'
              }
            ]"
          />
        </div>
      </v-col>
      <v-col md="8" cols="12" class="py-5">
        <div
          data-aos="fade-up"
          data-aos-offset="100"
          data-aos-delay="700"
          data-aos-duration="500"
        >
          <group-card
            title="IT Development"
            desc="Vestibulum consequat hendrerit nam sollicitudin dignissim nunc. Nam sollicitudin dignissim nunc, cursus ullamcorper eros vulputate sed."
            color="secondary"
            type="full"
            :img="imgAPI.inner[11]"
            :href="link.serviceDetail"
            darken
            :items="[
              {
                name: 'Content Management',
                icon: 'mdi-file-document-outline'
              },
              {
                name: 'Mobile App Development',
                icon: 'mdi-cellphone-cog'
              },
              {
                name: 'Ecommerce',
                icon: 'mdi-shopping-outline'
              },
            ]"
          />
        </div>
      </v-col>
      <v-col md="8" cols="12" class="py-5">
        <div
          data-aos="fade-up"
          data-aos-offset="100"
          data-aos-delay="500"
          data-aos-duration="500"
        >
          <group-card
            title="Online Marketing"
            desc="Vestibulum consequat hendrerit nam sollicitudin dignissim nunc. Nam sollicitudin dignissim nunc, cursus ullamcorper eros vulputate sed."
            color="accent"
            align="right"
            item-color="accent-color"
            type="full"
            :img="imgAPI.inner[8]"
            :href="link.serviceDetail"
            :items="[
              {
                name: 'Pay Per Click',
                icon: 'mdi-button-cursor'
              },
              {
                name: 'SEO',
                icon: 'mdi-card-search-outline'
              },
              {
                name: 'Social Media Marketing',
                icon: 'mdi-account-group-outline'
              },
              {
                name: 'Display Marketing',
                icon: 'mdi-monitor-dashboard'
              },
              {
                name: 'Email Marketing',
                icon: 'mdi-email-multiple-outline'
              },
            ]"
          />
        </div>
      </v-col>
      <v-col md="4" cols="12" class="py-5">
        <div
          data-aos="fade-up"
          data-aos-offset="100"
          data-aos-delay="700"
          data-aos-duration="500"
        >
          <group-card
            title="Content Strategy"
            desc="Vestibulum consequat hendrerit nam sollicitudin dignissim nunc."
            color="accent2"
            darken
            :href="link.serviceDetail"
            :items="[
              {
                name: 'Marketing Flexibility',
                icon: 'mdi-arrow-expand-all'
              },
              {
                name: 'Web Audit Practices',
                icon: 'mdi-web'
              },
              {
                name: 'Advertising Strategy',
                icon: 'mdi-monitor-shimmer'
              },
            ]"
          />
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
import { useTheme } from 'vuetify';
import AOS from 'aos';
import imgAPI from '@/assets/images/imgAPI';
import link from '@/assets/text/link';
import GroupCard from '../../Cards/Apps/GroupCard';
import ParallaxTitle from '../../Title/ParallaxTitle';

const { name: currentTheme } = useTheme();

onMounted(() => {
  AOS.init({
    once: true,
  });
});
</script>