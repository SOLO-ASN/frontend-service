<template>
  <div class="root">
    <title-main
      :text="$t('ai-landing.news_title')"
      align="center"
    />
    <p class="use-text-subtitle2 text-center">
      {{ $t('ai-landing.news_desc') }}
    </p>
    <div v-if="loaded" class="carousel">
      <splide :options="settings">
        <splide-slide
          v-for="(item, index) in newsContent"
          :key="index"
        >
          <div class="item">
            <news-card
              :img="item.img"
              :title="item.text"
              headline="headline"
              orientation="portrait"
              type="over"
              :href="link.blogDetail"
            />
          </div>
        </splide-slide>
      </splide>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './news-event-style.scss';
</style>

<script setup>
import { ref, onMounted } from 'vue';
import { useRtl } from 'vuetify';
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import imgAPI from '@/assets/images/imgAPI';
import link from '@/assets/text/link';
import TitleMain from '../../Title';
import NewsCard from '../../Cards/Post/NewsCard';

const newsContent = [
  {
    text: 'Sed imperdiet enim ligula.',
    img: imgAPI.photosL[1],
    subTitle: 'caption_news',
  },
  {
    text: 'Sed imperdiet enim ligula, vitae viverra justo porta vel. Duis eget felis bibendum, pretium mi sed, placerat ante.',
    img: imgAPI.photosL[2],
    subTitle: 'caption_news',
  },
  {
    text: 'Sed imperdiet enim ligula, vitae viverra justo porta vel. Duis eget felis bibendum, pretium mi sed, placerat ante.',
    img: imgAPI.photosL[3],
    subTitle: 'caption_event',
  },
  {
    text: 'Sed imperdiet enim ligula, vitae viverra justo porta vel. Duis eget felis bibendum, pretium mi sed, placerat ante.',
    img: imgAPI.photosL[4],
    subTitle: 'caption_news',
  },
  {
    text: 'Sed imperdiet enim ligula, vitae viverra justo porta vel. Duis eget felis bibendum, pretium mi sed, placerat ante.',
    img: imgAPI.photosL[5],
    subTitle: 'caption_event',
  },
  {
    text: 'Sed imperdiet enim ligula, vitae viverra justo porta vel. Duis eget felis bibendum, pretium mi sed, placerat ante.',
    img: imgAPI.photosL[6],
    subTitle: 'caption_news',
  },
];

const { isRtl } = useRtl();
const loaded = ref(false);
const settings = ref({
  pagination: true,
  type: 'loop',
  speed: 500,
  perPage: 4,
  arrows: false,
  direction: 'ltr',
  reducedMotion: {
    speed: 500,
    rewindSpeed: 1000,
  },
  breakpoints: {
    800: {
      perPage: 3,
      perMove: 1,
    },
    600: {
      perPage: 2,
      perMove: 1,
      autoWidth: true
    },
  },
});

onMounted(() => {
  loaded.value = true;
  setTimeout(() => {
    if (isRtl.value) {
      settings.value.direction = 'rtl';
    } else {
      settings.value.direction = 'ltr';
    }
  }, 100);
});
</script>
