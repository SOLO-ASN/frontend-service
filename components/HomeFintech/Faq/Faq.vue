<template>
  <div class="root">
    <v-container :class="{ 'fixed-width': isDesktop }">
      <div class="bg">
        <div class="deco-mask">
          <svg class="main">
            <use xlink:href="/images/decoration/liquid-mask.svg#main" />
          </svg>
          <svg class="darken">
            <use xlink:href="/images/decoration/liquid-mask.svg#main" />
          </svg>
        </div>
        <div class="deco-line">
          <svg>
            <use xlink:href="/images/decoration/liquid-line.svg#main" />
          </svg>
        </div>
        <img v-if="currentTheme === 'dark'" :src="imgAPI.fintech[0]" alt="background" />
        <img v-else src="imgAPI.fintech[1]" alt="background" />
      </div>
      <v-row class="spacing6">
        <v-col lg="5" md="6" class="pa-md-12">
          <title-main
            :text="$t('fintech.faq_subtitle')"
            :align="isMobile ? 'center' : 'left'"
          />
          <div
            v-if="!isTablet"
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-offset="-50"
            data-aos-duration="500"
          >
            <div class="wrap text-center">
              <div class="photo">
                <img :src="imgAPI.avatar[16]" alt="illustration" />
              </div>
              <div class="btn">
                <arrow-button :href="link.faq" :text="$t('faq_luck')" color="secondary" />
              </div>
            </div>
          </div>
        </v-col>
        <v-col lg="7" md="6" cols="12" class="pa-6 pt-0 pt-md-15">
          <div class="accordion">
            <v-expansion-panels
              v-model="panel"
              variant="accordion"
              active-class="expanded"
            >
              <v-expansion-panel
                v-for="(item, index) in faqData"
                :key="index"
                class="paper"
              >
                <v-expansion-panel-title class="content">
                  <p class="heading">
                    {{ item.q }}
                  </p>
                </v-expansion-panel-title>
                <v-expansion-panel-text class="detail">
                  <p>
                    {{ item.a }}
                  </p>
                </v-expansion-panel-text>
              </v-expansion-panel>
            </v-expansion-panels>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import './faq-styles.scss';
</style>

<script setup>
import { ref, onMounted } from 'vue';
import AOS from 'aos';
import link from '@/assets/text/link';
import { useDisplay, useTheme } from 'vuetify';
import imgAPI from '@/assets/images/imgAPI';
import ArrowButton from '../../Forms/ArrowButton/Standard';
import TitleMain from '../../Title';

const faqData = [
  {
    q: 'Pellentesque ac bibendum tortor?',
    a:
      'Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor.',
  },
  {
    q: 'In mi nulla, fringilla vestibulum?',
    a:
      'Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. ',
  },
  {
    q: 'Quisque lacinia purus ut libero?',
    a:
      'Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. ',
  },
  {
    q: 'Quisque ut metus sit amet augue?',
    a:
      'Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. ',
  },
  {
    q: 'Pellentesque ac bibendum tortor?',
    a:
      'Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. ',
  },
];


const panel = ref(0);
const { smAndDown: isMobile } = useDisplay();
const { smAndDown: isTablet } = useDisplay();
const { lgAndUp: isDesktop } = useDisplay();

const { name: currentTheme } = useTheme();

onMounted(() => {
  AOS.init({
    once: true,
  });
});
</script>
