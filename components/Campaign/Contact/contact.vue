<template>
  <div class="decoration left">
    <div class="ball">
      <clay-deco img="/images/decoration/clay-ball.png" color="triple-main" />
    </div>
    <div class="bom">
      <clay-deco img="/images/decoration/clay-bom.png" color="double-main" />
    </div>
  </div>
  <div class="decoration right">
    <div class="flower">
      <clay-deco img="/images/decoration/clay-snail.png" color="primary-light" />
    </div>
    <div class="bowl">
      <clay-deco img="/images/decoration/clay-bowl.png" color="accent" />
    </div>
  </div>
  
  <div class="page-wrap">

    <v-snackbar
      v-model="snackbar"
      :timeout="4000"
      location="top right"
      class="notification"
    >
      <div class="action">
        Campaign Create
      </div>
      <v-btn
        variant="text"
        size="small"
        icon
        @click="snackbar = false"
      >
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-snackbar>
    
    <v-container class="inner-wrap">
      <v-row align="center">
        <v-col md="12" cols="12" class="pe-md-0 py-0 wrap-deco">
          <v-card :class="{ 'map-form': full }" class="form-box">
            <div class="form">
              <title-main :text="'Create a new campaign'" align="center" />
              <p class="use-text-paragraph text-center mb-8">Create a new campaign, and spread tasks to find more potential users.</p>
              <v-form
                ref="form"
                v-model="valid"
              >
                <v-row class="spacing6">
                  <v-col cols="12" sm="12" class="pb-0 px-6">
                    <v-text-field
                      v-model="name"
                      :rules="nameRules"
                      :label="$t('form_name')"
                      required
                      color="secondary"
                      variant="filled"
                    />
                  </v-col>
                  <v-col cols="12" sm="12" class="pb-0 px-6">
                    <v-text-field
                      v-model="email"
                      :rules="emailRules"
                      :label="$t('form_email')"
                      required
                      color="secondary"
                      variant="filled"
                    />
                  </v-col>
                  <v-col cols="12" sm="12" class="pb-0 px-6">
                    <v-text-field
                      v-model="phone"
                      variant="filled"
                      color="secondary"
                      :label="$t('form_phone')"
                    />
                  </v-col>
                  <v-col cols="12" class="pb-0  px-6">
                    <v-textarea
                      v-model="message"
                      rows="6"
                      color="secondary"
                      variant="filled"
                      :label="$t('form_message')"
                    />
                  </v-col>
                </v-row>
                <div class="form-control-label">
                  <v-checkbox
                    v-model="checkbox"
                    class="ms-n2"
                    color="secondary"
                    :rules="[v => !!v || 'You must agree to continue!']"
                    :label="$t('form_terms')"
                    required
                  />
                  <span>
                    <a href="#" class="link">
                      {{ $t('form_privacy') }}
                    </a>
                  </span>
                </div>
                <div class="btn-area">
                  <v-btn
                    size="large"
                    block
                    color="primary"
                    @click="validate"
                  >
                    Create Campaign
                  </v-btn>
                </div>
              </v-form>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import './form-style.scss';
</style>

<script>
import ClayDeco from '../../Artworks/ClayDeco';
import Title from '../../Title';
import {
  GoogleMap,
  Marker,
  MarkerCluster,
  InfoWindow,
} from 'vue3-google-map';

export default {
  components: {
    GoogleMap,
    Marker,
    MarkerCluster,
    InfoWindow,
    ClayDeco,
    'title-main': Title
  },
  props: {
    full: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    currentLocation: {},
    locations: [
      {
        lat: 44.933076,
        lng: 15.629058,
      },
    ],
    valid: true,
    snackbar: false,
    name: '',
    nameRules: [v => !!v || 'Name is required'],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
    phone: '',
    company: '',
    message: '',
    checkbox: false,
  }),
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
      }
    },
  },
};
</script>
