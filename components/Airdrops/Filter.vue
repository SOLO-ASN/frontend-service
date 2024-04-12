<template>
  <aside class="filter">
    <v-expansion-panels v-model="panel" multiple>
      <!-- 第一个过滤器 -->
      <v-expansion-panel class="filter-block1" value="tags1" bg-color="transparent" elevation="0">
        <v-expansion-panel-title class="title-label1">Requirement</v-expansion-panel-title>
        <v-expansion-panel-text>
          <div class="filter-block">
            <span class="btn-tag" v-for="tag in filterTag1" :key="tag">
              <input
                :id="tag"
                type="checkbox"
                :value="tag"
                :checked="selectedTags1.includes(tag)"
                @change="collectTag('selectedTags1', tag)"
              >
              <label v-ripple :for="tag">{{ tag }}</label>
            </span>
          </div>
        </v-expansion-panel-text>
      </v-expansion-panel>

      <!-- 第二个过滤器 -->
      <v-expansion-panel class="filter-block2" value="tags2" bg-color="transparent" elevation="0">
        <v-expansion-panel-title class="title-label2">Reward Type</v-expansion-panel-title>
        <v-expansion-panel-text>
          <div class="filter-block">
            <span class="btn-tag" v-for="tag in filterTag2" :key="tag+'2'">
              <input
                :id="tag+'2'"
                type="checkbox"
                :value="tag"
                :checked="selectedTags2.includes(tag)"
                @change="collectTag('selectedTags2', tag)"
              >
              <label v-ripple :for="tag+'2'">{{ tag }}</label>
            </span>
          </div>
        </v-expansion-panel-text>
      </v-expansion-panel>

      <!-- 第三个过滤器 -->
      <v-expansion-panel class="filter-block3" value="tags3" bg-color="transparent" elevation="0">
        <v-expansion-panel-title class="title-label3">Reward Distributed on</v-expansion-panel-title>
        <v-expansion-panel-text>
          <div class="filter-block">
            <span class="btn-tag" v-for="tag in filterTag3" :key="tag+'3'">
              <input
                :id="tag+'3'"
                type="checkbox"
                :value="tag"
                :checked="selectedTags3.includes(tag)"
                @change="collectTag('selectedTags3', tag)"
              >
              <label v-ripple :for="tag+'3'">{{ tag }}</label>
            </span>
          </div>
        </v-expansion-panel-text>
      </v-expansion-panel>

      <!-- 第四个过滤器 
      <v-expansion-panel class="filter-block4" value="tags4" bg-color="transparent" elevation="0">
        <v-expansion-panel-title class="title-label3">Status</v-expansion-panel-title>
        <v-expansion-panel-text>
          <div class="filter-block">
            <span class="btn-tag" v-for="tag in filterTag4" :key="tag+'4'">
              <input
                :id="tag+'4'"
                type="checkbox"
                :value="tag"
                :checked="selectedTags4.includes(tag)"
                @change="collectTag('selectedTags4', tag)"
              >
              <label v-ripple :for="tag+'4'">{{ tag }}</label>
            </span>
          </div>
        </v-expansion-panel-text>
      </v-expansion-panel>
      -->
    </v-expansion-panels>
  </aside>
</template>

<script>

export default {
  props: {
    selectedTags1: Array,
    selectedTags2: Array,
    selectedTags3: Array,
    selectedTags4: Array
  },
  emits: [
    'change-tag', 'collect-tag', 
    'update:selectedTags',
    'update:selectedTags1',
    'update:selectedTags2',
    'update:selectedTags3',
    'update:selectedTags4',
  ],
  data() {
    return {
      panel: [],
      filterTag1: [
        "TwitterSpace",
        "TwitterEngagement",
        "Discord Voice Channel",
        "Discord Engagement",
      ],
      filterTag2: [
        "Oat",
        "Nft",
        "Custom Reward",
        "Token Reward",
      ],
      filterTag3: [
        "Ethereum",
        "Polygon",
        "BNB Chain",
      ],
    };
  },

  


  methods: {
    collectTag(tagGroup, tag) {
      let updatedTags = this[tagGroup].slice(); // 创建当前tags的副本
      if (updatedTags.includes(tag)) {
        updatedTags = updatedTags.filter(t => t !== tag); // 删除标签
      } else {
        updatedTags.push(tag); // 添加标签
      }
      this.$emit('update:' + tagGroup, tagGroup, updatedTags); // 发送更新事件到父组件
    },

    selectAllTags() {
        // 遍历所有标签组并将每个组的所有标签添加到对应的选中标签数组中
        this.selectedTags2 = this.filterTag2;
        this.$emit('update:selectedTags2', "selectedTags2", [...this.selectedTags2]);
    },
    clearAllTags() {
        // 清空所有选中标签数组
        this.selectedTags2 = [];
        this.$emit('update:selectedTags2', "selectedTags2", [...this.selectedTags2]);
    }
  },
};

</script>

<style scoped lang="scss">
@import './filter';
</style>