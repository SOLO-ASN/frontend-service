<template>
  <v-card class="img-thumb" >

    <h3 style="color: #4d59d5;"> Social Accounts </h3>

    <v-container style="display: initial">
      <h4 style="font-size: 12px;"> Email Address (Only visible to you) </h4>

      <div style="margin-top: 10px">
        <v-text-field v-model="userEmail" label="Enter Email" type="email" >
          <template v-slot:append>
            <span style="color: #4d59d5;" @click="sendEmailCode"><strong>Send a code</strong></span>
          </template>
<!--          <span style="color: #1a237e;" @click="sendEmailCode">Send a code</span>-->
        </v-text-field>
<!--        <span style="color: #1a237e;" @click="sendEmailCode"><strong>Send a code</strong></span>-->
        <v-text-field v-model="userEmailCode" label="Enter Code" type="email" >

          <!--          <span style="color: #1a237e;" @click="sendEmailCode">Send a code</span>-->
        </v-text-field>
        <v-btn @click="verifyEmail" style="width: 100%"> Verify </v-btn>
      </div>

      <h4 style="font-size: 12px; margin-top: 30px;"> Link your social tags </h4>

      <div
          v-for="(item, index) in socialTags"
          :key="index"
          style="margin: 15px 0 15px"
      >
        <v-btn style="border-radius: 8px; color: #4d59d5;" @click="verifyEmail">
          <span> <img :src="`/${item.path}`" width="20px" height="20px"/>  </span>
          Connect {{item.name}} Account
        </v-btn>

      </div>

    </v-container>

  </v-card>
</template>

<style lang="scss" scoped>
@import './token-card.scss';

.icon {
  width: auto;
  height: 40px;
  max-width: 100%;
  max-height: 100%;
}

</style>

<script setup>

import {ref} from "vue";

import f from '@/public/social/social_discord_icon.svg';

const rowsListing = ref([]);
function createListing(name, path) {
  return {
    name, path
  };
}

const userEmail = ref( "" );
const userEmailCode = ref( "" );
function sendEmailCode() {
  //todo send code to the email
}

function verifyEmail(){
  //todo send email and code to backend
}


const socialTags = ref([]);


onMounted(() => {

  socialTags.value = [
      createListing("X", "social/social_twitter_icon.png"),
      createListing("Telegram", "social/social_telegram_icon.png"),
      createListing("Discord", "social/social_discord_icon.png"),
      createListing("Github", "social/social_github_icon.png"),
  ]
})

</script>
