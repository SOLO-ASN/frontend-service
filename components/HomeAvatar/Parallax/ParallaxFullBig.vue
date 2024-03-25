<template>
  <div class="parallax-wrap">
    <div class="inner-parallax big">
      <div class="figure">
        <div v-if="loaded">
          <scroll-parallax
            :speed="0.15"
            direction="y"
          >
            <span class="oval small">
              <span class="gradient" />
            </span>
          </scroll-parallax>
          <scroll-parallax
            :speed="0.25"
            direction="y"
          >
            <span class="triangle">
              <span class="gradient" />
            </span>
          </scroll-parallax>
          <scroll-parallax
            :speed="0.5"
            direction="y"
          >
            <span class="dots start">
              <svg
                fill="#cccccc"
                width="845"
                height="1099"
                class="parallax-vertical parallax-dot"
              >
                <use xlink:href="/images/decoration/dot-deco.svg#dot" />
              </svg>
            </span>
          </scroll-parallax>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './parallax-style';
</style>

<script setup>
import { onMounted, ref } from 'vue';

const loaded = ref(false)

onMounted(() => {
  loaded.value = true;
});
</script>