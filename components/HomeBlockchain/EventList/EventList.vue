<template>
  <div class="root">
    <div class="background">
      <parallax-double />
      <div class="bg-gradient">
        <span class="oval-right" />
        <span class="oval-top" />
        <span class="oval-bottom" />
      </div>
      <v-container class="container">
        <title-main :text="$t('blockchain.event_list_title')" align="center" />
        <p class="text-center use-text-subtitle2">
          {{ $t('blockchain.event_list_desc') }}
        </p>
        <v-row class="timeline" justify="space-around">
          <h4 class="use-text-title year-title">
            <span class="use-text-grd-double-main">
              2023
            </span>
          </h4>
          <div class="dashed-divider" />
          <v-col md="5" cols="12">
            <div
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-duration="500"
              data-aos-offset="-50"
            >
              <div class="grid">
                <event-card
                  color="primary"
                  date="22 May"
                  location="Bandung"
                  desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis congue euismod elit, in eleifend lacus dignissim et"
                  :action-primary="{ text: $t('register'), href: link.register }"
                  :action-secondary="{ text: $t('btn_detail'), href: link.blogDetail }"
                />
              </div>
            </div>
          </v-col>
          <v-col md="5" cols="12">
            <div
              data-aos="fade-up"
              data-aos-delay="800"
              data-aos-duration="500"
              data-aos-offset="-50"
            >
              <div class="grid mb-0">
                <event-card
                  color="secondary"
                  date="30 Jul"
                  location="London"
                  desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis congue euismod elit, in eleifend lacus dignissim et"
                  :action-primary="{ text: $t('register'), href: link.register }"
                  :action-secondary="{ text: $t('btn_detail'), href: link.blogDetail }"
                />
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
      <v-container>
        <div class="timeline">
          <div class="solid-divider" />
          <v-row>
            <v-col sm="6" cols="12">
              <ul class="px-lg-5 left-side">
                <li v-for="(item, index) in eventLeft" :key="index">
                  <div
                    data-aos="fade-right"
                    data-aos-offset="400"
                    :data-aos-delay="200 + 100 * index"
                    data-aos-duration="500"
                  >
                    <div class="item">
                      <div class="text">
                        <h2>{{ item.date }}</h2>
                        <h3>{{ item.location }}</h3>
                        <p>{{ item.subtitle }}</p>
                      </div>
                      <v-btn variant="outlined" :href="link.blogDetail" :color="currentTheme === 'dark' ? 'white' : 'black'">
                        {{ $t('btn_detail') }}
                      </v-btn>
                    </div>
                  </div>
                </li>
              </ul>
            </v-col>
            <v-col sm="6" cols="12">
              <ul class="px-lg-6 right-side">
                <li v-for="(item, index) in eventRight" :class="'type' + item.color" :key="index">
                  <div
                    data-aos="fade-left"
                    data-aos-offset="400"
                    :data-aos-delay="200 + 200 * index"
                    data-aos-duration="500"
                  >
                    <div class="item">
                      <div class="text">
                        <h2>{{ item.date }}</h2>
                        <h3>{{ item.location }}</h3>
                        <p>{{ item.subtitle }}</p>
                      </div>
                      <v-btn variant="outlined" :href="link.blogDetail" :color="currentTheme === 'dark' ? 'white' : 'black'">
                        {{ $t('btn_detail') }}
                      </v-btn>
                    </div>
                  </div>
                </li>
              </ul>
            </v-col>
          </v-row>
        </div>
      </v-container>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './event-list-style.scss';
</style>

<script setup>
import { onMounted } from 'vue';
import AOS from 'aos';
import { useTheme } from 'vuetify';
import link from '@/assets/text/link';
import ParallaxDouble from '../Parallax/ParallaxDouble';
import EventCard from '../../Cards/Event/EventCard';
import TitleMain from '../../Title';

const eventLeft = [
  {
    date: '22 Aug',
    location: 'Indianapolis',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis congue euismod elit, in eleifend lacus dignissim et'
  },
  {
    date: '10 Oct',
    location: 'Kathmandu',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis congue euismod elit, in eleifend lacus dignissim et'
  },
  {
    date: '10 Nov',
    location: 'Porto',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis congue euismod elit, in eleifend lacus dignissim et'
  },
];

const eventRight = [
  {
    date: '12 Sep',
    location: 'Dallas',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis congue euismod elit, in eleifend lacus dignissim et'
  },
  {
    date: '01 Nov',
    location: 'Denver',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis congue euismod elit, in eleifend lacus dignissim et'
  },
  {
    date: '11 Dec',
    location: 'Stockholm',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis congue euismod elit, in eleifend lacus dignissim et'
  },
];

const { name: currentTheme } = useTheme();

onMounted(() => {
  AOS.init({
    once: true,
  });
})
</script>
