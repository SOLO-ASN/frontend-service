<template>

<div class="v-application" style="display: initial">
  <div class="network-box">
    <div class="network-box-name" > {{ address.network }} </div>
<!--    <v-icon icon="mdi-checkbox-marked-circle"></v-icon>-->
    <img
        :src="address.url"
        style="width: 20px; height: 20px;" />
  </div>
  <div class="network-box-address">
    {{ address.address }}
    <span>
      <v-btn>
        <v-icon v-if="!copied" icon="mdi-content-copy" style="font-size: 14px!important;" @click="copyClick"></v-icon>

        <v-icon v-else icon="mdi-checkbox-marked-circle"></v-icon>
      </v-btn>
    </span>
  </div>

</div>
</template>

<style scoped lang="scss">

  .network-box {
    border-radius: 8px;
    background: transparent;
    padding: 18px;
    display: flex;
    justify-content: space-between!important;
  }

  .network-box-name {
    font-size: 16px!important;
  }

  .network-box-address {
    font-size: 14px;
    background: #0f1114;
    padding: 12px 16px;
    margin: 0px 20px 0px 20px;
    display: flex;
    justify-content: space-between!important;
  }

</style>


<script setup>

  import {ref, defineExpose, withDefaults, onMounted} from 'vue';

  const { initialAddress } = defineProps({
    initialAddress: {
      type: Object,
      required: true
    }
  });

  let copied = ref(false);
  const address = ref(initialAddress);


  function copyClick() {
    copied.value = true;
    navigator.clipboard.writeText(address.value.address);
    address.value.copied = true;


  }

  defineExpose({
    copyClick
  })

  onMounted(() => {

  })

</script>
