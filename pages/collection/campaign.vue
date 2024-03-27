<template>
  <div class="main-wrap">
    <main-header :menu="singleMenu.inner" />
    <blur-gradient />
    <div class="container-front container-wrap">
      <div class="inner-page">
        
          <detail />
        
          <v-row align="start" justify="start" :class="isDesktop ? 'spacing2' : 'spacing1'" class = "mx-15">
            <!-- 侧边栏 -->
            <v-col :cols="12" md="2" lg="2" class="sidebar">
              <filter-side
                :filter-rating="filterRating"
                :filter-category="filterCategory"
                :filter-radio="filterRadio"
                :filter-check="filterCheck"
                @change-rating="handleRatingChange"
                @change-category="handleCategoryChange"
                @change-radio="handleRadioChange"
                @change-check="handleCheckChange"
                @change-range="handleRangeChange"
                @collect-tag="handleCollectTag"
              />
            </v-col>
          
            <!-- 内容区域 -->
            <v-col :cols="12" md="8" lg="8" class="mx-14 content">
              <v-row class="px-0 content-row">
                <v-col md="7" sm="12" class="px-0">
                  <search v-model="keyword" @input="onInput" />
                </v-col>
                <v-col md="3" sm="6" class="ps-md-3">
                  <sorter
                    :view="toggleView"
                    :sort-by-selected="sortBySelected"
                    @switch-view="handleToggleView"
                    @sort-by="handleSortBy"
                    @open-filter="handleOpenFilter"
                  />
                </v-col>
                <v-col md="2" sm="6" class="ps-md-4">
                  <claim-button @update:isSelected="handleVerifiedChange"/>
                </v-col>
              </v-row>
              <!-- 将 gallery 放置在内容区域的 v-row 内 -->
              <gallery />
            </v-col>
          </v-row>
       
      </div>
    </div>
    <div id="footer" class="space-top-short">
      <main-footer />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/pages';

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
import FilterSide from '@/components/Filter/Filter';
import ClaimButton from '@/components/Filter/ClaimButton.vue';
import Group from '@/components/Comment/Group';
import Search from '@/components/Filter/Search';
import TabCategory from '@/components/Filter/TabCategory_space';
import Sorter from '@/components/Filter/Sorter_space';
import brand from '@/assets/text/brand';
import { useHead } from '#app';

useHead({
  title: brand.name + ' - Campaign',
});
</script>

