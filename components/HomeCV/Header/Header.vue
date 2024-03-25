<template>
  <div>
    <v-app-bar
      id="header"
      v-scroll="handleScroll"
      :class="{ fixed: invert || fixed, 'open-drawer': openDrawer }"
      class="header"
      app
      elevation="0"
    >
      <v-container>
        <div class="header-content">
          <nav
            :class="{ invert: invert }"
            class="nav-logo nav-menu"
          >
            <div class="logo">
              <a
                v-smooth-scroll="{ offset: 100 }"
                href="#home"
                class="anchor-link scrollactive-item"
              >
                <logo type="landscape" :size="isMobile ? 'small' : 'medium'" />
              </a>
            </div>
            <setting-menu :invert="invert" />
            <v-btn
              :class="{ 'is-active': openDrawer }"
              class="hamburger hamburger--spin mobile-menu"
              variant="text"
              icon
              @click.stop="handleToggleOpen"
            >
              <span class="hamburger-box">
                <span class="bar hamburger-inner" />
              </span>
            </v-btn>
          </nav>
        </div>
      </v-container>
    </v-app-bar>
    <transition name="fade">
      <div v-if="openDrawer" class="paper-nav">
        <div class="mobile-nav">
          <v-container class="max-md">
            <v-row class="spacing6">
              <v-col sm="6">
                <div class="root-menu">
                  <hidden point="mdDown">
                    <h5 class="name-deco">
                      EXPLORE
                    </h5>
                  </hidden>
                  <ul class="menu">
                    <li
                      v-for="(item, index) in menu"
                      :key="index"
                      :style="{ 'animation-duration': index * 0.15 + 's' }"
                    >
                      <v-btn
                        :href="item.url"
                        :class="{ active: activeMenu === item.name }"
                        variant="text"
                        @click="scrollToMyEl(item.name)"
                        v-text="$t('avatar.header_'+item.name)"
                      />
                    </li>
                  </ul>
                </div>
              </v-col>
              <v-col sm="6">
                <div class="detail">
                  <hidden point="mdDown">
                    <h5 class="name-deco">
                      CONTACT
                    </h5>
                  </hidden>
                  <div class="logo-name">
                    <h3 class="use-text-title">
                      {{ brand.name }}
                    </h3>
                    <h4 class="use-text-subtitle">
                      {{ brand.title }}
                    </h4>
                  </div>
                  <div class="socmed">
                    <v-btn icon small class="margin">
                      <i class="ion-logo-facebook fb" />
                    </v-btn>
                    <v-btn icon small class="margin">
                      <i class="ion-logo-linkedin in" />
                    </v-btn>
                    <v-btn icon small class="margin">
                      <i class="ion-logo-twitter tw" />
                    </v-btn>
                    <v-btn icon small class="margin">
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
                      {{ $t('blog_subscribe') }}
                      <br>
                      @jenadoe
                    </p>
                  </div>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </div>
      </div>
    </transition>
  </div>
</template>

<style lang="scss" scoped>
@import './header-style.scss';
</style>

<script setup>
import { ref, inject, onMounted } from 'vue';
import { useDisplay } from 'vuetify';
import brand from '@/assets/text/brand';
import { useRouter } from '#app';
import Logo from '../../Branding/Logo';
import Hidden from '../../Utils/Hidden';
import SettingMenu from '../../Header/TopNav/Settings';

const { invert, menu } = defineProps({
  invert: {
    type: Boolean,
    default: false,
  },
  menu: {
    type: Array,
    required: true,
  },
});

const openDrawer = ref(false);

const smoothScroll = inject('smoothScroll');

function scrollToMyEl(elemId) {
  const myEl = document.getElementById(elemId);
  const router = useRouter();
  openDrawer.value = false;

  router.push(`#${elemId}`);
  smoothScroll({
    scrollTo: myEl, // scrollTo is also allowed to be number
    hash: `#${elemId}`, // required if updateHistory is true
    offset: -50,
  });
}

function handleToggleOpen() {
  openDrawer.value = !openDrawer.value;
}

const loaded = ref(false);
const show = ref(false);
const fixed = ref(false);
const activeMenu = ref(false);
const sections = ref({});

const { mdAndDown: isMobile } = useDisplay();
const { mdAndUp: isDesktop } = useDisplay();

onMounted(() => {
  loaded.value = true;
  const id = window.location.hash;
  const content = id.replace('#', '');
  const element = document.getElementById(content);
  if (element) {
    element.scrollIntoView();
  }

  const section = document.querySelectorAll('.scroll-nav-content > *');
  Array.prototype.forEach.call(section, (e) => {
    sections.value[e.id] = e.offsetTop;
  });
});

function handleScroll() {
  const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
  const topPosition = scrollPosition + 50;

  Object.keys(sections.value).forEach((i) => {
    if (sections.value[i] <= topPosition) {
      activeMenu.value = i;
    }
  });

  if (scrollPosition > 70) {
    fixed.value = true;
  } else {
    fixed.value = false;
  }
}
</script>
