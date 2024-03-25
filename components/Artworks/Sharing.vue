<template>
  <div class="sharing">
    <div class="big">
      <div class="liquid">
        <span class="bg bg-primary" />
        <span class="shadow" />
      </div>
      <div class="person">
        <img :src="personBig" alt="person big" />
      </div>
      <div class="counter large">
        <v-avatar class="avatar">
          <img :src="imgAPI.avatar[11]" alt="avatar" />
        </v-avatar>
        <div class="ammount">
          <div>
            <v-avatar class="logo">
              <img :src="imgAPI.logos[48]" alt="logo" />
            </v-avatar>
            0.000679
          </div>
          <p class="text-success">
            <i class="mdi mdi-check" />
            <strong>Sent</strong>
          </p>
        </div>
      </div>
    </div>
    <div class="arrow primary">
      <svg>
        <use xlink:href="/images/decoration/arrow.svg#main" />
      </svg>
      <div class="icon">
        <icons3d icon="mdi-shield-lock" color="primary" />
      </div>
    </div>
    <div class="medium">
      <div class="liquid">
        <span class="bg bg-secondary" />
        <span class="shadow" />
      </div>
      <div class="person">
        <img :src="personMedium" alt="person medium" />
      </div>
      <div class="counter small">
        <v-avatar class="avatar">
          <img :src="imgAPI.avatar[6]" alt="avatar" />
        </v-avatar>
        <div class="ammount">
          <div>
            <v-avatar class="logo">
              <img :src="imgAPI.logos[55]" alt="logo" />
            </v-avatar>
            0.079
          </div>
          <p class="text-success">
            <i class="mdi mdi-check" />
            <strong>Sent</strong>
          </p>
        </div>
      </div>
    </div>
    <div class="arrow secondary">
      <svg>
        <use xlink:href="/images/decoration/arrow.svg#main" />
      </svg>
      <div class="icon">
        <icons3d icon="mdi-check-decagram" color="secondary" />
      </div>
    </div>
    <div class="small1">
      <div class="oval-deco">
        <v-avatar class="avatar">
          <img :src="personSmall1" alt="person small" />
        </v-avatar>
      </div>
      <div class="counter mini">
        <v-avatar class="icon">
          <v-icon>mdi-download-circle</v-icon>
        </v-avatar>
        <div class="ammount">
          <div>
            <v-avatar class="logo">
              <img :src="imgAPI.logos[48]" alt="logo" />
            </v-avatar>
            0.079
          </div>
          <p>
            Received from
            &nbsp;
            <strong>Jihan Doe</strong>
          </p>
        </div>
      </div>
    </div>
    <div class="small2">
      <div class="oval-deco">
        <v-avatar class="avatar">
          <img :src="personSmall2" alt="person small" />
        </v-avatar>
      </div>
      <div class="counter mini">
        <v-avatar class="icon">
          <v-icon>mdi-download-circle</v-icon>
        </v-avatar>
        <div class="ammount">
          <div>
            <v-avatar class="logo">
              <img :src="imgAPI.logos[55]" alt="logo" />
            </v-avatar>
            0.079
          </div>
          <p>
            Received from
            &nbsp;
            <strong>Johan Doe</strong>
          </p>
        </div>
      </div>
    </div>
    <div class="arrow accent">
      <svg>
        <use xlink:href="/images/decoration/arrow.svg#main" />
      </svg>
      <div class="icon">
        <icons3d icon="mdi-shield-check" color="accent" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './sharing-style.scss';
</style>

<script setup>
import imgAPI from '@/assets/images/imgAPI';
import Icons3d from '../Icons3d';

const {
  personBig, personMedium,
  personSmall1, personSmall2
} = defineProps({
  personBig: {
    type: String,
    required: true,
  },
  personMedium: {
    type: String,
    required: true,
  },
  personSmall1: {
    type: String,
    required: true,
  },
  personSmall2: {
    type: String,
    required: true,
  },
})
</script>
