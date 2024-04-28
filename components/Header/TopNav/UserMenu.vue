<template>
  <nav class="user-menu">
    <!-- 如果登录状态为 false，显示登录和注册按钮 -->
    <template v-if="!login">
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
    </template>

    <!-- 如果登录状态为 true，显示注销按钮 -->
    <template v-else>
      <v-btn
        v-if="isDesktop"
        @click="handleLogout"
       
        variant="text"
      >
        {{ $t('logout') }}
      </v-btn>
    </template>

    <setting-menu v-if="loaded" />
  </nav>
</template>


<style lang="scss" scoped>
@import '../header-style.scss';
</style>

<script>
import link from '@/assets/text/link';
import Settings from './Settings';

export default {
  components: {
    'setting-menu': Settings,
  },
  data() {
    return {
      login: false,
      link,
      loaded: false,
    };
  },
  computed: {
    isDesktop() {
      const smUp = this.$vuetify.display.smAndUp;
      return smUp;
    },
  },
  mounted() {
    const query = new URLSearchParams(window.location.search);
    const username = query.get('username'); // 获取 'username' 参数
    if(username) this.login = true;
    if(localStorage.getItem('username')) this.login = true;
    
    this.loaded = true;
  },
  methods: {
    handleLogout() {
      localStorage.removeItem('username');
      this.login = false;
    },
  }
};
</script>
