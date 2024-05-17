<template>
  <div>
    <div
      v-for="(taskitem, index) in props.taskList.list"
      :id="'topic'+index"
      :key="index"
      class="accordion"
      :class="index <= 1 ? 'mt-0' : ''"
    >
      <h4 class="use-text-subtitle mb-10">
        {{ taskitem.credentialGroup.description }}
      </h4>
      <v-expansion-panels
        v-model="taskitem.credentialGroup.panel"
        active-class="expanded"
      >
        <v-expansion-panel
          v-for="(item, number) in taskitem.credentialGroup.creds"
          :key="number"
          class="paper"
        >
          <v-expansion-panel-title class="content">
            <span :style="{ transform: taskitem.credentialGroup.panel === number ? 'rotate(180deg)' : '' }">
                <!--任务图标-->
                <v-icon v-if="item.credType == 'TWITTER_TWEET'" class="mr-1 ml-1" >mdi-twitter</v-icon>
                <v-icon v-if="item.credType == 'TWITTER_FOLLOW'" class="mr-1 ml-1" >mdi-twitter</v-icon>
                <v-icon v-if="item.credType == 'TWITTER_LIKE'" class="mr-1 ml-1" >mdi-twitter</v-icon>
                <v-icon v-if="item.credType == 'TWITTER_RETWEET'" class="mr-1 ml-1" >mdi-twitter</v-icon>
                <v-icon v-if="item.credType == 'TELEGRAM'" class="mr-1 ml-1" >mdi-send</v-icon>
                <v-icon v-else class="mr-1">mdi-earth</v-icon>
            </span>
            <span class="heading">
              {{ item.name }}
            </span>
          </v-expansion-panel-title>
          <v-expansion-panel-text class="detail">
            <span class="flex-container">
              <span class="ml-11">
                {{ item.description }}
              </span>
              <!--网页跳转任务-->
              <v-btn v-if="item.credType==='WEB_BROWSE'" @click="togglePanel('WEB_BROWSE', item.referenceLink)">Get it done</v-btn>
              <!--telegram任务-->
              <v-icon v-if="item.credType==='TELEGRAM'" @click="refreshTask('TELEGRAM', item)">mdi-refresh</v-icon>
              <v-btn v-if="item.credType==='TELEGRAM'" class="ml-3" @click="togglePanel('TELEGRAM', item)">Get it done</v-btn>
              <!--twitter任务-->
              <v-btn v-if="item.credType==='TWITTER_TWEET'" @click="togglePanel('TWITTER_TWEET', props.taskList.id)">Get it done</v-btn>
              <v-btn v-if="item.credType==='TWITTER_FOLLOW'" @click="togglePanel('TWITTER_FOLLOW', item.referenceLink)">Get it done</v-btn>
              <v-btn v-if="item.credType==='TWITTER_LIKE'" @click="togglePanel('TWITTER_LIKE', item.referenceLink)">Get it done</v-btn>
              <v-btn v-if="item.credType==='TWITTER_RETWEET'" @click="togglePanel('TWITTER_RETWEET', item.referenceLink)">Get it done</v-btn>
            </span>
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './faq-style.scss';
</style>

<script setup>
import { defineProps } from 'vue';
import axios from 'axios';
import url from '@/assets/text/url';
import { useRouter } from 'vue-router';

const router = useRouter();
// for server request use
const SERVER = url.serverUrl;

const togglePanel = (type, parameter) => {
  // jump to the right page based on the type of credential
  let route;
  switch (type) {
    case 'WEB_BROWSE':
      window.open(parameter, '_blank');
      break;
    case 'TELEGRAM':
      window.open(parameter.referenceLink, '_blank');
      break;
    // todo refactor: we are here cause we are not bind twitter account with our account
    case 'TWITTER_TWEET':
      route = { path: './campaign-twitter', query: { id: parameter } };
      router.push(route);
      break;
    case 'TWITTER_FOLLOW':
      const screenName = parameter.split('follow?screen_name=')[1];
      const tweetUlr = `https://twitter.com/intent/follow?screen_name=${screenName}`;
      window.open(tweetUlr, '_blank');
      break;
    case 'TWITTER_LIKE':
      const tweetId = parameter.split('like?tweet_id=')[1];
      const likeUrl = `https://twitter.com/intent/like?tweet_id=${tweetId}`;
      window.open(likeUrl, '_blank');
      break;
    case 'TWITTER_RETWEET':
      const reTweetId = parameter.split('retweet?tweet_id=')[1];
      const retweetUrl = `https://twitter.com/intent/retweet?tweet_id=${reTweetId}`;
      window.open(retweetUrl, '_blank');
      break;
    default:
      route = { path: '/', query: { number: parameter } };
      router.push(route);
  }
};

const refreshTask = (type, parameter) => {
  // 读取username
  const username = localStorage.getItem('username');
  switch (type) {
    case 'TELEGRAM':
      // 用户要先登录
      if(!username) {
        alert('Please log in first!');
        break;
      }
      // 登录后
      axios.post(SERVER+'/api/campaign/telegramisFollow', {"CampaignId": props.taskList.id, "CredentialId": parameter.id, "Username": username}).then((response) => {
        console.log(response);
        // 用户没有加入
        if(response.data.data == "NO_FOLLLOW") {
          alert('This mission wasn\'t accomplished.');
        } else if(response.data.data == "Follow Success") {
          alert('This mission was accomplished.');
        } else {
          alert('Something was Something went wrong, please try again later.');
        }
      })
      break;
  }
}

const props = defineProps({
  taskList: Array
})

const isMobile = () => {
  return display.value.smAndDown;
};

</script>
