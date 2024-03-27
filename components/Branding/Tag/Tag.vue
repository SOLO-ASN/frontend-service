<template>
  <div class="flex gap-2">
    <el-tag
      v-for="item in items"
      :key="item.label"
      :type="item.type"
      :color="item.color"
      :hit="item.hit"
      :size="item.size"
      effect="dark"
    >
      {{ item.label }}
    </el-tag>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import type { TagProps } from 'element-plus'

type Item = { type: TagProps['type']; label: string }

const items = ref<Array<Item>>([
  { type: 'info', label: 'NFT', color: 'black' , hit: 'false', size:'large'},
  { type: 'info', label: 'Web3' , color: 'black', hit: 'false', size:'large'},
  { type: 'info', label: 'DID' , color: 'black', hit: 'false', size:'large'},
  { type: 'info', label: 'Social', color: 'black', hit: 'false' , size:'large'},
  { type: 'info', label: 'Infrastructure' , color: 'black', hit: 'false', size:'large'},
])
</script>