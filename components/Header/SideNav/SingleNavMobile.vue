<template>
 
</template>

<style scoped lang="scss">
@import '../sidenav-style';
</style>

<script>
import mega from '../data/mega';

export default {
  props: {
    menu: {
      type: Array,
      required: true,
    },
    prefix: {
      type: String,
      required: true,
    }
  },
  data() {
    return {
      menuList: mega,
      isOpen: false,
    };
  },
};
</script>
