<template>
  <paper :title="$t('blog_archived')" icon="ion-ios-folder-open-outline" color="transparent">
    <div>
      <v-list
        subheader
        bg-color="transparent"
      >
        <v-list-item
          v-for="(item, index) in periode"
          :key="index"
          href="#"
        >
          <div>
            <v-list-item-title>{{ item }}</v-list-item-title>
          </div>
          <template #append>
            <v-icon class="use-rtl-flip" color="grey lighten-1">
              mdi-chevron-right
            </v-icon>
          </template>
        </v-list-item>
      </v-list>
      <v-btn variant="text" block color="primary">
        {{ $t('btn_seeall') }}
      </v-btn>
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
      periode: [
        'October 2018',
        'September 2018',
        'August 2018',
        'July 2018',
        'June 2018',
        'April 2018',
        'March 2018',
        'Febuary 2018',
      ],
    };
  },
};
</script>
