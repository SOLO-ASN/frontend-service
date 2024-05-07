<template>
  <v-container class="root">
    <div class="mt-sm-5">
      <div class="mt-5">
        <v-row class="{ 'spacing4': !isMobile }">
          <v-col md="4" cols="12">
            <v-row :class="{ spacing4: betweenTablet }">
                  <div
                    class="photo-card"
                    data-aos="fade-up"
                    data-aos-delay="400"
                    data-duration-delay="300"
                  >
                    <photo-card
                      v-if="props.rewardDetail.rewardType == 'Points'"
                      :img="'https://cdn.galxe.com/galaxy/kiiblockchain/407b7c84-ccc2-4255-adea-36a2657349ba.png'"
                      :title="`${props.rewardDetail.loyaltyPoints} Points`"
                      :link="'total: Infinity'"
                      :href="''"
                      :size="'short'"
                    />
                    <photo-card
                      v-if="props.rewardDetail.rewardType == 'Token'"
                      :img="props.rewardDetail.tokenReward.tokenLogo"
                      :title="`${props.rewardDetail.tokenReward.userTokenAmount} ${props.rewardDetail.tokenReward.tokenDecimal}`"
                      :link="`total: ${props.rewardDetail.tokenReward.depositedTokenAmount}`"
                      :href="''"
                      :size="'short'"
                    />
                    <photo-card
                      v-if="props.rewardDetail.rewardType == 'Role'"
                      :img="props.rewardDetail.roleRward.roleimg"
                      :title="props.rewardDetail.roleRward.roleName"
                      :link="`id: ${props.rewardDetail.roleRward.roleId}`"
                      :href="''"
                      :size="'short'"
                    />
                  </div>
            </v-row>
          </v-col>
        </v-row>
      </div>
    </div>
  </v-container>
</template>

<style lang="scss" scoped>
@import './gallery-style.scss';
</style>

<script setup>
import { onMounted, ref, defineProps } from 'vue';
import { useDisplay } from 'vuetify';
import AOS from 'aos';
import PlaylistCard from '../../Cards/Media/PlaylistCard';
import PhotoCard from '../Card/PhotoCard';
import { collectionData, mediaData, longestArray } from './gallery-data';

const divider = ref(1);
const value = ref('all');
const combinedData = ref([]);
const rawData = ref([]);
const tab = ref('all');

const { mdAndDown: isTablet } = useDisplay();
const { smAndDown: isMobile } = useDisplay();
const { sm: betweenTablet } = useDisplay();

function handleChange(category) {
  value.value = category;
  combinedData.value = [];

  setTimeout(() => {
    if (category !== 'all') {
      const filteredData = rawData.value.filter(item => item.type === category);
      combinedData.value = filteredData;
    } else {
      combinedData.value = rawData.value;
    }
  }, 10);
}

const props = defineProps({
  rewardDetail: Object
})

onMounted(() => {
  const result = [];
  for (let i = 0; i < longestArray.length; i += 1) {
    if (collectionData[i]) result.push(collectionData[i]);
    if (mediaData[i]) result.push(mediaData[i]);
  }

  rawData.value = result;
  combinedData.value = result;
  console.log(combinedData.value);
  divider.value = Math.round(result.length / 3);

  AOS.init({
    once: true,
  });
})
</script>