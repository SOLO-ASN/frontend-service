<template>
  <v-card class="img-thumb" :class="size">
    <div v-ripple @click="showImg" @keydown.enter="showImg">
      <div class="figure">
        <div class="img" :style="'background-image: url(' + img + ')'" />
      </div>
      <div class="detail">
        <h6 class="use-text-subtitle">
          {{ title }}
        </h6>
        {{ link }}
      </div>
    </div>
  </v-card>
</template>

<style lang="scss" scoped>
@import './photo-card.scss';
</style>

<script>
export default {
  props: {
    img: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      required: true,
    },
    showImg: {
      type: Function,
      default() {
        return false;
      },
    },
  },
};
</script>
