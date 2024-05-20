<template>
  <!--  <div v-application style="display: initial">-->

  <div class="network-more-box mt-3">
    <div class="flex-all-center"
         @click="handleConnect('evm_chain')"
    >
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
import {ref, onMounted, defineProps} from "vue";
import {ethers} from 'ethers';
import {useHead, useRouter, useCookie} from '#app';
import url from '@/assets/text/url';
import axios from 'axios';

const SERVER = url.serverUrl;

const props = defineProps({
  username: {
    type: String,
    required: true,
  }
});

const _username = ref(props.username);
const router = useRouter();

const networks = ref([]);
const currentNetwork = ref(null);
const currentAddress = ref(null);
let web3Provider = ref(null);
let jsonRpcSigner = ref(null);

const signedMessage = ref(null);

async function handleConnect(network) {
  currentNetwork.value = network;

  try {
    if (!window.ethereum) {
      alert('Metamask is not available. Please Unlock Metamask to connect.');
      return;
    }

    web3Provider = new ethers.BrowserProvider(window.ethereum);
    const accounts = await web3Provider.send("eth_requestAccounts", []);
    currentAddress.value = accounts[0];
    console.log("connected", currentAddress.value, web3Provider.value);

    web3Provider.getSigner().then(async (result) => {
      jsonRpcSigner = result;
      const _signedMessage = await signMessageWithRandom().catch(error => {
        console.error(error);
      });
      // todo send to backend
      _addChainAddress(_signedMessage);
    });

  } catch (e) {
    console.error(e);
  }
}

async function _signMessage(message) {
  const _signed = await jsonRpcSigner.signMessage(message);
  signedMessage.value = _signed;
  return _signed;

}

async function signMessageWithRandom() {
  const message = ethers.randomBytes(10);
  console.log(">>>>>>>>>>> random message: ", message.toString());
  return _signMessage(JSON.stringify({random_bytes: message.toString()}));
}

async function _addChainAddress(_signed) {
  if (props.username.value === null || props.username.value === '') {
    alert('Please Login.');
    return;
  }
  // add to the local storage
  localStorage.setItem('mainRewardAddress', currentAddress.value);
  // store to the backend
  const _result = await axios.post(SERVER + '/api/user/update/address', {
    address: currentAddress.value,
    username: props.username,
    signed_message: _signed,
    network: currentNetwork.value,
  }).catch((error) => {
    console.log(error);
    return;
  });
  if (_result && _result.data.msg === 'success') {
    window.location.reload();
  }
}

</script>
