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
            <img :src="row.tokenUri" class="icon" />
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
  margin-right: 15px;
}

</style>

<script setup>

import {ref} from "vue";

const { native, token, infoList } = defineProps({
  native: {
    type: String,
    required: true
  },
  token: {
    type: Array,
    required: true
  },
  infoList: {
    type: Object,
    required: false,
    default: {}
  }
});

const rowsListing = ref([]);

function createListing(token, tokenUri, price, qty, value) {
  if (price !== undefined) {
    const v = Number(price) * Number(qty);
    value = v.toFixed(2);

  } else {
    price = '-';
    value = '-';
  }
  if (tokenUri === undefined) {
    tokenUri = 'https://b.galxestatic.com/w/s/3ad3b3d/img/default-token.706cf78.png';
  }
  return {
    token, tokenUri, price, qty, value
  };

}

const obj = ref({});

onMounted(() => {
  // pack data
  const result = infoList.reduce((acc, item) => {
    acc[item.symbol] = item;
    return acc;
  }, {});
  // push native token
  rowsListing.value.push(createListing("ETH", infoList[0].logoURI, infoList[0].priceUSD, native / (10 ** 18), ''));
  // push tokens
  for (let i = 0; i < token.length; i++) {
    const a = result[token[i].symbol];
    console.log(a === undefined);
    if (a !== undefined) {
      rowsListing.value.push(createListing(token[i].symbol, a.logoURI, a.priceUSD, token[i].amount / (10 ** (token[i].decimals)), ''));
    } else {
      rowsListing.value.push(createListing(token[i].symbol, undefined, undefined, token[i].amount / (10 ** (token[i].decimals)), ''));
    }

  }

})

</script>
