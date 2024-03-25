<template>
  <div class="root">
    <div ref="wrapper" class="wrap" v-scroll="handleScroll">
      <h5 class="title-progress use-text-subtitle mb-3 text-center text-uppercase">
        {{ $t('profile.stats_subtitle1') }}
      </h5>
      <ul>
        <li>
          <div class="icon">
            <i class="ion-md-clipboard" />
          </div>
          <div class="progress">
            <div class="text">
              <p>Adobe Photoshop assessment score</p>
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
            <i class="ion-md-clipboard" />
          </div>
          <div class="progress">
            <div class="text">
              <p>3D Design Modeling assessment score</p>
              <p>80/100</p>
            </div>
            <v-progress-linear
              :height="10"
              :model-value="play ? 80 : 0"
              color="none"
              class="progress-bg"
            />
          </div>
        </li>
        <li>
          <div class="icon">
            <i class="ion-md-clipboard" />
          </div>
          <div class="progress">
            <div class="text">
              <p>Project Complete</p>
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
            <i class="ion-md-clipboard" />
          </div>
          <div class="progress">
            <div class="text">
              <p>Grade Point Average</p>
              <p>4.5/5</p>
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