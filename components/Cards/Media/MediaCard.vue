<template>
  <v-card
    :class="[orientation, type+'-card']"
    class="media-card"
  >
    <v-badge
      v-if="type === 'video' && duration !== ''"
      :content="duration"
      color="grey darken-4"
      offset-x="60"
      offset-y="40"
    />
    <a
      v-if="type === 'photo' && href !== ''"
      v-ripple
      :href="href !== '' ? href : '#!'"
      class="cover-link"
    >
      &nbsp;
    </a>
    <figure>
      <img :src="thumb" alt="cover">
    </figure>
    <div v-if="!plain" class="property">
      <v-btn
        icon
        v-if="type === 'video'"
        class="play-btn"
        elevation="1"
        @click="handleAction(videoId)"
      >
        <span class="ion-ios-play-outline" />
      </v-btn>
      <v-card-title class="media-title">
        {{ title }}
      </v-card-title>
    </div>
  </v-card>
</template>

<style lang="scss" scoped>
@import './media-card';
</style>

<script setup>
const {
  thumb, plain, title,
  href, orientation, duration,
  type, action
} = defineProps({
  thumb: {
    type: String,
    required: true,
  },
  plain: {
    type: Boolean,
    required: true,
  },
  title: {
    type: String,
    default: null,
  },
  href: {
    type: String,
    default: '',
  },
  orientation: {
    type: String,
    default: 'portrait',
  },
  duration: {
    type: String,
    default: '',
  },
  type: {
    type: String,
    default: 'video', // available props: photo, video
  },
  action: {
    type: Function,
    default() {
      return false;
    },
  },
  videoId: {
    type: String,
    default: ''
  }
});

function handleAction(id) {
  action(id);
}
</script>
