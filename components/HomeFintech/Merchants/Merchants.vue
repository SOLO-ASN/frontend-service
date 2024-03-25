<template>
  <div class="root">
    <v-container class="fixed-width">
      <title-main
        :text="$t('fintech.title_partner')"
        align="center"
      />
      <div class="tab pa-sm-3">
        <v-row justify="center">
          <v-tabs
            v-model="tab"
            class="tabs"
            align-tabs="center"
          >
            <v-tab class="tab-label" :value="1">
              <span>Online</span>
            </v-tab>
            <v-tab class="tab-label" :value="2">
              <span>Offline</span>
            </v-tab>
            <v-tab class="tab-label" :value="3">
              <span>Channel</span>
            </v-tab>
          </v-tabs>
          <v-col md="10" cols="12" class="mt-md-5 mt-10">
            <v-window v-model="tab">
              <v-window-item :value="1">
                <div class="tab-content">
                  <section>
                    <v-row>
                      <v-col
                        v-for="(logo, index) in logos1"
                        :key="index"
                        sm="3"
                        cols="4"
                        class="pa-2"
                      >
                        <div class="img-logo">
                          <img :src="logo" :alt="'logo' + index">
                        </div>
                      </v-col>
                    </v-row>
                  </section>
                </div>
              </v-window-item>
              <v-window-item :value="2">
                <div class="tab-content">
                  <section>
                    <v-row>
                      <v-col
                        v-for="(logo, index) in logos2"
                        :key="index"
                        sm="3"
                        cols="4"
                        class="pa-2"
                      >
                        <div class="img-logo">
                          <img :src="logo" :alt="'logo' + index">
                        </div>
                      </v-col>
                    </v-row>
                  </section>
                </div>
              </v-window-item>
              <v-window-item :value="3">
                <div class="tab-content">
                  <section>
                    <v-row>
                      <v-col
                        v-for="(logo, index) in logos3"
                        :key="index"
                        sm="3"
                        cols="4"
                        class="pa-2"
                      >
                        <div class="img-logo">
                          <img :src="logo" :alt="'logo' + index">
                        </div>
                      </v-col>
                    </v-row>
                  </section>
                </div>
              </v-window-item>
            </v-window>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import './merchants-style.scss';
</style>

<script setup>
import { ref } from 'vue';
import { useDisplay } from 'vuetify';
import imgAPI from '@/assets/images/imgAPI';
import TitleMain from '../../Title';

const tab = ref(null);
const { smAndDown: isMobile } = useDisplay();

const logos1 = [
  imgAPI.logos[1],
  imgAPI.logos[2],
  imgAPI.logos[3],
  imgAPI.logos[4],
  imgAPI.logos[5],
  imgAPI.logos[6],
  imgAPI.logos[7],
  imgAPI.logos[8],
  imgAPI.logos[9],
  imgAPI.logos[10],
  imgAPI.logos[11],
  imgAPI.logos[12],
];
const logos2 = [
  imgAPI.logos[13],
  imgAPI.logos[14],
  imgAPI.logos[15],
  imgAPI.logos[16],
  imgAPI.logos[17],
  imgAPI.logos[18],
  imgAPI.logos[19],
  imgAPI.logos[20],
  imgAPI.logos[21],
  imgAPI.logos[22],
  imgAPI.logos[23],
  imgAPI.logos[24],
];
const logos3 = [
  imgAPI.logos[25],
  imgAPI.logos[26],
  imgAPI.logos[27],
  imgAPI.logos[28],
  imgAPI.logos[29],
  imgAPI.logos[30],
  imgAPI.logos[31],
  imgAPI.logos[32],
  imgAPI.logos[33],
  imgAPI.logos[34],
  imgAPI.logos[35],
  imgAPI.logos[36],
];
</script>
