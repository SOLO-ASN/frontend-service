<template>
  <div class="flex gap-2">
    <!-- 遍历 categories 数组，并为每个分类创建一个标签 -->
    <el-tag
      v-for="(category, index) in categories"
      :key="index"
      effect="dark"
    >
      {{category}} 
    </el-tag>
  </div>
</template>

<script lang="ts" setup>
import { ref, defineProps } from 'vue'

const {categories} = defineProps({
  categories: {
    type: Array,
  }
});
onMounted(()=>{
  console.info(categories);
});


import type { TagProps } from 'element-plus'

type Item = { type: TagProps['type']; label: string }


</script>