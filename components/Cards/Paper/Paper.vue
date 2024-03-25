<template>
  <v-card class="paper" :class="[color, { 'no-margin': noMargin }]">
    <header>
      <span class="icon-title" :class="!color || color === 'transparent' && 'gradient-icon'">
        <i :class="icon" />
      </span>
      <div class="text">
        <v-card-title class="title-main">
          {{ title }}
        </v-card-title>
        <v-card-subtitle class="use-text-paragraph" v-if="subtitle !== ''">
          {{ subtitle }}
        </v-card-subtitle>
      </div>
    </header>
    <div class="content" :class="[{ transparent: color === 'transparent' }, { 'overflow-x': overflowX }]">
      <slot />
    </div>
  </v-card>
</template>

<style scoped lang="scss">
@import './paper';
</style>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      default: 'ion-ios-bookmark-outline',
    },
    subtitle: {
      type: String,
      default: '',
    },
    color: {
      type: Boolean,
      default: null,
    },
    noMargin: {
      type: Boolean,
      default: false,
    },
    overflowX: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
