<template>
  <div>
    <div class="main-wrap">
      <main-header home :menu="singleMenu.inner" />
      <blue-gradient />
      <div class="container-wrap container-wrap">
        <div class="inner-page">
          <div class="mt-5">
            <section id="banner">
              <profile-banner
                :avatar="imgAPI.avatar[31]"
                :cover="imgAPI.photosL[34]"
                :name="brand.profileName"
                :desc="brand.profileTitle2"
                :following="123"
                :followers="456"
                :posts="78"
                :socmed="['facebook', 'twitter', 'linkedin', 'instagram']"
                :friends="[imgAPI.avatar[10], imgAPI.avatar[11], imgAPI.avatar[3], imgAPI.avatar[4], imgAPI.logos[12], imgAPI.avatar[20], imgAPI.logos[8], imgAPI.avatar[1], imgAPI.avatar[3]]"
              >
                <template v-slot:decoration>
                  <parallax-deco type="scroll" />
                </template>
              </profile-banner>
            </section>
          </div>
          <v-container>
            <v-row class="spacing2">
              <v-col class="px-0" md="8" cols="12">
                <gallery />
              </v-col>
              <v-col class="px-6" md="4" cols="12">
                <sidebar />
              </v-col>
            </v-row>
          </v-container>
        </div>
      </div>
      <footer-deco>
        <main-footer />
      </footer-deco>
      <hidden point="smDown">
        <corner :menu="singleMenu.inner" />
      </hidden>
      <hidden point="mdDown">
        <notification />
      </hidden>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/scss/pages';
</style>

<script setup>
import { useDisplay } from 'vuetify';
import MainHeader from '@/components/Header';
import BlueGradient from '@/components/Artworks/BlurGradient';
import ProfileBanner from '@/components/HeroBanner/ProfileBanner';
import ParallaxDeco from '@/components/Parallax3d/Snail';
import Gallery from '@/components/Company/Team/Gallery';
import Sidebar from '@/components/Company/Team/Sidebar';
import MainFooter from '@/components/Footer';
import FooterDeco from '@/components/Footer/Decoration/General';
import Hidden from '@/components/Utils/Hidden';
import Corner from '@/components/Utils/Corner';
import Notification from '@/components/Notification';
import singleMenu from '@/components/Header/data/single';
import brand from '@/assets/text/brand';
import link from '@/assets/text/link';
import imgAPI from '@/assets/images/imgAPI';
import { useHead } from '#app';

useHead({
  title: brand.name + ' - Profile',
});

const { smAndUp: isTablet } = useDisplay();
</script>
