<template>
  <div class="form-comment">
    <div class="write">
      <v-avatar
        v-if="!isMobile"
        :size="36"
        class="avatar"
      >
        <img
          :src="avatar"
          alt="avatar"
        >
      </v-avatar>
      <v-textarea
        :placeholder="$t('blog_write')"
        variant="solo"
        color="primary"
        hide-details
      />
      <v-btn
        class="send-btn"
        elevation="0"
        color="white"
        size="large"
        variant="outlined"
      >
        {{ isMobile ? '' : $t('form_send') }}
        <v-icon v-if="isMobile">
          mdi-send
        </v-icon>
      </v-btn>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './comment.scss';
</style>

<script>
import avatarDefault from '@/assets/images/avatars/pp_boy4.svg';

export default {
  props: {
    avatar: {
      type: String,
      default: avatarDefault,
    },
  },
  computed: {
    isMobile() {
      const xsDown = this.$vuetify.display.xs;
      return xsDown;
    },
  },
};
</script>
