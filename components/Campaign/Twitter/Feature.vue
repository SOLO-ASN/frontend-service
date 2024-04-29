<template>
  <div class="root">
    <v-container :class="{ 'fixed-width': isDesktop }">
      <title-main :text="'Connect Twitter Account'" align="center" />
      <div class="mt-sm-15 pt-sm-15 px-md-5">

        <div class="item-text">
          <v-row :class="isTablet ? 'spacing4' : 'spacing2'" align="center">
            <v-col class="px-sm-8" md="6" sm="8" cols="12">
              <div class="px-lg-4 desc">
                <title-secondary
                  :text="'Step 1'"
                  color="secondary"
                  :align="isMobile ? 'center' : 'left'"
                />
                <p class="use-text-subtitle2" :class="isMobile ? 'text-center' : 'text-first'">
                  Please click this button below and tweet a verification message on Twitter
                </p>

                <section id="twitter" style="width: 100%;">
                  <tweet
                      :tweet-content='getTweetMessage()'
                  />
                </section>

              </div>
            </v-col>
            <v-col class="px-sm-8" md="6" sm="4" cols="12">
              <div class="px-md-5">
                <div
                  data-aos="fade-right"
                  data-aos-offset="200"
                  data-aos-delay="500"
                  data-aos-duration="500"
                >
                  <div :class="isMobile ? 'text-center' : 'text-start'">

                      <img :src="step1" alt="twitter-step1" style="width: 85%; height: auto;"/>

                  </div>
                </div>
              </div>
            </v-col>
          </v-row>
        </div>

        <div class="item-text">
          <v-row :class="isTablet ? 'spacing4' : 'spacing2'" align="center">
            <v-col class="px-sm-8" md="6" sm="8" cols="12">
              <div class="px-lg-4 desc">
                <title-secondary
                  :text="'Step 2'"
                  color="secondary"
                  :align="isMobile ? 'center' : 'left'"
                />
                <p class="use-text-subtitle2" :class="isMobile ? 'text-center' : 'text-first'">
                  On your tweet, find the share button. Copy link and paste it here. Click the button to verify your account
                </p>

                <div cols="12" sm="12" class="pt-9 px-0 pr-10">
                  <v-text-field
                      v-model="link"
                      :rules="linkRules"
                      :label="'Please enter your share link? *'"
                      required
                      color="secondary"
                      variant="filled"
                  />
                </div>


                <section id="verify" style="width: 100%;">

                  <verify
                      :input-url="link"
                  />
                </section>

              </div>
            </v-col>
            <v-col class="px-sm-8" md="6" sm="4" cols="12">
              <div class="px-md-5">
                <div
                  data-aos="fade-right"
                  data-aos-offset="200"
                  data-aos-delay="500"
                  data-aos-duration="500"
                >
                  <div :class="isMobile ? 'text-center' : 'text-start'">

                    <img :src="step2" alt="twitter-step2" style="width: 85%; height: auto;"/>

                  </div>
                </div>
              </div>
            </v-col>
          </v-row>
        </div>

      </div>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import './services-style.scss';
@import '@/assets/scss/pages';
</style>

<script setup>
import { ref, onMounted } from 'vue';
import AOS from 'aos';
import { useDisplay } from 'vuetify';
import TitleMain from '../../Title';
import Icons3d from '../../Icons3d';
import TitleSecondary from '../../Title/TitleSecondary';
import step1 from '@/assets/images/twitter-step1.png';
import step2 from '@/assets/images/twitter-step2.png';
import Tweet from '@/components/Campaign/Button/Tweet';
import Verify from '@/components/Campaign/Button/Verify';

const { lgAndUp: isDesktop } = useDisplay();
const { smAndUp: isTablet } = useDisplay();
const { xs: isMobile } = useDisplay();

let link = ref('');
const linkRules = [v => !!v || 'Link is required'];

function getTweetMessage() {
  // todo refactor
  return 'Verifying my Twitter account for my #SoloMissionID\nsid:8qDNZNN4apHmjc5n7orXMX\r@SoloMission\n';
}

onMounted(() => {
  AOS.init({
    once: true,
  });
});
</script>
