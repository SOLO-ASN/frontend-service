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
              <v-container>
                <v-row justify="center">
                  <v-col sm="10" cols="12">
                    <filter-side
                      :filter-rating="filterRating"
                      :filter-category="filterCategory"
                      :filter-radio="filterRadio"
                      :filter-check="filterCheck"
                      :filter-tag="filterTag"
                      :handle-check-all="handleCheckAll"
                      @change-rating="handleRating"
                      @change-category="handleCategory"
                      @change-radio="handleRadio"
                      @change-check="handleCheck"
                      @change-range="handleRangeFilter"
                      @collect-tag="handleCollectTag"
                    />
                  </v-col>
                </v-row>
              </v-container>
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
                />
              </div>
            </v-col>
          </v-row>
          <div class="mt-md-5 mt-xs-2 mt-sm-3 mx-xs-2">
            <v-row :class="{ spacing3: isDesktop }">
            <!--
              <v-col v-if="isDesktop" md="3" cols="12">
                <filter-side
                  :filter-rating="filterRating"
                  :filter-category="filterCategory"
                  :filter-radio="filterRadio"
                  :filter-check="filterCheck"
                  :filter-tag="filterTag"
                  :handle-check-all="handleCheckAll"
                  @change-rating="handleRating"
                  @change-category="handleCategory"
                  @change-radio="handleRadio"
                  @change-check="handleCheck"
                  @change-range="handleRangeFilter"
                  @collect-tag="handleCollectTag"
                />
              </v-col>
              --> 
              <v-col md="15" cols="15">
                <tab-category
                  :switch-tab="handleChangeGroup"
                  :value="group"
                  :total="filteredItems.length"
                />
                <v-row v-if="group === 'following' || group === 'all'" class="spacing2">
                  <v-col v-if="filteredItems.length < 1" sm="12">
                    <h3>Not found</h3>
                  </v-col>
                  <template v-for="(item, index) in filteredItems" :key="index">
                    <v-col
                      v-if="item.title.toLowerCase().indexOf(keyword) > -1"
                      :lg="toggleView === 0 ? 3 : 12"
                      :sm="toggleView === 0 ? 6 : 12"
                      cols="12"
                      class="mb-5"
                    >
                      <div
                        class="item"
                        :class="toggleView === 'grid' ? 'mb-4' : 'mb-1'"
                        :data-filter="`Category: ${item.category} ~ Tag: ${item.tag} ~ Check: ${item.check} ~ Radio: ${item.radio}`"
                      >
                        <card-products
                          :rating="item.rating"
                          :price="item.price"
                          :title="item.title"
                          desc="Last Sale: 0.01001 ETH"
                          :orientation="toggleView === 0 ? 'portrait' : 'landscape'"
                          :img="item.img"
                          type="over"
                          :href="link.productDetail"
                        />
                      </div>
                    </v-col>
                  </template>
                </v-row>
                <v-row v-if="group === 'all'" id="profile" class="mt-sm-5 mt-xs-2 spacing3">
                  <v-col
                    v-for="(item, index) in creator"
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
                      :handle-button-click="handleButtonClick"
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
import TabCategory from '@/components/Filter/TabCategory';
import Sorter from '@/components/Filter/Sorter';
import FilterSide from '@/components/Filter/Filter';
import brand from '@/assets/text/brand';
import link from '@/assets/text/link';
import collection from '@/assets/api/collection';
import creator from '@/assets/api/creator';
import products from '@/assets/api/products';
import { useHead } from '#app';
import axios from 'axios';
import {useRoute} from 'vue-router';

const checkItems = [
  'check-a',
  'check-b',
  'check-c',
  'check-d',
  'check-e',
  'check-f',
];

const keyword = ref('');

const route = useRoute();
const name = ref(route.query.name);
const spaceData = ref(null);

onMounted(async () => {
  try {
    console.info(name);
    const response = await axios.post(`/api/space/query`, {
      name: name.value
    });
    spaceData.value = response.data.data;
  } catch (error) {
    console.error(error);
  }
});



const onInput = async() => {
  keyword.value = event.target.value;
  try {
    // 发送搜索请求，传递 keyword 作为参数
    const response = await axios.get('/api/search', {
      params: { keyword: keyword.value }
    });
    // 假设后端返回的是一个包含搜索结果的数组
    cardItems.value = response.data;
  } catch (error) {
    console.error('搜索请求失败', error);
  }
};


const handleButtonClick = async () => {

  try {
    const response = await axios.get('/api/path-to-detail');
    console.log(response.data);
    // 根据返回数据执行后续操作，比如打开对话框显示详情
  } catch (error) {
    console.error('请求详情失败', error);
  }
};

const dialog = ref(false);
const sortBy = ref('price')
const sortFrom = ref(-1);
const sortTo = ref(1);
const toggleView = ref(0);
const filterRating = ref(0);
const filterCategory = ref('all');
const filterRadio = ref('all');
const filterCheck = ref(checkItems);
const group = ref('all');

const { mdAndUp: isDesktop } = useDisplay();

const range = ref({
  from: 0,
  to: 100
});

const sortBySelected = ref({
  title: 'Highest Price',
  value: 'price-asc',
});

const filterTag = ref(['tag-one', 'tag-two', 'tag-three', 'tag-four'])
const cardItems = ref(products)

function handleOpenFilter() {
  dialog.value = true; 
}
  
function handleCloseFilter() {
  dialog.value = false; 
}

function handleRating(val) {
  filterRating.value = val;
}

function handleCategory(val) {
  filterCategory.value = val;
}

function handleRadio(val) {
  filterRadio.value = val;
}

function handleCheck(val) {
  filterCheck.value = val;
}

function handleCheckAll() {
  filterCheck.value = checkItems;
}

function handleRangeFilter(val) {
  range.value.from = val.from;
  range.value.to = val.to;
}

function handleCollectTag(val) {
  filterTag.value = val;
}
  
function handleToggleView(val) {
  toggleView.value = val;
}

function handleSortBy(e) {
  switch (e.value) {
    case 'title-asc':
      sortBy.value = 'title';
      sortFrom.value = 1;
      sortTo.value = -1;
      break;
    case 'title-desc':
      sortBy.value = 'title';
      sortFrom.value = -1;
      sortTo.value = 1;
      break;
    case 'price-asc':
      sortBy.value = 'price';
      sortFrom.value = -1;
      sortTo.value = 1;
      break;
    default:
      sortBy.value = 'price';
      sortFrom.value = 1;
      sortTo.value = -1;
  }
}
  
function handleChangeGroup(cat) {
  group.value = cat;
}

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

  return cardItems.value
    .filter(cardItem => (
      checkFilter(cardItem.category, filterCategory.value)
        && checkFilter(cardItem.radio, filterRadio.value)
        && cardItem.price >= range.value.from
        && cardItem.price <= range.value.to
        && cardItem.rating >= filterRating.value
        && filterCheck.value.indexOf(cardItem.check) > -1
        && intersection(filterTag.value, cardItem.tag).length > 0
    ))
    .sort(
      (a, b) => (a[sortBy.value] > b[sortBy.value] ? sortFrom.value : sortTo.value),
    );
})

useHead({
  title: brand.name + ' - Space',
});
</script>
