<template>
  <div class="big-icon">
    <div class="icon" :style="{background: 'linear-gradient(120deg, '+color2+', '+color1+')'}">
      <div class="bg">
        <i :class="icon" :style="{background: 'linear-gradient(120deg, '+color2+', '+color1+')', color: color2}">
          &nbsp;
        </i>
      </div>
    </div>
    <div class="members">
      <v-avatar v-for="(item, index) in members" :key="index" size="30">
        <img
          :src="item"
          alt="memebr"
        >
      </v-avatar>
      <v-chip :color="color2">
        +{{ count }}
      </v-chip>
    </div>
    <h4 :style="{color: color2}">
      {{ name }}
    </h4>
  </div>
</template>

<style lang="scss" scoped>
@import './community-style.scss';
</style>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    count: {
      type: Number,
      required: true,
    },
    color1: {
      type: String,
      default: '#673AB7',
    },
    color2: {
      type: String,
      default: '#00BCD4',
    },
    members: {
      type: Array,
      required: true,
    },
  },
};
</script>
