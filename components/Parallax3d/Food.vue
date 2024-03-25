<template>
  <div v-if="type === 'hover'" class="parallax-scene">
    <div class="food">
      <kinesis-container
        :duration="3000"
        easing="ease-out"
      >
        <kinesis-element
          :strength="80"
          type="translate"
          tag="div"
        >
          <div style="top: 470px; left: 240px" class="obj-hover ufo">
            <clay-deco img="/images/decoration/clay-ufo.png" color="double-primary" />
          </div>
        </kinesis-element>
        <kinesis-element
          :strength="70"
          type="translate"
          tag="div"
        >
          <div style="top: 260px; left: -60px" class="obj-hover plate">
            <clay-deco img="/images/decoration/clay-plate.png" color="accent" />
          </div>
        </kinesis-element>
        <kinesis-element
          :strength="20"
          type="translate"
          tag="div"
        >
          <div style="right: 0px; top: 320px" class="obj-hover tube">
            <clay-deco img="/images/decoration/clay-tube.png" color="double-main" />
          </div>
        </kinesis-element>
        <kinesis-element
          :strength="40"
          type="translate"
          tag="div"
        >
          <div style="right: -200px; top: 250px" class="obj-hover wormhole">
            <clay-deco img="/images/decoration/clay-wormhole.png" color="primary-light" />
          </div>
        </kinesis-element>
      </kinesis-container>
    </div>
  </div>
  <div v-if="type === 'scroll'" class="parallax-wrap">
    <div class="food">
      <div class="inner-parallax start">
        <div v-if="loaded" class="obj-scroll">
          <scroll-parallax :speed="0.15" direction="y">
            <div style="left: 100px; top: 150px" class="ufo">
              <clay-deco img="/images/decoration/clay-ufo.png" color="double-primary" />
            </div>
          </scroll-parallax>
        </div>
        <div v-if="loaded" class="obj-scroll">
          <scroll-parallax :speed="0.15" direction="y">
            <div style="left: 180px; top: 0" class="plate">
              <clay-deco img="/images/decoration/clay-plate.png" color="accent" />
            </div>
          </scroll-parallax>
        </div>
      </div>
      <div class="inner-parallax end">
        <div v-if="loaded" class="obj-scroll">
          <scroll-parallax :speed="0.15" direction="y">
            <div style="right: -40px; top: 0px" class="tube">
              <clay-deco img="/images/decoration/clay-tube.png" color="double-main" />
            </div>
          </scroll-parallax>
        </div>
        <div v-if="loaded" class="obj-scroll">
          <scroll-parallax :speed="0.15" direction="y">
            <div style="right: 30px; top: -100px" class="wormhole">
              <clay-deco img="/images/decoration/clay-wormhole.png" color="primary-light" />
            </div>
          </scroll-parallax>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './parallax3d-style.scss'
</style>

<script setup>
import { onMounted, ref } from 'vue';
import ClayDeco from '../Artworks/ClayDeco';

const { type } = defineProps({
  type: {
    type: String,
    default: 'scroll'
  }
});

const loaded = ref(false)

onMounted(() => {
  loaded.value = true;
});
</script>