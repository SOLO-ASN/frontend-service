<template>
  <a
    v-ripple
    draggable="false"
    class="profile-card"
    :class="{ deco: withDeco }"
    :href="`/collection/space?alias=${name}`"
  >
    <v-card class="profile-card" :class="first ? 'first' : ''">
      <div class="inner">
        <v-avatar
          alt="avatar"
          :src="thumbnail"
          class="avatar"
        />
        <div class="properties">
          <h5 class="title">
            {{ name }}
            <v-icon v-if="isVerified" class="verified">mdi-check-decagram</v-icon>
          </h5>
          <v-card-actions class="action">
            <div>
              <p>
                <v-icon class="icon-secondary use-text-secondary-color">mdi-account-group-outline</v-icon>
                <strong>
                  {{ followersCount }}
                  &nbsp;
                  Followers
                </strong>
              </p>
              <p>
                <v-icon class="icon-primary use-text-primary-color">mdi-flag-outline</v-icon>
                <strong>
                  {{ activeCampaignCount }}
                  &nbsp;
                  Active Campaigns
                </strong>
              </p>
            </div>
            <!-- Remove any conditional rendering for 'change' and 'volume' if they're not required -->
          </v-card-actions>
          <!-- Display the token symbol if provided -->
          <h2 v-if="tokenSymbol">
            <i>{{ tokenSymbol }}</i>
          </h2>
        </div>
      </div>
      <v-btn
        @click.prevent="onButtonClick"
        block
        :class="{ 'btn-following': isFollowing, 'btn-not-following': !isFollowing }"
        variant="outlined"
        :color="currentTheme === 'dark' ? 'secondary' : 'primary'"
      >
        Follow
      </v-btn>
    </v-card>
  </a>
</template>

<style scoped lang="scss">
@import './profile-card';
.btn-following {
  background-color: black; // 这是当 isFollowing 为 true 时的按钮颜色
  color: white; // 文字颜色
}

.btn-not-following {
  background-color: blue; // 这是当 isFollowing 为 false 时的按钮颜色
  color: black; // 文字颜色
}
</style>

<script setup>

import { useRouter } from 'vue-router';
const router = useRouter();


const emit = defineEmits(['follow-click']);
const onButtonClick = () => {
  emit('follow-click', id, isFollowing); // 通知父组件，传递id
};


const {
  id, status, name, isVerified,
  thumbnail, followersCount,
  tokenSymbol, href,
  activeCampaignCount, isFollowing
} = defineProps({
  id: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    default: null
  },
  name: {
    type: String,
    required: true,
  },
  isVerified: {
    type: Boolean,
    default: true
  },
  thumbnail: {
    type: String,
    required: true,
  },
  followersCount: {
    type: Number,
    required: true,
  },
  tokenSymbol: {
    type: String,
    default: null
  },
  href: {
    type: String,
    default: '#'
  },
  activeCampaignCount: {
    type: Number,
    required: true,
  },
  isFollowing: {
    type: Boolean,
    required: true,
  },

});
</script>
