<template>
  <v-card class="img-thumb" >
    <div :class="size" class="profile-card">
      <v-row >
        <v-col sm="4">
          <div class="avatar">
            <figure>
              <img alt="avatar" src="https://source.boringavatars.com/marble/120/ + {{name}}"/>
            </figure>
          </div>
        </v-col>

        <v-col sm="8">
        <div class="profile-setting-image-text" >
          <h2> {{name}} </h2>
          <p class="desc" style="font-size: 12px">We recommend an image of at least 300x300. Gifs work too. Max 5mb.</p>
        </div>
        </v-col>
      </v-row>


      <div>
        <v-text-field v-model="username">
          <template v-slot:label > Enter New Username... </template>
        </v-text-field>
        <v-btn @click="saveUsername"> Save </v-btn>
      </div>
    </div>
  </v-card>
</template>

<style lang="scss" scoped>
@import './token-card.scss';
@import './profile-deco-card';

.profile-setting-image-text {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
}

.icon {
  width: auto;
  height: 40px;
  max-width: 100%;
  max-height: 100%;
}

</style>

<script setup>

import {ref} from "vue";
import link from '@/assets/text/link';
import imgAPI from '@/assets/images/imgAPI';
import ProfileCard from '~/components/Airdrops/cards/ProfileCard';
import Search from "~/components/Filter/Search.vue";

import axios from 'axios';
import url from '@/assets/text/url';

// for server request use
const SERVER = url.serverUrl;

const {avatar, name, desc, cover, socmed, size} = defineProps({
  avatar: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  cover:{
    type: String,
    required: true,
  },
  socmed:{
    type: Array,
    required: true,
  },
  size: {
    type: String,
    default: 'small',
  },
})

let username = name;

function saveUsername() {
  axios.post(SERVER + '/api/user/changeUsername', {
    newName: username
  }).then(res => {
      // handle success message

  }).catch(err => {
    // handle error message
  });
}

onMounted(() => {

})

</script>
