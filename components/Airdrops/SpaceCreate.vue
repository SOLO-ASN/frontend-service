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
        Space Create
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
              <title-main :text="'Create Space'" align="center" />
              <p class="use-text-paragraph text-center mb-8"></p>
              <v-form
                ref="form"
                v-model="valid"
              >
              <v-row class="spacing6">
                <v-col cols="12" sm="12" class="pb-0 px-6">
                <label for="Name" class="label-custom">Name</label>
                  <v-text-field
                    v-model="name"
                    :rules="nameRules"
                    :label="'What is the name of your Space? '"
                    required
                    color="secondary"
                    variant="filled"
                  />
                </v-col>
                <v-col cols="12" sm="12" class="pb-0 px-6">
                <label for="Alias" class="label-custom">Alias</label>
                  <v-text-field
                    v-model="alias"
                    :rules="aliasRules"
                    :label="'What is the alias of your Space? '"
                    required
                    color="secondary"
                    variant="filled"
                  />
                </v-col>
                <v-col cols="12" sm="12" class="pb-0 px-6">
                <label for="Alias" class="label-custom">Thumbnail</label>

                 <el-upload
                    class="avatar-uploader"
                    action="#"
                    :show-file-list="false"
                    :http-request="httpRequest"
                    :before-upload="beforeAvatarUpload"
                  >
                    <img v-if="thumbnail" :src="thumbnail" class="avatar" />
                    <el-icon v-else class="avatar-uploader-icon">+</el-icon>
                  </el-upload>
                </v-col>
               
                <v-col cols="12" class="pb-0  px-6">
                <label for="Info" class="label-custom">Info</label>
                  <v-textarea
                    v-model="description"
                    :rules="descriptionRules"
                    rows="6"
                    color="secondary"
                    variant="filled"
                    :label="'Information of your Space, limit to 500 words'"
                  />
                </v-col>
                <v-col cols="12" sm="12" class="pb-0 px-6">
                  <label for="Links" class="label-custom">Links</label>
                  <v-text-field
                    v-model="Github"
                    :rules="githubRules"
                    :label="'Github'"
                    color="secondary"
                    variant="filled"
                  />
                  <v-text-field
                    v-model="Twitter"
                    :rules="twitterRules"
                    :label="'Twitter'"
                    color="secondary"
                    variant="filled"
                  />
                  <v-text-field
                    v-model="HomePage"
                    :rules="homepageRules"
                    :label="'HomePage'"
                    color="secondary"
                    variant="filled"
                  />
                  <v-text-field
                    v-model="Discord"
                    :rules="discordRules"
                    :label="'Discord'"
                    color="secondary"
                    variant="filled"
                  />
                </v-col>
            
                
                <v-col cols="12" sm="12" class="pb-0 px-6">
                  <p class="use-text-paragraph text-center mb-8">Select tag about the space</p>
                  <v-container align="center">
                    <v-checkbox
                      v-model="isWeb3"
                      class="pb-0 px-6"
                      color="secondary"
                      :label="'Web3'"
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
                      v-model="isDID"
                      class="mpb-0 px-6"
                      color="secondary"
                      :label="'DID'"
                      style="display: inline-block;"
                    />
                    <v-checkbox
                      v-model="isSocial"
                      class="mpb-0 px-6"
                      color="secondary"
                      :label="'Social'"
                      style="display: inline-block;"
                    />
                    <v-checkbox
                      v-model="isInfrastructure"
                      class="mpb-0 px-6"
                      color="secondary"
                      :label="'Infrastructure'"
                      style="display: inline-block;"
                    />
                   
                  </v-container>
                </v-col>                  
              </v-row>
              
                <div class="btn-area">
                  <v-btn
                    size="large"
                    block
                    color="primary"
                    @click="validate"
                    :disabled="!valid"
                  >
                    Create Space
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
.avatar-uploader .avatar {
  width: 178px;
  height: 178px;
  display: block;
}

.avatar-uploader .el-upload {
  border: 2px dashed #fff; /* 更明显的白色边框 */
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
  background-color: #222; /* 深灰色背景，以提高对比度 */
  color: #fff; /* 文字颜色改为白色 */
  box-shadow: 0 0 8px rgba(255, 255, 255, 0.8); /* 添加发光效果 */
}

.avatar-uploader .el-upload:hover {
  border-color: #409eff; /* 鼠标悬停时的亮蓝色边框 */
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #fff; /* 图标颜色改为白色 */
  width: 178px;
  height: 178px;
  text-align: center;
  background: rgba(255, 255, 255, 0.2); /* 图标背景圈 */
  border-radius: 50%; /* 圆形图标背景 */
}

/* 可能需要的其他样式调整 */
.avatar-uploader .el-upload__text {
  color: #fff; /* 上传区域的文本说明颜色 */
}
</style>

<script>
import ClayDeco from '../Artworks/ClayDeco';
import Title from '../Title';
import axios from 'axios';
import url from '@/assets/text/url';

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
const SERVER = url.serverUrl;


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
    thumbnail: "",
    valid: true,
    snackbar: false,
    name: '',
    alias: '',
    aliasRules: [v => !!v || 'Alias is required'],
    nameRules: [v => !!v || 'Name is required'],
    email: '',
    emailRules: [
      v => !!v || 'Date is required',
      v => /^(\d{4}\/\d{1,2}\/\d{1,2})-(\d{4}\/\d{1,2}\/\d{1,2})$/.test(v) || 'Date entered in wrong format',
    ],
    twitterRules: [
      v => !v || /^(https?:\/\/)?(www\.)?twitter\.com\/[a-zA-Z0-9_]{1,15}$/.test(v) || 'Invalid URL'
    ],
    githubRules: [
      v => !v || /^(https?:\/\/)?(www\.)?github\.com\/[a-z0-9-]+$/.test(v) || 'Invalid GitHub URL'
    ],
    discordRules: [
      v => !v || /^https:\/\/discord.gg\/[a-zA-Z0-9-_]{5,}/.test(v) || 'Invalid Discord Invite Link'
    ],
    homepageRules: [
      v => !v || /^(https?:\/\/)?(www\.)?[\w.-]+(\.[a-zA-Z]{2,})+(\/[\w.-]*)*\/?$/.test(v) || 'Invalid Homepage URL'
    ],
    pointsRules: [
      v => !!v || 'The number of points is required',
      v => /^\d+$/.test(v) || 'Please enter an integer',
    ],
    urlRules: [
      v => !!v || 'URL is required',
      v => /^((https|http):\/\/)(www.)?[a-zA-Z0-9@:%._\+~#?&//=]*$/.test(v) || 'Please enter a valid URL'
    ],
    descriptionRules: [
      v => !!v || 'Description is required',
      v => {
        const wordCount = (v || '').split(/\s+/).filter(Boolean).length;
        if (wordCount > 500) {
          return 'Description must not exceed 500 words';
        }
        return true;
      }
    ],
    phone: '',
    company: '',
    description: '',
    Github: '',
    Twitter: '',
    HomePage: '',
    Discord: '',
    title: '',
    checkbox: false,
    isWeb3: false,
    isNFT: false,
    Points: '',
    isInfrastructure: false,
    isDID: false,
    isRole: false,
    isMint: false,
    isCustom: false,
    isSocial: false,
    possibleCategories: ['Web3', 'NFT', 'Infrastructure', 'Social', 'DID'],
    taskList: [rowTask],
  }),
  methods: {
    async validate() {
      if (this.$refs.form.validate()) {
        const categories = this.categories;
        const name = this.name;
        const alias = this.alias;
        const thumbnail = this.thumbnail;
        const info = this.description;
        const links = {};
        const socialFields = ['Github', 'Twitter', 'HomePage', 'Discord'];
        socialFields.forEach(field => {
          if (this[field]) {
            const key = field;
            links[key] = this[field];
          }
        });
        this.snackbar = true;
        const username = localStorage.getItem('username');
        const response = await axios.post(SERVER + '/api/space/create', {
          username: username,
          name: name,
          thumbnail: thumbnail,
          alias: alias,
          info: info,
          links: links,
          categories: categories
        });
        console.info(response.data);
        if(response.data.data=='SUCCESSED') {
          ElMessage({
          showClose: true,
          message: `Create Space Success.`,
          type: 'success',
          duration: 2000, // 消息停留10秒
        });
          this.$emit('close-dialog');
        }
      }else {
        alert("create wrong");
      }
    },
    addTask() {
      var newTask = {...rowTask};
      this.taskList.push(newTask);
      console.log(this.taskList)
    },
    async httpRequest(data) {
      // 封装FormData对象
      var formData = new FormData();
      formData.append("file", data.file);
      console.log("formData",formData);
      // 调用后端接口
      const response = await axios.post(SERVER + '/api/images/upload', formData);
      if(response.data.msg=="SUCCESSED") {
        this.thumbnail = response.data.data;
      }
    },
    beforeAvatarUpload(file) {
      const isLt1M = file.size / 1024 / 1024 < 1; // 检查文件大小是否小于1MB
      if (!isLt1M) {
        alert("image size limit to 1M");
      }
      return isLt1M; // 如果文件大小符合要求，则返回true，否则返回false
    }
  },
  computed: {
    categories() {
       const categoriesDict = {};
      let categoryIndex = 1; 

      this.possibleCategories.forEach(category => {
        const key = `is${category}`;
        if (this[key]) {
          categoriesDict[`categories${categoryIndex}`] = category;
          categoryIndex++;
        }
      });

      return categoriesDict;
    },
  },
};

</script>
