<template>
  <v-card class="product-card portrait over">
    <a v-ripple draggable="false" focus-ripple :href="href" class="hidden-link">
      &nbsp;
    </a>
    <div class="head">
      <div>
        <v-avatar
          v-for="(item, index) in avatars"
          class="avatar"
          :key="index.toString()"
          alt="avatar"
          :image="item || defaultUser"
        />
      </div>
      <v-chip class="price">
        {{ bid }}+ Place Bid
      </v-chip>
    </div>
    <figure>
      <v-img
        :src="img"
        height="200px"
        cover
      />
      <span class="countdown">
        <span class="time">
          <vue-countdown
            v-if="counting"
            :time="timeleft"
            v-slot="{ days, hours, minutes, seconds }"
            @end="onCountdownEnd"
          >
            <span>
              <span>
                <strong>{{ days }}</strong>
                Days
              </span>
              <i><strong>:</strong></i>
              <span>
                <strong>{{ hours }}</strong>
                Hours
              </span>
              <i><strong>:</strong></i>
              <span>
                <strong>{{ minutes }}</strong>
                Minutes
              </span>
              <i><strong>:</strong></i>
              <span>
                <strong>{{ seconds }}</strong>
                Seconds
              </span>
            </span>
          </vue-countdown>
          <strong v-else>Expired</strong>
        </span>
      </span>
    </figure>
    <div class="desc">
      <v-card-text class="text">
        <h2 class="title pb-2 text-truncate">
          {{ title }}
        </h2>
        <p class="use-text-paragraph">
          circulation:
          &nbsp;
          {{ desc }}
        </p>
      </v-card-text>
      <div>
        <v-card-actions class="property">
          <strong v-if="price > 0">
            {{ price }}
            ETH
          </strong>
          <div v-if="like > 0" class="like">
            <i class="ion-ios-heart-outline" />
            {{ like }}
          </div>
        </v-card-actions>
      </div>
    </div>
  </v-card>
</template>

<style lang="scss" scoped>
@import './countdown-card.scss';
</style>

<script setup>
import { ref, onMounted } from 'vue';
import defaultUser from '@/assets/images/avatars/pp_boy4.svg';

const {
  img, title, desc,
  like, bid, price,
  href, avatars, timeleft
} = defineProps({
  img: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  like: {
    type: Number,
    default: 0,
  },
  bid: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    default: 0,
  },
  avatars: {
    type: String,
    required: true,
  },
  href: {
    type: String,
    default: '#'
  },
  timeleft: {
    type: Number,
    default: 0,
  },
});

const counting = ref(false);
onMounted(() => {
  counting.value = true;
});

function onCountdownEnd() {
  counting.value = false;
}
</script>
