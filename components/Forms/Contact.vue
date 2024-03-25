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
        Message Sent
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
        <v-col md="6" cols="12" class="pe-md-0 py-0 wrap-deco">
          <v-card :class="{ 'map-form': full }" class="form-box">
            <div class="form">
              <title-main :text="$t('contact_title2')" align="center" />
              <p class="use-text-paragraph text-center mb-8">Aenean sit amet magna vel magna fringilla fermentum. Donec sit amet nulla sed arcu pulvinar ultricies commodo id ligula.</p>
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
                    {{ $t('form_send') }}
                  </v-btn>
                </div>
              </v-form>
            </div>
          </v-card>
        </v-col>
        <v-col md="6" cols="12" class="ps-md-0">
          <v-card :class="{ full: full }" class="map" raised>
            <GoogleMap
              :zoom="5"
              :center="{ lat: locations[0].lat, lng: locations[0].lng }"
              style="width: 100%; height: 100%"
            >
              <InfoWindow :options="{ position: { lat: locations[0].lat + 1, lng: locations[0].lng } }">
                <div class="bubel">
                  <h6 class="use-text-subtitle pb-1 px-3">
                    Head Quarter
                  </h6>
                  <v-row class="ma-3">
                    <v-col item sm="6" cols="12">
                      <p>
                        <v-icon class="icon">
                          mdi-phone
                        </v-icon>
                        +98 765 432 10
                      </p>
                    </v-col>
                    <v-col item sm="6" cols="12">
                      <p>
                        <v-icon class="icon">
                          mdi-email
                        </v-icon>
                        hello@luxi.com
                      </p>
                    </v-col>
                    <v-col item sm="12" cols="12">
                      <p>
                        <v-icon class="icon">
                          mdi-map-marker
                        </v-icon>
                        Lorem ipsum street Block C - Vestibullum Building
                      </p>
                    </v-col>
                  </v-row>
                </div>
              </InfoWindow>
              <MarkerCluster>
                <Marker
                  v-for="(location, i) in locations"
                  :key="i"
                  :options="{ position: location }"
                />
              </MarkerCluster>
            </GoogleMap>
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
import ClayDeco from '../Artworks/ClayDeco';
import Title from '../Title';
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
