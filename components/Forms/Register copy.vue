<template>
  <AuthFrame
    :title="$t('register_title')"
    :subtitle="$t('register_subtitle')"
    type="register"
  >
    <div>
      <div class="head">
        <h3 class="use-text-title2">
          {{ $t('register') }}
        </h3>
        <v-btn size="small" variant="text" class="button-link" :href="link.login">
          <v-icon>mdi-arrow-right</v-icon>
          {{ $t('register_already') }}
        </v-btn>
      </div>
      <social-auth />
      <div class="separator">
        <p>
          {{ $t('register_or') }}
        </p>
      </div>
      <v-form
        ref="form"
        v-model="valid"
      >
        <v-row class="spacing3">
          <v-col cols="12" sm="12" class="px-3">
            <v-text-field
              v-model="name"
              :label="$t('register_name')"
              :rules="requiredRules"
              color="secondary"
              variant="filled"
              name="name"
              required
            />
          </v-col>
          <v-col cols="12" sm="12" class="px-3">
            <v-text-field
              v-model="email"
              :label="$t('register_email')"
              :rules="emailRules"
              color="secondary"
              variant="filled"
              name="email"
              required
            />
          </v-col>
          <v-col cols="12" md="6" class="px-3">
            <v-text-field
              v-model="password"
              :label="$t('register_password')"
              :rules="requiredRules"
              color="secondary"
              type="password"
              variant="filled"
              name="password"
              required
            />
          </v-col>
          <v-col cols="12" md="6" class="px-3">
            <v-text-field
              v-model="confirmPassword"
              :label="$t('register_confirm')"
              :rules="passwordRules"
              color="secondary"
              type="password"
              variant="filled"
              name="confirm"
              required
            />
          </v-col>
        </v-row>
        <div class="btn-area flex">
          <div class="form-helper pb-5">
            <div class="form-control-label">
              <v-checkbox
                v-model="checkbox"
                :label="$t('form_terms')"
                :rules="requiredRules"
                color="secondary"
                required
                hide-details
                class="ms-n2"
              />
              <span>
                <a href="#" class="link">
                  {{ $t('form_privacy') }}
                </a>
              </span>
            </div>
          </div>
          <v-btn
            :block="isTablet || isMobile"
            size="large"
            color="primary"
            @click="handleSubmit"
          >
            {{ $t('continue') }}
          </v-btn>
        </div>
      </v-form>
    </div>
  </AuthFrame>
</template>

<style lang="scss" scoped>
@import './form-style';
</style>

<script setup>
import { ref } from 'vue';
import { useDisplay } from 'vuetify';
import link from '@/assets/text/link';
import SocialAuth from './SocialAuth';
import AuthFrame from './AuthFrame';

const form = ref(null);
const valid = ref(true);
const email = ref('');
const name = ref('');
const emailRules = ref([
  v => !!v || 'E-mail is required',
  v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
]);
const password = ref('');
const confirmPassword = ref('');
const requiredRules = ref([v => !!v || 'This field is required']);
const passwordRules = ref([
  v => !!v || 'This field is required',
  v => v === password.value || 'Passwords do not match',
]);
const checkbox = ref(false);

const { md: isTablet } = useDisplay();
const { xs: isMobile } = useDisplay();
const { smAndDown: isMobile2 } = useDisplay();

function handleSubmit() {
  if (valid.value) {
    console.log('data submited');
  }
}
</script>
