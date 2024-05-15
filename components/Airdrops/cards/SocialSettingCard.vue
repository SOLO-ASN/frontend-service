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

import {reactive, ref} from "vue";

import f from '@/public/social/social_discord_icon.svg';

const socialTags = ref([]);
const rowsListing = ref([]);
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
const userEmail = ref( "" );
const userEmailCode = ref( "" );
function sendEmailCode() {
  //todo send code to the email
}

function verifyEmail(){
  //todo send email and code to backend
  console.log(userEmail.value);
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

  const entries = socialTags.value.map((value, index) => {
    return [value.name, false];
  });
  dialog.activeHolder = Object.fromEntries(entries);
  console.log(dialog.activeHolder);

})

</script>
