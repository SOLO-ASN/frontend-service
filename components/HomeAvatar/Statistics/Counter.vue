<template>
  <v-container class="counter-bg">
    <counter
      :text-first="{
        title: $t('avatar.counter_hours'), count: 123, prefix: '+', suffix: 'M'
      }"
      :text-middle="{
        title: $t('avatar.counter_stream'), count: 456, prefix: '+', suffix: 'K'
      }"
      :text-last="{
        title: $t('avatar.counter_view'), count: 789, prefix: '+', prefix: '+'
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
