<template>
  <div>
    <mixed v-if="type === 'mixed'" :home="home" :menu="menu" :prefix="prefix" />
    <basic v-if="type === 'basic'" />
    <drop-list v-if="type === 'droplist'" />
    <mega v-if="type === 'mega'" />
    <hamburger v-if="type === 'hamburger'" :home="home" :menu="menu" :prefix="prefix" />
    <nav-scroll v-if="type === 'navscroll'" :home="home" :menu="menu" :prefix="prefix" />
    <search-bar v-if="type === 'search'" />
  </div>
</template>

<script>
import ui from '@/composables/uiTheme';
import Mixed from './Mixed';
import Basic from './Basic';
import DropList from './DropList';
import Mega from './Mega';
import Hamburger from './Hamburger';
import NavScroll from './NavScroll';
import SearchBar from './Search';

export default {
  components: {
    Mixed,
    Basic,
    DropList,
    Mega,
    Hamburger,
    NavScroll,
    SearchBar,
  },
  props: {
    home: {
      type: Boolean,
      default: false,
    },
    menu: {
      type: Array,
      required: false,
    },
    prefix: {
      type: String,
      default: 'ai-landing',
    },
  },
  setup() {
    const type = ui.header();
    return {
      type,
    };
  },
};
</script>
