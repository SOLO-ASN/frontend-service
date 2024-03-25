<template>
  <v-card class="root">
    <a v-ripple v-if="href" :href="href">&nbsp;</a>
    <span>
      <i class="mdi" :class="icon" />
      {{ text }}
    </span>
  </v-card>
</template>

<style lang="scss" scoped>
@import './icon-card-style.scss';
</style>

<script setup>
const {
  icon,
  text,
  href,
} = defineProps({
  icon: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  href: {
    type: String,
    default: null
  }
});
</script>