<template>
  <div v-if="isDesktop" class="scrollactive-nav">
    <template v-if="singleNav">
      <v-btn
        v-for="(item, index) in menu"
        :key="index"
        :href="'#'+item.id"
        :class="{ active: activeMenu === item.name }"
        class="menu-link"
        @click="scrollToMyEl(item.name)"
        v-text="$t(prefix+'.header_'+item.name)"
      />
    </template>
    <template v-if="!singleNav">
      <v-btn
        v-for="(item, index) in menu"
        :key="index"
        :href="'/' + item.id"
        v-text="$t(prefix+'.header_'+item.name)"
      />
    </template>
  </div>
</template>

<style lang="scss" scoped>
@import '../header-style.scss';
</style>

<script>
import { inject } from 'vue';
import { useRouter } from '#app';

export default {
  props: {
    menu: {
      type: Array,
      required: true,
    },
    prefix: {
      type: String,
      required: true,
    },
    activeMenu: {
      type: String,
      required: true,
    },
    singleNav: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const smoothScroll = inject('smoothScroll');
    function scrollToMyEl(elemId) {
      const myEl = document.getElementById(elemId);
      const router = useRouter();

      router.push(`#${elemId}`);
      smoothScroll({
        scrollTo: myEl, // scrollTo is also allowed to be number
        hash: `#${elemId}`, // required if updateHistory is true
        offset: -100,
      });
    }

    return {
      scrollToMyEl,
    };
  },
  data() {
    return {
      curURL: '',
      curOrigin: '',
    };
  },
  computed: {
    isDesktop() {
      const lgUp = this.$vuetify.display.lgAndUp;
      return lgUp;
    },
  },
  mounted() {
    this.curURL = window.location.href;
    this.curOrigin = window.location.origin;
    this.langPath = '/' + this.$i18n.locale;

    const id = window.location.hash;
    const content = id.replace('#', '');
    const element = document.getElementById(content);
    if (element) {
      element.scrollIntoView();
    }
  },
};
</script>
