<template>
  <v-container class="root">
    <counter
      :text-first="{
        title: $t('nft2.counter_users'), count: 123, prefix: '+', suffix: 'M'
      }"
      :text-middle="{
        title: $t('nft2.counter_platforms'), count: 456, prefix: '+', suffix: 'K'
      }"
      :text-last="{
        title: $t('nft2.counter_member'), count: 789, prefix: '+', prefix: '+'
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
