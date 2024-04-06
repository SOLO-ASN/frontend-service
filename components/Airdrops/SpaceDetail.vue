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

              <v-row>
                <v-col cols="12" sm="3">
                  <v-card class="info-block" outlined tile>
                    <div class="title">Followers</div>
                    <div class="content">
                      <span class="number">318,943</span>
                      <span class="hashtag">#16</span>
                    </div>
                  </v-card>
                </v-col>
                <v-col cols="12" sm="3">
                  <v-card class="info-block" outlined tile>
                    <div class="title">Token</div>
                    <div class="content">
                      <v-icon>mdi-currency-usd</v-icon>
                      <span>GAL</span>
                    </div>
                  </v-card>
                </v-col>
                <v-col cols="12" sm="3">
                  <v-card class="info-block" outlined tile>
                    <div class="title">Backer</div>
                    <div class="content">
                      <!-- Assume you have custom icons or images -->
                      <v-icon>mdi-account-multiple-outline</v-icon>
                    </div>
                  </v-card>
                </v-col>
                <v-col cols="12" sm="3">
                  <v-card class="info-block" outlined tile>
                    <div class="title">My Points</div>
                    <div class="content">
                      <v-icon>mdi-star-outline</v-icon>
                    </div>
                  </v-card>
                </v-col>
              </v-row>

            </v-row>
        </h4>
      </div>
    </v-col>
  </v-row>
  
</template>

<style lang="scss" scoped>
@import './space-detail.scss';
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


.info-block {
  background-color: rgba(255, 255, 255, 0.08); /* 卡片背景色更深，半透明 */
  border: 1px solid rgba(255, 255, 255, 0.2); /* 细边框，半透明白色 */
  border-radius: 8px; /* 圆角边框 */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px;
  margin: 8px; /* 添加边距，避免卡片相互挨着 */
}

.title {
  font-size: 14px;
  color: #aaa; /* 标题颜色稍微亮一些 */
}

.content {
  display: flex;
  align-items: center;
  color: #fff; /* 内容颜色设置为白色 */
}

.number {
  font-size: 24px;
  margin-right: 8px;
}

.hashtag {
  font-size: 12px;
  color: #aaa;
}

v-icon {
  margin-right: 4px;
  color: #fff; /* 图标颜色设置为白色 */
}

</style>

<script setup>
import { ref, onMounted } from 'vue';
import { useDisplay, useTheme } from 'vuetify';
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import imgAPI from '@/assets/images/imgAPI';
import Tag from '@/components/Airdrops/Tag';
import Readmore from '@/components/Airdrops/readmore';
import Statistic from '@/components/Airdrops/Statistic';
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
