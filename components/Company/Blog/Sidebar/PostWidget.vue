<template>
  <paper :title="$t('blog_post')" icon="ion-ios-bookmark-outline" color="transparent">
    <div>
      <v-list
        subheader
        lines="two"
        bg-color="transparent"
      >
        <v-list-item
          v-for="(item, index) in news"
          :key="index"
          href="#"
        >
          <div>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
            <v-list-item-subtitle>{{ item.date }}</v-list-item-subtitle>
          </div>
        </v-list-item>
      </v-list>
    </div>
  </paper>
</template>

<script>
import Paper from '../../../Cards/Paper';

export default {
  components: {
    Paper,
  },
  data() {
    return {
      news: [
        {
          title: 'Vestibulum bibendum nisi eget magna',
          date: 'Jan 9, 2014',
        },
        {
          title: 'Quisque a consequat ante',
          date: 'Jan 9, 2014',
        },
        {
          title: 'Donec dignissim, odio ac imperdiet luctus',
          date: 'Jan 9, 2014',
        },
        {
          title: 'Suspendisse eleifend nunc non',
          date: 'Jan 9, 2014',
        },
        {
          title: 'Vestibulum a massa vestibulum',
          date: 'Jan 9, 2014',
        },
      ],
    };
  },
};
</script>
