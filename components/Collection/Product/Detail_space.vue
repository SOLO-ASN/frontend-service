<template>
  <vue-easy-lightbox
    v-if="loaded"
    :visible="visible"
    :imgs="imgs"
    :index="index"
    @hide="handleHide"
  />
  <v-row v-if="detailData" :class="[isDesktop ? 'spacing' : 'spacing3', 'align-start']" justify="center">
    <v-col lg="2" md="5" sm="5" cols="12" >
      <v-img
        v-ripple
        cover
        :src="detailData.thumbnail"
        class="image-detail"
        height="200px"
        width="200px"
        style="border-radius: 50%;"
      />
    </v-col>
    <v-col md="6" sm="7" cols="12">
      <div class="text">
        <div class="options">
          <v-btn
              variant="text"
              icon
              class="button"
            >
              <span class="ion-logo-facebook icon" />
            </v-btn>
            <v-btn
              variant="text"
              icon
              class="button"
            >
              <span class="ion-logo-twitter icon" />
            </v-btn>
            <v-btn
              variant="text"
              icon
              class="button"
            >
              <span class="ion-logo-instagram icon" />
            </v-btn>
            <v-btn
              variant="text"
              icon
              class="button"
            >
              <span class="ion-logo-linkedin icon" />
            </v-btn>
            <v-btn size="small" icon><v-icon>mdi-share-variant</v-icon></v-btn>
          <v-btn size="small" icon><v-icon>mdi-dots-horizontal</v-icon></v-btn>
        </div>
        <h4 class="use-text-title2">
          <span class="use-text-subtitle use-text-secondary-color">
            {{detailData.name}}
            <v-icon v-if="detailData.isVerified" size="x-small" style="margin-right: 100px;">mdi-check-decagram</v-icon>
            <v-btn
              @click="onButtonClick"
              :class="{ 'btn-following': isFollowing, 'btn-not-following': !isFollowing }"
              :color="currentTheme === 'dark' ? 'secondary' : 'primary'"
              variant="tonal"
            >
              {{ $t('+ follow') }}
            </v-btn>
          </span>
            <v-row class="justify-start">
              <div class="left-align">
                <tag :categories="detailData.categories"/>
              </div>
              <div class="left-align">
                <readmore :info="detailData.info"/>
              </div>
              <div class="spacer"></div>
              <div class="left-align" >
                <statistic
                :followersCount="detailData.followersCount"
                :token="detailData.token"
                :backers="detailData.backers"
                class="statistic1" />
              </div>
            </v-row>
        </h4>
      </div>
    </v-col>
  </v-row>

</template>

<style lang="scss" scoped>
@import './product-style.scss';
.column-with-margin {
  margin-right: px;
}
.left-align {
  padding-top: 1rem;
}
.btn-following {
  background-color: black; // 这是当 isFollowing 为 true 时的按钮颜色
  color: white; // 文字颜色
}

.btn-not-following {
  background-color: blue; // 这是当 isFollowing 为 false 时的按钮颜色
  color: black; // 文字颜色
}

</style>

<script setup>
import { ref, onMounted } from 'vue';
import { useDisplay, useTheme } from 'vuetify';
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import imgAPI from '@/assets/images/imgAPI';
import CountDown from '../../Counter/Countdown';
import Tag from '@/components/Branding/Tag/Tag';
import Readmore from '@/components/Branding/Tag/readmore';
import Statistic from '@/components/Branding/Tag/Statistic';
const loaded = ref(false);
const visible = ref(false);
const index = ref(0);
const item = ref(0);
const slick = ref(null);

const {detailData} = defineProps({
  detailData: {
    type: Object,
    required: true,
  },
});

onMounted(() => {

});

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

const emit = defineEmits(['follow-click']);
const onButtonClick = () => {
  emit('follow-click', detailData.id, detailData.isFollowing); // 通知父组件，传递id
};


</script>
