<template>
  <div class="parallax-wrap">
    <div class="inner-parallax end">
      <div class="figure">
        <div v-if="loaded">
          <scroll-parallax
            :speed="0.15"
            direction="y"
          >
            <div class="obj big">
              <clay-deco img="/images/decoration/clay-flower.png" color="primary-light" />
            </div>
          </scroll-parallax>
          <scroll-parallax
            :speed="0.25"
            direction="y"
          >
            <div class="obj small">
              <clay-deco img="/images/decoration/clay-web.png" color="accent" />
            </div>
          </scroll-parallax>
        </div>
      </div>
    </div>
    <div class="inner-parallax start">
      <div class="figure">
        <div v-if="loaded">
          <scroll-parallax
            :speed="0.15"
            direction="y"
          >
            <div class="obj big">
              <clay-deco img="/images/decoration/clay-flower.png" color="primary-light" />
            </div>
          </scroll-parallax>
          <scroll-parallax
            :speed="0.25"
            direction="y"
          >
            <div class="obj small">
              <clay-deco img="/images/decoration/clay-bowl.png" color="secondary-light" />
            </div>
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
import imgAPI from '@/assets/images/imgAPI';
import ClayDeco from '../../Artworks/ClayDeco';

const loaded = ref(false)

onMounted(() => {
  loaded.value = true;
});
</script>