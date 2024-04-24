<template>
  <v-row :class="isDesktop ? 'spacing6' : 'spacing2'" justify="start">
    <v-col md="71" sm="7" cols="12">
      <div class="text1">
        <h4 class="use-text-title2">
          <v-row>
            <v-col>
              <span class="use-text-subtitle use-text-secondary-color">
                {{ props.taskDetail.space }}
                <v-icon v-if="props.taskDetail.isVerified == true" size="x-small">mdi-check-decagram</v-icon>
              </span>
            </v-col>
            <v-col>
              <div class="options">
                <v-btn size="small" icon><v-icon>mdi-headset</v-icon></v-btn>
                <v-btn size="small" icon><v-icon>mdi-twitter</v-icon></v-btn>
                <v-btn size="small" icon><v-icon>mdi-star</v-icon></v-btn>
                <v-btn size="small" icon><v-icon>mdi-dots-horizontal</v-icon></v-btn>
              </div>  
            </v-col>
          </v-row>
          {{ props.taskDetail.name }}
        </h4>
        <div class="property">
          <i class="ion-md-contacts" />
          &nbsp;
          1.0K
          <template v-if="isDesktop">Participants</template>
          &nbsp;&nbsp;
          <i class="ion-md-eye" />
          &nbsp;
          168K
          <template v-if="isDesktop">Views</template>
          &nbsp;&nbsp;
          <i class="ion-md-star" />
          &nbsp;
          1.4K
          <template v-if="isDesktop">Favorites</template>
        </div>

        <div class="text2">
          <h5>
            {{ props.taskDetail.description }}
          </h5>
        </div>

        <section class="btn-area">
          <div class="price">
            <p>Event Validity Period:</p>
            <h3 class="use-text-primary">
              {{ props.taskDetail.startTime }} - {{ props.taskDetail.endTime }}
              <span>{{ props.taskDetail.timeZone }}</span>
            </h3>
          </div>
        </section>

      </div>
    </v-col>

  </v-row>
</template>

<style lang="scss" scoped>
@import './product-style.scss';
</style>

<script setup>
import { ref, onMounted, defineProps } from 'vue';
import { useDisplay, useTheme } from 'vuetify';
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import imgAPI from '@/assets/images/imgAPI';

const props = defineProps({
  taskDetail: Object
})

const loaded = ref(false);
const visible = ref(false);
const index = ref(0);

const imgs = [
  imgAPI.photosP[7],
  imgAPI.photosS[6],
  imgAPI.photosS[7],
  imgAPI.photosS[8],
  imgAPI.photosP[22],
  imgAPI.photosP[23]
]

const slickOptions = {
  pagination: true,
  arrows: false,
  perPage: 1,
  direction: 'ltr',
  reducedMotion: {
    autoplay: true,
    speed: 500,
    rewindSpeed: 1000,
  },
};

const { mdAndUp: isDesktop } = useDisplay();
const { name: currentTheme } = useTheme();

onMounted(() => {
  loaded.value = true;
});

function showImg(idx) {
  index.value = idx;
  visible.value = true;
}

function handleHide() {
  visible.value = false;
}

</script>
