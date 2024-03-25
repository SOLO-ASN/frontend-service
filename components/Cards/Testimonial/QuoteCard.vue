<template>
  <div class="root">
    <div class="deco" />
    <v-card class="paper">
      <i class="ion-ios-quote primary" />
      <i class="ion-ios-quote secondary" />
      <v-avatar :image="avatar" class="avatar" alt="avatar profile" />
      <div class="content-quote">
        <p>
          &ldquo;
          {{ text }}
          &rdquo;
        </p>
        <h6 class="use-text-subtitle2">
          {{ name }}
        </h6>
        <div class="use-text-caption caption-title">
          {{ title }}
        </div>
      </div>
    </v-card>
  </div>
</template>

<style lang="scss" scoped>
@import './quote-card.scss'
</style>

<script setup>
const {
  text, name,
  title, avatar
} = defineProps({
  text: {
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
  avatar: {
    type: String,
    required: true,
  }
});
</script>
