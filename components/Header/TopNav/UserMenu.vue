<template>
  <nav class="user-menu">
    <v-btn
      v-if="isDesktop"
      :href="link.login"
      variant="text"
    >
      {{ $t('login') }}
    </v-btn>
    <v-btn
      v-if="isDesktop"
      :href="link.register"
      color="primary"
      variant="flat"
    >
      {{ $t('register') }}
    </v-btn>
    <v-spacer
      v-if="isDesktop"
      class="vertical-divider"
    />
    <setting-menu v-if="loaded" />
    <avatar-menu v-if="login"/>
  </nav>
</template>

<style lang="scss" scoped>
@import '../header-style.scss';
</style>

<script>
import link from '@/assets/text/link';
import Settings from './Settings';
import Avatar from '@/pages/id/avatar.vue';

export default {
  components: {
    'setting-menu': Settings,
    'avatar-menu': Avatar,
  },
  data() {
    return {
      link,
      loaded: false,
      login: true,
    };
  },
  computed: {
    isDesktop() {
      const smUp = this.$vuetify.display.smAndUp;
      return smUp;
    },
  },
  mounted() {
    this.loaded = true;
  },
};
</script>
