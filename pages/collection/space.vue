<template>
  <div v-if="data" class="main-wrap">
    <main-header :menu="singleMenu.inner" />
    <blur-gradient />
    <div class="container-front container-wrap">
      <div class="inner-page">
          <detail 
          :detailData="data"
          @follow-click="handleFollowClick"
          />
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
                  <v-row align="start" justify="start" :class="isDesktop ? 'spacing2' : 'spacing1'" class="mx-15">

                    <!-- 侧边栏 -->
                    <v-col :cols="12" md="2" lg="2" class="sidebar">
                      <filter-side
                        ref="childRef"
                        @collect-tag="handleCollectTag"
                        @update:selectedTags1="handleSelectedTagsUpdate"
                        @update:selectedTags2="handleSelectedTagsUpdate"
                        @update:selectedTags3="handleSelectedTagsUpdate"
                        @update:selectedTags4="handleSelectedTagsUpdate"
                      />
                  
                    </v-col>
                  
                    <!-- 内容区域 -->
                    <v-col :cols="12" md="8" lg="8" class="mx-14 content">
                      <v-row class="px-0 content-row">
                        <v-col md="8" sm="12" class="px-0">
                          <search v-model="keyword" @input="onInput" />
                        </v-col>
                        <v-col md="4" sm="6" class="ps-md-3">
                          <sorter
                            :view="toggleView"
                            :sort-by-selected="sortBySelected"
                            @switch-view="handleToggleView"
                            @sort-by="handleSortBy"
                            @open-filter="handleOpenFilter"
                          />
                        </v-col>
                      </v-row>
                      <!-- 其他代码 -->
                      <el-button @click="selectAllTags" round color="black">All</el-button>
                      <el-button @click="clearAllTags" round color="black">Clear all</el-button>
                      <!-- 将 gallery 放置在内容区域的 v-row 内 -->
                      <v-row v-if="cardItems" :class="isMobile ? 'spacing1' : 'spacing1'">
                        <v-col
                          v-for="(cardItem, index) in cardItems"
                          :key="index"
                          :sm=3
                          cols="10"
                        >
                          <campaign-card :campaigns="cardItem" />
                      </v-col>
                      </v-row>
                    </v-col>
                  </v-row>
            
                </div>
                <div v-else-if="currentTab === 'leaderboard'">
                  <!-- Leaderboard的内容 -->
                  <v-container>
                    <h1>待开发</h1>
                    <leaderboard v-if="false"/>
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
    
.navbar {
  display: flex;
  justify-content: center; /* Centers the navbar */
  position: relative; /* Enables relative positioning */
  padding-top: 1rem; /* Adjust space above the navbar */
}

.nav-items {
  position: absolute;
  left: 50%;
  transform: translateX(-60%); /* Adjusts position to the left of the center */
  display: flex;
  gap: 2rem; /* Space between Home and Leaderboard */
}

.nav-item {
  font-size: 1.25rem;
  color: white;
  cursor: pointer;
  padding-bottom: 0.25rem;
}

.nav-item.active {
  font-weight: bold;
  border-bottom: 3px solid #42b983; /* Active tab indicator */
}

.inner-page1 {
  padding-top: 3rem; /* Adjusts the space between navbar and content */
}

.sidebar {
  margin-top: $spacing5;
  position: relative;
  z-index: 1;

  @include breakpoints-up(md) {
    padding: spacing(0, 3);
    margin: spacing(3, 0, 5);
    position: -webkit-sticky; /* For Safari browser support */
    position: sticky;
    top: 0; /* This should be the distance from the top of the viewport */
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
import Detail from '@/components/Collection/Product/Detail_space';
import Description from '@/components/Collection/Product/Description';
import RelatedItems from '@/components/Collection/Product/RelatedItems';
import Gallery from '@/components/Company/Team/Gallery_space';
import FilterSide from '@/components/Filter/Filter_space';
import ClaimButton from '@/components/Filter/ClaimButton.vue';
import Leaderboard from '@/components/Branding/Tag/Leaderboard.vue'
import Group from '@/components/Comment/Group';
import Search from '@/components/Filter/Search';
import TabCategory from '@/components/Filter/TabCategory_space';
import Sorter from '@/components/Filter/Sorter_space';
import PlaylistCard from '@/components/Cards/Media/PlaylistCard.vue'
import CampaignCard from '@/components/Cards/Media/CampaignCard.vue'
import brand from '@/assets/text/brand';
import { useHead } from '#app';
import { ref } from 'vue';
import axios from 'axios';


const currentTab = ref('home');

const childRef = ref(null);

const credSources = ref([]);
const rewardTypes = ref([]);
const chains = ref([]);
const statuses = ref([]);
const listType = ref("Trending");
const searchString = ref('');

function handleSortBy(e) {
  listType.value = e.value;
}

function onInput() {
  searchString.value = event.target.value;
};

const selectAllTags = () => {
  if (childRef.value) {
    childRef.value.selectAllTags();
  }
}

const clearAllTags = () => {
  if (childRef.value) {
    childRef.value.clearAllTags();
  }
}
const data = ref(null);

const route = useRoute();
const alias = ref(route.query.alias);
const cardItems = ref(null);

onMounted(async () => { 
  try {
    const response = await axios.post('https://1d24a10f-e5bf-445a-b1f8-e0e37e3d82d0.mock.pstmn.io/api/space/query/', {
      alias: alias.value
      });  
    data.value = response.data.data; 
    console.info("1", data.value);
    const response1 = await axios.post('https://1d24a10f-e5bf-445a-b1f8-e0e37e3d82d0.mock.pstmn.io/api/campaigns/query/', {
       alias: alias,
        credSources: credSources.value,
        rewardTypes: rewardTypes.value,
        chains: chains.value,
        statuses: statuses.value,
        listType: listType.value, 
        searchString: searchString.value
      });  
    cardItems.value = response1.data.data; 
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
    
    const response = await axios.post('https://1d24a10f-e5bf-445a-b1f8-e0e37e3d82d0.mock.pstmn.io/api/campaigns/query', {
        alias: alias,
        credSources: credSources.value,
        rewardTypes: rewardTypes.value,
        chains: chains.value,
        statuses: statuses.value,
        listType: listType.value, 
        searchString: searchString.value
      }
    );

    cardItems.value = response.data.data; // 更新数据
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

