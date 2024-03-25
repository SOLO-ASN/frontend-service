<template>
  <basic v-if="type === 'basic'" />
  <blog v-if="type === 'blog'" />
  <site-map v-if="type === 'sitemap'" />
</template>

<script>
import ui from '@/composables/uiTheme';
import Basic from './Basic';
import Blog from './Blog';
import SiteMap from './SiteMap';

export default {
  components: {
    Basic,
    Blog,
    SiteMap,
  },
  setup() {
    const type = ui.footer();
    return {
      type,
    };
  },
};
</script>
