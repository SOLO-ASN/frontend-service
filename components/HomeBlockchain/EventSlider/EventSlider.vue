<template>
  <v-container>
    <parallax-title
      :bg-title="$t('blockchain.event_bgtitle')"
      :main-title="$t('blockchain.event_title')"
      color="triple-light"
    />
    <v-row>
      <v-col md="11" sm="12" cols="12">
        <div class="root">
          <h2 class="title">
            <span>Past</span>
            Events
          </h2>
          <div class="slider-wrap">
            <transition-group
              :name="transition"
              tag="div"
            >
              <div
                v-for="number in [currentImg]"
                :key="number"
                class="item"
              >
                <div class="inner-bg">
                  <v-row class="spacing2">
                    <v-col sm="6" cols="12">
                      <div class="text">
                        <h1>
                          {{ content[Math.abs(currentImg) % content.length].title }}
                          <span class="use-text-subtitle2">
                            {{ content[Math.abs(currentImg) % content.length].subtitle }}
                          </span>
                        </h1>
                        <article class="desc">
                          <p class="use-text-paragraph">
                            {{ content[Math.abs(currentImg) % content.length].desc }}
                          </p>
                        </article>
                      </div>
                    </v-col>
                    <v-col sm="6" cols="12">
                      <section class="image">
                        <figure>
                          <img
                            :src="content[Math.abs(currentImg) % content.length].image"
                            :alt="content[Math.abs(currentImg) % content.length].title"
                          />
                        </figure>
                        <article class="btn-area">
                          <v-btn href="link.blogDetail" size="large" color="black">
                            {{ $t('blockchain.event_stories') }}
                          </v-btn>
                        </article>
                      </section>
                    </v-col>
                  </v-row>
                </div>
              </div>
            </transition-group>
            <a
              href="javascript:void(0)"
              class="prev"
              @click="prev"
            >
              <v-icon>mdi-arrow-left</v-icon>
            </a>
            <a
              href="javascript:void(0)"
              class="next"
              @click="next"
            >
              <v-icon>mdi-arrow-right</v-icon>
            </a>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss" scoped>
@import './event-slider-style.scss';
</style>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import imgAPI from '@/assets/images/imgAPI';
import link from '@/assets/text/link';
import ParallaxTitle from '../../Title/ParallaxTitle';
import Hidden from '../../Utils/Hidden';

const content = [
  {
    image: imgAPI.photosL[3],
    subtitle: 'Vivamus sit amet',
    title: 'The Lorem Ipsum Dolor Sit',
    rating: 5,
    duration: '2h 15m',
    desc: 'Vestibulum faucibus eget erat eget pretium. Donec commodo convallis eget suscipit orci.'
  },
  {
    image: imgAPI.photosP[16],
    subtitle: 'Vivamus sit amet',
    title: 'The Lorem Ipsum Dolor Sit',
    rating: 5,
    duration: '2h 15m',
    desc: 'Vestibulum faucibus eget erat eget pretium. Donec commodo convallis eget suscipit orci.'
  },
  {
    image: imgAPI.photosP[20],
    subtitle: 'Vivamus sit amet',
    title: 'The Lorem Ipsum Dolor Sit',
    rating: 5,
    duration: '2h 15m',
    desc: 'Vestibulum faucibus eget erat eget pretium. Donec commodo convallis eget suscipit orci.'
  },
  {
    image: imgAPI.photosL[4],
    subtitle: 'Vivamus sit amet',
    title: 'The Lorem Ipsum Dolor Sit',
    rating: 5,
    duration: '2h 15m',
    desc: 'Vestibulum faucibus eget erat eget pretium. Donec commodo convallis eget suscipit orci.'
  }
];

const transition = ref('');
const autoplay = ref(null);
const currentImg = ref(0);
  
function playSlider() {
  autoplay.value = setInterval(() => {
    currentImg.value += 1;
    transition.value = 'slide-up';
  }, 15000);
}

function manualPlay() {
  clearInterval(autoplay.value);
  setTimeout(() => {
    playSlider();
  }, 1);
}
  
onMounted(() => {
  playSlider();
});

onBeforeUnmount(() => {
  clearInterval(autoplay.value);
});

function next() {
  manualPlay();
  currentImg.value += 1;
  transition.value = 'slide-up';
}
  
function prev() {
  manualPlay();
  currentImg.value -= 1;
  transition.value = 'slide-down';
}

function swipeLeft() {
  next();
}

function swipeRight() {
  prev();
}
</script>
