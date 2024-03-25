<template>
  <paper
    :title="$t('blog_subscribe')"
    :subtitle="$t('blog_subscribe_desc')"
    icon="ion-ios-wifi"
    color="gradient"
  >
    <div>
      <div class="form">
        <v-text-field
          :label="$t('register_email')"
          class="input-subscribe"
          dark
          hide-details
        />
        <v-btn
          class="send"
          color="black"
        >
          {{ $t('btn_submit') }}
        </v-btn>
      </div>
    </div>
  </paper>
</template>

<style scoped lang="scss">
@import '../blog-style.scss';
</style>

<script setup>
import { useDisplay} from 'vuetify';
import Paper from '../../../Cards/Paper';

const { lgAndUp: isDesktop } = useDisplay();
</script>
