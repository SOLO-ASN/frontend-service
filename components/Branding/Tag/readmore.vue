<template>
  <div class="text-container">
    <!-- 使用 span 而不是 p，这样可以更容易地将按钮放在文本旁边 -->
    <span :class="{ 'expanded': isExpanded }">
      {{ isExpanded ? info : truncatedText }}
    </span>
    <!-- 按钮作为行内元素，放在文本后面 -->
    <button class="read-more" @click="toggleText">
      {{ isExpanded ? 'View less' : 'View more' }}
    </button>
  </div>
</template>

<script setup>
import { ref, computed, defineProps } from 'vue';

const {info} = defineProps({
  info: {
    type: String,
    required: true,
  },
});




const isExpanded = ref(false);

const truncatedText = computed(() => {
  const approximateCharsPerLine = 50;
  const numberOfLinesToShow = 2;
  if (info.length <= approximateCharsPerLine * numberOfLinesToShow) {
    return info;
  }
  return info.substr(0, approximateCharsPerLine * numberOfLinesToShow) + '...';
});

function toggleText() {
  isExpanded.value = !isExpanded.value;
}
</script>

<style scoped>
.text-container {
  font-size: 1.0rem;
  font-weight: 300;
  line-height: 1.2; /* 减少行间距 */
}

.read-more {
  font-size: 1.0rem; /* 减小字体大小 */
  color: white;
  cursor: pointer;
  background: none;
  border: none;
  padding: 0;
  margin-left: 0.3rem; /* 将按钮放在文本旁边 */
  text-decoration: underline; /* 添加下划线表示这是个链接 */
  font-weight: bold; /* Make the text bold */
}

/* 处理展开状态下的文本 */
.expanded {
  white-space: normal;
}
</style>