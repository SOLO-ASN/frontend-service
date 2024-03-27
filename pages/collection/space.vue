<template>
  <div class="main-wrap">
    <main-header :menu="singleMenu.inner" />
    <blur-gradient />
    <div class="container-fron container-wrap">
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
             
            </div>
          </v-card>
        </v-dialog>
        <v-container>
          <v-row align="start" justify="start" :class="isDesktop ? 'spacing2' : 'spacing1'">
            <v-col md="8" sm="12" class="px-0" cols="12">
              <search v-model="keyword" @input="onInput" />
            </v-col>
            <v-col md="4" sm="12" class="px-0" cols="12">
              <div class="ps-md-3">
                <sorter
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
          <div class="mt-md-5 mt-xs-2 mt-sm-3 mx-xs-2">
            <v-row :class="{ spacing3: isDesktop }">
              <v-col md="15" cols="15">
                <tab-category
                  :switch-tab="handleChangeGroup"
                  :value="group"
                  :total="filteredItems.length"
                />
                <v-row id="profile" class="mt-sm-5 mt-xs-2 spacing3">
                  <v-col v-if="cardItems.length < 1" sm="12">
                      <h3>Not found</h3>
                    </v-col>
                  <v-col
                    v-for="(item, index) in cardItems"
                    :key="index"
                    sm="3"
                    cols="12"
                  >
                    <profile-card
                      :name="item.name"
                      :verified="item.verified"
                      :avatar="item.avatar"
                      :items="item.items"
                      :sales="item.sales"
                      :href="item.href"
                      @follow-click="handleFollowClick"
                    />
                  </v-col>
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
import ProfileCard from '@/components/Cards/Profile/ProfileCard';
import Search from '@/components/Filter/Search';
import TabCategory from '@/components/Filter/TabCategory_space';
import Sorter from '@/components/Filter/Sorter_space';
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



const handleFollowClick = async (items) => {

  try {
    const response = await axios.get('/api/follow', {
      params: {
        id: items
        },
    });
    console.log(response.data);
    // 根据返回数据执行后续操作，比如打开对话框显示详情
  } catch (error) {
    console.error('请求详情失败', error);
  }
};

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
const cardItems = ref(creator)

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
  // Compare same tag
  const intersection = (firstArray, secondArray) => firstArray.filter(element => secondArray.includes(element));

  // Check is all categories checked
  const checkFilter = (item, filterData) => {
    if (filterData !== 'all') {
      return item === filterData;
    }
    return true;
  };
  cardItems.value = creator;
  // 是否verify
  if(verified.value==true){
    cardItems.value = cardItems.value.filter(item => item.verified ===true);
  }
  if (group.value === 'following') {
    cardItems.value = [];
  }

  // 根据不同的排序方式对 cardItems 进行排序
  if (sortBy.value === 'newest-asc') {
    cardItems.value.sort((a, b) => {
      const timeA = new Date(a.time).getTime();
      const timeB = new Date(b.time).getTime();
      return timeA - timeB;
    });
  } else if (sortBy.value === 'follow-asc') {
    cardItems.value.sort((a, b) => b.items - a.items);
  }

  return cardItems.value
})

async function fetchData() {
  try {
    const response = await axios.get('/api/filter/', {
      params: {
        sort: sortBy.value,
        filter: group.value,
        verified: verified.value,
        keyword: keyword.value,
      },
    });
    cardItems.value = response.data; // 更新数据
  } catch (error) {
    console.error('请求失败', error);
  }
}

watch([sortBy, group, verified, keyword], fetchData);


useHead({
  title: brand.name + ' - Space',
});
</script>
