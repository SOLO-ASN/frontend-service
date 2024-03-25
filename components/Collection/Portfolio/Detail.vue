<template>
  <div class="root" v-scroll="runCounter">
    <article class="article">
      <section class="socmed-share">
        <div class="btn-area">
          <v-btn icon>
            <i class="ion-logo-linkedin indigo-btn" />
          </v-btn>
          <v-btn icon>
            <i class="ion-logo-pinterest red-btn" />
          </v-btn>
          <v-btn icon>
            <i class="ion-logo-facebook blue-btn" />
          </v-btn>
          <v-btn icon>
            <i class="ion-logo-twitter cyan-btn" />
          </v-btn>
          <v-btn icon>
            <i class="ion-ios-mail" />
          </v-btn>
          <v-btn icon>
            <i class="ion-md-link" />
          </v-btn>
        </div>
        <h6 class="subtitle">
          Share
        </h6>
      </section>
      <div class="content">
        <div class="mb-5">
          <v-tabs
            v-model="tab"
            class="tabs"
            :align-tabs="isMobile ? 'center' : 'left'"
          >
            <v-tab class="tab-label" value="summary" @click="handleChange('summary')">
              <span>Summary</span>
            </v-tab>
            <v-tab class="tab-label" value="gallery" @click="handleChange('gallery')">
              <span>Gallery</span>
            </v-tab>
            <v-tab class="tab-label" value="specs" @click="handleChange('specs')">
              <span>Specs</span>
            </v-tab>
          </v-tabs>
          <v-btn
            v-if="isDesktop"
            size="large"
            class="ms-2"
            variant="tonal"
            color="primary"
          >
            {{ $t('btn_visit') }}
          </v-btn>
        </div>
        <div id="summary">
          <h3 class="use-text-title2">{{ $t('login_create') }}</h3>
          <p class="my-4">Curabitur blandit tempus porttitor. Nullam quis risus eget urna mollis ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit. Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
          <div class="my-6">
            <h5 class="mb-1 d-flex align-center use-text-subtitle use-text-primary">
              <v-icon size="small" class="icon me-1">mdi-fullscreen</v-icon>
              {{ $t('login_remember') }}
            </h5>
            <p>Nam suscipit lacus pulvinar elementum condimentum. Cras tristique rhoncus placerat. Sed eros nulla, porta vel porttitor nec, ultrices in ligula. Nam viverra urna in feugiat ultricies.</p>
          </div>
          <div class="my-6">
            <h5 class="mb-1 d-flex align-center use-text-subtitle use-text-primary">
              <v-icon size="small" class="icon me-1">mdi-pencil-ruler</v-icon>
              {{ $t('continue') }}
            </h5>
            <p>Nam suscipit lacus pulvinar elementum condimentum. Cras tristique rhoncus placerat. Sed eros nulla, porta vel porttitor nec, ultrices in ligula. Nam viverra urna in feugiat ultricies.</p>
          </div>
          <div class="my-6">
            <h5 class="mb-1 d-flex align-center use-text-subtitle use-text-primary">
              <v-icon size="small" class="icon me-1">mdi-code-tags</v-icon>
              {{ $t('form_send') }}
            </h5>
            <p>Nam suscipit lacus pulvinar elementum condimentum. Cras tristique rhoncus placerat. Sed eros nulla, porta vel porttitor nec, ultrices in ligula. Nam viverra urna in feugiat ultricies.</p>
          </div>
        </div>
      </div>
    </article>
    <div class="content">
      <div class="my-5">
        <quote-card
          :avatar="imgAPI.avatar[36]"
          text="Praesent commodo cursus magna, vel scelerisque nisl consectetur et."
          name="Jena Doe"
          title="Client"
        />
      </div>
      <v-divider class="divider" />
      <div id="gallery">
        <mini-gallery />
      </div>
    </div>
    <v-divider class="divider" />
    <div
      data-aos="fade-in"
      data-aos-offset="-100"
      data-aos-delay="400"
      data-duration-delay="300"
      ref="wrapper"
    >
      <v-row id="specs" class="counter" :class="isMobile ? 'spacing2' : 'spacing6'">
        <v-col class="px-6" sm="6" cols="5">
          <div class="d-sm-flex align-end justify-end">
            <h2 :class="currentTheme === 'dark' ? 'use-text-grd-triple-light' : 'use-text-grd-triple-dark'">
              <count-up
                v-if="visible"
                :start-val="0"
                :end-val="20"
              />
            </h2>
            <p class="use-text-subtitle2">
              Grid
            </p>
          </div>
        </v-col>
        <v-col class="px-6" sm="6" cols="5">
          <div class="d-sm-flex align-end">
            <h2 :class="currentTheme === 'dark' ? 'use-text-grd-triple-light' : 'use-text-grd-triple-dark'">
              <count-up
                v-if="visible"
                :start-val="0"
                :decimal-places="1"
                :end-val="1.8"
              />
            </h2>
            <p class="use-text-subtitle2">
              x Faster
            </p>
          </div>
        </v-col>
        <v-col class="px-6" sm="6" cols="5">
          <div class="d-sm-flex align-end justify-end">
            <h2 :class="currentTheme === 'dark' ? 'use-text-grd-triple-light' : 'use-text-grd-triple-dark'">
              <count-up
                v-if="visible"
                :start-val="0"
                :end-val="170"
              />
            </h2>
            <p class="use-text-subtitle2">
              Colors
            </p>
          </div>
        </v-col>
        <v-col class="px-6" sm="6" cols="5">
          <div class="d-sm-flex align-end">
            <h2 :class="currentTheme === 'dark' ? 'use-text-grd-triple-light' : 'use-text-grd-triple-dark'">
              <count-up
                v-if="visible"
                :start-val="0"
                :end-val="2.5"
                :decimal-places="1"
              />
            </h2>
            <p class="use-text-subtitle2">
              x Thinner
            </p>
          </div>
        </v-col>
      </v-row>
    </div>
    <v-divider class="divider" />
    <div v-if="isMobile" class="share-mobile">
      <h6 class="use-text-subtitle text-center">
        {{ $t('blog_share') }}
      </h6>
      <div class="btn-area">
        <div class="d-flex justify-center my-3">
          <v-btn icon>
            <i class="ion-logo-linkedin indigo-btn" />
          </v-btn>
          <v-btn icon>
            <i class="ion-logo-pinterest red-btn" />
          </v-btn>
          <v-btn icon>
            <i class="ion-logo-facebook blue-btn" />
          </v-btn>
          <v-btn icon>
            <i class="ion-ios-mail" />
          </v-btn>
          <v-btn icon>
            <i class="ion-md-link" />
          </v-btn>
        </div>
      </div>
    </div>
    <section class="content comment">
      <h3 class="use-text-subtitle2 text-center mb-5">
        {{ $t('blog_write') }}
        &nbsp;(4)
      </h3>
      <comment-form :avatar="imgAPI.avatar[6]" />
      <v-list bg-color="transparent" lines="three">
        <comment-item
          v-for="(item, index) in comments"
          :key="index"
          :avatar="item.avatar"
          :name="item.name"
          :date="item.date"
          :comment="item.comment"
          :last="index >= comments.length - 1"
        />
      </v-list>
    </section>
  </div>
</template>

<style lang="scss" scoped>
@import './detail-style.scss';
</style>

<script setup>
import { ref, inject, onMounted } from 'vue';
import { useDisplay, useTheme } from 'vuetify';
import AOS from 'aos';
import CountUp from 'vue-countup-v3';
import imgAPI from '@/assets/images/imgAPI';
import CommentForm from '../../Comment/Form';
import QuoteCard from '../../Cards/Testimonial/QuoteCard';
import CommentItem from '../../Comment/Item';
import MiniGallery from './MiniGallery';

const comments = [{
  name: 'John Doe',
  avatar: '/images/avatars/pp_boy4.svg',
  date: '13 Jan 2020',
  comment:
    'Maecenas nisl libero, id odio id, feugiat vulputate quam. Vestibulum feugiat rhoncus metus. In non erat et ipsum molestie porta sit amet ut felis. Vestibulum a massa vestibulum, gravida odio id, fringilla ipsum.'
},
{
  name: 'John Doe',
  avatar: '/images/avatars/pp_boy4.svg',
  date: '13 Jan 2020',
  comment:
    'Maecenas nisl libero, id odio id, feugiat vulputate quam. Vestibulum feugiat rhoncus metus. In non erat et ipsum molestie porta sit amet ut felis. Vestibulum a massa vestibulum, gravida odio id, fringilla ipsum.'
},
{
  name: 'John Doe',
  avatar: '/images/avatars/pp_boy4.svg',
  date: '13 Jan 2020',
  comment:
    'Maecenas nisl libero, id odio id, feugiat vulputate quam. Vestibulum feugiat rhoncus metus. In non erat et ipsum molestie porta sit amet ut felis. Vestibulum a massa vestibulum, gravida odio id, fringilla ipsum.'
},
{
  name: 'John Doe',
  avatar: '/images/avatars/pp_boy4.svg',
  date: '13 Jan 2020',
  comment:
    'Maecenas nisl libero, id odio id, feugiat vulputate quam. Vestibulum feugiat rhoncus metus. In non erat et ipsum molestie porta sit amet ut felis. Vestibulum a massa vestibulum, gravida odio id, fringilla ipsum.'
}];

const { name: currentTheme } = useTheme();
const { lgAndUp: isDesktop } = useDisplay();
const { smAndDown: isMobile } = useDisplay();

// Scroll to content
const tab = ref('summary');
const smoothScroll = inject('smoothScroll');

function handleChange(category) {
  tab.value = category;
  const myEl = document.getElementById(category);

  smoothScroll({
    scrollTo: myEl, // scrollTo is also allowed to be number
    offset: -50,
  });
}

// Counter
const play = ref(false);
const wrapper = ref(null);
const visible = ref(false);

function runCounter() {
  const rect = wrapper.value.getBoundingClientRect()
  if (rect.top < 100) {
    visible.value = true;
  }
}

onMounted(() => {
  AOS.init({
    once: true,
  });
});
</script>