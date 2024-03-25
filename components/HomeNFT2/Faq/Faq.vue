<template>
  <div class="root">
    <v-container :class="{ 'fixed-width': isDesktop }">
      <v-row class="spacing6">
        <v-col md="5" class="pa-6 pb-0">
          <title-main
            :text="$t('nft2.faq_title')"
            :align="isMobile ? 'center' : 'left'"
          />
          <div class="help-group">
            <arrow-button :href="link.faq" :text="$t('nft2.faq_help1')" color="secondary" />
            <arrow-button :href="link.contact" :text="$t('nft2.faq_help2')" color="primary" />
            <arrow-button :href="link.blog" :text="$t('nft2.faq_help3')" color="accent" />
          </div>
        </v-col>
        <v-col md="7" cols="12" class="pa-6 pt-0 pt-md-5">
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
const { lgAndUp: isDesktop } = useDisplay();

const { name: currentTheme } = useTheme();
</script>
