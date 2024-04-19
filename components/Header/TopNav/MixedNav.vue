<template>
  <div
    v-if="isDesktop"
    class="scrollactive-nav"
  >
    <template v-if="singleNav">
      <v-btn
        v-for="(item, index) in menuPrimary"
        :key="index"
        :href="'#'+item.id"
        :class="{ active: activeMenu === item.name }"
        class="menu-link"
        variant="text"
        @click="scrollToMyEl(item.name)"
        v-text="$t(item.name)"
      />
    </template>
    <template v-if="!singleNav">
      <v-btn
        v-for="(item, index) in menuPrimary"
        :key="index"
        :href="'/' + item.id"
        v-text="$t(item.name)"
      />
    </template>
    <!-- 
    <v-menu
      :open-on-hover="hover"
      :position-x="0"
      max-height="480"
      offset-y
      content-class="mega-menu-root"
      width="100%"
      transition="slide-y-transition"
      nudge-left
      nudge-width
    >
      <template #activator="{ props }">
        <span
          class="button-item"
          v-bind="props"
        >
          <v-btn text>
            {{ $t('header_sample_page') }}
            <v-icon right>
              mdi-chevron-down
            </v-icon>
          </v-btn>
        </span>
      </template>
      <div class="mega-menu cyber">
        <v-container>
          <v-row>
            <v-col sm="5" class="px-4">
              <div class="mb-4 mt-6 mx-1 title-mega text-left">
                Landing Pages
              </div>
              <v-row class="spacing1">
                <v-col class="pa-1" v-for="(item, index) in landingMenu" sm="4" cols="6">
                  <a v-ripple :href="item.url" class="thumb-link">
                    <figure class="thumb-menu portrait">
                      <img :src="item.thumb" alt="thumbnail" />
                    </figure>
                    {{ item.name }}
                  </a>
                </v-col>
              </v-row>
            </v-col>
            <v-col sm="7" class="px-4">
              <v-row>
                <v-col
                  v-for="(subitem, index) in menuSecondary"
                  :key="index"
                  sm="3"
                >
                  <v-list>
                    <v-list-subheader class="title-mega">
                      {{ subitem.name }}
                    </v-list-subheader>
                    <figure class="thumb-menu">
                      <img :src="subitem.thumb" alt="thumbnail">
                    </figure>
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
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </v-menu>
    -->
  </div>
</template>

<style lang="scss" scoped>
@import '../header-style.scss';
</style>

<script>
import { inject } from 'vue';
import { useRouter } from '#app';
import imgAPI from '@/assets/images/imgAPI';
import link from '@/assets/text/link';

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
    activeMenu: {
      type: String,
      required: true,
    },
    prefix: {
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
      hover: false,
      curURL: '',
      curOrigin: '',
      landingMenu: [
        {
          name: 'Machine Learning',
          url: link.home,
          thumb: imgAPI.ui[6],
        },
        {
          name: 'AI Trading Bot',
          url: link.fintech,
          thumb: imgAPI.ui[8],
        },
        {
          name: 'Blockchain',
          url: link.blockchain,
          thumb: imgAPI.ui[7],
        },
        {
          name: 'Crypto Wallet',
          url: link.wallet,
          thumb: imgAPI.ui[9],
        },
        {
          name: 'NFT',
          url: link.nft,
          thumb: imgAPI.ui[5],
        },
        {
          name: 'NFT2',
          url: link.nft2,
          thumb: imgAPI.ui[4],
        },
        {
          name: 'Avatar',
          url: link.avatar,
          thumb: imgAPI.ui[10],
        },
        {
          name: 'Online CV',
          url: link.cv,
          thumb: imgAPI.ui[11],
        }
      ]
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
