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
                    :label="'What is the name of your campaign? *'"
                    required
                    color="secondary"
                    variant="filled"
                  />
                </v-col>
                <v-col cols="12" class="pb-0  px-6">
                  <v-textarea
                    v-model="message"
                    rows="6"
                    color="secondary"
                    variant="filled"
                    :label="'Further description of your campaign'"
                  />
                </v-col>
                <v-col cols="12" sm="12" class="pb-0 px-6">
                  <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    :label="'What is the duration of your campaign? * Please enter it with the following format: YYYY/MM/DD-YYYY/MM/DD'"
                    required
                    color="secondary"
                    variant="filled"
                  />
                </v-col>
                <v-col cols="12" sm="12" class="pb-0 px-6">
                  <p class="use-text-paragraph text-center mb-8">Select the award to be given for this activity and fill in the relevant information</p>
                  <v-container align="center">
                    <v-checkbox
                      v-model="isPoints"
                      class="pb-0 px-6"
                      color="secondary"
                      :label="'Points'"
                      style="display: inline-block;"
                    />
                    <v-checkbox
                      v-model="isNFT"
                      class="mpb-0 px-6"
                      color="secondary"
                      :label="'NFT'"
                      style="display: inline-block;"
                    />
                    <v-checkbox
                      v-model="isToken"
                      class="mpb-0 px-6"
                      color="secondary"
                      :label="'Token'"
                      style="display: inline-block;"
                    />
                    <v-checkbox
                      v-model="isOAT"
                      class="mpb-0 px-6"
                      color="secondary"
                      :label="'OAT'"
                      style="display: inline-block;"
                    />
                    <v-checkbox
                      v-model="isRole"
                      class="mpb-0 px-6"
                      color="secondary"
                      :label="'Discord Role'"
                      style="display: inline-block;"
                    />
                    <v-checkbox
                      v-model="isMint"
                      class="mpb-0 px-6"
                      color="secondary"
                      :label="'Mintlist'"
                      style="display: inline-block;"
                    />
                    <v-checkbox
                      v-model="isCustom"
                      class="mpb-0 px-6"
                      color="secondary"
                      :label="'Custom Reward'"
                      style="display: inline-block;"
                    />
                  </v-container>
                </v-col>                  
                <v-col v-if="isPoints" cols="12" sm="12" class="pb-0 px-6">
                  <v-text-field
                    v-model="Points"
                    variant="filled"
                    color="secondary"
                    required
                    :rules="pointsRules"
                    :label="'Please enter the number of points a user can earn after completing all tasks *'"
                  />
                </v-col>
                <v-col v-if="isNFT" cols="12" sm="12" class="pb-0 px-6">
                  <v-text-field
                    v-model="phone"
                    variant="filled"
                    color="secondary"
                    :rules="pointsRules"
                    :label="'To be further developed'"
                  />
                </v-col>
                <v-col v-if="isToken" cols="12" sm="12" class="pb-0 px-6">
                  <v-text-field
                    v-model="phone"
                    variant="filled"
                    color="secondary"
                    :rules="pointsRules"
                    :label="'To be further developed'"
                  />
                </v-col>
                <v-col v-if="isOAT" cols="12" sm="12" class="pb-0 px-6">
                  <v-text-field
                    v-model="phone"
                    variant="filled"
                    color="secondary"
                    :rules="pointsRules"
                    :label="'To be further developed'"
                  />
                </v-col>
                <v-col v-if="isRole" cols="12" sm="12" class="pb-0 px-6">
                  <v-text-field
                    v-model="phone"
                    variant="filled"
                    color="secondary"
                    :rules="pointsRules"
                    :label="'To be further developed'"
                  />
                </v-col>
                <v-col v-if="isMint" cols="12" sm="12" class="pb-0 px-6">
                  <v-text-field
                    v-model="phone"
                    variant="filled"
                    color="secondary"
                    :rules="pointsRules"
                    :label="'To be further developed'"
                  />
                </v-col>
                <v-col v-if="isCustom" cols="12" sm="12" class="pb-0 px-6">
                  <v-text-field
                    v-model="phone"
                    variant="filled"
                    color="secondary"
                    :rules="pointsRules"
                    :label="'To be further developed'"
                  />
                </v-col>
                
                <v-col cols="12" sm="12" class="pb-0 px-6">
                  <p class="use-text-paragraph text-center mb-8">Select the desired task type and fill in the task information to publish the task</p>        
                </v-col>
                <v-col cols="12" sm="12" class="pb-0 px-6">
                  <v-text-field
                    v-model="title"
                    variant="filled"
                    color="secondary"
                    :rules="[v => !!v || 'Title is required']"
                    :label="'Say something about your mission *'"
                    required
                  />
                </v-col>
                <v-row v-for="(row, index) in taskList" :key="index" class="pb-0 px-6">
                  <v-radio-group v-model='row.selectTask' align="center">
                    <v-layout row wrap>
                      <v-radio
                        class="pb-0 px-6"
                        color="secondary"
                        value='Information Browsing'
                        :label="'Information Browsing'"
                      />
                      <v-radio
                        class="mpb-0 px-6"
                        color="secondary"
                        value='Twitter Follow'
                        :label="'Twitter Follow'"

                      />
                      <v-radio
                        class="mpb-0 px-6"
                        color="secondary"
                        value='Twitter Retweet'
                        :label="'Twitter Retweet'"

                      />
                      <v-radio
                        class="mpb-0 px-6"
                        color="secondary"
                        value='More'
                        :label="'More task'"
                      />
                    </v-layout>
                  </v-radio-group>

                  <v-col v-if="row.selectTask == 'Information Browsing'" cols="12" sm="12">
                    <v-text-field
                      v-model="title"
                      variant="filled"
                      color="secondary" 
                      :rules="[v => !!v || 'Description is required']"
                      :label="'Please enter a description of the task *'"
                      required
                    />
                  </v-col>
                  <v-col v-if="row.selectTask == 'Information Browsing'" cols="12" sm="12">
                    <v-text-field
                      v-model="title"
                      variant="filled"
                      color="secondary"
                      :label="'More details can be entered'"
                    />
                  </v-col>
                  <v-col v-if="row.selectTask == 'Information Browsing'" cols="12" sm="12">
                    <v-text-field
                      v-model="title"
                      variant="filled"
                      color="secondary"
                      :rules="urlRules"
                      :label="'Please enter the URL you want to jump to *'"
                      required
                    />
                  </v-col>
                  <v-col v-if="row.selectTask != 'Information Browsing'" cols="12" sm="12">
                    <v-text-field
                      v-model="title"
                      variant="filled"
                      color="secondary"
                      :rules="urlRules"
                      :label="'coming soon'"
                      required
                    />
                  </v-col>
                </v-row>
              </v-row>
                

                  <div class="btn-area">
                    <v-btn
                      size="small"
                      color="primary"
                      block
                      @click="addTask"
                      style="opacity: 0.2"
                    >
                      +
                    </v-btn>
                  </div>

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

const rowTask = {
  isBowsing: true,
  isFollow: false,
  isRetweet: false,
  isMore: false,
  selectTask: 'Twitter Retweet'
}

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
      v => !!v || 'Date is required',
      v => /^(\d{4}\/\d{1,2}\/\d{1,2})-(\d{4}\/\d{1,2}\/\d{1,2})$/.test(v) || 'Date entered in wrong format',
    ],
    pointsRules: [
      v => !!v || 'The number of points is required',
      v => /^\d+$/.test(v) || 'Please enter an integer',
    ],
    urlRules: [
      v => !!v || 'URL is required',
      v => /^((https|http):\/\/)(www.)?[a-zA-Z0-9@:%._\+~#?&//=]*$/.test(v) || 'Please enter a valid URL'
    ],
    phone: '',
    company: '',
    message: '',
    title: '',
    checkbox: false,
    isToken: false,
    isPoints: true,
    Points: '',
    isNFT: false,
    isOAT: false,
    isRole: false,
    isMint: false,
    isCustom: false,
    taskList: [],
  }),
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
      }
    },
    addTask() {
      var newTask = {...rowTask};
      this.taskList.push(newTask);
    },
  },
};
</script>
