<template>
  <v-container class="root">
    <title-main :text="$t('pricing_title')" align="center" />
    <p class="use-text-subtitle2 text-center">
      {{ $t('pricing_desc') }}
    </p>
    <div class="tabs">
      <v-tabs
        v-model="tabValue"
        class="tabs"
        align-tabs="center"
      >
        <v-tab class="tab-label" value="monthly">
          <span>Monthly</span>
        </v-tab>
        <v-tab class="tab-label" value="yearly">
          <span>Yearly</span>
        </v-tab>
      </v-tabs>
    </div>
    <div class="pricing-group">
      <v-row v-if="tabValue === 'monthly'" align="end">
        <v-col
          v-for="(tier, index) in monthlyList"
          :key="tier.title"
          cols="12"
          sm="6"
          md="3"
          class="px-0"
          :class="{ 'mb-10': isTablet }"
        >
          <div class="animated fadeInLeft" :style="{ animationDelay: index * 0.1 + 's' }">
            <pricing-card
              :title="tier.title"
              :subheader="tier.subheader"
              :price="tier.price"
              :description="tier.description"
              :info="tier.info"
              :buttonText="$t('' + tier.buttonText)"
              per="month"
              :href="tier.link"
            />
          </div>
        </v-col>
      </v-row>
      <v-row v-if="tabValue === 'yearly'" :class="{ spacing3: !isTablet }" align="end">
        <v-col
          v-for="(tier, index) in yearlyList"
          :key="tier.title"
          cols="12"
          sm="4"
          class="px-0"
          :class="{ 'mb-10': isTablet }"
        >
          <div class="animated fadeInUp" :style="{ animationDelay: index * 0.1 + 's' }">
            <pricing-card
              :title="tier.title"
              :subheader="tier.subheader"
              :price="tier.price"
              :description="tier.description"
              :info="tier.info"
              :buttonText="$t('' + tier.buttonText)"
              per="year"
              :href="tier.link"
            />
          </div>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<style scoped lang="scss">
@import './pricing-group-card';
</style>

<script setup>
import { ref } from 'vue';
import { useDisplay } from 'vuetify';
import link from '@/assets/text/link';
import TitleMain from '../../Title';
import PricingCard from './PricingBasicCard';

const monthlyList = [
  {
    title: 'Free',
    price: 0,
    description: ['10 users included', '2 GB of storage'],
    info: 'Interdum et malesuada fames ac ante ipsum primis in faucibus.',
    buttonText: 'pricing_free',
    buttonVariant: 'outlined',
    link: link.register,
  },
  {
    title: 'Best Value',
    price: 5,
    description: [
      '15 users included',
      '10 GB of storage',
      'Help center access',
    ],
    info: 'Interdum et malesuada fames ac ante ipsum primis in faucibus.',
    buttonText: 'pricing_buy',
    buttonVariant: 'outlined',
    link: link.register
  },
  {
    title: 'Pro',
    price: 15,
    info: 'Interdum et malesuada fames ac ante ipsum primis in faucibus.',
    description: [
      '20 users included',
      '10 GB of storage',
      'Help center access',
    ],
    buttonText: 'pricing_buy',
    buttonVariant: 'contained',
    link: link.register,
  },
  {
    title: 'VIP',
    price: 30,
    info: 'Interdum et malesuada fames ac ante ipsum primis in faucibus.',
    description: [
      '50 users included',
      '30 GB of storage',
      'Phone & email support',
    ],
    buttonText: 'btn_contact',
    buttonVariant: 'outlined',
    link: link.contact
  }
];

const yearlyList = [
  {
    title: 'Pro',
    price: 50,
    info: 'Interdum et malesuada fames ac ante ipsum primis in faucibus.',
    description: [
      '20 users included',
      '10 GB of storage',
      'Help center access',
      'Priority email support',
    ],
    buttonText: 'pricing_buy',
    buttonVariant: 'contained',
    link: link.register,
  },
  {
    title: 'Best Value',
    price: 155,
    description: [
      '15 users included',
      '10 GB of storage',
      'Help center access',
      'Priority email support'
    ],
    info: 'Interdum et malesuada fames ac ante ipsum primis in faucibus.',
    buttonText: 'pricing_buy',
    buttonVariant: 'outlined',
    link: link.register,
  },
  {
    title: 'VIP',
    price: 300,
    info: 'Interdum et malesuada fames ac ante ipsum primis in faucibus.',
    description: [
      '50 users included',
      '30 GB of storage',
      'Help center access',
      'Phone & email support',
    ],
    buttonText: 'btn_contact',
    buttonVariant: 'outlined',
    link: link.contact,
  }
];

const { mdAndDown: isTablet } = useDisplay();
const tabValue = ref('monthly');
</script>
