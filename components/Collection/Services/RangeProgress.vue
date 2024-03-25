<template>
  <div class="range-progress">
    <div class="progress-bg">
      <div
        class="range"
        :style="{
          left: `${from / divider}%`,
          width: `${(to / divider) - (from / divider)}%`,
        }"
      >
        <span>
          {{ prefix }}
          {{ from }}
          {{ suffix }}
        </span>
        <span>
          {{ prefix }}
          {{ to }}
          {{ suffix }}
        </span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './services-style.scss';
</style>

<script setup>
const {
  from, to, max,
  prefix, suffix
} = defineProps({
  from: {
    type: Number,
    required: true,
  },
  to: {
    type: Number,
    required: true,
  },
  max: {
    type: Number,
    required: true,
  },
  prefix: {
    type: String,
    default: ''
  },
  suffix: {
    type: String,
    default: ''
  },
});

const divider = max / 100;
</script>