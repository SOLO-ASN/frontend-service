<template>
  <div>
    <div
      v-for="(index) in 1"
      :id="'topic'+index"
      :key="index"
      class="accordion"
      :class="index <= 1 ? 'mt-0' : ''"
    >
      <h4 class="use-text-subtitle mb-10">
        Get 1 Entry & 50 Points
      </h4>
      <v-expansion-panels
        v-model="panel"
        active-class="expanded"
      >
        <v-expansion-panel
          v-for="(item, index) in faqData"
          :key="index"
          class="paper"
        >
          <v-expansion-panel-title class="content">
            <span class="heading">
              {{ item.q }}
            </span>
          </v-expansion-panel-title>
          <v-expansion-panel-text class="detail">
            <span>
              {{ item.a }}
            </span>
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './faq-style.scss';
</style>

<script>
const faqData = [
  {
    q: '[Verification]- OKX Wallet User',
    a:
      'Connect with an OKX wallet address:\n1.Download OKX Wallet Extension or OKX APP\n2.Create or import an adress to it and connect to Galxe',
  },
  {
    q: 'Follow @okxweb3 on Twitter',
    a:
      'okxweb3\'s Twitter followers',
  },
  {
    q: 'Follow @XRGB404 on Twitter',
    a:
      'XRGB404\'s Twitter followers',
  },
  {
    q: 'Retweet the Tweet',
    a:
      'okxweb3\'s Tweet retweeters',
  },
  {
    q: 'Retweet the Tweet',
    a:
      'XRGB404\'s Tweet retweeters',
  },
  {
    q: 'Visit the OKX Web3 Giveaway for more exciting rewards!',
    a:
      'The users who have visited the OKX Web3 Giveaway for more exciting rewards! page.',
  },
];

export default {
  data() {
    return {
      panel: -1,
      faqData,
    };
  },
  computed: {
    isMobile() {
      const smDown = this.$vuetify.display.smAndDown;
      return smDown;
    },
  },
};
</script>
