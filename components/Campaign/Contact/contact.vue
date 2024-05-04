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
                      v-model="campaign.name"
                      :rules="nameRules"
                      :label="'What is the name of your campaign? *'"
                      required
                      color="secondary"
                      variant="filled"
                    />
                  </v-col>
                  <v-col cols="12" class="pb-0  px-6">
                    <v-textarea
                      v-model="campaign.description"
                      :rules="descriptionRules"
                      required
                      rows="6"
                      color="secondary"
                      variant="filled"
                      :label="'Further description of your campaign *'"
                    />
                  </v-col>
                  <v-col cols="12" sm="12" class="pb-0 px-6">
                    <v-text-field
                      v-model="time"
                      :rules="timeRules"
                      :label="'What is the duration of your campaign? * Please enter it with the following format: YYYY/MM/DD hh:mm-YYYY/MM/DD hh:mm'"
                      required
                      color="secondary"
                      variant="filled"
                    />
                  </v-col>
                </v-row>

                <!-- 任务group信息填写 -->
                <v-row v-for="(group, index) in campaign.credentialGroups" :key="index" class="spacing6">
                  <v-col cols="12" sm="12" class="pb-0 px-6">
                    <p class="use-text-paragraph text-center mb-8">GROUP {{index + 1}}: Select the award to be given for this activity and fill in the relevant information</p>
                    <v-container align="center">
                      <v-checkbox
                        v-model="group.rewards.isPoints"
                        class="pb-0 px-6"
                        color="secondary"
                        :label="'Points'"
                        style="display: inline-block;"
                      />
                      <v-checkbox
                        v-model="group.rewards.isToken"
                        class="mpb-0 px-6"
                        color="secondary"
                        :label="'Token'"
                        style="display: inline-block;"
                        @change="updateReward(index, 'isToken')"
                      />
                      <v-checkbox
                        v-model="group.rewards.isRole"
                        class="mpb-0 px-6"
                        color="secondary"
                        :label="'Discord Role'"
                        style="display: inline-block;"
                        @change="updateReward(index, 'isRole')"
                      />
                    </v-container>
                  </v-col>                  
                  <v-col v-if="group.rewards.isPoints" cols="12" sm="12" class="pb-0 px-6">
                    <v-text-field
                      v-model="group.rewards.Points"
                      variant="filled"
                      color="secondary"
                      required
                      :rules="pointsRules"
                      :label="'Please enter the number of points a user can earn after completing all tasks *'"
                    />
                  </v-col>
                  <v-col v-if="group.rewards.isToken" cols="12" sm="12" class="pb-0 px-6">
                    <v-text-field
                      v-model="campaign.tokenReward.tokenDecimal"
                      variant="filled"
                      color="secondary"
                      required
                      :rules="nameRules"
                      :label="'Please enter the type of token *'"
                    />
                  </v-col>
                  <v-col v-if="group.rewards.isToken" cols="12" sm="12" class="pb-0 px-6">
                    <v-text-field
                      v-model="campaign.tokenReward.userTokenAmount"
                      variant="filled"
                      color="secondary"
                      required
                      :rules="pointsRules"
                      :label="'Please enter the number of tokens the user will receive for completing the task *'"
                    />
                  </v-col>
                  <v-col v-if="group.rewards.isToken" cols="12" sm="12" class="pb-0 px-6">
                    <v-text-field
                      v-model="campaign.tokenReward.depositedTokenAmount"
                      variant="filled"
                      color="secondary"
                      required
                      :rules="pointsRules"
                      :label="'Please enter the number of copies of the token to be issued *'"
                    />
                  </v-col>
                  <v-col v-if="group.rewards.isToken" cols="12" sm="12" class="pb-0 px-6">
                    <v-text-field
                      v-model="campaign.TokenRewardContract"
                      variant="filled"
                      color="secondary"
                      :label="'Please enter the address of the smart contract'"
                    />
                  </v-col>
                  <v-col v-if="group.rewards.isRole" cols="12" sm="12" class="pb-0 px-6">
                    <v-text-field
                      v-model="campaign.discordRole.roleName"
                      variant="filled"
                      color="secondary"
                      required
                      :rules="nameRules"
                      :label="'Please enter the character name of the rewarded discordRole *'"
                    />
                  </v-col>
                  <v-col v-if="group.rewards.isRole" cols="12" sm="12" class="pb-0 px-6">
                    <v-text-field
                      v-model="campaign.discordRole.roleId"
                      variant="filled"
                      color="secondary"
                      required
                      :rules="pointsRules"
                      :label="'Please enter the role ID of the rewarded discordRole *'"
                    />
                  </v-col>
                  <v-col v-if="group.rewards.isRole" cols="12" sm="12" class="pb-0 px-6">
                    <v-text-field
                      v-model="campaign.discordRole.roleimg"
                      variant="filled"
                      color="secondary"
                      required
                      :rules="urlRules"
                      :label="'Please enter the link to the character picture for the bonus discordRole! *'"
                    />
                  </v-col>
                  <v-col v-if="group.rewards.isRole" cols="12" sm="12" class="pb-0 px-6">
                    <v-text-field
                      v-model="campaign.discordRole.guildName"
                      variant="filled"
                      color="secondary"
                      required
                      :rules="nameRules"
                      :label="'Please enter the moderator of the rewarded DiscordRole *'"
                    />
                  </v-col>
                  <v-col v-if="group.rewards.isRole" cols="12" sm="12" class="pb-0 px-6">
                    <v-text-field
                      v-model="campaign.discordRole.inviteLink"
                      variant="filled"
                      color="secondary"
                      :label="'Please enter the invite link for the discord server'"
                    />
                  </v-col>
                    
                  <v-col cols="12" sm="12" class="pb-0 px-6">
                    <p class="use-text-paragraph text-center mb-8">Select the desired task type and fill in the task information to publish the task</p>        
                  </v-col>
                  <v-col cols="12" sm="12" class="pb-0 px-6">
                    <v-text-field
                      v-model="group.description"
                      variant="filled"
                      color="secondary"
                      :rules="[v => !!v || 'Title is required']"
                      :label="'Say something about your mission *'"
                      required
                    />
                  </v-col>
                  <v-row v-for="(row, num) in group.creds" :key="num" class="pb-0 px-6">
                    <v-radio-group v-model='row.credType' align="center">
                      <v-layout row wrap>
                        <!-- 支持的任务类型 -->
                        <v-radio
                          class="pb-0 px-6"
                          color="secondary"
                          value='WEB_BROWSE'
                          :label="'Web Browsing'"
                        />
                        <v-radio
                          class="mpb-0 px-6"
                          color="secondary"
                          value='TWITTER_FOLLOW'
                          :label="'Twitter Follow'"
                        />
                        <v-radio
                          class="mpb-0 px-6"
                          color="secondary"
                          value='TWITTER_RETWEET'
                          :label="'Twitter Retweet'"
                        />
                        <v-radio
                          class="mpb-0 px-6"
                          color="secondary"
                          value='TWITTER_LIKE'
                          :label="'Twitter Like'"
                        />
                        <v-radio
                          class="mpb-0 px-6"
                          color="secondary"
                          value='TWITTER_TWEET'
                          :label="'Twitter Tweet'"
                        />
                      </v-layout>
                    </v-radio-group>
                    <!-- 根据任务类型获取输入 -->
                    <v-col cols="12" sm="12">
                      <v-text-field
                        v-model="row.name"
                        variant="filled"
                        color="secondary" 
                        :rules="[v => !!v || 'Description is required']"
                        :label="'Please enter a description of the task *'"
                        required
                      />
                    </v-col>
                    <v-col cols="12" sm="12">
                      <v-text-field
                        v-model="row.description"
                        variant="filled"
                        color="secondary"
                        :label="'More details can be entered'"
                      />
                    </v-col>
                    <v-col v-if="row.credType == 'WEB_BROWSE'" cols="12" sm="12">
                      <v-text-field
                        v-model="row.referenceLink"
                        variant="filled"
                        color="secondary"
                        :rules="urlRules"
                        :label="'Please enter the URL you want to jump to *'"
                        required
                      />
                    </v-col>
                    <v-col v-if="row.credType == 'TWITTER_FOLLOW'" cols="12" sm="12">
                      <v-text-field
                        v-model="row.referenceLink"
                        variant="filled"
                        color="secondary"
                        :rules="nameRules"
                        :label="'Please enter the Twitter username you want to follow *'"
                        required
                      />
                    </v-col>
                    <v-col v-if="row.credType == 'TWITTER_RETWEET'" cols="12" sm="12">
                      <v-text-field
                        v-model="row.referenceLink"
                        variant="filled"
                        color="secondary"
                        :rules="urlRules"
                        :label="'Please enter the URL to the tweet you want to retweet *'"
                        required
                      />
                    </v-col>
                    <v-col v-if="row.credType == 'TWITTER_LIKE'" cols="12" sm="12">
                      <v-text-field
                        v-model="row.referenceLink"
                        variant="filled"
                        color="secondary"
                        :rules="urlRules"
                        :label="'Please enter the URL to the tweet you want to like *'"
                        required
                      />
                    </v-col>
                    <v-col v-if="row.credType == 'TWITTER_TWEET'" cols="12" sm="12">
                      <v-text-field
                        v-model="row.referenceLink"
                        variant="filled"
                        color="secondary"
                        :rules="descriptionRules"
                        :label="'Please enter the text of the tweet to be sent *'"
                        required
                      />
                    </v-col>
                  </v-row>
                
                  <v-col class="pb-0 px-6">
                    <!-- 按捏，用于添加更多的子任务 --> 
                    <v-row class="pb-0 px-6">
                      <v-btn
                        size="small"
                        color="primary"
                        block
                        @click="addTask(index)"
                        style="opacity: 0.4"
                      >
                        Add A New Task
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
  credType: 'WEB_BROWSE',
  name: '',
  description: '',
  referenceLink: '',
}

const credentialGroup = {
  description: '',
  rewards: {
    isToken: false,
    isPoints: true,
    isRole: false,
    Points: '',
  },
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
    
    time: '',
    nameRules: [v => !!v || 'Name is required'],
    descriptionRules: [v => !!v || 'Description is required'],
    timeRules: [
      v => !!v || 'Date is required',
      v => /^(\d{4}\/\d{1,2}\/\d{1,2}\s\d{1,2}:\d{2}-\d{4}\/\d{1,2}\/\d{1,2}\s\d{1,2}:\d{2})$/.test(v) || 'Date entered in wrong format',
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
      name: '',
      space:'',
      description: '',
      startTime: 0,
      endTime: 0,
      rewardTypes: '',
      loyaltyPoints: 0,
      TokenRewardContract: '',
      tokenReward: {
        userTokenAmount: '',
        depositedTokenAmount: '',
        tokenDecimal: '',
      },
      discordRole: {
        roleName: '',
        roleId: '',
        roleimg: '',
        guildName: '',
        inviteLink: '',
      },
      credentialGroups: [credentialGroup],
    },
  }),
  methods: {
    updateReward(index, rewardType) {
      // 遍历所有 group
      for(let i = 0; i < this.campaign.credentialGroups.length; ++i) {
        if(i != index) {
          if(rewardType == 'isToken') {
            if(this.campaign.credentialGroups[i].rewards.isToken == true) {
              this.campaign.credentialGroups[index].rewards.isToken = false;
              alert('You can only select one Token or Discord Role among all groups.');
              return;
            }
          }
          if(rewardType == 'isRole') {
            if(this.campaign.credentialGroups[i].rewards.isRole == true) {
              this.campaign.credentialGroups[index].rewards.isRole = false;
              alert('You can only select one Token or Discord Role among all groups.');
              return;
            }
          }
        }
      }
    },
    validate() {
      // 表格信息填写验证
      if (!this.campaign.name) {
        alert('Please check the name of the campaign.');
        return;
      } 
      if (!this.campaign.description) {
        alert('Please check the description of the campaign.');
        return;
      } 
      // time数据处理
      const campaignTime = this.time.split('-');
      this.campaign.startTime = Date.parse(campaignTime[0]);
      this.campaign.endTime = Date.parse(campaignTime[1]);
      console.log(this.campaign)
      // 检测时间有效性
      if(isNaN(this.campaign.startTime) || isNaN(this.campaign.endTime)) {
        alert('Please check the validity of the entered time.');
        return;
      } else if(this.campaign.startTime > this.campaign.endTime) {
        alert('Please check the validity of the entered time.');
        return;
      }
      // 处理任务填写的信息
      var addPoints = false;
      var addToken = false;
      var addRole = false;
      this.campaign.rewardTypes = '';
      this.campaign.credentialGroups.forEach(group => {
        // 检查group描述
        if(!group.description) {
          alert('Please check the description of the group.');
          return;
        }
        // 检查文本奖励
        if(group.rewards.isPoints) {
          if(!group.rewards.Points) {
            alert('Please check the number of point rewards in the group.');
            return;
          }
          addPoints = true;
          this.campaign.loyaltyPoints += parseInt(group.rewards.Points);
        }
        if(group.rewards.isToken) {
          if(!this.campaign.tokenReward.depositedTokenAmount) {
            alert('Please check the number of copies of the token award in the group.');
            return;
          }
          if(!this.campaign.tokenReward.userTokenAmount) {
            alert('Please check the number of tokens a user can get for completing a task in a group.');
            return;
          }
          if(!this.campaign.tokenReward.depositedTokenAmount) {
            alert('Please check the number of copies of the token award in the group.');
            return;
          }
          addToken = true;
        }
        if(group.rewards.isRole) {
          if(!this.campaign.discordRole.roleName) {
            alert('Please check the name of the discord role.');
            return;
          }
          if(!this.campaign.discordRole.roleId) {
            alert('Please check the discord id of the discord role.');
            return;
          }
          if(!this.campaign.discordRole.roleimg) {
            alert('Please check the link to the discord character\'s presentation poster');
            return;
          }
          addRole = true;
        }
        // 防止奖励没有选
        if(!group.rewards.isPoints && !group.rewards.isToken && !group.rewards.isRole) {
          alert('Please check that the reward type in the group is not null.');
          return;
        }
        // 检查任务填写的信息
        group.creds.forEach(task => {
          if(!task.name) {
            alert('Please check the name of the task.');
            return;
          }
          if(!task.description) {
            alert('Please check the description of the task.');
            return;
          }
          if(!task.referenceLink) {
            if(task.credType == 'WEB_BROWSE') {
              alert('Please check the URL of the task you want to jump to.');
              return;
            }
            if(task.credType == 'TWITTER_FOLLOW') {
              alert('Please check the name of the Twitter user to follow in the task.');
              return;
            }
            if(task.credType == 'TWITTER_RETWEET') {
              alert('Please check the task for the link to the tweet that needs to be retweeted!');
              return;
            }
            if(task.credType == 'TWITTER_LIKE') {
              alert('Please check the task for the link to the tweet that needs to be likeed!');
              return;
            }
            if(task.credType == 'TWITTER_TWEET') {
              alert('Please check the text of the tweet that needs to be tweeted in the task!');
              return;
            }
          }
        });
      });
      // 完善rewardTypes
      if(addToken) {
        this.campaign.rewardTypes += 'Token ';
        addToken = false;
      }
      if(addRole) {
        this.campaign.rewardTypes += 'Role ';
        addRole = false;
      }
      if(addPoints) {
        this.campaign.rewardTypes += 'Points ';
        addPoints = false;
      }
      // 去除结果字符串末尾的空格
      this.campaign.rewardTypes = this.campaign.rewardTypes.trim();
      console.log(this.campaign)
    },
    addTask(index) {
      var newTask = {
        credType: 'WEB_BROWSE',
        name: '',
        description: '',
        referenceLink: '',
      };
      this.campaign.credentialGroups[index].creds.push(newTask);
      console.log(this.campaign);
    },
    addGroup() {
      var newTask = {
        credType: 'WEB_BROWSE',
        name: '',
        description: '',
        referenceLink: '',
      };
      var newGroup = {
      description: '',
      rewards: {
        isToken: false,
        isPoints: true,
        isRole: false,
        Points: '',
      },
      creds: [newTask], // 每个新 group 都包含一个独立的 task
    };
      this.campaign.credentialGroups.push(newGroup);
      console.log(this.campaign);
    },
  },
};
</script>
