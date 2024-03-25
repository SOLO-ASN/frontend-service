<template>
  <div class="root">
    <div class="parallax">
      <parallax />
    </div>
    <v-container class="fixed-width">
      <v-row class="spacing6">
        <v-col md="5" class="py-sm-6 px-6">
          <title-main
            :text="$t('ai-landing.faq_subtitle')"
            :align="isMobile ? 'center' : 'left'"
          />
          <div
            v-if="!isMobile"
            data-aos="fade-up"
            data-aos-delay="500"
            :data-aos-offset="isDesktop ? -50 : -500"
            data-aos-duration="500"
          >
            <div class="illustration">
              <img src="/images/ai/robot.png" alt="illustration" />
            </div>
          </div>
        </v-col>
        <v-col md="7" cols="12" class="py-sm-6 px-6">
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
import { useDisplay } from 'vuetify';
import Parallax from '../Parallax/ParallaxRight';
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
const { mdAndDown: isTablet } = useDisplay();
const { lgAndUp: isDesktop } = useDisplay();
  
onMounted(() => {
  AOS.init({
    once: true,
  });
});
</script>
