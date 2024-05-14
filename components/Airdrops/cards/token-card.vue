<template>
  <v-card class="img-thumb" >
    <v-table class="table">
      <thead>
      <tr>
        <th class="text-left">Token</th>
        <th class="text-center">Price</th>
        <th class="text-center">Amount</th>
        <th class="text-right">Value</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(row, index) in rowsListing" :key="index">
        <td class="text-left">
          <div style="display: flex; align-items: center;">
          <img src='https://b.galxestatic.com/w/s/3ad3b3d/img/default-token.706cf78.png' class="icon" />
          <strong>{{ row.token }}</strong>
          </div>
        </td>
        <td class="text-center">
          <strong>{{ row.price }}</strong>
        </td>
        <td class="text-center">
          <strong>{{ row.qty }}</strong>
        </td>
        <td class="text-right">
          <strong>{{ row.value }}</strong>
        </td>
<!--        <td align="left"><a href="#">{{ row.from }}</a></td>-->
      </tr>
      </tbody>
    </v-table>
  </v-card>
</template>

<style lang="scss" scoped>
@import './token-card.scss';

.icon {
  width: auto;
  height: 40px;
  max-width: 100%;
  max-height: 100%;
}

</style>

<script setup>

import {ref} from "vue";

const rowsListing = ref([]);
function createListing(token, price, qty, value) {
  const v = Number(price)*Number(qty);
  value = v.toFixed(2);
  return {
    token, price, qty, value
  };
}

onMounted(() => {
  rowsListing.value = [
    createListing("ETH", 3180.09, 0.345, ''),
    createListing("GNO", 361.26, 2, ''),
    createListing("ZRX", 0.55, 400, ''),
  ];
})

</script>
