<template>
  <div v-if="type === 'hover'" class="parallax-scene">
    <div class="basket">
      <kinesis-container
        :duration="3000"
        easing="ease-out"
      >
        <kinesis-element
          :strength="80"
          type="translate"
          tag="div"
        >
          <div style="left: -50px; top: 300px" class="obj-hover ring2">
            <clay-deco img="/images/decoration/clay-ring2.png" color="accent-light" />
          </div>
        </kinesis-element>
        <kinesis-element
          :strength="70"
          type="translate"
          tag="div"
        >
          <div style="left: 20px; top: 30px" class="obj-hover bom">
            <clay-deco img="/images/decoration/clay-bom.png" color="primary-main" />
          </div>
        </kinesis-element>
        <kinesis-element
          :strength="20"
          type="translate"
          tag="div"
        >
          <div style="right: 50px; top: 280px" class="obj-hover ball">
            <clay-deco img="/images/decoration/clay-ball.png" color="triple-main" />
          </div>
        </kinesis-element>
        <kinesis-element
          :strength="40"
          type="translate"
          tag="div"
        >
          <div style="right: 100px; top: 250px" class="obj-hover ring">
            <clay-deco img="/images/decoration/clay-rignt.png" color="triple-dark" />
          </div>
        </kinesis-element>
      </kinesis-container>
    </div>
  </div>
  <div v-if="type === 'scroll'" class="parallax-wrap">
    <div class="basket">
      <div class="inner-parallax start">
        <div v-if="loaded" class="obj-scroll">
          <scroll-parallax :speed="0.15" direction="y">
            <div style="left: -3px; top: 90px" class="ring2">
              <clay-deco img="/images/decoration/clay-ring2.png" color="accent" />
            </div>
          </scroll-parallax>
        </div>
        <div v-if="loaded" class="obj-scroll">
          <scroll-parallax :speed="0.15" direction="y">
            <div style="left: 30px; top: -40px" class="bom">
              <clay-deco img="/images/decoration/clay-bom.png" color="primary-light" />
            </div>
          </scroll-parallax>
        </div>
      </div>
      <div class="inner-parallax end">
        <div v-if="loaded" class="obj-scroll">
          <scroll-parallax :speed="0.15" direction="y">
            <div style="right: 50px; top: 50px" class="ball">
              <clay-deco img="/images/decoration/clay-ball.png" color="triple-main" />
            </div>
          </scroll-parallax>
        </div>
        <div v-if="loaded" class="obj-scroll">
          <scroll-parallax :speed="0.15" direction="y">
            <div style="right: 180px; top: -100px" class="ring">
              <clay-deco img="/images/decoration/clay-ring.png" color="double-main" />
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