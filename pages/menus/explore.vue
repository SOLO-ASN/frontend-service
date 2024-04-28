<template>
  <div class="main-wrap">
    <main-header :menu="singleMenu.inner" />
    <blur-gradient />
    <div class="container-front container-wrap">
      <div class="inner-page">
        <v-dialog
            v-model="dialog"
            fullscreen
            hide-overlay
            transition="dialog-bottom-transition"
          >
            <v-card class="cyber">
              <v-toolbar
                dark
                flat
                class="header-filter"
              >
                <v-btn
                  icon
                  dark
                  @click="handleCloseFilter"
                >
                  <v-icon>mdi-close</v-icon>
                </v-btn>
                <v-toolbar-title>Filter</v-toolbar-title>
                <v-spacer />
                <v-toolbar-items>
                  <v-btn
                    dark
                    text
                    @click="handleCloseFilter"
                  >
                    Done
                  </v-btn>
                </v-toolbar-items>
              </v-toolbar>
              <div class="pt-3">
                <v-container>
                  <v-row justify="center">
                    <v-col sm="10" cols="12">
                     <filter-side
                      v-if="!isTablet"
                      :selectedTags1="credSources"
                      :selectedTags2="rewardTypes"
                      :selectedTags3="chains"
                      :selectedTags4="statuses"
                      @collect-tag="handleCollectTag"
                      @update:selectedTags1="handleSelectedTagsUpdate"
                      @update:selectedTags2="handleSelectedTagsUpdate"
                      @update:selectedTags3="handleSelectedTagsUpdate"
                      @update:selectedTags4="handleSelectedTagsUpdate"
                    />
                    </v-col>
                  </v-row>
                </v-container>
              </div>
            </v-card>
          </v-dialog>
            <v-row align="start" justify="start" :class="isDesktop ? 'spacing2' : 'spacing2'" class="mx-1">
              <!-- 侧边栏 -->
              <v-col :cols="10" md="1" lg="2" class="sidebar" style="margin-top: 50px;">
                <filter-side
                  v-if="!isTablet"
                  :selectedTags1="credSources"
                  :selectedTags2="rewardTypes"
                  :selectedTags3="chains"
                  :selectedTags4="statuses"
                  @collect-tag="handleCollectTag"
                  @update:selectedTags1="handleSelectedTagsUpdate"
                  @update:selectedTags2="handleSelectedTagsUpdate"
                  @update:selectedTags3="handleSelectedTagsUpdate"
                  @update:selectedTags4="handleSelectedTagsUpdate"
                />
              </v-col>
              <!-- 内容区域 -->
              <v-col :cols="10" md="6" lg="7" class="mx-14 content">
                <v-row align="start" justify="start" :class="isDesktop ? 'spacing2' : 'spacing1'">
                  <v-col md="8" sm="12" class="px-0" cols="12">
                    <search v-model="keyword" @input="onInput" />
                  </v-col>
                  <v-col md="4" sm="12" class="px-0" cols="12">
                    <div class="ps-md-3">
                      <sorter
                        :sortList="sortList"
                        :showVerified=false
                        :view="toggleView"
                        :sort-by-selected="sortBySelected"
                        @switch-view="handleToggleView"
                        @sort-by="handleSortBy"
                        @open-filter="handleOpenFilter"
                      />
                    </div>
                  </v-col>
                </v-row>
                <el-button @click="selectAllTags" round color="black">All</el-button>
                <el-button @click="clearAllTags" round color="black">Clear all</el-button>
                <!-- 将 gallery 放置在内容区域的 v-row 内 -->
                <v-row v-if="cardItems" :class="isMobile ? 'spacing1' : 'spacing1'">
                  <v-col
                    v-for="(cardItem, index) in cardItems"
                    :key="index"
                    :sm="3"
                    cols="10"
                  >
                    <campaign-card class= "campaignCard" :campaigns="cardItem" />
                  </v-col>
                  <v-container v-if="isLoading" class="loading-container">
                    <span class="loading-text">loading!</span>
                  </v-container>
                  <v-container v-if="!hasNextPage" class="loading-container">
                    <span class="loading-text">Data loading complete!</span>
                  </v-container>
                </v-row>
              </v-col>
            </v-row>
          </div>
    </div>
    <div class="space-top-short">
      <main-footer />
    </div>
  </div>  
</template>

<style lang="scss" scoped>
@import '@/assets/scss/pages'; 
@media (max-width: 768px) {
  .sidebar {
    display: none
  }

  .campaignCard {
    --card-width: 400px;
    --card-height: 380px;
  }
}
.navbar {
  display: flex;
  justify-content: center;
  position: relative;
  padding-top: 1rem;
}

.nav-items {
  position: absolute;
  left: 30%;
  transform: translateX(-60%);
  display: flex;
  gap: 5rem;
}

.nav-item {
  font-size: 1.5rem;
  color: white;
  cursor: pointer;
  padding-bottom: 0.25rem;
}

.nav-item.active {
  font-weight: bold;
  border-bottom: 3px solid #42b983;
}

.inner-page1 {
  padding-top: 3rem;
}

.sidebar {
  margin-top: $spacing5;
  position: relative;
  z-index: 1;
  @include breakpoints-up(md) {
    padding: spacing(0, 3);
    margin: spacing(3, 0, 5);
    position: -webkit-sticky;
    position: sticky;
    top: 80px;
  }
  @include breakpoints-between(sm, md) {
    display: flex;
    > div {
      padding: $spacing3;
      width: 50%;
    }
  }
}
</style>

<script setup>
import MainHeader from '@/components/Header';
import singleMenu from '@/components/Header/data/single';
import MainFooter from '@/components/Footer';
import BlurGradient from '@/components/Artworks/BlurGradient';
import SpaceDetail from '@/components/Airdrops/SpaceDetail';
import FilterSide from '@/components/Airdrops/Filter';
import ClaimButton from '@/components/Airdrops/ClaimButton.vue';
import Leaderboard from '@/components/Airdrops/Leaderboard.vue'
import Search from '@/components/Filter/Search';
import TabCategory from '@/components/Airdrops/TabCategory';
import Sorter from '@/components/Airdrops/Sorter';
import CampaignCard from '@/components/Airdrops/CampaignCard.vue'
import brand from '@/assets/text/brand';
import url from '@/assets/text/url';
import { useHead } from '#app';
import { ref } from 'vue';
import axios from 'axios';


const currentTab = ref('All');

const childRef = ref(null);
const dialog = ref(false);
const credSources = ref([]);
const rewardTypes = ref([]);
const isLoading = ref(true);
const chains = ref([]);
const after = ref(0);
const hasNextPage = ref(true);
const statuses = ref([]);
const listType = ref("");
const searchString = ref('');
const verified = ref(false);
const SERVER = url.serverUrl;
const sortList = ref([
  {
    title: 'Newest',
    value: 'created_at',
    selected: false,
  },
    {
    title: 'Most Participated',
    value: 'participantsCount',
    selected: false,
  },
]);

function handleOpenFilter() {
  dialog.value = true; 
}
  
function handleCloseFilter() {
  dialog.value = false; 
}

function handleSortBy(e) {
  listType.value = e.value;
}

function handleVerifiedChange(newValue) {
  verified.value = newValue;
}

function onInput() {
  searchString.value = event.target.value;
};

const selectAllTags = () => {
  rewardTypes.value = [
        "Oat",
        "Nft",
        "Custom",
        "Token",
      ];
}

const clearAllTags = () => {
  rewardTypes.value = [];
}
const data = ref(null);

const route = useRoute();
const cardItems = ref(null);


onMounted(async () => {   
  const query = new URLSearchParams(window.location.search); // 获取 URL 的查询字符串
  const username = query.get('username'); // 获取 "username" 参数的值
  if(username) {
    localStorage.setItem('username', username);

  }
  fetchData();
  window.addEventListener('scroll', handleScroll);
});


onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
})


function handleSelectedTagsUpdate(group, value) {
  // 处理 selectedTags 的更新
  if(group==="selectedTags1"){
    console.log(group ,'更新了:', value);
    credSources.value = value;
  }else if(group==="selectedTags2"){
    console.log(group, '更新了:', value);
    rewardTypes.value = value;
  }else if(group==="selectedTags3"){
    console.log(group ,'更新了:', value);
    chains.value = value;
  }else if(group==="selectedTags4"){
    console.log(group ,'更新了:', value);
    statuses.value = value;
  }
}


async function fetchData() {
  try {
    if(credSources.value.length===0) {
      credSources.value.push("all");
    }
    if(rewardTypes.value.length===0) {
      rewardTypes.value.push("all");
    }
    if(chains.value.length===0) {
      chains.value.push("all");
    }
    if(statuses.value.length===0) {
      statuses.value.push("all");
    }
    const response = await axios.post(SERVER + '/api/explore/query', {
        first: 8,
        after: 0,
        credSources: credSources.value,
        rewardTypes: rewardTypes.value,
        chains: chains.value,
        statuses: statuses.value,
        listType: listType.value, 
        searchString: searchString.value,
      }
    );
    after.value = response.data.data.pageInfo.endCursor;
    hasNextPage.value = response.data.data.pageInfo.hasNextPage;
    console.info("page", after.value);
    cardItems.value = response.data.data.Explore.map((campaignWrapper) => {
      const campaign = campaignWrapper.Campaign;
      const space = campaignWrapper.Space;
      return {
        ...campaign, 
        spaceName: space.name, 
        spaceId: space.id,
        isVerified: space.isVerified, 
        spaceThumbnail: space.thumbnail, 
        alias: space.alias,
      };
    });
    console.info(cardItems.value);
  } catch (error) {
    console.error('请求失败', error);
  }finally {
    isLoading.value = false;
    if (credSources.value.includes("all")) {
      const index = credSources.value.indexOf("all");
      credSources.value.splice(index, 1);
    }
    if (chains.value.includes("all")) {
      const index = chains.value.indexOf("all");
      chains.value.splice(index, 1);
    }
    if (rewardTypes.value.includes("all")) {
      const index = rewardTypes.value.indexOf("all");
      rewardTypes.value.splice(index, 1);
    }
    if (statuses.value.includes("all")) {
      const index = statuses.value.indexOf("all");
      statuses.value.splice(index, 1);
    }
  }
}

watch([credSources, rewardTypes, chains, statuses, listType, searchString], fetchData);


function handleScroll() {

  const nearBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;
  if (nearBottom && !isLoading.value && hasNextPage.value==true) {  // 确保每次都是完整的数据组
      loadMoreData();
      console.info("dsag");
  }
}

async function loadMoreData() {
  if (isLoading.value) {
    return; // 如果已经在加载中，则直接返回
  }
  isLoading.value = true;
  try {
    if(credSources.value.length===0) {
      credSources.value.push("all");
    }
    if(rewardTypes.value.length===0) {
      rewardTypes.value.push("all");
    }
    if(chains.value.length===0) {
      chains.value.push("all");
    }
    if(statuses.value.length===0) {
      statuses.value.push("all");
    }
    const response = await axios.post(SERVER + '/api/explore/query', {
        first: 8,
        after: after.value,
        credSources: credSources.value,
        rewardTypes: rewardTypes.value,
        chains: chains.value,
        statuses: statuses.value,
        listType: listType.value, 
        searchString: searchString.value
      }
    );
    after.value = response.data.data.pageInfo.endCursor;
    hasNextPage.value = response.data.data.pageInfo.hasNextPage;
    cardItems.value.push(...response.data.data.Explore.map((campaignWrapper) => {
      const campaign = campaignWrapper.Campaign;
      const space = campaignWrapper.Space;
      return {
        ...campaign, 
        spaceName: space.name, 
        spaceId: space.id,
        isVerified: space.isVerified, 
        spaceThumbnail: space.thumbnail, 
        alias: space.alias,
      };
    }));
    console.info("123", cardItems.value);
  } catch (error) {
    console.error('请求失败', error);
  }finally {
    isLoading.value = false;
    if (credSources.value.includes("all")) {
      const index = credSources.value.indexOf("all");
      credSources.value.splice(index, 1);
    }
    if (chains.value.includes("all")) {
      const index = chains.value.indexOf("all");
      chains.value.splice(index, 1);
    }
    if (rewardTypes.value.includes("all")) {
      const index = rewardTypes.value.indexOf("all");
      rewardTypes.value.splice(index, 1);
    }
    if (statuses.value.includes("all")) {
      const index = statuses.value.indexOf("all");
      statuses.value.splice(index, 1);
    }
  }
}


useHead({
  title: brand.name + ' - Campaign',
});
</script>

