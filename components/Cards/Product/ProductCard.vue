<template>
  <v-card :class="[orientation, type]" class="product-card">
    <a v-ripple :href="href" class="hidden-link">&nbsp;</a>
    <div class="head">
      <div class="avatar-group">
        <v-avatar
          v-for="(item, index) in avatars"
          class="avatar"
          :image="item"
          :key="index"
          alt="avatar"
        />
      </div>
      <v-chip class="like">
        <v-icon>mdi-heart-outline</v-icon>&nbsp;125
      </v-chip>
    </div>
    <figure>
      <img :src="img" :alt="title">
    </figure>
    <div class="desc">
      <div class="text">
        <h6 class="pb-2 text-truncate">
          {{ title }}
        </h6>
        <p v-if="price > 0" class="price">
          {{ price }}
          ETH
        </p>
      </div>
      <div>
        <div class="property">
          <p class="use-text-paragraph">
            {{ desc }}
          </p>
          <div v-if="rating > 0" class="rating">
            <v-icon>mdi-star</v-icon>
            {{ rating }}
          </div>
        </div>
        <v-btn
          :href="href"
          block
          class="button"
          variant="outlined"
          :color="currentTheme === 'dark' ? 'secondary' : 'primary'"
        >
          {{ $t('btn_detail') }}
        </v-btn>
      </div>
    </div>
  </v-card>
</template>

<style lang="scss" scoped>
@import './product-card';
</style>

<script setup>
import { useTheme } from 'vuetify';
import imgAPI from '@/assets/images/imgAPI';

const avatars = [
  imgAPI.avatar[7],
  imgAPI.avatar[2],
  imgAPI.logos[4],
  imgAPI.avatar[4],
];

const {
  img, title, desc,
  orientation, type, rating,
  price, href
} = defineProps({
  type: {
    type: String,
    default: 'full', // available props: full, rounded, over, oval
  },
  img: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    default: 0,
  },
  price: {
    type: Number,
    default: 0,
  },
  orientation: {
    type: String,
    default: 'portrait',
  },
  href: {
    type: String,
    default: '#',
  },
});

const { name: currentTheme } = useTheme();
</script>
