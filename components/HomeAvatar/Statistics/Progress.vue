<template>
  <div class="root">
    <div ref="wrapper" class="wrap" v-scroll="handleScroll">
      <h5 class="title-progress use-text-subtitle mb-3 text-center text-uppercase">
        {{ $t('avatar.stats_subtitle1') }}
      </h5>
      <ul>
        <li>
          <div class="icon">
            <i class="ion-md-play" />
          </div>
          <div class="progress">
            <div class="text">
              <p>Play game 10 days in a row</p>
              <p>7/10</p>
            </div>
            <v-progress-linear
              :height="10"
              :model-value="play ? 70 : 0"
              color="none"
              class="progress-bg"
            />
          </div>
        </li>
        <li>
          <div class="icon">
            <i class="ion-ios-apps" />
          </div>
          <div class="progress">
            <div class="text">
              <p>Play game 10 days in a row</p>
              <p>8/10</p>
            </div>
            <v-progress-linear
              :height="10"
              :model-value="play ? 60 : 0"
              color="none"
              class="progress-bg"
            />
          </div>
        </li>
        <li>
          <div class="icon">
            <i class="ion-md-person" />
          </div>
          <div class="progress">
            <div class="text">
              <p>Play game 10 days in a row</p>
              <p>6/10</p>
            </div>
            <v-progress-linear
              :height="10"
              :model-value="play ? 90 : 0"
              color="none"
              class="progress-bg"
            />
          </div>
        </li>
        <li>
          <div class="icon">
            <i class="ion-md-heart" />
          </div>
          <div class="progress">
            <div class="text">
              <p>Play game 10 days in a row</p>
              <p>9/10</p>
            </div>
            <v-progress-linear
              :height="10"
              :model-value="play ? 90 : 0"
              color="none"
              class="progress-bg"
            />
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './styles/progress-style.scss';
</style>

<script setup>
import { onMounted, ref } from 'vue';
import AOS from 'aos';

onMounted(() => {
  AOS.init({
    once: true,
  });
});

const wrapper = ref(null)
const play = ref(false);

function handleScroll() {
  const windowBound = wrapper.value.getBoundingClientRect();
  if (windowBound.top < 100) {
    play.value = true;
  }
}
</script>