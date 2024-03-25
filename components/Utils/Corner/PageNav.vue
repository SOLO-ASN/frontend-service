<template>
  <div
    v-scroll="handleScroll"
    :class="{ show: show }"
    class="page-nav"
  >
    <nav class="section-nav">
      <a
        v-for="(item, index) in menu"
        :key="index"
        v-smooth-scroll="{ offset: -50 }"
        :style="{ top: 30 * (menu.length - index) + 'px' }"
        :href="'#' + item.id"
        :class="{ active: activeMenu === item.id }"
      >
        <v-tooltip
          :nudge-top="5"
          location="left"
        >
          <template #activator="{ props }">
            <span v-bind="props">{{ $t(prefix+'.header_'+item.name) }}</span>
          </template>
          <span class="tooltip">{{ $t(prefix+'.header_'+item.name) }}</span>
        </v-tooltip>
      </a>
    </nav>
    <v-tooltip
      :nudge-top="25"
      location="left"
    >
      <template #activator="{ props }">
        <v-btn
          v-smooth-scroll
          icon
          class="fab anchor-link scrollactive-item"
          href="#home"
          color="primary"
          size="large"
          v-bind="props"
        >
          <v-icon dark>
            mdi-arrow-up
          </v-icon>
        </v-btn>
      </template>
      <span class="tooltip">To Top</span>
    </v-tooltip>
  </div>
</template>

<style scoped lang="scss">
@import './pagenav-style';
</style>

<script setup>
import { ref, onMounted } from 'vue'

let counter = 0;
const show = ref(false);
const sections = ref({});
const activeMenu = ref('');

const { menu, prefix } = defineProps({
  menu: {
    type: Array,
    required: true,
  },
  prefix: {
    type: String,
    required: true,
  }
});

onMounted(() => {
  // Get section id's
  const section = document.querySelectorAll('.scroll-nav-content > *');
  Array.prototype.forEach.call(section, (e) => {
    sections.value[e.id] = e.offsetTop || 0;
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

  if (window.scrollY > 500) {
    show.value = true;
  } else {
    show.value = false;
  }
};
</script>
