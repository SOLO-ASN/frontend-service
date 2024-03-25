<template>
  <div v-scroll="handleScroll">
    <v-container :class="{ 'fixed-width': isDesktop }">
      <v-row justify="center" class="mb-sm-15 mb-10" :class="!isTablet ? 'spacing2' : ''">
        <v-col md="5" sm="6" cols="12">
          <title-main :strict-align="isTablet" :text="$t('service_get')" />
          <p class="use-text-subtitle2" :class="{ 'text-center': !isTablet }">
            {{ $t('service_alacarte_desc') }}
          </p>
        </v-col>
        <v-col md="6" sm="6" cols="12">
          <v-row :justify="isTablet ? 'start' : 'center'" class="spacing2">
            <v-col v-for="(item, index) in items" md="4" cols="6">
              <div
                data-aos="fade-in"
                data-aos-offset="100"
                :data-aos-delay="500 + index * 100"
                data-aos-duration="500"
              >
                <icon-card :icon="item.icon" :text="item.text" />
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row justify="center" :class="!isTablet ? 'spacing2' : 'spacing6'">
        <v-col md="5" cols="12" class="px-8" :class="isMobile ? 'text-center' : 'text-start'">
          <title-main :text="$t('service_estimation')" />
          <p class="use-text-subtitle2">
            {{ $t('service_related_desc2') }}
          </p>
          <p class="use-text-subtitle2">
            {{ $t('service_related_desc') }}
          </p>
        </v-col>
        <v-col md="6" sm="8" class="px-8" cols="12">
          <p class="use-text-subtitle text-capitalize" :class="isMobile ? 'text-center' : 'text-start'">
            {{ $t('service_timeline') }}
          </p>
          <div
            data-aos="fade-in"
            data-aos-delay="400"
            data-aos-duration="300"
            ref="wrapper1"
          >
            <div class="progress my-15">
              <v-progress-linear
                :model-value="play ? 25 : 0"
                class="progress-bg"
                height="10"
              />
              <div class="text">
                <p>Meeting</p>
                <div class="text-end">
                  <h3>
                    1
                    <span>day</span>
                  </h3>
                  10 business days/sprint
                </div>
              </div>
            </div>
            <div class="progress my-15">
              <v-progress-linear
                :model-value="play ? 80 : 0"
                class="progress-bg"
                height="10"
              />
              <div class="text">
                <p>Development</p>
                <div class="text-end">
                  <h3>
                    9
                    <span>days</span>
                  </h3>
                  10 business days/sprint
                </div>
              </div>
            </div>
            <div class="progress my-15">
              <v-progress-linear
                :model-value="play ? 50 : 0"
                class="progress-bg"
                height="10"
              />
              <div class="text">
                <p>Changes/Fixing</p>
                <div class="text-end">
                  <h3>
                    5
                    <span>days</span>
                  </h3>
                  10 business days/sprint
                </div>
              </div>
            </div>
          </div>
          <p class="use-text-subtitle text-capitalize" :class="isMobile ? 'text-center' : 'text-start'">
            {{ $t('service_budget') }}
          </p>
          <div
            data-aos="fade-in"
            data-aos-delay="400"
            data-aos-duration="300"
            ref="wrapper2"
          >
            <div class="pt-5">
              <div class="mt-15 progress">
                <range-progress
                  :from="250"
                  :to="play2 ? 900 : 250"
                  :max="1000"
                  prefix="$"
                />
                <div class="text">
                  <p>Per sprint</p>
                  <p>$1K</p>
                </div>
              </div>
              <div class="mt-10 progress">
                <range-progress
                  :from="10"
                  :to="play2 ? 75 : 10"
                  :max="100"
                  prefix="$"
                />
                <div class="text">
                  <p>Hourly</p>
                  <p>$100</p>
                </div>
              </div>
              <div class="mt-10 progress last">
                <range-progress
                  :from="100"
                  :to="play2 ? 800 : 100"
                  :max="1000"
                  prefix="$"
                />
                <div class="text">
                  <p>Per Feature</p>
                  <p>$1K</p>
                </div>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import './services-style.scss';
</style>

<script setup>
import { ref } from 'vue';
import { useDisplay } from 'vuetify';
import RangeProgress from './RangeProgress';
import IconCard from '../../Cards/Info/IconCard';
import TitleMain from '../../Title';

const items = [
  {
    icon: 'mdi-pencil-box-multiple-outline',
    text: 'Source Code',
  },
  {
    icon: 'mdi-animation-outline',
    text: 'Technical Consulting',
  },
  {
    icon: 'mdi-file-document-outline',
    text: 'Documentation',
  },
  {
    icon: 'mdi-hand-extended-outline',
    text: '6 Month Support',
  },
  {
    icon: 'mdi-bullseye-arrow',
    text: 'Marketing',
  },
];

const wrapper1 = ref(null);
const wrapper2 = ref(null);
const play = ref(false);
const play2 = ref(false);

const { lgAndUp: isDesktop } = useDisplay();
const { smAndUp: isTablet } = useDisplay();
const { mdAndDown: isMobile } = useDisplay();

function handleScroll() {
  const windowBound1 = wrapper1.value.getBoundingClientRect();
  const windowBound2 = wrapper2.value.getBoundingClientRect();

  console.log('daadas');

  if (windowBound1.top < 100) {
    play.value = true;
  }

  if (windowBound2.top < 100) {
    play2.value = true;
  }
}
</script>