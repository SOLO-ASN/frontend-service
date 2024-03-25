<template>
  <div class="wave">
    <div class="deco-mask">
      <svg class="main">
        <use xlink:href="/images/decoration/deco-wave-bottom.svg#main" />
      </svg>
      <svg class="darken">
        <use xlink:href="/images/decoration/deco-wave-bottom.svg#main" />
      </svg>
    </div>
    <div class="deco">
      <svg class="primary">
        <use xlink:href="/images/decoration/wave.svg#main" />
      </svg>
      <svg class="secondary">
        <use xlink:href="/images/decoration/wave.svg#main" />
      </svg>
    </div>
    <slot />
  </div>
</template>

<style lang="scss" scoped>
@import './decoration-style';
</style>
