<template>
  <v-container class="root">
    <counter
      :text-first="{
        title: $t('wallet.counter_downloads'), count: 123, prefix: '+', suffix: 'M'
      }"
      :text-middle="{
        title: $t('wallet.counter_users'), count: 456, prefix: '+', suffix: 'M'
      }"
      :text-last="{
        title: $t('wallet.counter_platforms'), count: 789, prefix: '+', suffix: 'K'
      }"
    />
  </v-container>
</template>

<style lang="scss" scoped>
@import './counter-style.scss'
</style>

<script setup>
import Counter from '../../Counter';
</script>
