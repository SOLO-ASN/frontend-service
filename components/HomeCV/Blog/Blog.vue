<template>
  <div class="root">
    <template v-if="isTablet">
      <title-main
        :text="$t('profile.blog_title')"
        align="center"
      />
      <p class="mb-5 text-center use-text-subtitle2">
        {{ $t('profile.blog_desc') }}
      </p>
    </template>
    <div class="floating-title">
      <div class="container">
        <div class="text">
          <h3 class="use-text-title" component="h3">
            <span>#</span>
            <strong>
              {{ $t('profile.blog_title') }}
            </strong>
          </h3>
          <p gutterBottom class="use-text-subtitle2">
            {{ $t('profile.blog_desc') }}
          </p>
        </div>
      </div>
    </div>
    <div class="slider-wrap">
      <div class="carousel">
        <v-btn
          class="nav prev"
          size="large"
          icon
          @click="prev()"
          :disabled="slideCount <= 0"
        >
          <i class="ion-ios-arrow-back" />
        </v-btn>
        <splide ref="slick" @splide:active="handleAfterChange" :options="slickOptions">
          <splide-slide v-if="isDesktop">
            <div class="item item-props-first">
              <div />
            </div>
          </splide-slide>
          <splide-slide
            v-for="(item, index) in blogData"
            :key="index"
          >
            <div class="item">
              <div class="card">
                <post-card
                  :img="item.img"
                  :title="item.title"
                  :desc="item.desc"
                  :href="item.href"
                  :source="item.source"
                />
              </div>
            </div>
          </splide-slide>
          <splide-slide v-if="isDesktop">
            <div class="item item-props-last">
              <div />
            </div>
          </splide-slide>
        </splide>
        <v-btn
          class="nav next"
          @click="next()"
          size="large"
          icon
        >
          <i class="ion-ios-arrow-forward" />
        </v-btn>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './blog-style.scss';
</style>

<script setup>
import { onMounted, ref } from 'vue';
import { useRtl, useDisplay } from 'vuetify';
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import link from '@/assets/text/link';
import imgApi from '@/assets/images/imgAPI';
import TitleMain from '../../Title';
import PostCard from '../../Cards/Post/PostCard';

const blogData = [
  {
    img: imgApi.photosP[28],
    href: link.blogDetail,
    source: 'Youtube',
    title: 'Vivamus sit amet interdum elit',
    desc: 'Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat lorem ipsum'
  },
  {
    img: imgApi.photosL[30],
    href: link.blogDetail,
    source: 'Twitter',
    title: 'Vivamus sit amet interdum elit',
    desc: 'Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat lorem ipsum'
  },
  {
    img: imgApi.photosP[21],
    href: link.blogDetail,
    source: 'Behance',
    title: 'Vivamus sit amet interdum elit',
    desc: 'Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat lorem ipsum'
  },
  {
    img: imgApi.photosP[29],
    href: link.blogDetail,
    source: 'Youtube',
    title: 'Vivamus sit amet interdum elit',
    desc: 'Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat lorem ipsum'
  },
  {
    img: imgApi.photosP[14],
    href: link.blogDetail,
    source: 'Instagram',
    title: 'Vivamus sit amet interdum elit',
    desc: 'Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat lorem ipsum'
  },
  {
    img: imgApi.photosP[15],
    href: link.blogDetail,
    source: 'Youtube',
    title: 'Vivamus sit amet interdum elit',
    desc: 'Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat lorem ipsum'
  },
];

const { isRtl } = useRtl();
const { mdAndUp: isDesktop } = useDisplay();
const { smAndDown: isTablet } = useDisplay();

const slick = ref(null);
const slideCount = ref(0);

const loaded = ref(false);
const slickOptions = ref({
  pagination: false,
  speed: 500,
  perPage: 4,
  perMove: 1,
  arrows: false,
  autoWidth: true,
  direction: 'ltr',
  breakpoints: {
    1080: {
      perPage: 2,
    },
    600: {
      perPage: 1,
    },
  },
  reducedMotion: {
    speed: 500,
    rewindSpeed: 1000,
  },
});

onMounted(() => {
  setTimeout(() => {
    if (isRtl.value) {
      const lastSlide =  Math.floor(blogData.length - 1);
      slick.valie.go(lastSlide);
    }
  }, 200);
});

function handleAfterChange(slide) {
  slideCount.value = slide.index;
}

function next() {
  slick.value.go('>');
}

function prev() {
  slick.value.go('<');
}

</script>
