<template>
  <div class="main-wrap">
    <main-header :menu="singleMenu.inner" />
    <blur-gradient />
    <div class="container-front container-wrap">
      <div class="inner-page">
        <login-prompt v-model="showLoginDialog" />
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
        <v-container>
        <space-detail v-if="data" :detailData="data" @follow-click="handleFollowClick" />
        </v-container>
        <div class="navbar">
          <div class="nav-items">
            <span class="nav-item" :class="{ active: currentTab === 'home' }" @click="currentTab = 'home'">Home</span>
            <span class="nav-item" :class="{ active: currentTab === 'leaderboard' }" @click="currentTab = 'leaderboard'">Leaderboard</span>
          </div>
        </div>
        <div class="inner-page1">
          <!-- 条件渲染Home视图或Leaderboard视图 -->
          <div v-if="currentTab === 'home'">
            <!-- Home的内容 -->
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
                </v-row>
              </v-col>
            </v-row>
          </div>
          <div v-else-if="currentTab === 'leaderboard'">
            <!-- Leaderboard的内容 -->
            <v-container>
              <h1>待开发</h1>
            </v-container>
          </div>
        </div>
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
  left: 50%;
  transform: translateX(-60%);
  display: flex;
  gap: 2rem;
}

.nav-item {
  font-size: 1.25rem;
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
import LoginPrompt from '@/components/Airdrops/LoginPrompt'
import brand from '@/assets/text/brand';
import { useHead } from '#app';
import { useDisplay } from 'vuetify';
import { ref } from 'vue';
import axios from 'axios';

const { smAndDown: isTablet } = useDisplay();
const currentTab = ref('home');

const childRef = ref(null);
const showLoginDialog = ref(false);
const credSources = ref([]);
const rewardTypes = ref([]);
const chains = ref([]);
const statuses = ref(['Active', 'Not Started']);
const listType = ref("Trending");
const searchString = ref('');
const dialog = ref(false);

function showLoginPrompt() {
  showLoginDialog = true;
}

function handleOpenFilter() {
  dialog.value = true; 
}
  
function handleCloseFilter() {
  dialog.value = false; 
}

function handleSortBy(e) {
  listType.value = e.value;
}

function onInput() {
  searchString.value = event.target.value;
};

const selectAllTags = () => {
  rewardTypes.value = [
        "OAT",
        "NFT",
        "Custom Reward",
        "Token Reward",
        "Discord Role",
        "Point",
        "Mintlist"
      ];
}

const clearAllTags = () => {
  rewardTypes.value = [];
}
const data = ref(null);

const route = useRoute();
const alias = ref(route.query.alias);
const cardItems = ref(null);

onMounted(async () => { 
  try {
    const response = await axios.post('https://88b11a64-0002-481a-a6ed-8b8a7b558108.mock.pstmn.io/api/space/query/', {
      alias: alias.value
      });  
    data.value = response.data.data; 
    console.info("1", data.value);
    const response1 = await axios.post('https://88b11a64-0002-481a-a6ed-8b8a7b558108.mock.pstmn.io/api/campaigns/query/', {
       alias: alias,
        credSources: credSources.value,
        rewardTypes: rewardTypes.value,
        chains: chains.value,
        statuses: statuses.value,
        listType: listType.value, 
        searchString: searchString.value
      });  
    cardItems.value = response1.data.data.list; 
    console.info("2", cardItems.value);
    // 在这里对响应数据进行进一步的处理
  } catch (error) {
    console.error(error);
    // 处理请求错误
  }
});


const handleFollowClick = async (id, isFollowing) => {
  if(isFollowing==false){
      try {
        const response = await axios.post('https://955b2b67-7c5f-4421-9eb6-d6cf6c3871ae.mock.pstmn.io/api/spaces/follow', {
          id: id
        });
        // 根据返回数据执行后续操作，比如打开对话框显示详情
        if(response.data.msg=="NOT_LOGIN") {
          showLoginPrompt()
        }
      } catch (error) {
        console.error('请求详情失败', error);
      }
    }else{
      try {
        const response = await axios.post('https://955b2b67-7c5f-4421-9eb6-d6cf6c3871ae.mock.pstmn.io/api/spaces/unfollow', {
          id: id
        });
        // 根据返回数据执行后续操作，比如打开对话框显示详情
        if(response.data.msg=="NOT_LOGIN") {
          showLoginPrompt()
        }
      } catch (error) {
        console.error('请求详情失败', error);
      }
    }
};


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
    
    const response = await axios.post('https://1d24a10f-e5bf-445a-b1f8-e0e37e3d82d0.mock.pstmn.i/api/campaigns/query', {
        alias: alias,
        credSources: credSources.value,
        rewardTypes: rewardTypes.value,
        chains: chains.value,
        statuses: statuses.value,
        listType: listType.value, 
        searchString: searchString.value
      }
    );

    cardItems.value = response.data.data.list; // 更新数据
    console.info(cardItems.value);
  } catch (error) {
    console.error('请求失败', error);
  }
}

watch([credSources, rewardTypes, chains, statuses, listType, searchString], fetchData);


useHead({
  title: brand.name + ' - Campaign',
});
</script>

