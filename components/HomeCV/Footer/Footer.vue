<template>
  <div class="root">
    <parallax-full-big />
    <v-container class="max-lg" tag="footer">
      <v-row :class="{ 'column-reverse': isMobile }">
        <v-col cols="12" md="5">
          <div
            data-aos="fade-right"
            data-aos-offset="-200"
            data-aos-delay="200"
            data-aos-duration="300"
          >
            <div>
              <div class="logo">
                <logo type="only" size="large" />
                <h3 class="use-text-title2 text-uppercase">
                  {{ brand.name }}
                </h3>
                <h4 class="use-text-subtitle2">
                  {{ brand.title }}
                </h4>
              </div>
              <div class="socmed">
                <v-btn variant="text" icon small class="margin">
                  <i class="ion-logo-facebook fb" />
                </v-btn>
                <v-btn variant="text" icon small class="margin">
                  <i class="ion-logo-linkedin id" />
                </v-btn>
                <v-btn variant="text" icon small class="margin">
                  <i class="ion-logo-twitter tw" />
                </v-btn>
                <v-btn variant="text" icon small class="margin">
                  <i class="ion-logo-instagram ig" />
                </v-btn>
              </div>
              <div class="contact">
                <p class="use-text-paragraph">
                  {{ $t('blog_phone') }}
                  <br>
                  +12 345 678 90
                </p>
                <v-divider class="divider" />
                <p class="use-text-paragraph">
                  {{ $t('header_contact') }}
                  <br>
                  jenadoe.skype
                </p>
              </div>
            </div>
          </div>
        </v-col>
        <v-col cols="12" md="7">
          <div
            data-aos="fade-left"
            data-aos-offset="-100"
            data-aos-delay="200"
            data-aos-duration="300"
          >
            <div>
              <contact-form />
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style scoped lang="scss">
@import './footer-style';
</style>

<script setup>
import { onMounted } from 'vue';
import { useDisplay } from 'vuetify';
import AOS from 'aos';
import ParallaxFullBig from '../Parallax/ParallaxFullBig';
import Logo from '../../Branding/Logo';
import brand from '@/assets/text/brand';
import ContactForm from '../Contact/Form';

const { smAndDown: isMobile } = useDisplay();

onMounted(() => {
  AOS.init({
    once: true,
  });
});
</script>
