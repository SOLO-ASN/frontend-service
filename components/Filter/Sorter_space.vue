<template>
  <div class="sorter">
    <v-select
      class="select"
      :items="sortList"
      item-text="title"
      item-value="value"
      label="Sort By:"
      return-object
      single-line
      hide-details
      variant="filled"
      persistent-hint
      @update:model-value="(e) => handleSortBy(e)"
    />
    <v-btn
      v-if="isTablet"
      small
      color="black"
      class="mx-2"
      outlined
      @click="handleOpenFilter"
    >
      <v-icon left>
        mdi-filter-variant
      </v-icon>
      Filter
    </v-btn>
    <v-btn-toggle
      v-if="!isMobile"
      :model-value="view"
      variant="outlined"
      class="pe-8 toggle"
      @update:model-value="(e) => switchView(e)"
    >
   <v-btn
    outlined
    :color="isSelected ? 'blue' : 'grey'"
    class="mx-2 my-2"
    @click="toggleSelection"
  >
    <v-icon :color="isSelected ? 'blue' : 'grey'">
      {{ isSelected ? 'mdi-check-circle' : 'mdi-checkbox-blank-circle-outline' }}
    </v-icon>
    <span :style="{ color: isSelected ? 'blue' : 'grey' }">Verified</span>
  </v-btn>
    </v-btn-toggle>
    <h6 v-if="isTablet" class="use-text-subtitle2 total">
      Show {{ resultLength }} Results
    </h6>
  </div>
</template>

<style scoped lang="scss">
@import './filter';
</style>

<script setup>
import { useDisplay } from 'vuetify';

const { view, sortBySelected, resultLength } = defineProps({
  view: {
    type: Number,
    default: 0,
  },
  sortBySelected: {
    type: Object,
    required: true,
  },
  resultLength: {
    type: Number,
    required: true,
  },
});

const sortList = [
  {
    title: 'Trending',
    value: 'trending-asc',
  },
  {
    title: 'Newest',
    value: 'newest-asc',
  },
  {
    title: 'Most Followed',
    value: 'follow-asc',
  },
];

const { smAndDown: isTablet } = useDisplay();
const { xs: isMobile } = useDisplay();
const emit = defineEmits(['switch-view', 'sort-by', 'open-filter', 'update:isSelected']);

function switchView(view) {
  emit('switch-view', view);
}

function handleSortBy(sortBySelected) {
  emit('sort-by', sortBySelected);
}
  
function handleOpenFilter() {
  emit('open-filter');
}

const isSelected = ref(false);
function toggleSelection() {
  isSelected.value = !isSelected.value;
  emit('update:isSelected', isSelected.value); // 发射事件并传递isSelected的当前值
}

</script>
