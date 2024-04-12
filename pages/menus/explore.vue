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
import { useHead } from '#app';
import { ref } from 'vue';
import axios from 'axios';


const currentTab = ref('All');

const childRef = ref(null);
const dialog = ref(false);
const credSources = ref([]);
const rewardTypes = ref([]);
const chains = ref([]);
const statuses = ref(['Active', 'Not Started']);
const listType = ref("Trending");
const searchString = ref('');
const verified = ref(false);

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
const alias = ref("Galxe");
const cardItems = ref(null);
cardItems.value = [ {
        "id": "GCK5JUUjFn",
        "name": "Project Galaxy Meme Contest #1 Winner",
        "type": "Oat",
        "status": "Expired",
        "thumbnail": "https://cdn.galxe.com/galaxy/assets/galaxyspace/1653583425186120168.png",
        "participantsCount": 3,
        "spaceName": "Galxe",
        "isVerified": true,
        "spaceThumbnail": "https://d257b89266utxb.cloudfront.net/galaxy/images/avatar/0x0b495174e4baabe771c6660be65054d2672ee577-1662470151406825713.png",
      },
      {
        "id": "GC4SjtTJ2f",
        "name": "Galxe Radio Episode 60 Feat. Laika AI",
        "type": "Oat",
        "status": "Active",
        "thumbnail": "https://cdn.galxe.com/galaxy/galxe/adef1dc4-97e1-4247-b929-502af976edba.png",
        "participantsCount": 993,
        "spaceName": "Galxe",
        "isVerified": true,
        "spaceThumbnail": "https://d257b89266utxb.cloudfront.net/galaxy/images/avatar/0x0b495174e4baabe771c6660be65054d2672ee577-1662470151406825713.png",
    },
    {
        "id": "GC9a7tTN3X",
        "name": "Empower BWB Points Program: Galxe & Bitget Wallet $BWB Points Airdrop plan",
        "type": "Oat",
        "status": "Active",
        "thumbnail": "https://cdn.galxe.com/galaxy/galxe/ca38f2ff-a901-4ecc-bcde-ca99a41c6871.png",
        "participantsCount": 2014,
        "spaceName": "Moso",
        "isVerified": false,
        "spaceThumbnail": "https://cdn.galxe.com/tooljet/Moso Logo Icon.png",
    },
    {
        "id": "GCK5JUUjFn",
        "name": "Project Galaxy Meme Contest #1 Winner",
        "type": "Oat",
        "status": "Expired",
        "thumbnail": "https://cdn.galxe.com/galaxy/assets/galaxyspace/1653583425186120168.png",
        "participantsCount": 3,
        "spaceName": "Moso",
        "isVerified": false,
        "spaceThumbnail": "https://cdn.galxe.com/tooljet/Moso Logo Icon.png",
      },
      {
        "id": "GC4SjtTJ2f",
        "name": "Galxe Radio Episode 60 Feat. Laika AI",
        "type": "Oat",
        "status": "Active",
        "thumbnail": "https://cdn.galxe.com/galaxy/galxe/adef1dc4-97e1-4247-b929-502af976edba.png",
        "participantsCount": 993,
        "spaceName": "Taiko",
        "isVerified": true,
        "spaceThumbnail": "https://cdn.galxe.com/galaxy/avatar/233f5252-6c2a-4adf-8799-a310e27a016d.png",
    },
    {
        "id": "GC9a7tTN3X",
        "name": "Empower BWB Points Program: Galxe & Bitget Wallet $BWB Points Airdrop plan",
        "type": "Oat",
        "status": "Active",
        "thumbnail": "https://cdn.galxe.com/galaxy/galxe/ca38f2ff-a901-4ecc-bcde-ca99a41c6871.png",
        "participantsCount": 2014,
        "spaceName": "Taiko",
        "isVerified": true,
        "spaceThumbnail": "https://cdn.galxe.com/galaxy/avatar/233f5252-6c2a-4adf-8799-a310e27a016d.png",
    },
    {
        "id": "GCK5JUUjFn",
        "name": "Project Galaxy Meme Contest #1 Winner",
        "type": "Oat",
        "status": "Expired",
        "thumbnail": "https://cdn.galxe.com/galaxy/assets/galaxyspace/1653583425186120168.png",
        "participantsCount": 3,
        "spaceName": "Galxe",
        "isVerified": true,
        "spaceThumbnail": "https://d257b89266utxb.cloudfront.net/galaxy/images/avatar/0x0b495174e4baabe771c6660be65054d2672ee577-1662470151406825713.png",
      },
      {
        "id": "GC4SjtTJ2f",
        "name": "Galxe Radio Episode 60 Feat. Laika AI",
        "type": "Oat",
        "status": "Active",
        "thumbnail": "https://cdn.galxe.com/galaxy/galxe/adef1dc4-97e1-4247-b929-502af976edba.png",
        "participantsCount": 993,
        "spaceName": "Galxe",
        "isVerified": true,
        "spaceThumbnail": "https://d257b89266utxb.cloudfront.net/galaxy/images/avatar/0x0b495174e4baabe771c6660be65054d2672ee577-1662470151406825713.png",
    },
    {
        "id": "GC9a7tTN3X",
        "name": "Empower BWB Points Program: Galxe & Bitget Wallet $BWB Points Airdrop plan",
        "type": "Oat",
        "status": "Active",
        "thumbnail": "https://cdn.galxe.com/galaxy/galxe/ca38f2ff-a901-4ecc-bcde-ca99a41c6871.png",
        "participantsCount": 2014,
        "spaceName": "Moso",
        "isVerified": false,
        "spaceThumbnail": "https://cdn.galxe.com/tooljet/Moso Logo Icon.png",
    },{
        "id": "GCK5JUUjFn",
        "name": "Project Galaxy Meme Contest #1 Winner",
        "type": "Oat",
        "status": "Expired",
        "thumbnail": "https://cdn.galxe.com/galaxy/assets/galaxyspace/1653583425186120168.png",
        "participantsCount": 3,
        "spaceName": "Galxe",
        "isVerified": true,
        "spaceThumbnail": "https://d257b89266utxb.cloudfront.net/galaxy/images/avatar/0x0b495174e4baabe771c6660be65054d2672ee577-1662470151406825713.png",
      },
      {
        "id": "GC4SjtTJ2f",
        "name": "Galxe Radio Episode 60 Feat. Laika AI",
        "type": "Oat",
        "status": "Active",
        "thumbnail": "https://cdn.galxe.com/galaxy/galxe/adef1dc4-97e1-4247-b929-502af976edba.png",
        "participantsCount": 993,
        "spaceName": "Galxe",
        "isVerified": true,
        "spaceThumbnail": "https://d257b89266utxb.cloudfront.net/galaxy/images/avatar/0x0b495174e4baabe771c6660be65054d2672ee577-1662470151406825713.png",
    },
    {
        "id": "GC9a7tTN3X",
        "name": "Empower BWB Points Program: Galxe & Bitget Wallet $BWB Points Airdrop plan",
        "type": "Oat",
        "status": "Active",
        "thumbnail": "https://cdn.galxe.com/galaxy/galxe/ca38f2ff-a901-4ecc-bcde-ca99a41c6871.png",
        "participantsCount": 2014,
        "spaceName": "Moso",
        "isVerified": false,
        "spaceThumbnail": "https://cdn.galxe.com/tooljet/Moso Logo Icon.png",
    },{
        "id": "GCK5JUUjFn",
        "name": "Project Galaxy Meme Contest #1 Winner",
        "type": "Oat",
        "status": "Expired",
        "thumbnail": "https://cdn.galxe.com/galaxy/assets/galaxyspace/1653583425186120168.png",
        "participantsCount": 3,
        "spaceName": "Galxe",
        "isVerified": true,
        "spaceThumbnail": "https://d257b89266utxb.cloudfront.net/galaxy/images/avatar/0x0b495174e4baabe771c6660be65054d2672ee577-1662470151406825713.png",
      },
      {
        "id": "GC4SjtTJ2f",
        "name": "Galxe Radio Episode 60 Feat. Laika AI",
        "type": "Oat",
        "status": "Active",
        "thumbnail": "https://cdn.galxe.com/galaxy/galxe/adef1dc4-97e1-4247-b929-502af976edba.png",
        "participantsCount": 993,
        "spaceName": "Galxe",
        "isVerified": true,
        "spaceThumbnail": "https://d257b89266utxb.cloudfront.net/galaxy/images/avatar/0x0b495174e4baabe771c6660be65054d2672ee577-1662470151406825713.png",
    },
    {
        "id": "GC9a7tTN3X",
        "name": "Empower BWB Points Program: Galxe & Bitget Wallet $BWB Points Airdrop plan",
        "type": "Oat",
        "status": "Active",
        "thumbnail": "https://cdn.galxe.com/galaxy/galxe/ca38f2ff-a901-4ecc-bcde-ca99a41c6871.png",
        "participantsCount": 2014,
        "spaceName": "Moso",
        "isVerified": false,
        "spaceThumbnail": "https://cdn.galxe.com/tooljet/Moso Logo Icon.png",
    },{
        "id": "GCK5JUUjFn",
        "name": "Project Galaxy Meme Contest #1 Winner",
        "type": "Oat",
        "status": "Expired",
        "thumbnail": "https://cdn.galxe.com/galaxy/assets/galaxyspace/1653583425186120168.png",
        "participantsCount": 3,
        "spaceName": "Galxe",
        "isVerified": true,
        "spaceThumbnail": "https://d257b89266utxb.cloudfront.net/galaxy/images/avatar/0x0b495174e4baabe771c6660be65054d2672ee577-1662470151406825713.png",
      },
      {
        "id": "GC4SjtTJ2f",
        "name": "Galxe Radio Episode 60 Feat. Laika AI",
        "type": "Oat",
        "status": "Active",
        "thumbnail": "https://cdn.galxe.com/galaxy/galxe/adef1dc4-97e1-4247-b929-502af976edba.png",
        "participantsCount": 993,
        "spaceName": "Galxe",
        "isVerified": true,
        "spaceThumbnail": "https://d257b89266utxb.cloudfront.net/galaxy/images/avatar/0x0b495174e4baabe771c6660be65054d2672ee577-1662470151406825713.png",
    },
    {
        "id": "GC9a7tTN3X",
        "name": "Empower BWB Points Program: Galxe & Bitget Wallet $BWB Points Airdrop plan",
        "type": "Oat",
        "status": "Active",
        "thumbnail": "https://cdn.galxe.com/galaxy/galxe/ca38f2ff-a901-4ecc-bcde-ca99a41c6871.png",
        "participantsCount": 2014,
        "spaceName": "Moso",
        "isVerified": false,
        "spaceThumbnail": "https://cdn.galxe.com/tooljet/Moso Logo Icon.png",
    },{
        "id": "GCK5JUUjFn",
        "name": "Project Galaxy Meme Contest #1 Winner",
        "type": "Oat",
        "status": "Expired",
        "thumbnail": "https://cdn.galxe.com/galaxy/assets/galaxyspace/1653583425186120168.png",
        "participantsCount": 3,
        "spaceName": "Galxe",
        "isVerified": true,
        "spaceThumbnail": "https://d257b89266utxb.cloudfront.net/galaxy/images/avatar/0x0b495174e4baabe771c6660be65054d2672ee577-1662470151406825713.png",
      },
      {
        "id": "GC4SjtTJ2f",
        "name": "Galxe Radio Episode 60 Feat. Laika AI",
        "type": "Oat",
        "status": "Active",
        "thumbnail": "https://cdn.galxe.com/galaxy/galxe/adef1dc4-97e1-4247-b929-502af976edba.png",
        "participantsCount": 993,
        "spaceName": "Galxe",
        "isVerified": true,
        "spaceThumbnail": "https://d257b89266utxb.cloudfront.net/galaxy/images/avatar/0x0b495174e4baabe771c6660be65054d2672ee577-1662470151406825713.png",
    },
    {
        "id": "GC9a7tTN3X",
        "name": "Empower BWB Points Program: Galxe & Bitget Wallet $BWB Points Airdrop plan",
        "type": "Oat",
        "status": "Active",
        "thumbnail": "https://cdn.galxe.com/galaxy/galxe/ca38f2ff-a901-4ecc-bcde-ca99a41c6871.png",
        "participantsCount": 2014,
        "spaceName": "Moso",
        "isVerified": false,
        "spaceThumbnail": "https://cdn.galxe.com/tooljet/Moso Logo Icon.png",
    },
    ];

cardItems.value = [];

onMounted(async () => { 
  fetchData();
});


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
    const response = await axios.post('http://172.31.100.142:18080/api/explore/query', {
        first: 2,
        after: 0,
        credSources: credSources.value,
        rewardTypes: rewardTypes.value,
        chains: chains.value,
        statuses: statuses.value,
        listType: listType.value, 
        searchString: searchString.value,
      }
    );

    cardItems.value = response.data.data.list; // 更新数据
    console.info(cardItems.value);
  } catch (error) {
    console.error('请求失败', error);
  }
}

watch([credSources, rewardTypes, chains, statuses, listType, searchString, verified], fetchData);


useHead({
  title: brand.name + ' - Campaign',
});
</script>

