<template>
  <div class="main-wrap">
    <main-header :menu="singleMenu.inner" />
    <blur-gradient />

    <div class="container-front container-wrap">
      <div class="inner-page">
        <v-container>
          <detail :taskDetail="taskDetail" />
          <div class="space-top-short">
            <faq-list :taskList="taskList" />
          </div>
        </v-container>
      </div>
      
      <div>
        <main class="container-front container-wrap">
          <div class="inner-page">
            <media-banner
              :tags="taskReward"
            >
            </media-banner>
            <div>
              <section id="single" class="space-button">
                <single />
              </section>
            </div>
            <div id="gallery" class="space-photo">
              <gallery :rewardDetail="rewardDetail" />
            </div>  
          </div>
        </main>
      </div>
  
  
      <div class="space-top-short">
        <related-items />
      </div>
    </div>
  
    <div id="footer" class="space-top-short">
      <main-footer />
    </div>
  </div>
</template>
  
<style lang="scss" scoped>
@import '@/assets/scss/pages';
</style>
  
<script setup>
import MainHeader from '@/components/Header';
import BlurGradient from '@/components/Artworks/BlurGradient';
import RelatedItems from '@/components/Campaign/Product/RelatedItems';
import singleMenu from '@/components/Header/data/single';
import MainFooter from '@/components/Footer';
import FaqList from '@/components/Campaign/Faq/FaqList';
import MediaBanner from '@/components/Campaign/Reward/MediaBanner';
import Gallery from '@/components/Campaign/Reward/Gallery';
import Single from '@/components/Campaign/Button/Single';
import Detail from '@/components/Campaign/Product/Detail';
import brand from '@/assets/text/brand';
import url from '@/assets/text/url';
import { useHead } from '#app';

import axios from 'axios';
import {ref} from 'vue';

// 网页标签显示的名字
useHead({
  title: brand.name + ' - Campaign Detail',
});

// 声明传送的数据
const taskList = ref({});
const taskDetail = ref({});
const taskReward = ref({});
const rewardDetail = ref({});

// for server request use
const SERVER = url.serverUrl;

// 用于将unixTimestamp转化为2024/03/05 22:00 GMT+8的格式
function formatTimestamp(unixTimestamp) {
  const date = new Date(unixTimestamp * 1000);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');

  return `${year}/${month}/${day} ${hours}:${minutes}`;
}

// 获取时区
function getTimezone(unixTimestamp) {
  const date = new Date(unixTimestamp * 1000);
  const timezoneOffset = date.getTimezoneOffset() / -60;
  return `GMT${timezoneOffset > 0 ? '+' : '-'}${Math.abs(timezoneOffset)}`;
}

// 判断奖励优先级
function findHighestReward(input) {
  // 假设奖励全是false
  let isPoints = false;
  let isToken = false;
  let isRole = false;
  const list = input.split(" ");
  // 遍历列表中的每一项
  for(let i = 0; i < list.length; i++) {
    // 如果当前项的优先级比最高优先级的项更高，则更新最高优先级的项
    if(list[i] == "Points") {
      isPoints = true;
    }
    if(list[i] == "Role") {
      isRole = true;
    }
    if(list[i] == "Token") {
      isToken = true;
    }
  }
  // 返回优先级最高的项
  if(isToken) {
    return "Token";
  } else if(isRole) {
    return "Role";
  } else {
    return "Points";
  }
}

function splitReward(input) {
  const list = input.split(" ");
  return list
}

// 尝试在跳转到该页面时向后端获取数据来渲染页面
onMounted(() => {
  // 获取当前网页的URL
  const url = window.location.href
  const params = url.split('?')[1]
  const searchParams = new URLSearchParams(params)
  const campaignId = searchParams.get('id')
  axios.post(SERVER+'/api/campaign/query', {"id": campaignId}).then((response) => {
    //this.items = response.data
    // 将任务列表传给fap_list
    taskList.value = {
      "id": campaignId,
      "list":  response.data.data.Campaign.CredentialGroupResponses,
    }
  
    // 将活动详情传给detail
    taskDetail.value = {
      "name": response.data.data.Campaign.name,
      "description": response.data.data.Campaign.description,
      "space": response.data.data.Campaign.Space[0].name,
      "isVerified": response.data.data.Campaign.Space[0].isVerified,
      "startTime": formatTimestamp(response.data.data.Campaign.startTime),
      "endTime": formatTimestamp(response.data.data.Campaign.endTime),
      "timeZone": getTimezone(response.data.data.Campaign.endTime),
    }
    // 活动奖励的类型
    taskReward.value = splitReward(response.data.data.Campaign.rewardTypes),
    rewardDetail.value = {
      // 返回需要显示的奖励类型
      "rewardType": findHighestReward(response.data.data.Campaign.rewardTypes),
      // 返回可参加的次数???感觉按钮需要
      //"recurringType": response.data.recurringType,
      // 返回奖励详情
      "roleRward": response.data.data.Campaign.discordRole,
      "tokenReward": response.data.data.Campaign.tokenReward,
      "loyaltyPoints": response.data.data.Campaign.loyaltyPoints,
    }
    //console.info(response.data.taskList)
  })
})


</script>

