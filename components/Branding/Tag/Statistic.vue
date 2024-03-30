<template>
  <el-row class="stats-container">
    <el-col :span="6" class="stat-item">
      <el-statistic title="Followers" :value="followersCount" />
    </el-col>
    <el-col :span="6" class="stat-item">
      <el-statistic :value="token.symbol">
        <template #title>
            Token
        </template>
      </el-statistic>
    </el-col>
    <div class="stat-item">
      <img :src="backers[0].icon" class="backer-icon" />
      <div class="stat-value">Backer</div>
    </div>
    <el-col :span="6" class="stat-item">
      <el-statistic title="My Points" :value="562">
        <template #suffix>
          <el-icon style="vertical-align: -0.125em">
            <ChatLineRound />
          </el-icon>
        </template>
      </el-statistic>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useTransition } from '@vueuse/core'
import { ChatLineRound, Male } from '@element-plus/icons-vue'

const {token, followersCount, backers} = defineProps({
  token:{
    type: Object,
    required: true
  },
  followersCount:{
    type: Number,
    required: true
  },
  backers:{
    type: Array,
    required: true
  },

});

const source = ref(0)
const outputValue = useTransition(source, {
  duration: 1500,
})
source.value = 172000
</script>

<style scoped>
.stats-container {
  background-color: black; /* 黑色背景 */
  border-radius: 25px; /* 圆角边框 */
  padding: 20px; /* 内边距 */
  border: 1px solid white; /* 白色边框 */
  width: 800px
}

.stat-item {
  text-align: center;
  border-right: 1px solid white; /* 统计项之间的竖线 */
  color: white; /* 字体颜色为白色 */
  font-weight: bold; /* 字体更粗 */
}

.stat-item:last-child {
  border-right: none; /* 最后一个统计项没有竖线 */
}

.stat-title {
  display: inline-flex; 
  align-items: center;
  color: white; /* 使自定义标题也是白色 */
}

.el-statistic__title,
.el-statistic__value {
  color: inherit; /* 继承父元素的字体颜色 */
}
</style>