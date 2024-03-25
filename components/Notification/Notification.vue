<template>
  <v-snackbar
    v-model="snackbar"
    :timeout="-1"
    class="notification cyber"
    location="left bottom"
  >
    <div class="d-flex align-center me-2">
      <div class="action me-2">
        {{ $t('notif_msg') }}
      </div>
      <v-btn
        color="secondary"
        class="button"
        @click="snackbar = false"
      >
        {{ $t('accept') }}
      </v-btn>
    </div>
  </v-snackbar>
</template>

<style lang="scss" scoped>
@import './notification-style.scss';
</style>

<script>
export default {
  data() {
    return {
      snackbar: true,
    };
  },
};
</script>
