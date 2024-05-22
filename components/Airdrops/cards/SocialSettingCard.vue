<template>
  <v-card class="img-thumb" >

    <h3 style="color: #4d59d5;"> Social Accounts </h3>

    <v-container style="display: initial">
      <h4 style="font-size: 12px;"> Email Address (Only visible to you) </h4>
      <div v-if="userEmail">
        <div style="margin-top: 10px">
          <v-text-field :label="userEmail" type="text" disabled> </v-text-field>
        </div>
      </div>
      <div v-else>
        <div style="margin-top: 10px">
          <v-text-field v-model="_userEmail" label="Enter Email" type="email" >
            <template v-slot:append>
              <span style="color: #4d59d5;" @click="sendEmailCode"><strong>Send a code</strong></span>
            </template>
          </v-text-field>
          <v-text-field v-model="userEmailCode" label="Enter Code" type="email" > </v-text-field>
          <v-btn @click="verifyEmail" style="width: 100%"> Verify </v-btn>
        </div>
      </div>

      <h4 style="font-size: 12px; margin-top: 30px;"> Link your social tags </h4>

      <div
          v-for="(item, index) in btnEntries"
          :key="index"
          style="margin: 15px 0 15px"
      >
        <v-dialog v-model="dialog.activeHolder[item.name]" max-width="500px">

          <template v-slot:activator="{ props: activatorProps }">
            <v-btn
                style="border-radius: 8px; color: #4d59d5;"
                @click="verifySocialTag(item.name)"
                v-bind="activatorProps"
            >
              <span> <img :src="`/${item.path}`" width="20px" height="20px"/>  </span>
              Connect {{item.name}} Account
            </v-btn>
          </template>

          <div v-if="`${dialog.currentTag}` !== 'Telegram'">
            <v-card prepend-icon="mdi-account" title="Social Tags" >
              <v-card-text>
                <v-row dense>
                  <v-col cols="12" md="12" sm="12">
                    <v-text-field :label="`${dialog.currentTag} Account*`" required></v-text-field>
                  </v-col>
                </v-row>
              </v-card-text>

              <v-divider></v-divider>

              <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn text="Close" variant="plain" @click="closeDialog"></v-btn>

                <v-btn
                    color="primary"
                    text="Save"
                    variant="tonal"
                    @click="closeDialog"
                ></v-btn>
              </v-card-actions>

            </v-card>
          </div>


        </v-dialog>
      </div>

      <div
          v-for="(item, index) in textEntries"
          :key="index"
          style="margin: 15px 0 15px"
      >
        <div style="margin-top: 10px">
          <p style="font-size: 12px; margin-top: 30px;"> {{index}} Account </p>
          <v-text-field :label="item.name" type="" :placeholder="item.name" disabled>
          </v-text-field>
        </div>

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
import {defineProps, watch, reactive, ref, onMounted} from "vue";
import url from '@/assets/text/url';
import axios from 'axios';
import {useRouter} from "#app";

const props = defineProps({
  socialAccountObject: {
    type: Object,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  userEmail: {
    type: String,
    required: false,
  }
});

const sao = ref(props.socialAccountObject);
const _username = ref(props.username);
const _userEmail = ref(props.userEmail);

// for server request use
const SERVER = url.serverUrl;

const router = useRouter();

const socialTags = ref([]);
const btnEntries = ref([]);
const textEntries = ref({});
const dialog = reactive({
  activeHolder: {},
  currentTag: null,
});

function createListing(name, path) {
  return {
    name, path
  };
}

const open = ref(false);
const userEmail = ref(props.userEmail || "");  // Ensure default value
const userEmailCode = ref("");
function sendEmailCode() {
  axios.post(SERVER + '/api/user/email/sendCode', {
    email: _userEmail.value
  }).then(res => {
    console.log(res);
  }).catch(err => {
    console.log(err);
  });
}

function verifyEmail(){
  axios.post(SERVER + '/api/user/email/verifyCode', {
    username: _username.value,
    email: _userEmail.value,
    code: userEmailCode.value
  }).then(res => {
    console.log(res);
    if (res.data.msg === "success") {
      router.push('/id/accountSettings');
    }
  }).catch(err => {
    console.error(err);
  });
}

function verifySocialTag(name) {
  if (name === "Telegram") {
    window.open('https://oauth.telegram.org/auth?bot_id=7165645088&origin=https://airdrop.aspark.space&request_access=write&return_to=https://airdrop.aspark.space/id/accountSettings', '_self', 'width=600,height=600');
    dialog.currentTag = name;
    dialog.activeHolder[name] = false;
  } else {
    dialog.currentTag = name;
    dialog.activeHolder[name] = true;
  }
}

function closeDialog() {
  console.log(dialog.activeHolder);
  dialog.activeHolder[dialog.currentTag] = false;
  console.log(dialog.activeHolder);
}

onMounted(() => {

  socialTags.value = [
    createListing("X", "social/social_twitter_icon.png"),
    createListing("Telegram", "social/social_telegram_icon.png"),
    createListing("Discord", "social/social_discord_icon.png"),
    createListing("Github", "social/social_github_icon.png"),
  ];

  for (const value of socialTags.value) {
    if (sao.value[value.name]) {
      textEntries.value[value.name] = sao.value[value.name];
    } else {
      btnEntries.value.push(value);
    }
  }

  const entries = btnEntries.value.map((value, index) => {
    return [value.name, false];
  });
  dialog.activeHolder = Object.fromEntries(entries);
});
</script>
