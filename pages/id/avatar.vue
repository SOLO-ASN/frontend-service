<template>

  <v-menu
    v-model="open"
    :close-on-content-click="false"
    location="bottom"
    class="ma-0"
    open-on-hover
  >
    <template #activator="{ props }">
      <div class="avatar">
        <v-btn
          icon
          v-bind="props"
          :class="{ active: open }"
          @click="gotoProfile"
        >
          <v-avatar :image=imgAPI.avatar[11] />
        </v-btn>
      </div>
    </template>

    <v-list>
      <v-list-item
        v-for="(item, index) in listItems"
        :key="index"
        :value="item.name"
        @click="routeConvert(item.name, item.path)"
      >
        <v-list-item-subtitle> {{ $t(item.name) }} </v-list-item-subtitle>
      </v-list-item>

    </v-list>

  </v-menu>

</template>

<script>

import imgAPI from '@/assets/images/imgAPI';
import { useRouter } from 'vue-router';
import { useSwitchLocalePath } from 'vue-i18n-routing';

import AccountSettings from '~/pages/id/accountSettings.vue';

export default {
  components: {
    AccountSettings
  },
  props: {
    invert: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    let router = useRouter();

    const routeConvert = (name, path) => {
      switch (name) {
        case 'View on Explorer':
          let p = path + localStorage.getItem('mainRewardAddress');
          if (localStorage.getItem('mainRewardAddress') === null) {
            alert("You need to include a new primary reward address.");
            break; }
          window.open(p, "_blank");
          break;
        case 'Disconnect':
          handleLogout(); // Make sure you have handleLogout method defined
          break;
        default:
          router.push({ path: path });
      }
    };

    const gotoProfile = () => {
      router.push({ path: '/en/id/profile' });
    };

    const switchLocalePath = useSwitchLocalePath();

    return {
      routeConvert,
      switchLocalePath,
      gotoProfile
    }
  },
  data: () => ({
    open: false,
  }),
  computed: {
    imgAPI() {
      return imgAPI;
    },
    listItems() {
      return [{
        name: 'View on Explorer',
        path: 'https://etherscan.io/address/'
      },{
        name: 'Watchlist',
        path: ''
      },{
        name: 'Settings',
        path: '/id/accountSettings'
      },{
        name: 'Campaign Transactions',
        path: '/en/id/recentTransactions'
      }]
    },
  },
}

</script>
