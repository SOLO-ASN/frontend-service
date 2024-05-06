<template>
  <div class="main-wrap">
    <main-header :menu="singleMenu.inner" />
    <blur-gradient />
    <div class="container-front container-wrap">
      <div class="inner-page">
        <login-prompt
          v-model="showLoginDialog"
          @update:value="showLoginDialog = $event"
        />
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
       <v-dialog v-model="createDialog" fullscreen hide-overlay transition="dialog-transition">
          <v-toolbar v-if="createDialog" flat dense>
            <v-btn icon large @click="toggleCreateDialog" style="position: absolute; right: 20px; top: 20px;">
              <v-icon size="25">mdi-close</v-icon>
            </v-btn>
          </v-toolbar>
          <v-card>
            <v-card-text>
              <space-create @close-dialog="handleCloseDialog"/>
            </v-card-text>
          </v-card>
        </v-dialog>
        <v-container>
          <v-row align="start" justify="start" :class="{'spacing-xs': !isDesktop, 'spacing-lg': isDesktop}">
            <v-col :cols="isDesktop ? 8 : 12" class="px-0">
              <search v-model="keyword" @input="onInput" />
            </v-col>
           <v-col md="4" sm="12" class="px-0" cols="12">
              <div class="ps-md-3">
                <sorter
                  :showFilter=false
                  :view="toggleView"
                  :sort-by-selected="sortBySelected"
                  :result-length="filteredItems.length"
                  @switch-view="handleToggleView"
                  @sort-by="handleSortBy"
                  @open-filter="handleOpenFilter"
                  @update:isSelected="handleVerifiedChange"
                />  
              </div>
            </v-col>
            
          </v-row>

          <v-row class="pl-0" :style="isDesktop ? 'position: absolute; top: 125px; left: 250px;' : 'margin-top: 20px;'">
            <v-btn color="primary" @click=toggleCreateDialog>Create space</v-btn>
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
                <v-row id="profile" class="mt-sm-5 mt-xs-2" :class="{'spacing-sm': !isDesktop, 'spacing-lg': isDesktop}">
                  <v-col v-for="(item, index) in cardItems" :key="index.id" :cols="isDesktop ? 4 : 12">
                    <space-card
                      :name="item.name"
                      :isVerified="item.isVerified"
                      :thumbnail="item.thumbnail"
                      :activeCampaignCount="item.activeCampaignCount"
                      :followersCount="item.followers"
                      :status="item.status"
                      :alias="item.alias"
                      :id="item.id"
                      :isFollowing="item.isFollowing"
                      @follow-click="handleFollowClick(item)"
                    />
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
import LoginPrompt from '@/components/Airdrops/LoginPrompt'
import TabCategory from '@/components/Airdrops/TabCategory';
import Sorter from '@/components/Airdrops/Sorter';
import ClaimButton from '@/components/Airdrops/ClaimButton.vue';
import brand from '@/assets/text/brand';
import link from '@/assets/text/link';
import SpaceCreate from '@/components/Airdrops/SpaceCreate.vue'
import collection from '@/assets/api/collection';
import creator from '@/assets/api/creator';
import url from '@/assets/text/url';
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
const sortBy = ref('followers')
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
const SERVER = url.serverUrl;

const { mdAndUp: isDesktop } = useDisplay();

const range = ref({
  from: 0,
  to: 100
});

const sortBySelected = ref({
  title: 'Most followed',
  value: 'followers',
});

const filterTag = ref(['tag-one', 'tag-two', 'tag-three', 'tag-four'])
const cardItems = ref([])
const isLoading = ref(true);
const createDialog = ref(false);
const showLoginDialog = ref(false);
const after = ref(0);
const hasNextPage = ref(true);
const username = ref(null);


function showLoginPrompt() {
  showLoginDialog.value = true;
}

onMounted(() => {
  fetchData();
  window.addEventListener('scroll', handleScroll);
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
})

function handleOpenFilter() {
  dialog.value = true; 
}
  
function handleCloseFilter() {
  dialog.value = false; 
}

function toggleCreateDialog() {
  const username = localStorage.getItem('username');
  if(username) {
    createDialog.value = !createDialog.value;
  }else {
    showLoginPrompt();
  }
  
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


function handleScroll() {
    const nearBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;
    if (nearBottom && !isLoading.value  && hasNextPage.value==true) {  // 确保每次都是完整的数据组
        loadMoreData();
    }
}

function handleCloseDialog() {
  createDialog.value = false;
}

const handleFollowClick = async (item) => {
  console.info(item.isFollowing);
  console.info(item.id);
  const username = localStorage.getItem('username');
  if(item.isFollowing==false){
      try {
        const response = await axios.post(SERVER + '/api/spaces/follow', {
          username: username,
          spaceid: item.id
        });
        // 根据返回数据执行后续操作，比如打开对话框显示详情
        if(response.data.msg=="NOT_LOGIN") {
          showLoginPrompt();
        }else if(response.data.msg=="Follow Success") {
          // 更新对应卡片的 `isFollowing` 状态
          
          item.isFollowing = !item.isFollowing;
        
        }else {
          alert("follow error");
        }
      } catch (error) {
        console.error('请求详情失败', error);
      }
    }else{
      try {
        const response = await axios.post(SERVER + '/api/spaces/unfollow', {
          username: username,
          spaceid: item.id
        });
        if(response.data.msg=="NOT_LOGIN") {
          showLoginPrompt();
        }else if(response.data.msg=="UnFollow Success") {
          // 更新对应卡片的 `isFollowing` 状态
          
          item.isFollowing = !item.isFollowing;
        
        }else {
          alert("unfollow error");
        }
        // 根据返回数据执行后续操作，比如打开对话框显示详情
      } catch (error) {
        console.error('请求详情失败', error);
      }
    }
};

async function fetchData() {
  const username = localStorage.getItem('username');
  try {
    isLoading.value = true; 
    after.value = 0;
    const response = await axios.post(SERVER + '/api/spaces/query', {
      first:9,
      after:after.value,
      spaceListType: sortBy.value,
      filter: group.value,
      verifiedOnly: verified.value,
      searchString: keyword.value,
      username: username
    });

    after.value = response.data.data.pageInfo.endCursor;
    hasNextPage.value = response.data.data.pageInfo.hasNextPage;
    if (response.data.data.Spaces && Array.isArray(response.data.data.Spaces)) {
      cardItems.value = response.data.data.Spaces.map(item => ({
        name: item.name,
        isVerified: item.isVerified,
        thumbnail: item.thumbnail,
        activeCampaignCount: item.activeCampaignCount,
        followers: item.followers,
        status: item.status,
        id: item.id,
        alias: item.alias,
        isFollowing: item.isFollowing
      }));
    } else {
      // Handle the case where response.data.list is not an array
      console.error('List is not an array:', response.data.data);
      cardItems.value = []; // Reset cardItems or set it to a default value
    }
  } catch (error) {
    console.error('请求失败', error);
    cardItems.value = []; // Reset cardItems or set it to a default value in case of an error
  } finally {
    isLoading.value = false;
  }
}

async function loadMoreData() {
  if (isLoading.value) {
    return; // 如果已经在加载中，则直接返回
  }
  isLoading.value = true;
  try {
    const username = localStorage.getItem('username');
    const response = await axios.post(SERVER + '/api/spaces/query', {
      username: username,
      first:9,
      after:after.value,
      spaceListType: sortBy.value,
      filter: group.value,
      verifiedOnly: verified.value,
      searchString: keyword.value,
    });

    after.value = response.data.data.pageInfo.endCursor;
    hasNextPage.value = response.data.data.pageInfo.hasNextPage;
    if (response.data.data.Spaces && Array.isArray(response.data.data.Spaces)) {
      cardItems.value.push(...response.data.data.Spaces.map(item => ({
        name: item.name,
        isVerified: item.isVerified,
        thumbnail: item.thumbnail,
        activeCampaignCount: item.activeCampaignCount,
        followers: item.followers,
        status: item.status,
        id: item.id,
        alias: item.alias,
        isFollowing: item.isFollowing
      })));
    } else {
      // Handle the case where response.data.list is not an array
      console.error('List is not an array:', response.data.data);
      cardItems.value = []; // Reset cardItems or set it to a default value
    }

  } catch (error) {
    console.error('请求失败', error);
    cardItems.value = []; // Reset cardItems or set it to a default value in case of an error
  }finally {
    isLoading.value = false;
  }
}
watch([sortBy, group, verified, keyword], fetchData);


useHead({
  title: brand.name + ' - Space',
});
</script>
