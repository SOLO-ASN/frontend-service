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

      <!-- 第四个过滤器 -->
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
    </v-expansion-panels>
  </aside>
</template>

<script>
export default {
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
        "Twitter Space",
        "Twitter Engagement",
        "Discord Voice Channel",
        "Discord Engagement",
        "Telegram Engagement",
        "Quiz Engagement",
        "Snapshot Voter"
      ],
      filterTag2: [
        "OAT",
        "NFT",
        "Custom Reward",
        "Token Reward",
        "Discord Role",
        "Point",
        "Mintlist"
      ],
      filterTag3: [
        "Ethereum",
        "Polygon",
        "BNB Chain",
        "Base Mainnet",
        "ZKSync",
        "Optimism",
        "Goerli"
      ],
      filterTag4: ['Active', 'Not Started', 'Expired'],
      selectedTags1: [],
      selectedTags2: [],
      selectedTags3: [],
      selectedTags4: ['Active', 'Not Started'],
    };
  },

  


  methods: {
    collectTag(tagGroup, tag) {
      if (this[tagGroup].includes(tag)) {
        this[tagGroup] = this[tagGroup].filter(t => t !== tag);
      } else {
        this[tagGroup].push(tag);
      }
      this.$emit('update:' + tagGroup, tagGroup, [...this[tagGroup]]);
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