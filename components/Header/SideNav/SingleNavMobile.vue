<template>
  <v-list dense>
    <v-list-item
      v-for="(item, index) in menu"
      :key="index"
      :href="'#'+item.id"
      link
    >
      <div>
        <v-list-item-title class="menu-list">
          {{ $t(prefix+'.header_'+item.name) }}
        </v-list-item-title>
      </div>
    </v-list-item>
  </v-list>
  <v-divider />
  <v-list dense>
    <v-list-item
      v-for="(item, index) in ['login', 'register']"
      :key="index"
      :href="'/' + item"
      link
    >
      <div>
        <v-list-item-title class="menu-list">
          {{ $t('header_'+item) }}
        </v-list-item-title>
      </div>
    </v-list-item>
  </v-list>
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
