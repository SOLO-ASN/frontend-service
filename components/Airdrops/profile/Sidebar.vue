<template>
  <aside class="sidebar">
    <div class="side-mobile">
      <h4 class="mb-3 use-text-subtitle2 use-text-medium text-uppercase">
        {{ $t('about_me') }}
      </h4>
      <p class="use-text-paragraph">
        {{ $t('about_me_subtitle') }}
      </p>
      <ul class="property">
        <li>
          <span>Campaign Views</span>
          <strong>{{campaignViews}}</strong>
        </li>
        <li>
          <span>Member since</span>
          <strong>{{memberSince}}</strong>
        </li>
        <li>
          <span>Main Address</span>
          <strong style="text-align: right">{{ truncateAddress }}</strong>
        </li>
      </ul>
      <h4 class="mb-3 use-text-subtitle2 use-text-medium text-uppercase">
        {{ $t('about_topics') }}
      </h4>
      <div class="tags">
        <v-chip class="use-bg-secondary-light" v-for="tag in splitTopics" :key="tag" >{{ tag }}</v-chip>
      </div>
    </div>
  </aside>
</template>

<style lang="scss" scoped>
@import './sidebar-style.scss';
</style>

<script setup>
  import imgAPI from '@/assets/images/imgAPI';

  const {campaignViews, memberSince, mainAddress, maxLength, watchingTopics} = defineProps({
    campaignViews: {
      type: String,
      required: true
    },
    memberSince: {
      type: String,
      required: true
    },
    mainAddress: {
      type: String,
      required: true
    },
    maxLength: {
      type: String,
      required: true
    },
    watchingTopics: {
      type: String,
      required: true
    }
  })

  const truncateAddress= computed(() => {
    const length = Number(maxLength);
    if (mainAddress.length <= length) {
      return mainAddress;
    } else {
      const start = mainAddress.slice(0, length/2 +1);
      const end = mainAddress.slice(mainAddress.length - length/2);
      return `${start}...${end}`;
    }
  });

  const splitTopics= computed(() => {
    // return watchingTopics.split(',');
    const res =  watchingTopics.split(',');
    console.log(res);
    return res;
  })

</script>
