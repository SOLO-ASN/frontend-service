<template>
  <div :class="size" class="profile-card">
    <div class="avatar">
      <template v-if="size === 'big'">
        <svg class="primary">
          <use xlink:href="/images/decoration/deco-liquid-line.svg#main" />
        </svg>
        <svg class="secondary">
          <use xlink:href="/images/decoration/deco-liquid-line.svg#main" />
        </svg>
      </template>
      <template v-if="size === 'medium'">
        <svg class="primary">
          <use xlink:href="/images/decoration/deco-leaf-line.svg#main" />
        </svg>
        <svg class="secondary">
          <use xlink:href="/images/decoration/deco-leaf-line.svg#main" />
        </svg>
      </template>
      <span v-if="size === 'small'" class="deco-circle" />
      <div v-else class="bg">
        <span />
      </div>
      <figure>
        <img alt="avatar" :src="`https://source.boringavatars.com/marble/120/${name}`" />
      </figure>
    </div>
    <div class="property">
      <h1>{{ name }}</h1>
      <!--      <p> {{ desc ? desc : $t('empty_desc')}}</p>-->
      <div class="socmed">
        <v-btn variant="text" icon size="large" v-for="(item, index) in socmed" :key="index">
          <i :class="'ion-logo-'+item" />
        </v-btn>
      </div>
    </div>
    <!-- <a v-if="href" v-ripple class="link" :href="href" /> -->
  </div>


</template>


<script setup>
// import Counter from '@/components/Counter.vue'

// import Counter from "~/components/Counter/Counter.vue";

const {avatar, name, desc, cover, socmed, size} = defineProps({
  avatar: {
    type: String,
    required: false,
  },
  name: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: false,
  },
  cover:{
    type: String,
    required: false,
  },
  socmed:{
    type: Array,
    required: true,
  },
  size: {
    type: String,
    default: 'medium',
  },
})

</script>

<style lang="scss" scoped>
@import './profile-deco-card';
</style>

