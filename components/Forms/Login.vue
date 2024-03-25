<template>
  <auth-frame
    :title="$t('login_title')"
    :subtitle="$t('login_subtitle')"
  >
    <div>
      <div class="head">
        <h3 class="use-text-title2">
          {{ $t('login') }}
        </h3>
        <v-btn size="small" variant="text" class="button-link" :href="link.register">
          <v-icon>mdi-arrow-right</v-icon>
          {{ $t('login_create') }}
        </v-btn>
      </div>
      <social-auth />
      <div class="separator">
        <p>
          {{ $t('login_or') }}
        </p>
      </div>
      <v-form
        ref="form"
        v-model="valid"
      >
        <v-row class="spacing3">
          <v-col cols="12" sm="12" class="px-3">
            <v-text-field
              v-model="email"
              :label="$t('login_email')"
              :rules="emailRules"
              color="secondary"
              variant="filled"
              name="email"
              required
            />
          </v-col>
          <v-col cols="12" sm="12" class="px-3">
            <v-text-field
              v-model="password"
              :label="$t('login_password')"
              :rules="requiredRules"
              color="secondary"
              type="password"
              variant="filled"
              name="password"
              required
            />
          </v-col>
        </v-row>
        <div class="form-helper">
          <div class="form-control-label">
            <v-checkbox
              v-model="checkbox"
              :label="$t('login_remember')"
              color="secondary"
            />
          </div>
          <v-btn
            size="small"
            class="button-link"
            variant="text"
            href="#"
          >
            {{ $t('login_forgot') }}
          </v-btn>
        </div>
        <div class="btn-area">
          <v-btn
            size="large"
            block
            color="primary"
            @click="handleSubmit"
          >
            {{ $t('continue') }}
          </v-btn>
        </div>
      </v-form>
    </div>
  </auth-frame>
</template>

<style lang="scss" scoped>
@import './form-style';
</style>

<script setup>
import { useDisplay } from 'vuetify';
import { ref } from 'vue';
import link from '@/assets/text/link';
import SocialAuth from './SocialAuth';
import AuthFrame from './AuthFrame';

const { xs: isMobile } = useDisplay();
const form = ref(null);

const valid = ref(true);
const email = ref('');
const emailRules = ref([
  v => !!v || 'E-mail is required',
  v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
]);
const password = ref('');
const requiredRules = ref([v => !!v || 'This field is required']);
const checkbox = ref(false);

function handleSubmit() {
  if (valid.value) {
    console.log('data submited');
  }
}
</script>
