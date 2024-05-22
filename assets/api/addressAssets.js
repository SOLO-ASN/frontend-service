

// ethereum provider
// import {ethers} from "ethers";

// const provider = new ethers.BrowserProvider(window.ethereum);
//
// const defaultProvider = new ethers.getDefaultProvider("ethereum-mainnet");



// third-party apis for chain info

import axios from 'axios';
class EvmChainApiProvider {
  constructor(name, baseUrl) {
    this.name = name;
    this.baseUrl = baseUrl;
    this.config = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Basic OWQxZDdmYWEtMWU5OS00OGQ4LWFhNWEtMjc1M2MyMGNlYjUxOmNFMFdEanRGZEdUNEdTdE1CeDhaajRKakh4YmhQSW1lUWZpOTlUNDc='
      }
    };
  }

  DefaultApiProvider() {
    return this;
  }

  Providers() {
    return [];
  }

  async GetBalance(address) {
    return {};
  }

  async GetTokens(address) {
    const data = {
      jsonrpc: "2.0",
      method: "particle_getTokens",
      params: [address],
      chainId: 1,
      id: 1,
    }

    try {
      const result = await axios.post(this.baseUrl + '/evm-chain', data, this.config);
      return result.data.result;
    } catch (e) {
      console.error(e);
    }

    return null
  }

  async GetCrossChainNFTs(addresses, networkIds) {
    if (addresses.type != Array || networkIds.type !== Array) {
      return null;
    }
    const data = {
      jsonrpc: "2.0",
      method: "particle_crosschain_getNFTs",
      params: [ addresses, networkIds ],
      chainId: 1,
      id: 1,
    }

    try {
      const result = await axios.post(this.baseUrl + '/evm-chain', data, this.config);
      return result.data.result;
    } catch (e) {
      console.error(e);
    }
    return null
  }

  async GetTokensAndNFTs(address) {
    const data = {
      jsonrpc: "2.0",
      method: "particle_getTokensAndNFTs",
      params: [ address ],
      chainId: 1,
      id: 1,
    }

    try {
      const result = await axios.post(this.baseUrl + '/evm-chain', data, this.config);
      return { native: result.data.result.native, token: result.data.result.tokens, nft: result.data.result.nfts };
    } catch (e) {
      console.error(e);
    }
    return null

  }

  async GetTransactionsByAddress(address) {
    const data = {
      jsonrpc: "2.0",
      method: "particle_getTransactionsByAddress",
      params: [ address ],
      chainId: 10,
      id: 1,
    };
    try {
      const result = await axios.post(this.baseUrl + '/evm-chain', data, this.config);
      return result.data.result;
    }catch (e) {
      console.error(e);
    }
  }




}

export default EvmChainApiProvider;
