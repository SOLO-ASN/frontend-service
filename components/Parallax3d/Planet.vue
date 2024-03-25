<template>
  <div v-if="type === 'hover'" class="parallax-scene">
    <div class="planet">
      <kinesis-container
        :duration="3000"
        easing="ease-out"
      >
        <kinesis-element
          :strength="80"
          type="translate"
          tag="div"
        >
          <div style="top: 470px; left: -240px" class="obj-hover ufo">
            <clay-deco img="/images/decoration/clay-ufo.png" color="double-primary" />
          </div>
        </kinesis-element>
        <kinesis-element
          :strength="70"
          type="translate"
          tag="div"
        >
          <div style="left: -60px; top: 260px" class="obj-hover noodle">
            <clay-deco img="/images/decoration/clay-noodle.png" color="primary-dark" />
          </div>
        </kinesis-element>
        <kinesis-element
          :strength="20"
          type="translate"
          tag="div"
        >
          <div style="right: 0px; top: 320px" class="obj-hover wormhole">
            <clay-deco img="/images/decoration/clay-wormhole.png" color="double-main" />
          </div>
        </kinesis-element>
        <kinesis-element
          :strength="20"
          type="translate"
          tag="div"
        >
          <div style="right: -200px; top: 250px" class="obj-hover bom">
            <clay-deco img="/images/decoration/clay-bom.png" color="accent" />
          </div>
        </kinesis-element>
        <kinesis-element
          :strength="40"
          type="translate"
          tag="div"
        >
          <div style="right: 20px; top: 520px" class="obj-hover ball">
            <clay-deco img="/images/decoration/clay-ball.png" color="triple-main" />
          </div>
        </kinesis-element>
        <kinesis-element
          :strength="40"
          type="translate"
          tag="div"
        >
          <div style="right: -200px; top: 470px" class="obj-hover ring">
            <clay-deco img="/images/decoration/clay-ring2.png" color="primary-light" />
          </div>
        </kinesis-element>
      </kinesis-container>
    </div>
  </div>
  <div v-if="type === 'scroll'" class="parallax-wrap">
    <div class="planet">
      <div class="inner-parallax start">
        <div v-if="loaded" class="obj-scroll">
          <scroll-parallax :speed="0.15" direction="y">
            <div style="left: 40px; top: 80px" class="ufo">
              <clay-deco img="/images/decoration/clay-ufo.png" color="double-primary" />
            </div>
          </scroll-parallax>
        </div>
        <div v-if="loaded" class="obj-scroll">
          <scroll-parallax :speed="0.15" direction="y">
            <div style="left: 150px; top: -80px" class="noodle">
              <clay-deco img="/images/decoration/clay-noodle.png" color="primary-dark" />
            </div>
          </scroll-parallax>
        </div>
      </div>
      <div class="inner-parallax end">
        <div v-if="loaded" class="obj-scroll">
          <scroll-parallax :speed="0.15" direction="y">
            <div style="right: -40px; top: 30px" class="flower">
              <clay-deco img="/images/decoration/clay-wormhole.png" color="double-main" />
            </div>
          </scroll-parallax>
        </div>
        <div v-if="loaded" class="obj-scroll">
          <scroll-parallax :speed="0.15" direction="y">
            <div style="right: 30px; top: -120px" class="bom">
              <clay-deco img="/images/decoration/clay-bom.png" color="accent" />
            </div>
          </scroll-parallax>
        </div>
        <div v-if="loaded" class="obj-scroll">
          <scroll-parallax :speed="0.15" direction="y">
            <div style="right: -20px; bottom: -50px" class="ball">
              <clay-deco img="/images/decoration/clay-ball.png" color="triple-main" />
            </div>
          </scroll-parallax>
        </div>
        <div v-if="loaded" class="obj-scroll">
          <scroll-parallax :speed="0.15" direction="y">
            <div style="right: 100px; top: -140px" class="ring">
              <clay-deco img="/images/decoration/clay-ring2.png" color="primary-light" />
            </div>
          </scroll-parallax>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './parallax3d-style.scss';
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