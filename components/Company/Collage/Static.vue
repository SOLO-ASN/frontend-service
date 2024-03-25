<template>
  <div class="static" :class="{ overlap: overlap }">
    <div class="gallery">
      <div class="string-deco string1">
        <span />
      </div>
      <div class="string-deco string2">
        <span />
      </div>
      <div v-if="isTablet" class="mt-10" style="z-index: 1">
        <figure>
          <img :src="imgAPI.photosS[12]" alt="collage" />
        </figure>
      </div>
      <div style="z-index: 1">
        <figure>
          <img :src="imgAPI.photosP[32]" alt="collage" />
        </figure>
      </div>
      <div v-if="isDesktop" class="mt-10">
        <div class="mt-10 person">
          <figure>
            <img :src="imgAPI.avatar[34]" alt="collage" />
          </figure>
        </div>
      </div>
      <div class="mt-sm-20 mt-10" style="z-index: 2">
        <figure>
          <img :src="imgAPI.photosL[14]" alt="collage" />
        </figure>
        <div v-if="btnText !== ''" class="mx-1">
          <v-btn
            block
            size="large"
            class="btn"
            :href="link.career"
          >
            {{ btnText }}
            <v-icon>mdi-arrow-right</v-icon>
          </v-btn>
        </div>
      </div>
      <div class="mt-sm-16 mt-3">
        <figure>
          <img :src="imgAPI.photosS[13]" alt="collage" />
        </figure>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './collage-style.scss';
</style>

<script setup>
import { useDisplay } from 'vuetify';
import imgAPI from '@/assets/images/imgAPI';
import link from '@/assets/text/link';

const { btnText, overlap } = defineProps({
  btnText: {
    type: String,
    default: ''
  },
  overlap: {
    type: Boolean,
    defaul: false,
  }
})

const { smAndUp: isTablet } = useDisplay();
const { mdAndUp: isDesktop } = useDisplay();
</script>