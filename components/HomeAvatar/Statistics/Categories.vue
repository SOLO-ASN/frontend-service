<template>
  <div class="root">
    <v-row class="spacing6 mt-1">
      <v-col cols="10">
        <h5 class="title-progress use-text-subtitle mb-3 text-center text-uppercase">
          {{ $t('avatar.stats_subtitle2') }}
        </h5>
      </v-col>
      <v-col v-for="(item, index) in statsData" :key="index" sm="5" cols="12">
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
                {{ item.play }}
                &nbsp;
                Games played
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
    icon: 'mdi-basketball',
    color: 'orange',
    title: 'Sport',
    play: 7
  },
  {
    icon: 'mdi-bike',
    color: 'green',
    title: 'Racing',
    play: 10
  },
  {
    icon: 'mdi-sword',
    color: 'pink',
    title: 'Fight',
    play: 2
  },
  {
    icon: 'mdi-cards-club',
    color: 'purple',
    title: 'Cards',
    play: 13
  }
];

onMounted(() => {
  AOS.init({
    once: true,
  });
});
</script>
