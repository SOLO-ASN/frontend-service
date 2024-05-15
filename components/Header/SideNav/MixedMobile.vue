<template>
  <div class="side-menu">
    <v-list dense>
      <v-list-item
        v-for="(item, index) in menuPrimary"
        :key="index"
        :href="'/'+item.id"
        :class="{ current: curURL === (curOrigin+langPath+item.id)}"
        link
      >
        <div>
          <v-list-item-title class="menu-list">
            {{ item.name }}
          </v-list-item-title>
        </div>
      </v-list-item>
      <!-- 
      <v-list-group class="group-child">
        <template #activator="{props}">
          <v-list-item v-bind="props">
            <v-list-item-title class="menu-list">
              {{ $t('header_sample_page') }}
            </v-list-item-title>
          </v-list-item>
        </template>
        <v-list
          v-for="(subitem, index) in menuSecondary"
          :key="index"
        >
          <v-list-subheader class="title-mega">
            {{ $t('header_'+subitem.name) }}
          </v-list-subheader>
          <div>
            <v-list-item
              v-for="(item, index) in subitem.child"
              :key="index"
              :href="item.link"
              :class="{ current: curURL === (curOrigin+langPath+item.link)}"
            >
              <div>
                <v-list-item-title class="menu-list" v-text="$t('header_'+item.name)" />
              </div>
            </v-list-item>
          </div>
        </v-list>
      </v-list-group>
      -->
    </v-list>
    <v-divider class="my-5" />
    <v-list v-if='!login' dense>
      <v-list-item
        v-for="(item, index) in ['login']"
        :key="index"
        @click="openLoginWindow"
        :class="{ current: curURL === (curOrigin+langPath+item)}"
        link
      >
        <div>
          <v-list-item-title class="menu-list">
            {{ $t('header_'+item) }}
          </v-list-item-title>
        </div>
      </v-list-item>
    </v-list>
    <v-list v-if='login' dense>
      <v-list-item
        v-for="(item, index) in ['logout']"
        :key="index"
        @click="handleLogout"
        :class="{ current: curURL === (curOrigin+langPath+item)}"
        link
      >
        <div>
          <v-list-item-title class="menu-list">
            {{ item }}
          </v-list-item-title>
        </div>
      </v-list-item>
    </v-list>
  </div>
  
</template>

<style scoped lang="scss">
@import '../sidenav-style';
</style>

<script>
import link from '@/assets/text/link';
import url from '@/assets/text/url';
export default {
  props: {
    menuPrimary: {
      type: Array,
      required: true,
    },
    menuSecondary: {
      type: Array,
      required: true,
    },
    prefix: {
      type: String,
      required: true,
    }
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
      if (event.origin === 'fidoUrl') {
        const data = event.data;
        if (data.type === 'loginSuccess' && data.jwt) {
          localStorage.setItem('jwt', data.jwt);
          localStorage.setItem('username', data.username);
          this.login = true;
        }
      }
    },
  },
  data() {
    return {
      fidoUrl: url.fidoUrl + "/login.html",
      isOpen: false,
      curURL: '',
      curOrigin: '',
      langPath: '',
      login: false,
      link,
      loaded: false,
      loginWindow: null,
    };
  },
  mounted() {
    console.info(link);
    this.curURL = window.location.href;
    this.curOrigin = window.location.origin;
    this.langPath = '/' + this.$i18n.locale;
    const query = new URLSearchParams(window.location.search);
    const username = query.get('username'); // 获取 'username' 参数
    if(username) this.login = true;
    if(localStorage.getItem('username')) this.login = true;
    this.loaded = true;
    window.addEventListener('message', this.handlePostMessage);
  },
};


</script>
