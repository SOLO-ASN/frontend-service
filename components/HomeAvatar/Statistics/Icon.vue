<template>
  <v-card class="icon-card">
    <div class="icon">
      <icons3d :icon="icon" :color="color" />
    </div>
  </v-card>
</template>

<style style="scss" scoped>
@import './styles/icon-style.scss';
</style>

<script setup>
import Icons3d from '../../Icons3d';

const { icon, color } = defineProps({
  icon: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  }
});
</script>