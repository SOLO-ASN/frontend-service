<template>
  <v-container class="root">
    <v-row :class="{ 'spacing-4': !isMobile }" class="mt-md-10">
      <v-col md="8" cols="12">  
      </v-col>
      <v-col md="4" cols="12">
          <v-col md="12" sm="6" cols="12">
            <div
              data-aos="fade-left"
              data-aos-offset="100"
              data-aos-delay="1100"
              data-aos-duration="500"
            >
              <arrow-button color="primary" 
                            :text="'Tasks Incomplete'" 
                            @click="refreshTask"/>
            </div>
          </v-col>
      </v-col>
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
import axios from 'axios';
import url from '@/assets/text/url';

const { smAndDown: isMobile } = useDisplay();
const { sm: isTablet } = useDisplay();
// for server request use
const SERVER = url.serverUrl;

const refreshTask = () => {
  // 读取username
  const username = localStorage.getItem('username');
  // 用户要先登录
  if(!username) {
    alert('Please log in first!');
  }
  console.log(username);
  // 获取campaignID
  const url = window.location.href
  const params = url.split('?')[1]
  const searchParams = new URLSearchParams(params)
  const campaignId = searchParams.get('id')
  console.log(campaignId);
  // 登录后
  axios.post(SERVER+'/api/campaign/isComplete', {"Campaigid": campaignId, "username": username}).then((response) => {
    console.log(response);
    // 用户没有加入
        if(response.data.data == "NOT_COMPLETE") {
          alert('This campaign wasn\'t accomplished.');
        } else if(response.data.data == "COMPLETE") {
          alert('This campaign was accomplished.');
        } else {
          alert('Something was Something went wrong, please try again later.');
        }
  })
}


onMounted(() => {
  AOS.init({
    once: true,
  });
});
</script>