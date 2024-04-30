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
                      v-model="description"
                      rows="6"
                      color="secondary"
                      variant="filled"
                      :label="'Further description of your campaign'"
                    />
                  </v-col>
                  <v-col cols="12" sm="12" class="pb-0 px-6">
                    <v-text-field
                      v-model="time"
                      :rules="timeRules"
                      :label="'What is the duration of your campaign? * Please enter it with the following format: YYYY/MM/DD-YYYY/MM/DD'"
                      required
                      color="secondary"
                      variant="filled"
                    />
                  </v-col>
                </v-row>

                <!-- 任务group信息填写 -->
                <v-row v-for="(group, index) in campaign.Group" :key="index" class="spacing6">
                  <v-col cols="12" sm="12" class="pb-0 px-6">
                    <p class="use-text-paragraph text-center mb-8">GROUP {{index + 1}}: Select the award to be given for this activity and fill in the relevant information</p>
                    <v-container align="center">
                      <v-checkbox
                        v-model="group.isPoints"
                        class="pb-0 px-6"
                        color="secondary"
                        :label="'Points'"
                        style="display: inline-block;"
                      />
                      <v-checkbox
                        v-model="group.isNFT"
                        class="mpb-0 px-6"
                        color="secondary"
                        :label="'NFT'"
                        style="display: inline-block;"
                      />
                      <v-checkbox
                        v-model="group.isToken"
                        class="mpb-0 px-6"
                        color="secondary"
                        :label="'Token'"
                        style="display: inline-block;"
                      />
                      <v-checkbox
                        v-model="group.isRole"
                        class="mpb-0 px-6"
                        color="secondary"
                        :label="'Discord Role'"
                        style="display: inline-block;"
                      />
                    </v-container>
                  </v-col>                  
                  <v-col v-if="group.isPoints" cols="12" sm="12" class="pb-0 px-6">
                    <v-text-field
                      v-model="group.Points"
                      variant="filled"
                      color="secondary"
                      required
                      :rules="pointsRules"
                      :label="'Please enter the number of points a user can earn after completing all tasks *'"
                    />
                  </v-col>
                  <v-col v-if="group.isNFT" cols="12" sm="12" class="pb-0 px-6">
                    <v-text-field
                      v-model="phone"
                      variant="filled"
                      color="secondary"
                      :rules="pointsRules"
                      :label="'To be further developed'"
                    />
                  </v-col>
                  <v-col v-if="group.isToken" cols="12" sm="12" class="pb-0 px-6">
                    <v-text-field
                      v-model="phone"
                      variant="filled"
                      color="secondary"
                      :rules="pointsRules"
                      :label="'To be further developed'"
                    />
                  </v-col>
                  <v-col v-if="group.isRole" cols="12" sm="12" class="pb-0 px-6">
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
                      v-model="group.title"
                      variant="filled"
                      color="secondary"
                      :rules="[v => !!v || 'Title is required']"
                      :label="'Say something about your mission *'"
                      required
                    />
                  </v-col>
                  <v-row v-for="(row, num) in group.creds" :key="num" class="pb-0 px-6">
                    <v-radio-group v-model='row.taskType' align="center">
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

                    <v-col v-if="row.taskType == 'Information Browsing'" cols="12" sm="12">
                      <v-text-field
                        v-model="row.name"
                        variant="filled"
                        color="secondary" 
                        :rules="[v => !!v || 'Description is required']"
                        :label="'Please enter a description of the task *'"
                        required
                      />
                    </v-col>
                    <v-col v-if="row.taskType == 'Information Browsing'" cols="12" sm="12">
                      <v-text-field
                        v-model="row.detail"
                        variant="filled"
                        color="secondary"
                        :label="'More details can be entered'"
                      />
                    </v-col>
                    <v-col v-if="row.taskType == 'Information Browsing'" cols="12" sm="12">
                      <v-text-field
                        v-model="row.herf"
                        variant="filled"
                        color="secondary"
                        :rules="urlRules"
                        :label="'Please enter the URL you want to jump to *'"
                        required
                      />
                    </v-col>
                    <v-col v-if="row.taskType != 'Information Browsing'" cols="12" sm="12">
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
                
                  <v-col class="spacing6">
                    <!-- 按捏，用于添加更多的子任务 --> 
                    <v-row class="btn-area">
                      <v-btn
                        size="small"
                        color="primary"
                        block
                        @click="addTask(index)"
                        style="opacity: 0.4"
                      >
                        +gyufgyigiy
                      </v-btn>
                    </v-row>
                  </v-col>
                </v-row>
              
                <!-- 按捏，用于添加更多的group --> 
                <v-col class="btn-area" >
                  <v-btn
                    size="small"
                    color="primary"
                    block
                    @click="addGroup()"
                    style="opacity: 0.6"
                  >
                    Add A New Group
                  </v-btn>
                </v-col>

                <!-- 确认按钮，用于提交任务 --> 
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
  taskType: 'Information Browsing',
  name: '',
  detail: '',
  herf: '',
}

const credentialGroup = {
  description: '',
  isToken: false,
  isPoints: true,
  isNFT: false,
  isRole: false,
  title: '',
  Points: '',
  creds: [rowTask],
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
    valid: true,
    snackbar: false,
    name: '',
    time: '',
    description: '',
    nameRules: [v => !!v || 'Name is required'],
    timeRules: [
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
    // 要改 等待进一步开发
    phone: '',

    checkbox: false,
    Points: '',

    campaign: {
      
      Group: [credentialGroup],
    },
  }),
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
      }
      console.log(this.taskList)
    },
    addTask(index) {
      var newTask = {
        taskType: 'Information Browsing',
        name: '',
        detail: '',
        herf: '',
      };
      this.campaign.Group[index].creds.push(newTask);
      console.log(this.campaign.Group);
    },
    addGroup() {
      var newTask = {
        taskType: 'Information Browsing',
        name: '',
        detail: '',
        herf: '',
      };
      var newGroup = {
      description: '',
      isToken: false,
      isPoints: true,
      isNFT: false,
      isRole: false,
      title: '',
      Points: '',
      creds: [newTask], // 每个新 group 都包含一个独立的 task
    };
      this.campaign.Group.push(newGroup);
      console.log(this.campaign.Group);
    },
  },
};
</script>
