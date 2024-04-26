<template>
  <div>
    <div
      v-for="(taskitem, index) in props.taskList.list"
      :id="'topic'+index"
      :key="index"
      class="accordion"
      :class="index <= 1 ? 'mt-0' : ''"
    >
      <h4 class="use-text-subtitle mb-10">
        {{ taskitem.credentialGroup.description }}
      </h4>
      <v-expansion-panels
        v-model="taskitem.credentialGroup.panel"
        active-class="expanded"
      >
        <v-expansion-panel
          v-for="(item, number) in taskitem.credentialGroup.creds"
          :key="number"
          class="paper"
        >
          <v-expansion-panel-title class="content">
            <span class="heading">
            <v-icon v-if="item.type == 'TWITTER'" class="mr-1">mdi-twitter</v-icon>
            <v-icon v-else class="mr-1">mdi-earth</v-icon>
            </span>
            <span class="heading">
              {{ item.name }}
            </span>
          </v-expansion-panel-title>
          <v-expansion-panel-text class="detail">
            <span class="flex-container">
              <span class="ml-11">
                {{ item.description }}
              </span>
              <v-btn @click="togglePanel(item.type, props.taskList.id)">Get it done</v-btn>
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
import { useRouter } from 'vue-router';

const router = useRouter();

const togglePanel = (type, parameter) => {
  // 根据 index 的值决定要跳转到的网页
  let route;
  switch (type) {
    case 'TWITTER':
      route = { path: './campaign-twitter', query: { id: parameter } };
      break;
    case 'TWITTER111':
      route = { path: '/page2', query: { number: parameter } };
      break;
    case 'TWITTER333':
      route = { path: '/page3', query: { number: parameter } };
      break;
    // 可以根据需要添加更多的情况
    default:
      route = { path: '/', query: { number: parameter } };
  }
  // 导航到对应的网页
  router.push(route);
};

const props = defineProps({
  taskList: Array
})

const isMobile = () => {
  return display.value.smAndDown;
};

</script>
