<template>
  <div
    ref="wrapper"
    v-scroll="runCounter"
    :class="{ dark: dark }"
    class="counter-wrap"
  >
    <v-container :class="[ { fixed: mini }, mini ? 'max-sm' : 'max-md' ]">
      <v-row
        align="center"
        justify="center"
        class="counter-inner"
        :class="[mini ? 'spacing3' : 'spacing6', { mini: mini }]"
      >
        <v-col sm="4" cols="12">
          <div class="counter-item">
            <div class="text secondary">
              <h3>
                {{ !visible ? 0 : '' }}
                <count-up
                  v-if="visible"
                  :start-val="0"
                  :end-val="textFirst.count"
                  :options="{ prefix: textFirst.prefix || '', suffix: textFirst.suffix || '' }"
                />
              </h3>
              <h6 class="use-text-subtitle">
                {{ textFirst.title }}
              </h6>
            </div>
          </div>
        </v-col>
        <v-col sm="4" cols="12">
          <div class="counter-item">
            <div class="text primary">
              <h3>
                {{ !visible ? 0 : '' }}
                <count-up
                  v-if="visible"
                  :start-val="0"
                  :end-val="textMiddle.count"
                  :options="{ prefix: textMiddle.prefix || '', suffix: textMiddle.suffix || '' }"
                />
              </h3>
              <h6 class="use-text-subtitle">
                {{ textMiddle.title }}
              </h6>
            </div>
          </div>
        </v-col>
        <v-col sm="4" cols="12">
          <div class="counter-item">
            <div class="text secondary">
              <h3>
                {{ !visible ? 0 : '' }}
                <count-up
                  v-if="visible"
                  :start-val="0"
                  :end-val="textLast.count"
                  :options="{ prefix: textLast.prefix || '', suffix: textLast.suffix || '' }"
                />
              </h3>
              <h6 class="use-text-subtitle">
                {{ textLast.title }}
              </h6>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import './counter-style.scss';
</style>

<script setup>
import CountUp from 'vue-countup-v3';
import { ref } from 'vue';

const {
  textFirst, textMiddle,
  textLast, mini, dark
} = defineProps({
  textFirst: {
    type: Object,
    required: true,
  },
  textMiddle: {
    type: Object,
    required: true,
  },
  textLast: {
    type: Object,
    required: true,
  },
  mini: {
    type: Boolean,
    default: false,
  },
  dark: {
    type: Boolean,
    default: false,
  },
});
  
const visible = ref(false);
const wrapper = ref(null);
const offset = 200;

function runCounter() {
  const rect = wrapper.value.getBoundingClientRect()

  if (rect.top < offset) {
    visible.value = true;
  }
}
</script>
