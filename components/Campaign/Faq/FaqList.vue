<template>
  <div>
    <div
      v-for="(taskitem, index) in props.taskList"
      :id="'topic'+index"
      :key="index"
      class="accordion"
      :class="index <= 1 ? 'mt-0' : ''"
    >
      <h4 class="use-text-subtitle mb-10">
        {{ taskitem.description }}
      </h4>
      <v-expansion-panels
        v-model="taskitem.panel"
        active-class="expanded"
      >
        <v-expansion-panel
          v-for="(item, number) in taskitem.Credentails"
          :key="number"
          class="paper"
        >
          <v-expansion-panel-title class="content">
            <span class="heading">
              {{ item.name }}
            </span>
          </v-expansion-panel-title>
          <v-expansion-panel-text class="detail">
            <span>
              {{ item.description }}
            </span>
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './faq-style.scss';
</style>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  taskList: Array
})

const isMobile = () => {
  return display.value.smAndDown;
};

</script>
