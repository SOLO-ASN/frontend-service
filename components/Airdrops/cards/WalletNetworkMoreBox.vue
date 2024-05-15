<template>
<!--  <div v-application style="display: initial">-->
    <div class="network-more-box mt-3">
      <div class="flex-all-center">
        <img
            src="https://b.galxestatic.com/w/c/43aad15/img/eth-logo.6d29ff1.svg"
            style="width: 20px; height: 20px;" />

        <div class="ml-3"> EVM </div>
      </div>

      <div class="flex-all-center">
        <img
            src="https://b.galxestatic.com/w/c/43aad15/img/solana.f71fc68.svg"
            style="width: 20px; height: 20px;" />

        <div class="ml-3"> SOLANA </div>
      </div>

      <div class="flex-all-center">
        <img
            src="https://b.galxestatic.com/w/c/43aad15/img/aptos.e206ed2.svg"
            style="width: 20px; height: 20px;" />

        <div class="ml-3"> Aptos </div>
      </div>


    </div>

<!--  </div>-->



</template>

<style scoped lang="scss">
  .network-more-box {
    display: grid;
    grid-gap: 16px 16px;
    grid-template-columns: repeat(3,1fr);
    border-radius: 8px;
    padding: 24px;
  }

  .flex-all-center {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    background: #0f1114;
    padding: 12px 16px;
    cursor: pointer;
  }

</style>

<script setup>
  // import { ref, onMounted } from "vue";

  // const { initialNetworks } = defineProps({
    // initialNetworks: {
    //   type: Object,
    //   required: true,
    // }
  // })
  //
  // const networks = ref(initialNetworks);
  //
  // onMounted( () => {
  // })

</script>
