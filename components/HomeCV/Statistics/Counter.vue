<template>
  <v-container class="counter-bg">
    <counter
      :text-first="{
        title: $t('profile.counter_hours'), count: 123, prefix: '+', suffix: 'M'
      }"
      :text-middle="{
        title: $t('profile.counter_stream'), count: 456, prefix: '+', suffix: 'K'
      }"
      :text-last="{
        title: $t('profile.counter_view'), count: 789, prefix: '+', prefix: '+'
      }"
    />
  </v-container>
</template>

<style lang="scss" scoped>
@import './styles/counter-style.scss'
</style>

<script setup>
import Counter from '../../Counter';
</script>
