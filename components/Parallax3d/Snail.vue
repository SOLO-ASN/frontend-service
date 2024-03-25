<template>
  <div v-if="type === 'hover'" class="parallax-scene">
    <div class="snail">
      <kinesis-container
        :duration="3000"
        easing="ease-out"
      >
        <kinesis-element
          :strength="80"
          type="translate"
          tag="div"
        >
          <div style="left: 100px; top: 60px" class="obj-hover ball">
            <clay-deco img="/images/decoration/clay-ball.png" color="double-main" />
          </div>
        </kinesis-element>
        <kinesis-element
          :strength="70"
          type="translate"
          tag="div"
        >
          <div style="left: 180px; top: -100px" class="obj-hover plate">
            <clay-deco img="/images/decoration/clay-plate.png" color="secondary-light" />
          </div>
        </kinesis-element>
        <kinesis-element
          :strength="20"
          type="translate"
          tag="div"
        >
          <div style="right: 0px; top: 320px" class="obj-hover flower">
            <clay-deco img="/images/decoration/clay-flower.png" color="primary-light" />
          </div>
        </kinesis-element>
        <kinesis-element
          :strength="40"
          type="translate"
          tag="div"
        >
          <div style="right: -200px; top: 250px" class="obj-hover worm-hole">
            <clay-deco img="/images/decoration/clay-wormhole.png" color="secondary-light" />
          </div>
        </kinesis-element>
      </kinesis-container>
    </div>
  </div>
  <div v-if="type === 'scroll'" class="parallax-wrap">
    <div class="snail">
      <div class="inner-parallax start">
        <div v-if="loaded" class="obj-scroll">
          <scroll-parallax :speed="0.15" direction="y">
            <div style="left: 100px; top: 60px" class="ball">
              <clay-deco img="/images/decoration/clay-ball.png" color="double-main" />
            </div>
          </scroll-parallax>
        </div>
        <div v-if="loaded" class="obj-scroll">
          <scroll-parallax :speed="0.15" direction="y">
            <div style="left: 180px; top: -100px" class="plate">
              <clay-deco img="/images/decoration/clay-plate.png" color="secondary-light" />
            </div>
          </scroll-parallax>
        </div>
      </div>
      <div class="inner-parallax end">
        <div v-if="loaded" class="obj-scroll">
          <scroll-parallax :speed="0.15" direction="y">
            <div style="right: -40px; top: 30px" class="flower">
              <clay-deco img="/images/decoration/clay-flower.png" color="primary-light" />
            </div>
          </scroll-parallax>
        </div>
        <div v-if="loaded" class="obj-scroll">
          <scroll-parallax :speed="0.15" direction="y">
            <div style="right: 30px; top: -120px" class="wormhole">
              <clay-deco img="/images/decoration/clay-wormhole.png" color="secondary-light" />
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