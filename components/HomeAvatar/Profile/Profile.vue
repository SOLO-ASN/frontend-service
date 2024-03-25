<template>
  <div class="root">
    <v-container :class="[isMobile ? 'max-sm' : 'max-lg']">
      <v-row>
        <v-col lg="1" cols="12" class="pa-0" />
        <v-col lg="11" cols="12" class="pa-0">
          <div class="about">
            <div class="reward">
              <div class="item">
                <figure>
                  <img src="/images/profile/reward1.svg" alt="badge" />
                </figure>
                <p class="use-text-paragraph">
                  Special Mention
                </p>
                <h5 :class="isTablet ? 'use-text-paragraph' : 'use-text-subtitle'">
                  Awards
                </h5>
              </div>
              <div class="item">
                <figure>
                  <img src="/images/profile/reward2.svg" alt="badge" />
                </figure>
                <p class="use-text-paragraph">
                  100k videos
                </p>
                <h5 :class="isTablet ? 'use-text-paragraph' : 'use-text-subtitle'">
                  Subscriber
                </h5>
              </div>
              <div class="item">
                <figure>
                  <img src="/images/profile/reward3.svg" alt="badge" />
                </figure>
                <p class="use-text-paragraph">
                  Best Filmography
                </p>
                <h5 :class="isTablet ? 'use-text-paragraph' : 'use-text-subtitle'">
                  Footage
                </h5>
              </div>
            </div>
            <hidden point="mdUp">
              <div class="mt-10">
                <h6 class="use-text-subtitle2">
                  {{ $t('avatar.banner_desc') }}
                </h6>
                <div class="socmed">
                  <v-btn icon variant="text" small class="margin">
                    <i class="ion-logo-facebook" />
                  </v-btn>
                  <v-btn icon variant="text" small class="margin">
                    <i class="ion-logo-twitter " />
                  </v-btn>
                  <v-btn icon variant="text" small class="margin">
                    <i class="ion-logo-instagram" />
                  </v-btn>
                  <v-btn icon variant="text" small class="margin">
                    <i class="ion-logo-linkedin" />
                  </v-btn>
                </div>
              </div>
            </hidden>
            <div class="photo">
              <figure class="avatar">
                <img :src="imgAPI.profile[1]" alt="avatar" />
              </figure>
              <v-card class="live-paper">
                <v-row class="spacing2 align-center mb-2">
                  <v-col cols="4">
                    <figure>
                      <img :src="imgAPI.photosL[4]" alt="content" />
                    </figure>
                  </v-col>
                  <v-col cols="8">
                    <h6 class="use-text-subtitle2 font-weight-medium">Lorem ipsum dolor sit amet consectetur</h6>
                    <div class="live">
                      <strong>
                        <span />
                        &nbsp;
                        Live
                      </strong>
                      450 watching
                    </div>
                  </v-col>
                </v-row>
                <v-btn class="btn" block size="large" color="secondary">
                  {{ $t('avatar.btn_watch') }}
                </v-btn>
              </v-card>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import './profile-style.scss';
</style>

<script setup>
import { useDisplay } from 'vuetify';
import imgAPI from '@/assets/images/imgAPI';
import Hidden from '../../Utils/Hidden';
import brand from '@/assets/text/brand';

const { smAndDown: isMobile } = useDisplay();
const { lgAndDown: isTablet } = useDisplay();
const { mdAndUp: isDesktop } = useDisplay();
</script>
