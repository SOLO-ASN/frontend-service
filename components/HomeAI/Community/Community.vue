<template>
  <v-container class="root">
    <div class="px-3">
      <parallax-title
        :bgTitle="$t('ai-landing.community_bgtitle')"
        :mainTitle="$t('ai-landing.cta_title')"
        :color="currentTheme === 'dark' ? 'triple-dark' : 'triple-light'"
      />
      <p class="use-text-subtitle2 text-center px-15">
        {{ $t('ai-landing.community_desc') }}
      </p>
    </div>
    <div>
      <div class="circle-group">
        <div
          v-for="(item, index) in communityData"
          :key="index"
        >
          <div
            data-aos="zoom-in"
            :data-aos-delay="(200 * index)"
            :data-aos-offset="isDesktop ? 50 : -500"
            data-aos-duration="500"
          >
            <div
              :class="['fill-'+item.color, item.type]"
              :style="{top: item.y+'px', left: item.x+'px'}"
              class="circle"
            >
              <svg :style="{transform: 'rotate('+item.rotate+'deg)'}">
                <use :xlink:href="'/images/decoration/circle-'+item.type+'.svg#main'" />
              </svg>
              <a v-ripple href="javascipt:void(0)" class="paper">
                <i :class="item.icon" />
                <h6>
                  {{ item.name }}
                </h6>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </v-container>
</template>

<style lang="scss" scoped>
@import './community-style.scss';
</style>

<script setup>
import { onMounted } from 'vue';
import { useTheme, useDisplay } from 'vuetify';
import AOS from 'aos';
import ParallaxTitle from '../../Title/ParallaxTitle';

const communityData = [
  {
    icon: 'ion-logo-github',
    name: 'Github',
    type: 'large',
    color: 'primary',
    rotate: -90,
    x: 0,
    y: 0
  },
  {
    icon: 'ion-md-send',
    name: 'telegram',
    type: 'medium',
    color: 'secondary',
    rotate: 0,
    x: 320,
    y: 10
  },
  {
    icon: 'ion-logo-twitter',
    name: 'twitter',
    type: 'medium',
    color: 'secondary',
    rotate: 180,
    x: 40,
    y: 315
  },
  {
    icon: 'ion-md-mail',
    name: 'Mailinglist',
    type: 'small',
    color: 'accent',
    rotate: 180,
    x: 275,
    y: 295
  },
  {
    icon: 'ion-logo-reddit',
    name: 'reddit',
    type: 'large',
    color: 'primary',
    rotate: 120,
    x: 425,
    y: 303
  },
  {
    icon: 'ion-logo-facebook',
    name: 'facebook',
    type: 'medium',
    color: 'secondary',
    rotate: 80,
    x: 748,
    y: 277
  },
  {
    icon: 'ion-logo-youtube',
    name: 'YouTube',
    type: 'small',
    color: 'accent',
    rotate: 120,
    x: 580,
    y: 100
  },
  {
    icon: 'ion-md-wifi',
    name: 'podcast',
    type: 'small',
    color: 'accent',
    rotate: -60,
    x: 720,
    y: 10
  },
  {
    icon: 'ion-md-chatboxes',
    name: 'discord',
    type: 'large',
    color: 'primary',
    rotate: 0,
    x: 873,
    y: 0
  }
];

const { name: currentTheme } = useTheme();
const { lgAndUp: isDesktop } = useDisplay();

onMounted(() => {
  AOS.init({
    once: true,
  });
});
</script>
