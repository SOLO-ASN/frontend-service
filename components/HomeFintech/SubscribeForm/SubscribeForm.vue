<template>
  <div class="root">
    <v-container class="max-sm">
      <p class="use-text-subtitle2">
        {{ $t('blog_subscribe_desc') }}
      </p>
      <div class="form">
        <form>
          <v-text-field
            :placeholder="$t('form_email')"
            variant="solo"
            class="field"
            full-width
            hide-details
          />
          <v-btn
            color="secondary"
            class="button"
          >
            <span v-if="isTablet">{{ $t('blog_subscribe') }}</span>
            <v-icon v-else>mdi-send</v-icon>
          </v-btn>
        </form>
      </div>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import './subscribe-style.scss';
</style>

<script setup>
import { useDisplay } from 'vuetify';

const { smAndUp: isTablet } = useDisplay();
</script>
