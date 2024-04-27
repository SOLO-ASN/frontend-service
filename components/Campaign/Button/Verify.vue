<template>
  <v-container class="root">
    <v-row :class="{ 'spacing-4': !isMobile }" class="mt-3">


            <div
              data-aos="fade-left"
              data-aos-offset="100"
              data-aos-delay="1100"
              data-aos-duration="500"
            >
              <arrow-button @click="checkTweet" style="width: 100%;" color="primary" :text="'Verify'"/>
            </div>


    </v-row>
  </v-container>
</template>

<style lang="scss" scoped>
@import './services-style.scss';
</style>

<script setup>
import { onMounted, defineProps } from 'vue';
import { useDisplay } from 'vuetify';
import AOS from 'aos';
import axios from 'axios';
//import cheerio from 'cheerio';
import imgAPI from '@/assets/images/imgAPI';
import link from '@/assets/text/link';
import ArrowButton from './Standard';
import SingleCard from '../../Cards/Apps/SingleCard';
import TitleMain from '../../Title';
import { useRouter } from 'vue-router';

const router = useRouter();
const { smAndDown: isMobile } = useDisplay();
const { sm: isTablet } = useDisplay();

const props = defineProps({
  link: String
})

const checkTweet = async () => {
  console.log(props.link);
  const tweetId = extractTweetId(props.link);
  // 使用 crossorigin.me 作为 CORS 代理

  // 获取当前网页的URL
  const url = window.location.href
  const params = url.split('?')[1]
  const searchParams = new URLSearchParams(params)
  const campaignId = searchParams.get('id')
  // 验证成功返回原来的campaign页面
  let route = { path: './campaign', query: { id: campaignId } };
  // 导航到对应的网页
  router.push(route);
}

// 从推特分享链接中提取推文 ID
const extractTweetId = (tweetUrl) => {
  // 从链接中提取最后一个斜杠后的字符串作为推文 ID
  const parts = tweetUrl.split('/');
  return parts[parts.length - 1];
}

onMounted(() => {
  AOS.init({
    once: true,
  });
});
</script>