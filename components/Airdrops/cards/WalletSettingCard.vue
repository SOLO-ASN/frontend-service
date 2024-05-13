<template>
  <v-card class="" >


    <div v-if="addresses && addresses.length">

      <h3 style="color: #4d59d5;"> Address List </h3>

      <v-container class="wallet-address-setting-container">

        <v-row>
          <v-col cols="12" style="">
  <!--          <wallet-network-box />-->

            <div v-for="(val, key) in addresses" :key="key">
              <wallet-network-box :initialAddress="val"></wallet-network-box>
            </div>

          </v-col>
        </v-row>



      </v-container>

    </div>

    <br/>

    <h3 style="color: #4d59d5;"> Add Address</h3>

    <v-container class="wallet-address-setting-container">
      <v-row>
        <v-col cols="12" style="">

          <wallet-network-more-box

          />
        </v-col>

      </v-row>

    </v-container>

<!--    <>-->

<!--    <v-table class="table">-->
<!--      <thead>-->
<!--      <tr>-->
<!--        <th class="text-left">Token</th>-->
<!--        <th class="text-center">Price</th>-->
<!--        <th class="text-center">Amount</th>-->
<!--        <th class="text-right">Value</th>-->
<!--      </tr>-->
<!--      </thead>-->
<!--      <tbody>-->
<!--      <tr v-for="(row, index) in rowsListing" :key="index">-->
<!--        <td class="text-left">-->
<!--          <div style="display: flex; align-items: center;">-->
<!--            <img src='https://b.galxestatic.com/w/s/3ad3b3d/img/default-token.706cf78.png' class="icon" />-->
<!--            <strong>{{ row.token }}</strong>-->
<!--          </div>-->
<!--        </td>-->
<!--        <td class="text-center">-->
<!--          <strong>{{ row.price }}</strong>-->
<!--        </td>-->
<!--        <td class="text-center">-->
<!--          <strong>{{ row.qty }}</strong>-->
<!--        </td>-->
<!--        <td class="text-right">-->
<!--          <strong>{{ row.value }}</strong>-->
<!--        </td>-->
<!--        &lt;!&ndash;        <td align="left"><a href="#">{{ row.from }}</a></td>&ndash;&gt;-->
<!--      </tr>-->
<!--      </tbody>-->
<!--    </v-table>-->
  </v-card>
</template>

<style lang="scss" scoped>
  @import './token-card.scss';
  .wallet-address-setting-container {
      border-radius: 8px;
      background: #090a0d;
      padding: 24px;
  }

.icon {
  width: auto;
  height: 40px;
  max-width: 100%;
  max-height: 100%;
}

</style>

<script setup>

import {ref} from "vue";
import WalletNetworkBox from "./WalletNetworkBox.vue";
import WalletNetworkMoreBox from "./WalletNetworkMoreBox.vue";

const rowsListing = ref([]);
const addresses = ref([]);
const networks = ref([]);

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

  addresses.value = [
    {network: 'EVM Chain', address: '0xaF1dE9C5F0199C61cbBcd354Ce98bEFA235f519E', url:'https://b.galxestatic.com/w/c/43aad15/img/eth-logo.6d29ff1.svg'},
    {network: 'BTC', address: '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa', url: 'https://b.galxestatic.com/w/s/43aad15/img/bitcoin.16830aa.svg'}
  ];
  //
  // addresses.value = [];

  networks.value = [
      { network: "eth", url: "https://b.galxestatic.com/w/c/43aad15/img/eth-logo.6d29ff1.svg" },
  ]

})

</script>
