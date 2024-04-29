<template>
  <v-container class="root">
    <v-row :class="{ 'spacing-4': !isMobile }" class="mt-3">


            <div
              data-aos="fade-left"
              data-aos-offset="100"
              data-aos-delay="1100"
              data-aos-duration="500"
            >
              <arrow-button style="width: 100%;" color="primary" :text="'Verify'" @click="sendVerify"/>
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
import url from '@/assets/text/url';
import axios from 'axios';

const { smAndDown: isMobile } = useDisplay();
const { sm: isTablet } = useDisplay();

// for server request use
const SERVER = url.serverUrl;

onMounted(() => {
  AOS.init({
    once: true,
  });
});

const props = defineProps({
  inputUrl: {
    type: String,
    default: '',
  }
});

// todo here we want to toast that the url is valid
let verified = ref(false);

function sendVerify() {
  // check if the tweet url is valid
  if (!isVaildTweetURL(props.inputUrl)) {
    console.log('Invalid Tweet URL', props.inputUrl);
    return;
  }

  // todo add address or jwt
  postDataToAPI(SERVER+'/api/user/checkTwitterAccount', {
    address: "",
    tweetURL: props.inputUrl,
  });
}

function postDataToAPI(url, data) {
  axios.post(url, data)
      .then((res) => {
        verified = data.verified;
      })
      .catch((err) => {
        console.log(err);
      })
}

function isVaildTweetURL(url) {
  const pattern = /^https:\/\/x\.com\/.*\/status\/.*$/;
  return pattern.test(url);
}

</script>
