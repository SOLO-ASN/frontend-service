<template>
  <div>
    <div class="main-wrap">

      <main-header home :menu="singleMenu.inner" />
      <div class="container-wrap container-wrap">
        <div class="inner-page account-setting-box">
          <v-container >
            <h4 class="use-text-title"> Campaign Transactions </h4>

            <v-divider style="margin:35px 0 35px 0;"/>

<!--        todo add history list-->

            <v-list :items="items" lines="three" item-props>
              <template v-slot:subtitle="{ subtitle }">
                <div v-html="subtitle"></div>
              </template>
            </v-list>


          </v-container>
        </div>
      </div>
      <main-footer></main-footer>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import '@/assets/scss/pages';
</style>

<script setup>
import { onMounted, inject, ref } from 'vue';
import { useDisplay } from 'vuetify';
import {useHead} from "#app";

import brand from "assets/text/brand";
import singleMenu from "~/components/Header/data/single";
import MainHeader from "~/components/Header/Main.vue";
import MainFooter from "~/components/Footer/Main.vue";

const historyList = ref( [] );
const items = ref( [] );

function createListing(name) {
  return { name };
}

onMounted(() => {
  historyList.value = [
      createListing()
  ];

  items.value = [
    {
      prependAvatar: 'https://cdn.galxe.com/galaxy/galxe/d0acdca1-8258-4863-98a4-edbc7869c719.png',
      title: 'Empower BWB Points Program: Galxe \u0026 Bitget Wallet $BWB Points Airdrop plan',
      subtitle: `<span class="text-primary"><a href="https://www.horizen.io/">Horizen</a></span> &mdash; Galxe is celebrating with Bitget for its $BWB Points Airdrop Campaign! Users who actively participate and complete tasks will have the opportunity to share $BWB points, Galxe will be offering a approx total of 30,0000-50,0000 BWB Points. (Exact amount to be confirmed by Bitget).`,
    },
    { type: 'divider', inset: true },
    {
      prependAvatar: 'https://cdn.galxe.com/galaxy/avatar/e7bbfddf-8bff-471a-bd1c-3bf5c929b540.png?optimizer=image&width=200&quality=100',
      title: 'EVM Unite - Taiko',
      subtitle: `<span class="text-primary"><a href="https://artela.network/">Artela</a></span> &mdash; In 2020, @Ethereum ignited the #DeFiSummer, revolutionizing finance with decentralized lending, trading, and more. But as Web3 grows, so do the challenges.`,
    },
    { type: 'divider', inset: true },
    {
      prependAvatar: 'https://b.galxestatic.com/w/s/43aad15/img/campaign-loyalty-program.e224e56.png',
      title: 'The Corps of Mystic Pen Warrior-Stake\n',
      subtitle:
          '<span class="text-primary"><a href="#">Penpad</a></span> &mdash; Users can accumulate more points by pledging ETH, inviting friends, and joining warrior guilds with new wallet addresses. For fairness, though, remember that you are limited to one address per warrior guild and each address can only create one warrior guild.\n',
    },
    { type: 'divider', inset: true },
    {
      prependAvatar: 'https://cdn.galxe.com/galaxy/spaceid/98a1f6b6-370c-4862-8465-b557ee56360c.png',
      title: 'Visit MyPrize and Create an Account',
      subtitle:
          '<span class="text-primary"><a href="https://MyPrize.com/">MyPrize</a></span> &mdash; Visit MyPrize.com or MyPrize.us and create your account.\n',
    },
    { type: 'divider', inset: true },
    {
      prependAvatar: 'https://cdn.galxe.com/galaxy/penpad/48d46c47-fc84-4580-82e5-9b6b6042703a.jpeg',
      title: 'Season 2: The Mystic Pen Warriors-$PDD Launch Campaign',
      subtitle:
          '<span class="text-primary"><a href="#">Penpad</a></span></span> &mdash; Overview of Season 2: The Mystic Pen Warriors\n' +
          'In season 2—like season 1—we’re distributing $PDD tokens to loyal community members active in PenPad’s launch. $PDD is PenPad’s native token and will give holders governance rights and other privileges.\n' +
          '\n' +
          'This season, though, we’re giving away 6% of the total token supply, or 6 million $PDD tokens, with the goal of raising 401 ETH. $PDD tokens will be distributed based on a sliding scale, where the more you participate, the more tokens you’ll be able to get—at increasingly favorable prices!\n' +
          '\n',
    },
  ];

});

useHead({
  title: brand.name + ' - Campaign Transactions',
});

const { smAndUp: isTablet } = useDisplay();
</script>
