<template>
  <v-card class="help-paper text-center">
    <img :src="imgAPI.inner[20]" alt="illustration" />
    <div>
      <h6 class="mb-lg-2 use-text-subtitle2 use-text-medium text-center">
        {{ $t('faq_luck') }}
      </h6>
      <p>
        {{ $t('faq_luck_desc') }}
      </p>
    </div>
    <div class="mt-5">
      <v-btn
        block
        :href="link.contact"
        color="primary"
        size="large"
      >
        {{ $t('faq_luck_btn') }}
      </v-btn>
    </div>
  </v-card>
</template>

<style lang="scss" scoped>
@import './faq-style.scss';
</style>

<script setup>
import imgAPI from '@/assets/images/imgAPI';
import link from '@/assets/text/link';
</script>

