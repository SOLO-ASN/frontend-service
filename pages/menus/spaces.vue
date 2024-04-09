<template>
  <div class="main-wrap">
    <main-header :menu="singleMenu.inner" />
    <blur-gradient />
    <div class="container-front container-wrap">
      <div class="inner-page">
        <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
          <v-card class="cyber">
            <v-toolbar dark flat class="header-filter">
              <v-btn icon dark @click="handleCloseFilter">
                <v-icon>mdi-close</v-icon>
              </v-btn>
              <v-toolbar-title>Filter</v-toolbar-title>
              <v-spacer />
              <v-toolbar-items>
                <v-btn dark text @click="handleCloseFilter">
                  Done
                </v-btn>
              </v-toolbar-items>
            </v-toolbar>
            <div class="pt-3">
              <!-- Filter content goes here -->
            </div>
          </v-card>
        </v-dialog>
        <v-container>
          <v-row align="start" justify="start" :class="{'spacing-xs': !isDesktop, 'spacing-lg': isDesktop}">
            <v-col :cols="isDesktop ? 8 : 12" class="px-0">
              <search v-model="keyword" @input="onInput" />
            </v-col>
            <v-col :cols="isDesktop ? 2 : 6" class="px-0">
              <div :class="{'ps-sm-3': !isDesktop, 'ps-md-3': isDesktop}">
                <sorter
                  :view="toggleView"
                  :sort-by-selected="sortBySelected"
                  :result-length="filteredItems.length"
                  @switch-view="handleToggleView"
                  @sort-by="handleSortBy"
                  @open-filter="handleOpenFilter"
                />
              </div>
            </v-col>
            <v-col :cols="isDesktop ? 2 : 12" class="px-0">
              <div :class="{'ps-sm-4': !isDesktop, 'ps-md-4': isDesktop}">
                <claim-button @update:isSelected="handleVerifiedChange" />
              </div>
            </v-col>
          </v-row>
          <v-row class="pl-0" :style="isDesktop ? 'position: absolute; top: 125px; left: 250px;' : 'margin-top: 20px;'">
            <v-btn color="primary">Create space</v-btn>
          </v-row>
        </v-container>
        <v-container>
          <div class="mt-md-5 mt-xs-2 mt-sm-3 mx-xs-2">
            <v-row :class="{ 'spacing-lg': isDesktop, 'spacing-sm': !isDesktop }">
              <v-col cols="12">
                <tab-category
                  :switch-tab="handleChangeGroup"
                  :value="group"
                  :total="cardItems.length"
                />
                <v-container v-if="isLoading" class="loading-container">
                  <span class="loading-text">loading!</span>
                </v-container>
                <div v-if="!isLoading">
                  <v-row id="profile" class="mt-sm-5 mt-xs-2" :class="{'spacing-sm': !isDesktop, 'spacing-lg': isDesktop}">
                    <v-col v-if="cardItems.length < 1" cols="12">
                      <h3>Not found</h3>
                    </v-col>
                    <v-col v-for="(item, index) in cardItems" :key="index" :cols="isDesktop ? 4 : 12">
                      <space-card
                        :name="item.name"
                        :isVerified="item.isVerified"
                        :thumbnail="item.thumbnail"
                        :activeCampaignCount="item.activeCampaignCount"
                        :followersCount="item.followersCount"
                        :status="item.status"
                        :id="item.id"
                        :tokenSymbol="item.tokenSymbol"
                        :isFollowing="item.isFollowing"
                        @follow-click="handleFollowClick"
                      />
                    </v-col>
                  </v-row>
                </div>
              </v-col>
            </v-row>
          </div>
        </v-container>
      </div>
    </div>
    <div class="space-top-short">
      <main-footer />
    </div>
  </div>
</template>


<style scoped lang="scss">
@import '@/assets/scss/pages';

</style>

<script setup>
import { ref, computed } from 'vue';
import { useDisplay } from 'vuetify';
import MainHeader from '@/components/Header';
import singleMenu from '@/components/Header/data/single';
import BlurGradient from '@/components/Artworks/BlurGradient';
import MainFooter from '@/components/Footer';
import Hidden from '@/components/Utils/Hidden';
import CardProducts from '@/components/Cards/Product/ProductCard';
import PlaylistCard from '@/components/Cards/Media/PlaylistCard';
import SpaceCard from '@/components/Airdrops/SpaceCard';
import Search from '@/components/Filter/Search';
import TabCategory from '@/components/Airdrops/TabCategory';
import Sorter from '@/components/Airdrops/Sorter';
import ClaimButton from '@/components/Airdrops/ClaimButton.vue';
import brand from '@/assets/text/brand';
import link from '@/assets/text/link';
import collection from '@/assets/api/collection';
import creator from '@/assets/api/creator';
import products from '@/assets/api/products';
import { useHead } from '#app';
import axios from 'axios'

const checkItems = [
  'check-a',
  'check-b',
  'check-c',
  'check-d',
  'check-e',
  'check-f',
];


const dialog = ref(false);
const sortBy = ref('Trening')
const sortFrom = ref(-1);
const sortTo = ref(1);
const toggleView = ref(0);
const filterRating = ref(0);
const filterCategory = ref('all');
const filterRadio = ref('all');
const filterCheck = ref(checkItems);
const group = ref('all');
const verified = ref(false);
const keyword = ref('');

const { mdAndUp: isDesktop } = useDisplay();

const range = ref({
  from: 0,
  to: 100
});

const sortBySelected = ref({
  title: 'Trending',
  value: 'trending-asc',
});

const filterTag = ref(['tag-one', 'tag-two', 'tag-three', 'tag-four'])
const cardItems = ref([])
const isLoading = ref(true);

onMounted(() => {
  fetchData();
})

function handleOpenFilter() {
  dialog.value = true; 
}
  
function handleCloseFilter() {
  dialog.value = false; 
}

function handleCollectTag(val) {
  filterTag.value = val;
}
  
function handleToggleView(val) {
  toggleView.value = val;
}

function handleSortBy(e) {
  sortBy.value = e.value;
}
  
function handleChangeGroup(cat) {
  group.value = cat;
}

function handleVerifiedChange(newValue) {
  verified.value = newValue;
}

function onInput() {
  keyword.value = event.target.value;
};


const filteredItems = computed(() => {
  return cardItems.value
})


const handleFollowClick = async (id, isFollowing) => {
  console.info(isFollowing);
  console.info(id);
  if(isFollowing==false){
      try {
        const response = await axios.post('https://955b2b67-7c5f-4421-9eb6-d6cf6c3871ae.mock.pstmn.io/api/spaces/follow', {
          id: id
        });
        // 根据返回数据执行后续操作，比如打开对话框显示详情

      } catch (error) {
        console.error('请求详情失败', error);
      }
    }else{
      try {
        const response = await axios.post('https://955b2b67-7c5f-4421-9eb6-d6cf6c3871ae.mock.pstmn.io/api/spaces/unfollow', {
          id: id
        });
        // 根据返回数据执行后续操作，比如打开对话框显示详情
      } catch (error) {
        console.error('请求详情失败', error);
      }
    }
};

async function fetchData() {
  try {
    isLoading.value = true; // 开始加载数据   https://955b2b67-7c5f-4421-9eb6-d6cf6c3871ae.mock.pstmn.io
    const response = await axios.post('https://88b11a64-0002-481a-a6ed-8b8a7b558108.mock.pstmn.io/api/spaces/query', {
      spaceListType: sortBy.value,
      filter: group.value,
      verifiedOnly: verified.value,
      searchString: keyword.value,
    });
    console.info(response.data.data);
    if (response.data.data.list && Array.isArray(response.data.data.list)) {
      cardItems.value = response.data.data.list.map(item => ({
        name: item.name,
        isVerified: item.isVerified,
        thumbnail: item.thumbnail,
        activeCampaignCount: item.activeCampaignCount,
        tokenSymbol: item.tokenSymbol,
        followersCount: item.followersCount,
        status: item.status,
        id: item.id,
        href: '/collection/campaign' + '?alias=Galxe', // Removed the quotes around the template string
        isFollowing: item.isFollowing
      }));
    } else {
      // Handle the case where response.data.list is not an array
      console.error('List is not an array:', response.data.data);
      cardItems.value = []; // Reset cardItems or set it to a default value
    }
    isLoading.value = false;
  } catch (error) {
    console.error('请求失败', error);
    cardItems.value = []; // Reset cardItems or set it to a default value in case of an error
    isLoading.value = false;
  }
}
watch([sortBy, group, verified, keyword], fetchData);


useHead({
  title: brand.name + ' - Space',
});
</script>
