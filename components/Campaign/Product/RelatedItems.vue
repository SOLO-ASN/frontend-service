<template>
  <v-row justify="center">
    <v-col lg="11" md="12" cols="12">
      <v-container class="pt-5 carousel-header">
        <title-main
          strict-align
          :text="$t('explore more')"
          :align="isMobile ? 'center' : 'left'"
        />
        <v-btn variant="text" 
               size="large" 
               class="view-all" 
               @click="navigateToExplore">
          see more
          <v-icon class="icon ms-1">mdi-arrow-right</v-icon>
        </v-btn>
      </v-container>
      <v-container>
        <v-row class="spacing2 scroll-tablet">
          <v-col v-for="(item, index) in campaignList" :key="index" md="3" sm="4" cols="10">
            <div class="card-related">
              <product-nft-card
                :img="item.Campaign.thumbnail"
                :avatar="item.Space.thumbnail"
                :name="item.Space.name"
                :title="item.Campaign.name"
                :href="'../campaign/campaign?id=' + item.Campaign.id"
                :verified="item.Space.isVerified"
              />
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-col>
  </v-row>
</template>

<style lang="scss" scoped>
@import './product-style.scss';
</style>

<script setup>
import { useDisplay } from 'vuetify';
import imgAPI from '@/assets/images/imgAPI';
import TitleMain from '../../Title';
import ProductNftCard from '../Card/NftCard';
import { useRouter } from 'vue-router';
import url from '@/assets/text/url';
import axios from 'axios';
import {ref} from 'vue';

const campaignList = ref([]);

const router = useRouter();
// for server request use
const SERVER = url.serverUrl;

const navigateToExplore = () => {
  console.log('Button clicked');
  // jump to the right page based on the type of credential
  let route = { path: '../menus/explore'};
  router.push(route);
};

onMounted(() => {
  axios.post(SERVER+'/api/explore/query', {
    "first": 8,
    "after": 0,
    "credSources": ["all"],
    "rewardTypes": ["all"],
    "chains": ["all"],
    "statuses": ["all"],
    "listType": "",
    "searchString": ""})
    .then((response) => {
      console.log(response.data.data.Explore);
      campaignList.value = response.data.data.Explore;
//this.items = response.data

  })
})

const { xs: isMobile } = useDisplay();
</script>
