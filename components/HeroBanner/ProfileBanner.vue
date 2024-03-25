<template>
  <v-container class="profile">
    <slot name="decoration" />
    <div class="avatar">
      <span class="deco-circle-line" />
      <v-avatar alt="avatar" :image="avatar" />
    </div>
    <v-card class="profile-cover">
      <figure>
        <img :src="cover" alt="cover" />
      </figure>
      <h3 class="use-text-title2">{{ name }}</h3>
      <p>{{ desc }}</p>
      <div v-if="socmed.length > 0" class="socmed">
        <v-btn icon variant="text" v-for="(item, index) in socmed" :key="index" href="#">
          <i :class="'ion-logo-'+item" />
        </v-btn>
      </div>
      <counter
        mini
        :text-first="{ title: $t('followers'), count: followers }"
        :text-middle="{ title: $t('posts'), count: posts }"
        :text-last="{ title: $t('following'), count: following }"
      />
    </v-card>
    <div class="followers">
      <div class="avatar-group">
        <v-avatar
          v-for="(item, index) in friends"
          :key="index"
          class="avatar-small"
          alt="avatar"
          :image="item"
        />
        <v-avatar
          class="rest"
          alt="avatar"
        >
          +3 <span>Followers</span>
        </v-avatar>
      </div>
      <v-btn
        class="btn"
        color="primary"
        variant="tonal"
      >
        {{ $t('follow') }}
      </v-btn>
    </div>
  </v-container>
</template>

<style lang="scss" scoped>
@import "./hero-style.scss";
</style>

<script setup>
import { useDisplay } from 'vuetify';
import Counter from '../Counter';

const {
  avatar, cover, name,
  desc, following, followers,
  posts, socmed, friends,
} = defineProps({
  avatar: {
    type: String,
    required: true,
  },
  cover: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  following: {
    type: Number,
    required: true,
  },
  followers: {
    type: Number,
    required: true,
  },
  posts: {
    type: Number,
    required: true,
  },
  friends: {
    type: Array,
    required: true,
  },
  socmed: {
    type: Array,
    default: [],
  },
});

</script>