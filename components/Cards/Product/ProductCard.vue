<template>
<a v-ripple :href="href" class="product-card">
  <v-card :class="[orientation, type]">

    <div class="head">
      <div class="avatar-group">
        <v-avatar
          v-for="(item, index) in avatars"
          class="avatar"
          :image="item"
          :key="index"
          alt="avatar"
        />
      </div>
      <v-chip class="like">
        <v-icon>mdi-heart-outline</v-icon>&nbsp;125
      </v-chip>
    </div>
    <figure>
      <img :src="img" :alt="title">
    </figure>
    <div class="desc">
      <div class="text">
        <h6 class="pb-2 text-truncate">
          {{ title }}
        </h6>
        <p v-if="price > 0" class="price">
          {{ price }}
          ETH
        </p>
      </div>
      <div>
        <div class="property">
          <p class="use-text-paragraph">
            {{ desc }}
          </p>
          <div v-if="rating > 0" class="rating">
            <v-icon>mdi-star</v-icon>
            {{ rating }}
          </div>
        </div>
        <v-btn
          @click.stop="handleButtonClick($event)"
          block
          class="button"
          variant="outlined"
          :color="currentTheme === 'dark' ? 'secondary' : 'primary'"
        >
          {{ $t('Follow') }}
        </v-btn>
      </div>
    </div>
  </v-card>
  </a>
</template>

<style lang="scss" scoped>
@import './product-card';
</style>

<script setup>
import { useTheme } from 'vuetify';
import imgAPI from '@/assets/images/imgAPI';
import axios from 'axios';


// 这个方法将在点击按钮时调用，而不是跳转页面
const handleButtonClick = async (event) => {
  event.preventDefault(); // 阻止链接默认行为，即使你移除了 href
  // 实现 API 请求逻辑
  try {
    const response = await axios.get('/api/path-to-detail');
    console.log(response.data);
    // 根据返回数据执行后续操作，比如打开对话框显示详情
  } catch (error) {
    console.error('请求详情失败', error);
  }
};

const avatars = [
  imgAPI.avatar[7],
  imgAPI.avatar[2],
  imgAPI.logos[4],
  imgAPI.avatar[4],
];

const {
  img, title, desc,
  orientation, type, rating,
  price, href
} = defineProps({
  type: {
    type: String,
    default: 'full', // available props: full, rounded, over, oval
  },
  img: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    default: 0,
  },
  price: {
    type: Number,
    default: 0,
  },
  orientation: {
    type: String,
    default: 'portrait',
  },
  href: {
    type: String,
    default: '#',
  },
});

const { name: currentTheme } = useTheme();
</script>
