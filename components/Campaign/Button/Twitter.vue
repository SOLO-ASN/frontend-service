<template>
  <v-container class="root">
    <v-row :class="{ 'spacing-4': !isMobile }" class="mt-md-10">


            <div
              data-aos="fade-left"
              data-aos-offset="100"
              data-aos-delay="1100"
              data-aos-duration="500"
            >
              <arrow-button @click="openTweetDialog" style="width: 100%;" color="primary" :text="'Twitter'"/>
            </div>


    </v-row>
  </v-container>
</template>

<style lang="scss" scoped>
@import './services-style.scss';
</style>

<script setup>
import { onMounted } from 'vue';
import { useDisplay } from 'vuetify';
import AOS from 'aos';
import imgAPI from '@/assets/images/imgAPI';
import link from '@/assets/text/link';
import ArrowButton from './Standard';
import SingleCard from '../../Cards/Apps/SingleCard';
import TitleMain from '../../Title';

const { smAndDown: isMobile } = useDisplay();
const { sm: isTablet } = useDisplay();

const openTweetDialog = () => {
  // 推文内容
  const tweetText = "This is the content of the tweet to be sent.";

  // 创建推文 URL
  const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`;

  // 打开推文对话框，指定窗口大小和其他参数
  const windowFeatures = 'width=400,height=600,toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no';
  window.open(tweetUrl, 'Twitter Dialog', windowFeatures);
}

onMounted(() => {
  AOS.init({
    once: true,
  });
});
</script>