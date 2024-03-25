<template>
  <v-card :href="link.blogDetail" class="blog-headline" dark>
    <v-img
      :src="imgAPI.photosL[1]"
      class="text-white align-end media"
      max-height="460px"
      width="100%"
      cover
    >
      <span class="content">
        <v-card-title class="headline-title use-text-title">Pellentesque habitant morbi tristique senectus </v-card-title>
        <h3 class="use-text-subtitle">Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents. </h3>
      </span>
    </v-img>
  </v-card>
</template>

<style scoped lang="scss">
@import './blog-style.scss';
</style>

<script setup>
import link from '@/assets/text/link';
import imgAPI from '@/assets/images/imgAPI';
</script>
