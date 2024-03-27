<template>
  <v-btn
    outlined
    :color="isSelected ? 'primary' : 'grey lighten-1'"
    class="claim-button"
    @click="toggleSelection"
  >
    <v-icon
      :color="isSelected ? 'primary' : 'grey lighten-1'"
    >
      {{ isSelected ? 'mdi-check-circle' : 'mdi-checkbox-blank-circle-outline' }}
    </v-icon>
    <span
      class="text"
      :class="{ 'text-selected': isSelected }"
    >
      Verified
    </span>
  </v-btn>
</template>

<script setup>
import { ref } from 'vue';
const emit = defineEmits(['update:isSelected']);
const isSelected = ref(false);

function toggleSelection() {
  isSelected.value = !isSelected.value;
  emit('update:isSelected', isSelected.value); // 发射事件并传递isSelected的当前值
}
</script>

<style scoped>
.claim-button {
  background-color: black; /* 按钮背景颜色 */
  color: white; /* 文字颜色 */
  border: none;
  border-radius: 12px; /* 圆角边框 */
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  padding: 12px 20px; /* 增加内边距使框看起来更高一点 */
  font-size: 16px; /* 增大字体大小 */
  font-weight: bold; /* 字体加粗 */
  outline: none;
  margin-left: 8px; /* 和其他组件的间隔 */
  min-width: 140px; /* 最小宽度 */
  height: 48px; /* 设置按钮高度 */
}

.text {
  color: rgba(255, 255, 255, 0.7); /* 文字初始颜色 */
}

.text-selected {
  color: white; /* 选中状态的文字颜色 */
}
</style>