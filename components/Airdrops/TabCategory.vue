<template>
  <div class="root-tab">
    <v-tabs
      v-model="valTab"
      class="tabs"
      :align-tabs="!isMobile ? 'center' : 'left'"
      @update:modelValue="switchTab"
    >
      <v-tab class="tab-label" value="all">
        <span>all</span>
      </v-tab>
      <v-tab class="tab-label" value="following">
        <span>following</span>
      </v-tab>
  <!--    <v-tab class="tab-label" value="collection">
        <span>Collection</span>
      </v-tab>
      <v-tab class="tab-label" value="creators">
        <span>Creators</span>
      </v-tab>
      -->
    </v-tabs>
    <h6 v-if="isTablet" :class="isDesktop ? 'use-text-subtitle2' : 'use-text-paragraph'">
      Show
      {{ total }}
      Results
    </h6>
  </div>
</template>

<style lang="scss" scoped>
@import './filter';
</style>

<script setup>
import { ref } from 'vue';
import { useDisplay } from 'vuetify';

const { value, switchTab, total } = defineProps({
  value: {
    type: String,
    required: true
  },
  switchTab: {
    type: Function,
    required: true
  },
  total: {
    type: Number,
    required: true
  }
});

const { lgAndUp: isDesktop } = useDisplay();
const { mdAndUp: isTablet } = useDisplay();
const { smAndDown: isMobile } = useDisplay();

const valTab = ref(value);
</script>