<template>
  <v-card
    :class="[orientation, type]"
    class="post-card mx-auto"
    max-width="1000"
  >
    <div class="figure">
      <v-img
        :src="img"
        class="white--text"
        :height="isDesktop ? 200 : 140"
        cover
      />
    </div>
    <div :class="{ 'ps-0': orientation === 'landscape' && type !== 'over' }" class="properties">
      <v-card-subtitle class="head-line">
        {{ headline }}
      </v-card-subtitle>
      <span v-if="date" class="date">{{ date }}</span>
      <div class="use-text-subtitle2 news-title">
        {{ title }}
      </div>
      <v-card-actions class="mb-3">
        <v-btn
          :size="orientation === 'landscape' ? 'small' : 'regular'"
          :href="href"
          variant="text"
          class="action-btn"
          color="secondary"
          size="small"
        >
          {{ $t('btn_read_more') }}
        </v-btn>
      </v-card-actions>
    </div>
  </v-card>
</template>

<style scoped lang="scss">
@import './news-card.scss';
</style>

<script setup>
import { useDisplay } from 'vuetify';

const { lgAndUp: isDesktop } = useDisplay();

const {
  img, title, headline,
  orientation, type, href,
} = defineProps({
  img: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    default: null,
  },
  headline: {
    type: String,
    default: 'news',
  },
  orientation: {
    type: String,
    default: 'portrait',
  },
  type: {
    type: String,
    default: 'over', // available props: full, rounded, over, oval
  },
  href: {
    type: String,
    default: '#',
  },
})
</script>
