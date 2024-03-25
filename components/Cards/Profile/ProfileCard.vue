<template>
  <v-card class="profile-card" :class="first ? 'first' : ''">
    <a v-ripple :href="href">&nbsp;</a>
    <div class="inner">
      <v-avatar
        alt="avatar"
        :image="avatar"
        class="avatar"
      />
      <div class="properties">
        <h5 class="title">
          {{ name }}
          <v-icon class="verified" v-if="verified">mdi-check-decagram</v-icon>
        </h5>
        <v-card-actions class="action">
          <div>
            <p>
              <v-icon class="icon-secondary use-text-secondary-color">mdi-image-multiple</v-icon>
              <strong>
                {{ items }}
                &nbsp;
                Items
              </strong>
            </p>
            <p>
              <v-icon class="icon-primary use-text-primary-color">mdi-cart</v-icon>
              <strong>
                {{ sales }}
                &nbsp;
                Sales
              </strong>
            </p>
          </div>
          <div v-if="change || volume" class="stats">
            <p>
              Change: +
              <span class="text-light-green">
                {{ change }}
                %
              </span>
            </p>
            <p>
              Volume:
              &nbsp;
              <span>
                {{ volume }}
                &nbsp;
                ETH
              </span>
            </p>
          </div>
        </v-card-actions>
        <h2 v-if="number">
          <i>#{{ number }}</i>
        </h2>
      </div>
    </div>
  </v-card>
</template>

<style scoped lang="scss">
@import './profile-card';
</style>

<script setup>
const {
  number, name, verified,
  avatar, sales,
  change, volume, href,
  items, first,
} = defineProps({
  number: {
    type: Number,
    default: null
  },
  name: {
    type: String,
    required: true,
  },
  verified: {
    type: Boolean,
    default: false
  },
  avatar: {
    type: String,
    required: true,
  },
  sales: {
    type: Number,
    required: true,
  },
  change: {
    type: Number,
    default: null
  },
  volume: {
    type: Number,
    default: null
  },
  href: {
    type: String,
    default: '#'
  },
  items: {
    type: Number,
    required: true,
  },
  first: {
    type: Boolean,
    default: false,
  },
});
</script>
