<template>
  <div class="error-wrap">
    <blur-gradient />
    <v-container class="max-md">
      <v-row align="center">
        <v-col v-if="isTablet" cols="12" sm="5">
          <div class="flex">
            <div class="illustration">
              <img
                :src="imgAPI.inner[0]"
                alt="error"
              >
            </div>
          </div>
        </v-col>
        <v-col cols="12" sm="7">
          <div class="text">
            <h3 class="use-text-grd-triple-light">
              {{ errCode }}
            </h3>
            <h4 class="use-text-title2">
              {{ text }}
            </h4>
            <p>
              {{ $t('404_subtitle') }}
            </p>
            <v-btn
              :href="link.home"
              variant="outlined"
              color="primary"
              size="large"
              class="button"
            >
              {{ $t('back') }}
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import './error-style.scss';
</style>

<script setup>
import { useDisplay } from 'vuetify';
import link from '@/assets/text/link';
import imgAPI from '@/assets/images/imgAPI';
import BlurGradient from '@/components/Artworks/BlurGradient';

const { smAndUp: isTablet } = useDisplay();
const { errCode, text } = defineProps({
  errCode: {
    type: Number,
    default: 404,
  },
  text: {
    type: String,
    default: '',
  },
});
</script>
