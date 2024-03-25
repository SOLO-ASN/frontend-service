<template>
  <div class="wrap">
    <v-btn color="accent" @click="changeHeader('droplist')">header droplist</v-btn>
    <v-btn color="accent" @click="changeHeader('hamburger')">header hamburger</v-btn>
    <button>change footer</button>
    <button>change corner</button>
  </div>
</template>

<style lang="scss" scoped>
  .wrap {
    position: fixed;
    background: white;
    width: 200px;
    height: 200px;
    right: 0;
    top: 40%;
    z-index: 100;
  }
</style>

<script setup>
import { setHeader } from '@/composables/uiTheme';

function changeHeader(val) {
  setHeader(val);
}
</script>