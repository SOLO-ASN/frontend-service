<template>
  <v-card class="img-thumb" >
    <v-table class="table">
      <thead>
      <tr>
        <th class="text-left">Tx Hash</th>
        <th class="text-right">From</th>
        <th class="text-center"></th>
        <th class="text-left">To</th>
        <th class="text-right">Value</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item, index) in listItems" :key="index" class="" >

        <td class="text-left">
          <a :href='`https://etherscan.io/tx/${item.hash}`' >{{ truncate(item.hash) }}</a>
        </td>
        <td class="text-right">
          {{ truncate(item.from) }}
        </td>
        <td class="text-center">
          <v-chip variant="tonal" size="small" :color="item.color" prepend-icon="mdi-checkbox-marked-circle">
            {{item.InOut}}
          </v-chip>
        </td>
        <td class="text-left">
          {{ truncate(item.to) }}
        </td>
        <td class="text-right">
          {{ item.amount }}
        </td>
      </tr>
      </tbody>
    </v-table>
  </v-card>
</template>

<script setup>
import {ref} from 'vue';

const listItems = ref([
  {hash: '0x4079d13d291322ee2e030f6c0daef8aa46d6fe2eb3b1626ef5f3d35030ac5bd0', from: '0x0AFfB0a96FBefAa97dCe488DfD97512346cf3Ab8', time: '', amount: '0.018596884', to: '0xf9eF86f70730E742D7358dAA4d8D1D8B6486AF67', InOut: 'IN', color: "success"},
  {hash: '0x3d278ab0ae7e4ab1228c9aaca8e071200a9bf8d44617cc9a15be54b819423f17', from: '0xc4E72cc55C739C355bA2a9F6dd777cF1D74d9a87', time: '', amount: '0', to: '0xeA1A6307D9b18F8d1cbf1c3Dd6aad8416C06a221', InOut: 'IN', color: "success"},
  {hash: '0xfea67803f5489504c49564598b6a4eb4324b0dae29d0e64b9b37af7bf37a15c7', from: '0xCBD6832Ebc203e49E2B771897067fce3c58575ac', time: '', amount: '0.854082', to: '0x90130f98aB6393FC8c37ac7f8434F52B6D073516', InOut: 'OUT', color: "warning"},
  {hash: '0xa8cf36547fe041a1e3682ebae983ce5df01cd638b6d3707b59543a1d221d7c96', from: '0x622e5BFA7f52c0CA73ecb62Ec7b5bB011549Bc82', time: '', amount: '0.001611559', to: '0x253553366Da8546fC250F225fe3d25d0C782303b', InOut: 'OUT', color: "warning"},
  {hash: '0x4a7d51c98be6ec0463acc1d4af247b5191c9f9851139c2b568c8dfdd748ca60a', from: '0x254998935Dcd90F0f4A7B29Fe18362E3F0b9bCc5', time: '', amount: '0.007905075', to: '0x1111111254EEB25477B68fb85Ed929f73A960582', InOut: 'IN', color: "success"},
  {hash: '0x2a021c58a10e02bc443744257207c6f50f1781450675340d06c834720b715664', from: '0x254998935Dcd90F0f4A7B29Fe18362E3F0b9bCc5', time: '', amount: '0.142291365', to: '0xB90B2A35C65dBC466b04240097Ca756ad2005295', InOut: 'IN', color: "success"},
]);
const expanded = ref(null);

const toggle = (index) => {
  expanded.value = expanded.value === index ? null : index;
}

const maxLength = 8;
function truncate(str)  {
  const length = Number(maxLength);
  if (str.length <= length) {
    return str;
  } else {
    const start = str.slice(0, length/2 +1);
    const end = str.slice(str.length - length/2);
    return `${start}...${end}`;
  }
}

</script>

<style scoped>
@import './token-card.scss';
</style>
