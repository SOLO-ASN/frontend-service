<template>
  <div class="root">
    <v-container>
      <parallax-title
        :bg-title="$t('nft.trending_bgtitle')"
        :main-title="$t('nft.trending_subtitle')"
        :color="currentTheme === 'dark' ? 'triple-main' : 'triple-light'"
      />
      <div class="tab">
        <v-row class="justify-center spacing2">
          <v-col lg="9" md="10" cols="12">
            <v-tabs
              v-model="tab"
              class="tabs"
              align-tabs="center"
            >
              <v-tab class="tab-label" :value="1">
                <span>Trending</span>
              </v-tab>
              <v-tab class="tab-label" :value="2">
                <span>Top</span>
              </v-tab>
              <v-tab class="tab-label" :value="3">
                <span>Collectible</span>
              </v-tab>
              <v-tab class="tab-label" :value="4">
                <span>Art</span>
              </v-tab>
              <v-tab class="tab-label" :value="5">
                <span>Animation</span>
              </v-tab>
            </v-tabs>
          </v-col>
          <v-col v-if="isDesktop" cols="12" md="2">
            <v-btn color="secondary" class="btn" size="large">
              {{ $t('nft.trending_all') }}
            </v-btn>
          </v-col>
        </v-row>
      </div>
      <div class="tab-content">
        <v-window v-model="tab">
          <v-window-item :value="1">
            <v-row :class="isMobile ? '' : spacing4" class="justify-center">
              <v-col v-for="(item, index) in trendingData" :key="index" sm="6" cols="12">
                <div
                  data-aos="fade-up"
                  data-aos-offset="100"
                  :data-aos-delay="500 + 100 * index"
                  data-aos-duration="500"
                >
                  <playlist-card
                    :img="item.img"
                    :avatar="item.avatar"
                    :logo="item.logo"
                    :title="item.title"
                    :name="item.name"
                    :desc="item.desc"
                    :count="item.count"
                    :items="item.items"
                    :color="item.color"
                    :verified-user="item.verifiedUser"
                    :verified-item="item.verifiedItem"
                    :with-deco="item.withDeco"
                    :href="item.href"
                  />
                </div>
              </v-col>
            </v-row>
          </v-window-item>
          <v-window-item :value="2">
            <v-row :class="isMobile ? '' : spacing4" class="justify-center">
              <v-col v-for="(item, index) in topData" :key="index" sm="6" cols="12">
                <div
                  data-aos="fade-up"
                  data-aos-offset="100"
                  :data-aos-delay="500 + 100 * index"
                  data-aos-duration="500"
                >
                  <playlist-card
                    :img="item.img"
                    :avatar="item.avatar"
                    :logo="item.logo"
                    :title="item.title"
                    :name="item.name"
                    :desc="item.desc"
                    :count="item.count"
                    :items="item.items"
                    :color="item.color"
                    :verified-user="item.verifiedUser"
                    :verified-item="item.verifiedItem"
                    :with-deco="item.withDeco"
                    :href="item.href"
                  />
                </div>
              </v-col>
            </v-row>
          </v-window-item>
          <v-window-item :value="3">
            <v-row class="justify-center spacing4">
              <v-col v-for="(item, index) in collectibleData" :key="index" sm="6" cols="12">
                <div
                  data-aos="fade-up"
                  data-aos-offset="100"
                  :data-aos-delay="500 + 100 * index"
                  data-aos-duration="500"
                >
                  <playlist-card
                    :img="item.img"
                    :avatar="item.avatar"
                    :logo="item.logo"
                    :title="item.title"
                    :name="item.name"
                    :desc="item.desc"
                    :count="item.count"
                    :items="item.items"
                    :color="item.color"
                    :verified-user="item.verifiedUser"
                    :verified-item="item.verifiedItem"
                    :with-deco="item.withDeco"
                    :href="item.href"
                  />
                </div>
              </v-col>
            </v-row>
          </v-window-item>
          <v-window-item :value="4">
            <v-row class="justify-center spacing4">
              <v-col v-for="(item, index) in artData" :key="index" sm="6" cols="12">
                <div
                  data-aos="fade-up"
                  data-aos-offset="100"
                  :data-aos-delay="500 + 100 * index"
                  data-aos-duration="500"
                >
                  <playlist-card
                    :img="item.img"
                    :avatar="item.avatar"
                    :logo="item.logo"
                    :title="item.title"
                    :name="item.name"
                    :desc="item.desc"
                    :count="item.count"
                    :items="item.items"
                    :color="item.color"
                    :verified-user="item.verifiedUser"
                    :verified-item="item.verifiedItem"
                    :with-deco="item.withDeco"
                    :href="item.href"
                  />
                </div>
              </v-col>
            </v-row>
          </v-window-item>
          <v-window-item :value="5">
            <v-row class="justify-center spacing4">
              <v-col v-for="(item, index) in animationData" :key="index" sm="6" cols="12">
                <div
                  data-aos="fade-up"
                  data-aos-offset="100"
                  :data-aos-delay="500 + 100 * index"
                  data-aos-duration="500"
                >
                  <playlist-card
                    :img="item.img"
                    :avatar="item.avatar"
                    :logo="item.logo"
                    :title="item.title"
                    :name="item.name"
                    :desc="item.desc"
                    :count="item.count"
                    :items="item.items"
                    :color="item.color"
                    :verified-user="item.verifiedUser"
                    :verified-item="item.verifiedItem"
                    :with-deco="item.withDeco"
                    :href="item.href"
                  />
                </div>
              </v-col>
            </v-row>
          </v-window-item>
        </v-window>
      </div>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import './trending-style.scss';
</style>

<script setup>
import { ref, onMounted } from 'vue';
import { useTheme, useDisplay } from 'vuetify';
import AOS from 'aos';
import {
  trendingData, topData, collectibleData,
  artData, animationData
} from './data';
import PlaylistCard from '../../Cards/Media/PlaylistCard';
import ParallaxTitle from '../../Title/ParallaxTitle';

const tab = ref(null);
const { name: currentTheme } = useTheme();

const { lgAndDown: isTablet } = useDisplay();
const { mdAndUp: isDesktop } = useDisplay();
const { smAndDown: isMobile } = useDisplay();

onMounted(() => {
  AOS.init({
    once: true,
  });
});
</script>
