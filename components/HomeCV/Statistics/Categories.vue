<template>
  <div class="root">
    <v-row class="spacing6 mt-1">
      <v-col sm="10" cols="12">
        <h5 class="title-progress use-text-subtitle mb-3 text-center text-uppercase">
          {{ $t('profile.stats_subtitle2') }}
        </h5>
      </v-col>
      <v-col v-for="(item, index) in statsData" :key="index" sm="5" cols="12" class="pa-6">
        <div
          data-aos="fade-left"
          :data-aos-delay="100 * index + 100"
          data-aos-duration="300"
        >
          <div class="category">
            <div class="bg" :class="item.color">
              <icons3d :icon="item.icon" :color="item.color" />
            </div>
            <div class="text">
              <p class="name">{{ item.title }}</p>
              <p>
                {{ item.done }}
                Projects Done
              </p>
            </div>
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<style lang="scss" scoped>
@import './styles/categories-style.scss';
</style>

<script setup>
import { onMounted } from 'vue';
import AOS from 'aos';
import Icons3d from '../../Icons3d';

const statsData = [
  {
    icon: 'mdi-cube-outline',
    color: 'cyan',
    title: '3d Designs',
    done: 7
  },
  {
    icon: 'mdi-palette',
    color: 'purple',
    title: '2d Graphics',
    done: 10
  },
  {
    icon: 'mdi-animation-play',
    color: 'red',
    title: 'Animation',
    done: 2
  },
  {
    icon: 'mdi-hexagon-outline',
    color: 'pink',
    title: 'NFT',
    done: 13
  }
];

onMounted(() => {
  AOS.init({
    once: true,
  });
});
</script>
