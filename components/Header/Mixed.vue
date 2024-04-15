<template>
  <v-navigation-drawer
    v-if="isTablet"
    v-model="openNavMobile"
    fixed
    temporary
    class="mobile-nav"
    location="right"
    width="300"
  >
    <mobile-menu
      :menu-primary="menu"
      :menu-secondary="samplePages"
      :prefix="prefix"
    />
  </v-navigation-drawer>
  <v-app-bar
    v-scroll="handleScroll"
    :class="{ fixed: fixed, 'open-side-nav': openNavMobile }"
    class="header"
    fixed
    dense
    app
    height="auto"
  >
    <v-container>
      <div class="header-content">
        <nav class="nav-menu">
          <div class="logo">
            <a :href="link.explore">
              <logo type="landscape" />
            </a>
          </div>
          <div v-if="isDesktop" class="main-menu">
            <header-menu
              :menu-primary="menu"
              :menu-secondary="samplePages"
              :active-menu="activeMenu"
              :single-nav="home"
              :prefix="prefix"
            />
          </div>
          <user-menu />
          <v-btn
            v-if="isTablet"
            :class="{ 'is-active': openNavMobile }"
            class="hamburger hamburger--spin mobile-menu"
            icon
            small
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
</template>

<style lang="scss" scoped>
@import './header-style.scss';
</style>

<script setup>
import { ref, onMounted } from 'vue';
import { useDisplay } from 'vuetify'
import link from '@/assets/text/link';
import Logo from '../Branding/Logo';
import UserMenu from './TopNav/UserMenu';
import HeaderMenu from './TopNav/MixedNav';
import MobileMenu from './SideNav/MixedMobile';
import samplePages from './data/sample-pages';

let counter = 0;
function createData(name, href, offset) {
  counter += 1;
  return {
    id: counter,
    name,
    link: href,
    offset,
  };
}

const { home, menu, prefix } = defineProps({
  home: {
    type: Boolean,
    default: false,
  },
  menu: {
    type: Array,
    required: true,
  },
  prefix: {
    type: String,
    required: true,
  },
});

const fixed = ref(false);
const sections = ref({});
const activeMenu = ref('');
const openNavMobile = ref(null);

const { mdAndDown: isTablet } = useDisplay();
const { lgAndUp: isDesktop } = useDisplay();

onMounted(() => {
  const section = document.querySelectorAll('.scroll-nav-content > *');
  Array.prototype.forEach.call(section, (e) => {
    sections.value[e.id] = e.offsetTop;
  });
});

function handleScroll() {
  const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
  const topPosition = scrollPosition + 100;

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

function handleToggleOpen() {
  openNavMobile.value = !openNavMobile.value;
}
</script>
