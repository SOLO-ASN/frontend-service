<template>
  <div class="campaigns-container">
    <div
      v-for="campaign in campaigns"
      :key="campaign.id"
      class="campaign-card"
      @click="navigateToCampaign(campaign.id)" 
    >
      <div class="card-header">{{ campaign.type }}</div>
      <div class="card-body">
        <img :src="campaign.thumbnail" :alt="campaign.name" class="card-image">
        <div class="card-title" :title="campaign.name">{{ campaign.name }}</div>
        <div class="card-participants">{{ campaign.participantsCount.toLocaleString() }} participants</div>
      </div>
      <div class="card-footer">
        <img :src="campaign.spaceThumbnail" :alt="campaign.spaceName" class="space-avatar">
        <div class="space-name" :title="campaign.spaceName">{{ campaign.spaceName }}</div>
        <v-icon v-if="campaign.isVerified" class="verified">mdi-check-decagram</v-icon>
      </div>
    </div>
  </div>
</template>


<style scoped>
.campaigns-container {
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  justify-content: center; /* Centers the cards */
  
}

.campaign-card {
  width: var(--card-width, 300px);
  height: var(--card-height, 400px);
  display: flex;
  flex-direction: column;
  background: #222;
  color: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease; /* 平滑动画效果 */
  cursor: pointer; /* 鼠标悬停时的手型图标 */
}

.campaign-card:hover {
  transform: translateY(-10px); /* 鼠标悬停时向上移动 */
}

.card-header {
  background: #333;
  padding: 8px 16px;
  font-size: 1rem;
  text-align: center;
}

.card-body {
  padding: 0.5em;
  text-align: center;
  flex: 1; /* Ensures that the body takes up the remaining space */
}

.card-image {
  max-width: 50%; /* Smaller width */
  max-height: 50%; /* Smaller height */
  border-radius: 50%; /* Makes the image round */
  object-fit: cover;
  margin: 0 auto 16px; /* Centers the image and adds spacing below */
}

.card-title {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  margin-top: 8px;
  font-size: 1.2rem;
  font-weight: bold;
}

.card-participants {
  margin-top: 4px;
  font-size: 1rem;
  opacity: 0.8;
}

.space-avatar {
  width: 2em; /* 头像的宽度 */
  height: 2em; /* 头像的高度 */
  border-radius: 50%; /* 圆形头像 */
  object-fit: cover;
}

.space-name {
  flex-grow: 1;
  text-align: left;
  margin-left: 8px; /* 名字与头像之间的距离 */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis; /* 文本超出时显示省略号 */
}

.verified {
  color:  hsla(203, 100%, 57%, 0.6);
  font-size: 20px;
}

.card-footer {
  display: flex;
  align-items: center;
  padding: 0.5em;
  background: #333; /* 底部背景色 */
}
@import './playlist-card.scss';
</style>

<script setup>
import {useRouter} from 'vue-router';

const router = useRouter();

const campaigns = defineProps({
  campaigns: {
    type: Object,
    required: true
  }
});
const campaign = JSON.parse(JSON.stringify(campaigns)).campaigns;
onMounted(()=>{
    console.info(campaign);
})

function navigateToCampaign(campaignId) {
  router.push(`/campaign/campaign?id=${campaigns.id}`);
}

</script>
