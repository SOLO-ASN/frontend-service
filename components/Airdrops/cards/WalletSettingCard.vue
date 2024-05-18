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


<!--    <h3 style="color: #4d59d5;"> Add Address</h3>-->

<!--    <v-container class="wallet-address-setting-container">-->
<!--      <v-row>-->
<!--        <v-col cols="12" style="">-->

<!--          <wallet-network-more-box-->
<!--            :username="username"-->
<!--          />-->
<!--        </v-col>-->
<!--      </v-row>-->

<!--    </v-container>-->

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

import {defineProps, ref} from "vue";
import WalletNetworkBox from "./WalletNetworkBox.vue";
import WalletNetworkMoreBox from "./WalletNetworkMoreBox.vue";

const addresses = ref([]);
const networks = ref([]);

const props = defineProps({
  username: {
    type: String,
    required: true,
  },
  userChainAddresses:{
    type: Object,
    required: true,
  }
});

const _username = ref(props.username);
const _userChainAddresses = ref(props.userChainAddresses);

function createListing(token, price, qty, value) {
  const v = Number(price)*Number(qty);
  value = v.toFixed(2);
  return {
    token, price, qty, value
  };
}

onMounted(() => {
  // addresses.value = [
  //   {network: 'EVM Chain', address: '0xaF1dE9C5F0199C61cbBcd354Ce98bEFA235f519E', url:'https://b.galxestatic.com/w/c/43aad15/img/eth-logo.6d29ff1.svg'},
  //   {network: 'BTC', address: '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa', url: 'https://b.galxestatic.com/w/s/43aad15/img/bitcoin.16830aa.svg'}
  // ];
  networks.value = [
    { network: "eth", url: "https://b.galxestatic.com/w/c/43aad15/img/eth-logo.6d29ff1.svg" },
  ]


  for (const value of networks.value) {
    if (_userChainAddresses.value[value.network]) {
      addresses.value = [...addresses.value, {network: 'EVM Chain', address: _userChainAddresses.value[value.network], url: value.url}];
    };
  }



})

</script>
