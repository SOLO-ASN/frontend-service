<template>
  <vue-easy-lightbox
    v-if="loaded"
    :visible="visible"
    :imgs="imgs"
    :index="index"
    @hide="handleHide"
  />

  <v-row v-if="detailData" :class="[isDesktop ? 'spacing' : 'spacing3', 'align-start']" justify="center">
    <v-col lg="4" md="5" sm="5" cols="12" class="pa-md-0">
        <img
          :src="detailData.thumbnail"
          class="image-detail"
        />
    </v-col>
    <v-col md="7" sm="7" cols="12">
      <div class="text">
        <div class="options">
        <v-btn
          v-if=detailData.facebook
          :href="detailData.facebook"
          target="_blank"
          variant="text"
          icon
          class="button"
        >
          <span class="ion-logo-facebook icon" />
        </v-btn>
        <v-btn
          v-if=detailData.twitter
          :href="detailData.twitter"
          target="_blank"
          variant="text"
          icon
          class="button"
        >
          <span class="ion-logo-twitter icon" />
        </v-btn>
        <v-btn
          v-if=detailData.github
          :href="detailData.github"
          target="_blank"
          variant="text"
          icon
          class="button"
        >
          <span class="ion-logo-github icon" />
        </v-btn>
        <v-btn 
          icon 
          v-if=detailData.discord
          :href="detailData.discord"
          target="_blank"
          variant="text"
          class="button"
          >
          <v-icon>mdi-comment</v-icon>
        </v-btn>
        <v-btn 
          icon 
          v-if=detailData.homepage
          :href="detailData.homepage"
          target="_blank"
          variant="text"
          class="button"
          >
          <v-icon>mdi-home</v-icon>
        </v-btn>
        
        </div>
        <h4 class="use-text-title2">
          <span class="use-text-subtitle use-text-secondary-color">
            {{detailData.name}}
            <v-icon size="x-small">mdi-check-decagram</v-icon>
            <v-btn
              @click="onButtonClick"
              :class="{ 'btn-following': isFollowing, 'btn-not-following': !isFollowing }"
              :color="currentTheme === 'dark' ? 'secondary' : 'primary'"
              variant="tonal"
            >
              {{ $t('+ follow') }}
            </v-btn>
          </span>
            
          <div class="left-align">
            <tag :categories="detailData.categories"/>
          </div>
        </h4>
        <div class="property">
          <i class="ion-md-star" />
          &nbsp;
          4.5 &nbsp;&nbsp;
          <i class="ion-md-contacts" />
          &nbsp;
          1.0K
          <template v-if="isDesktop">Owners</template>
          &nbsp; &nbsp;
          <i class="ion-ios-apps" />
          &nbsp;
          17
          <template v-if="isDesktop">Items</template>
          &nbsp;&nbsp;
          <i class="ion-md-eye" />
          &nbsp;
          168K
          <template v-if="isDesktop">Views</template>
          &nbsp;&nbsp;
          <i class="ion-md-heart" />
          &nbsp;
          1.4K
          <template v-if="isDesktop">Favorites</template>
        </div>
        <div class="counter-wrap">
          <count-down
            :miliseconds="30000000"
            mini
            :info="$t('list_sale_ends') + ' Nov 24, 2022 at 3:50 AM GMT+7'"
          />
        </div>
      </div>
      <v-row class="justify-start">
        <div class="left-align">
          <readmore :info="detailData.info"/>
        </div>    
        <div class="spacer"></div>
      </v-row>
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

.v-icon {
  margin-right: 4px;
  color: #fff; /* 图标颜色设置为白色 */
}

.image-detail {
  width: 300px; /* 或者你需要的任何尺寸 */
  height: 100px; /* 宽度和高度相同，以创建一个完美的圆形 */
  border-radius: 50%; /* 设置边框半径为50%来创建圆形 */
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
