<template>
  <v-card
    :class="setType(title)"
    class="center-box price-card"
  >
    <v-card-title class="price-header justify-center">
      <h5
        :class="title === 'Free' ? 'use-text-secondary' : 'use-text-primary'"
        class="text-xs-center"
      >
        {{ title }}
      </h5>
      <div class="card-pricing">
        <h2 class="title-price text-xs-center">
          <span>$</span>{{ price }}
        </h2>
        <h6 class="title">
          &nbsp;/ {{ per }}
        </h6>
      </div>
    </v-card-title>
    <v-card-text class="pa-4">
      <ul>
        <li
          v-for="(line, index) in description"
          :key="index"
          class="text-center subtitle-1"
        >
          {{ line }}
        </li>
      </ul>
    </v-card-text>
    <div class="btn-area" :class="title === 'Free' ? 'secondary-color' : 'primary-color'">
      <p>{{ info }}</p>
      <v-btn
        :color="setBtnColor(title)"
        :variant="title === 'Free' ? 'outlined' : 'flat'"
      >
        {{ buttonText }}
      </v-btn>
    </div>
  </v-card>
</template>

<style scoped lang="scss">
@import './pricing-basic-style';
</style>

<script setup>
import { computed } from 'vue';

const {
  title, price, description,
  info, buttonText, 
  per, href,
} = defineProps({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  description: {
    type: Array,
    required: true,
  },
  info: {
    type: String,
    default: '',
  },
  buttonText: {
    type: String,
    required: true,
  },
  per: {
    type: String,
    required: true,
  },
  href: {
    type: String,
    default: '#',
  },
});

function setType(cardType) {
  switch (cardType) {
    case 'Free':
      return 'basic';
    case 'Best Value':
      return 'value';
    default:
      return 'general';
  }
}

function setBtnColor(cardType) {
  switch (cardType) {
    case 'Free':
      return 'white';
    case 'Best Value':
      return 'primary';
    default:
      return 'black';
  }
}
</script>
