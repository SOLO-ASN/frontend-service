<template>
  <nav class="user-menu">
    <!-- 如果登录状态为 false，显示登录和注册按钮 -->
    <template v-if="!login">
      <v-btn
        v-if="isDesktop"
        @click="openLoginWindow"
        variant="text"
      >
        {{ $t('login') }}
      </v-btn>
      <v-btn
        v-if="isDesktop"
        @click="openRegisterWindow"
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
    <avatar-menu v-if="login"/>
  </nav>
</template>


<style lang="scss" scoped>
@import '../header-style.scss';
</style>

<script>
import link from '@/assets/text/link';
import Settings from './Settings';
import url from '@/assets/text/url';
import Avatar from '@/pages/id/avatar.vue';

export default {
  components: {
    'setting-menu': Settings,
    'avatar-menu': Avatar,
  },
  data() {
    return {
      login: false,
      link,
      loaded: false,
      loginWindow: null,
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
    window.addEventListener('message', this.handlePostMessage);
  },
  beforeDestroy() {
    // 在组件销毁前移除事件监听器
    window.removeEventListener('message', this.handlePostMessage);
  },
  methods: {
    openLoginWindow() {
      const currentPage = window.location.href;
      const loginWindow = window.open(url.fidoUrl + `/login.html?redirect=${encodeURIComponent(currentPage)}`, 'Login', 'width=600,height=600');
    },
    openRegisterWindow() {
      const currentPage = window.location.href;
      const loginWindow = window.open(url.fidoUrl + `/register.html?redirect=${encodeURIComponent(currentPage)}`, 'Register', 'width=600,height=600');
    },
    handleLogout() {
      localStorage.removeItem('username');
      this.login = false;
    },
    handlePostMessage(event) {
      if (event.origin === 'http://localhost:58089') {
        const data = event.data;
        if (data.type === 'loginSuccess' && data.jwt) {
          localStorage.setItem('jwt', data.jwt);
          localStorage.setItem('username', data.username);
          this.login = true;
        }
      }
    },
  }
};


</script>
