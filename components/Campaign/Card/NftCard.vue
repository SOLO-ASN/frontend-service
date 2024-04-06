<template>
  <a
    v-ripple
    draggable="false"
    class="nft-card"
    :href="href"
  >
    <span class="figure">
      <img :src="img" alt="img" />
    </span>
    <span class="property">
      <span class="title" :class="small ? 'small' : 'big'">
        {{ title }}
      </span>
      <span class="user">
        <span class="avatar">
          <img :src="avatar" alt="logo" />
        </span>
        <span class="name">
          {{ name }}
        </span>
        <v-icon class="verified" v-if="verified">
          mdi-check-decagram
        </v-icon>
      </span>
    </span>
  </a>
</template>

<style lang="scss" scoped>
@import './nft-card.scss';
</style>

<script setup>
const {
  img, avatar, title,
  name, href, price,
  verified, small
} = defineProps({
  img: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  href: {
    type: String,
    default: '#',
  },
  verified: {
    type: Boolean,
    default: false,
  },
  small: {
    type: Boolean,
    default: false,
  },
})
</script>