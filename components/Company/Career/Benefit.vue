<template>
  <div class="root">
    <v-container>
      <v-row class="spacing6">
        <v-col md="5" cols="12" class="px-6">
          <title-main dark :text="$t('career_benefit_title')" />
          <p class="use-text-subtitle2 mb-8">
            {{ $t('career_benefit_desc') }}
          </p>
          <p class="use-text-subtitle2">
            {{ $t('career_subtitle') }}
          </p>
        </v-col>
        <v-col md="7" cols="12" class="px-sm-8">
          <div class="benefit-list">
            <div v-for="(item, index) in benefitList" :key="index">
              <div
                data-aos="fade-right"
                data-aos-offset="50"
                :data-aos-delay="500 + 100 * index"
                data-aos-duration="500"
              >
                <div class="benefit">
                  <div class="bg" :class="item.color">
                    <icons3d :icon="item.icon" :color="item.color" />
                  </div>
                  <div class="text">
                    <h3 class="use-text-subtitle2">{{ item.title }}</h3>
                    <p class="use-text-paragraph">{{ item.desc }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <v-container class="banner-wrap">
      <v-row justify="center">
        <v-col lg="10" md="12" cols="12" class="px-0 px-sm-4">
          <div
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-delay="500"
            data-aos-duration="500"
            class="banner"
          >
            <figure>
              <img :src="imgAPI.photosL[20]" alt="banner" />
            </figure>
            <h3>{{ $t('about_quote') }}</h3>
            <v-btn
              class="btn"
              :href="link.about"
              color="secondary"
            >
              {{ $t('about_bgtitle') }}
            </v-btn>
        </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import './career-style.scss'
</style>

<script setup>
import { onMounted } from 'vue';
import { useDisplay } from 'vuetify';
import AOS from 'aos';
import imgAPI from '@/assets/images/imgAPI';
import link from '@/assets/text/link';
import Icons3d from '../../Icons3d';
import TitleMain from '../../Title';

onMounted(() => {
  AOS.init({
    once: true,
  });
});

const benefitList = [
  {
    icon: 'mdi-map-marker',
    color: 'pink',
    title: 'Working Remotely',
    desc: 'Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat hendrerit lacus. ',
  },
  {
    icon: 'mdi-check-decagram-outline',
    color: 'cyan',
    title: 'Performance Bonus',
    desc: 'Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat hendrerit lacus. ',
  },
  {
    icon: 'mdi-heart-outline',
    color: 'pink',
    title: 'Health & Insurance',
    desc: 'Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat hendrerit lacus. ',
  },
  {
    icon: 'mdi-bookmark-box',
    color: 'orange',
    title: 'Continues Learning',
    desc: 'Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat hendrerit lacus. ',
  },
  {
    icon: 'mdi-account-child-outline',
    color: 'purple',
    title: 'Parental Leave',
    desc: 'Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat hendrerit lacus. ',
  },
  {
    icon: 'mdi-silverware-fork-knife',
    color: 'deep-orange',
    title: 'Free Lunch',
    desc: 'Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat hendrerit lacus. ',
  }
];

const { mdAndDown: isMobile } = useDisplay();
</script>