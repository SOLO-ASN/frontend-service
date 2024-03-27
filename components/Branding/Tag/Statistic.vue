<template>
  <el-row class="stats-container">
    <el-col :span="6" class="stat-item">
      <el-statistic title="Followers" :value="268500" />
    </el-col>
    <el-col :span="6" class="stat-item">
      <el-statistic :value="138">
        <template #title>
            Token
        </template>
        <template #suffix>/100</template>
      </el-statistic>
    </el-col>
    <el-col :span="6" class="stat-item">
      <el-statistic title="Backer" :value="outputValue" />
    </el-col>
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