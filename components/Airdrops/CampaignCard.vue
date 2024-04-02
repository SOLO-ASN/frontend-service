<template>
  <div class="campaigns-container">
    <div
      v-for="campaign in campaigns"
      :key="campaign.id"
      class="campaign-card"
    >
      <div class="card-header">{{ campaign.type }}</div>
      <div class="card-body">
        <img :src="campaign.thumbnail" :alt="campaign.name" class="card-image">
        <div class="card-title">{{ campaign.name }}</div>
        <div class="card-participants">{{ campaign.participantsCount.toLocaleString() }} participants</div>
      </div>
    </div>
  </div>
</template>


<style scoped>
.campaigns-container {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center; /* Centers the cards */
  
}

.campaign-card {
  width: 300px; /* Fixed width */
  height: 400px; /* Fixed height */
  display: flex;
  flex-direction: column;
  background: #333;
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
  background: #555;
  padding: 8px 16px;
  font-size: 1rem;
  text-align: center;
}

.card-body {
  padding: 16px;
  text-align: center;
  flex: 1; /* Ensures that the body takes up the remaining space */
}

.card-image {
  max-width: 180px; /* Smaller width */
  max-height: 180px; /* Smaller height */
  border-radius: 50%; /* Makes the image round */
  object-fit: cover;
  margin: 0 auto 16px; /* Centers the image and adds spacing below */
}

.card-title {
  margin-top: 8px;
  font-size: 1.2rem;
  font-weight: bold;
}

.card-participants {
  margin-top: 4px;
  font-size: 1rem;
  opacity: 0.8;
}

@import './playlist-card.scss';
</style>

<script setup>



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

</script>
