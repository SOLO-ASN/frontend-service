<template>
  <div class="root">
    <v-container>
      <v-row>
        <v-col lg="7" md="12" cols="12">
          <title-main
            :align="isDesktop ? 'left' : 'center'"
            :text="$t('profile.testi_title')"
          />
        </v-col>
      </v-row>
    </v-container>
    <div class="carousel">
      <splide ref="slider" @splide:active="handleAfterChange" :options="settings">
        <splide-slide
          v-for="(item, index) in testiContent"
          :key="index"
        >
          <div class="item">
            <rating-card
              :avatar="item.avatar"
              :title="item.title"
              :name="item.name"
              :text="item.text"
              :star="item.rating"
            />
          </div>
        </splide-slide>
        <splide-slide>
          <div class="item">
            <div class="item-prop-last" />
          </div>
        </splide-slide>
      </splide>
    </div>
    <div class="floating-artwork">
      <v-container class="fixed-width">
        <div class="artwork">
          <slider-art :fade="fade">
            <div
              data-aos="fade-left"
              data-aos-offset="-60"
              data-aos-delay="300"
              data-aos-duration="500"
            >
              <div class="avatar-art">
                <v-avatar style="top: 20px; left: 440px; width: 64px; height: 64px" class="avatar" :image="imgAPI.avatar[30]" alt="decoration" />
                <v-avatar style="top: 120px; left: 280px; width: 48px; height: 48px" class="avatar" :image="imgAPI.avatar[11]" alt="decoration" />
                <v-avatar style="top: 150px; left: 440px; width: 32px; height: 32px" class="avatar" :image="imgAPI.avatar[33]" alt="decoration" />
                <v-avatar style="top: 280px; left: 300px; width: 64px; height: 64px" class="avatar" :image="imgAPI.avatar[28]" alt="decoration" />
                <v-avatar style="top: 260px; left: 500px; width: 64px; height: 64px" class="avatar" :image="imgAPI.avatar[32]" alt="decoration" />
              </div>
            </div>
          </slider-art>
        </div>
      </v-container>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './testi-style.scss';
</style>

<script setup>
import { ref, onMounted } from 'vue';
import { useDisplay, useRtl } from 'vuetify';
import AOS from 'aos';
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import imgAPI from '@/assets/images/imgAPI';
import Hidden from '../../Utils/Hidden';
import TitleMain from '../../Title';
import RatingCard from '../../Cards/Testimonial/RatingCard';
import SliderArt from '../SliderArt';

const testiContent = [
  {
    text: 'Sed imperdiet enim ligula, vitae viverra justo porta vel.',
    avatar: imgAPI.avatar[10],
    name: 'John Doe',
    title: 'Chief Digital Officer',
    rating: 5
  },
  {
    text: 'Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.',
    avatar: imgAPI.avatar[1],
    name: 'Jean Doe',
    title: 'Chief Digital Officer',
    rating: 4
  },
  {
    text: 'Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.',
    avatar: imgAPI.avatar[2],
    name: 'Jena Doe',
    title: 'Graphic Designer',
    rating: 4
  },
  {
    text: 'Sed imperdiet enim ligula, vitae viverra justo porta vel.',
    avatar: imgAPI.avatar[3],
    name: 'Jovelin Doe',
    title: 'Senior Graphic Designer',
    rating: 3
  },
  {
    text: 'Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.',
    avatar: imgAPI.avatar[4],
    name: 'Jihan Doe',
    title: 'CEO Software House',
    rating: 5
  },
  {
    text: 'Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.',
    avatar: imgAPI.avatar[6],
    name: 'Jovelin Doe',
    title: 'Senior Graphic Designer',
    rating: 5
  },
  {
    text: 'Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.',
    avatar: imgAPI.avatar[7],
    name: 'John Doe',
    title: 'Senior Graphic Designer',
    rating: 4
  },
  {
    text: 'Sed imperdiet enim ligula, vitae viverra justo porta vel.',
    avatar: imgAPI.avatar[10],
    name: 'John Doe',
    title: 'Chief Digital Officer',
    rating: 5
  },
  {
    text: 'Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.',
    avatar: imgAPI.avatar[1],
    name: 'Jean Doe',
    title: 'Chief Digital Officer',
    rating: 4
  },
];

const loaded = ref(false);
const fade = ref(false);
const edge = ref(testiContent.length - 4);
const slider = ref(null);

const { lgAndUp: isDesktop } = useDisplay();
const { isRtl } = useRtl();

const settings = ref({
  pagination: false,
  speed: 500,
  perPage: 4,
  perMove: 1,
  direction: 'ltr',
  arrows: false,
  autoWidth: true,
  breakpoints: {
    1100: {
      pagination: false,
      perPage: 3,
    },
    800: {
      perPage: 2,
    },
    400: {
      perPage: 1,
    },
  },
});

function handleAfterChange(slide) {
  const edge = testiContent.length - 4;
  if (slide.index <= edge.value) {
    fade.value = true;
  } else {
    fade.value = false;
  }
}

onMounted(() => {
  loaded.value = true;
  AOS.init({
    once: true,
  });

  setTimeout(() => {
    const prop = window.innerWidth > 1400 ? 0 : 1; // div.carousel-props length for screen < 1400px and (-1) for screen > 1400px
    const lastSlide = Math.floor(testiContent.length + prop - settings.value.perPage);
    if (window.innerWidth > 1200) {
      slider.value.go(lastSlide);
      edge.value = testiContent.length - 5;
    }

    if (isRtl.value) {
      settings.value.direction = 'rtl';
    } else {
      settings.value.direction = 'ltr';
    }
  }, 200);
});
</script>
