<template>
  <div class="root">
    <title-main
      :text="$t('wallet.testi_title')"
      align="center"
    />
    <p class="use-text-subtitle2 text-center">
      {{ $t('wallet.testi_desc') }}
    </p>
    <div class="slider-wrap">
      <div v-if="loaded" class="carousel">
        <v-btn
          size="small"
          class="nav prev"
          elevation="0"
          @click="slickPrev()"
        >
          <i class="ion-ios-arrow-back" />
        </v-btn>
        <splide
          ref="slider"
          :options="slickOptions"
        >
          <splide-slide
            v-for="(item, index) in testiContent"
            :key="index"
          >
            <div class="item">
              <testi-card
                :text="item.text"
                :name="item.name"
                :title="item.title"
                :img="item.img"
              />
            </div>
          </splide-slide>
        </splide>
        <v-btn
          size="small"
          class="nav next"
          elevation="0"
          @click="slickNext()"
        >
          <i class="ion-ios-arrow-forward" />
        </v-btn>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './testi-style.scss';
</style>

<script setup>
import { onMounted, ref } from 'vue';
import { useRtl } from 'vuetify';
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import TitleMain from '../../Title';
import TestiCard from '../../Cards/Testimonial/TestiCard';
import imgAPI from '@/assets/images/imgAPI';

const testiContent = [
  {
    img: imgAPI.avatar[18],
    text:
      'Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam nec ex aliquet, aliquam neque non.',
    name: 'John Doe',
    title: 'Chief Digital Officer'
  },
  {
    img: imgAPI.avatar[26],
    text:
      'Vestibulum sit amet tortor sit amet libero lobortis semper at et odio. In eu tellus tellus. Pellentesque ullamcorper aliquet ultrices. Aenean facilisis vitae purus facilisis semper. Nam vitae scelerisque lorem, quis tempus libero.',
    name: 'Jean Doe',
    title: 'Chief Digital Officer'
  },
  {
    img: imgAPI.avatar[15],
    text:
      'Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.',
    name: 'Jena Doe',
    title: 'Graphic Designer'
  },
  {
    img: imgAPI.avatar[23],
    text: 'Sed imperdiet enim ligula, vitae viverra justo porta vel.',
    name: 'Jack Doe',
    title: 'Senior Graphic Designer'
  },
  {
    img: imgAPI.avatar[24],
    text:
      'Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.',
    name: 'James Doe',
    title: 'CEO Software House'
  },
  {
    img: imgAPI.avatar[16],
    text:
      'Vestibulum sit amet tortor sit amet libero lobortis semper at et odio. In eu tellus tellus. Pellentesque ullamcorper aliquet ultrices. Aenean facilisis vitae purus facilisis semper. Nam vitae scelerisque lorem, quis tempus libero.',
    name: 'Jovelin Doe',
    title: 'Senior Graphic Designer'
  }
];

const { isRtl } = useRtl();

const loaded = ref(false);

const slider = ref(null);
const slickOptions = ref({
  pagination: true,
  type: 'loop',
  speed: 500,
  autoplay: true,
  interval: 7000,
  perPage: 3,
  perMove: 1,
  arrows: false,
  pauseOnHover: true,
  direction: 'ltr',
  reducedMotion: {
    speed: 500,
    rewindSpeed: 1000,
  },
  breakpoints: {
    1300: {
      perPage: 2,
    },
    960: {
      perPage: 1,
    },
  },
});

onMounted(() => {
  loaded.value = true;
  setTimeout(() => {
    if (isRtl.value) {
      slickOptions.value.direction = 'rtl';
    } else {
      slickOptions.value.direction = 'ltr';
    }
  }, 100);
});

function slickNext() {
  slider.value.go('>');
}
  
function  slickPrev() {
  slider.value.go('<');
}

</script>
