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
        <v-btn size="small" variant="text" class="button-link" :href="'/menus/register'">
          <v-icon>mdi-arrow-right</v-icon>
          {{ $t('login_create') }}
        </v-btn>
      </div>
      
      <v-form
        ref="form"
        v-model="valid"
      >
      <!--删掉username那块
        <v-row class="spacing3">
          <v-col cols="12" sm="12" class="px-3">
            <v-text-field
              v-model="username"
              :label="$t('login_username')"
              :rules="usernameRules"
              color="secondary"
              variant="filled"
              name="username"
              required
            />
          </v-col>
        </v-row>
        <div class="btn-area">
          <v-btn
            size="large"
            block
            color="primary"
            @click="handleSubmit"
          >
            {{ $t('Sign in with username') }}
          </v-btn>
        </div>
        
         
        <div class="separator">
          <span class="line"></span>
          <span class="or">OR</span>
          <span class="line"></span>
        </div>
        -->
        
          <div class="info-text">
          <p>
            Click the button below to log in directly. If no account is found on the device, it means you have not registered with solo-mission. Please register first.
          </p>
        </div>
          <span class="line"></span>
          <span class="or"></span>
          <span class="line"></span>
        
        <div class="btn-area">
          <v-btn
            size="large"
            block
            color="primary"
            @click="handleSubmit_directly"
          >
            {{ $t('Sign in with passkey directly') }}
          </v-btn>
        </div>
      </v-form>
    </div>
  </auth-frame>
</template>

<style lang="scss" scoped>
@import './form-style';
.info-text {
  padding: 1em;
  margin: 2em 0;
  text-align: center; /* 文本居中 */
  border-radius: 10px; /* 圆角边框 */
  font-size: 1rem; /* 调整字体大小 */
  line-height: 1.6; /* 增加行高 */
  max-width: 80%; /* 控制最大宽度 */
  margin-left: auto; /* 自动边距实现居中 */
  margin-right: auto;
  color: #FFFFFF; /* 字体颜色 */
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; /* 使用常见的好看字体 */
}

.separator .line {
  border-top: 1px solid #FFFFFF; /* 使用更细的线 */
  width: 30%; /* 控制线的宽度 */
  margin: 8px auto; /* 居中显示 */
}

.separator .or {
  display: inline-block;
  margin: 0 15px;
  color: #FFFFFF;
  background-color: rgba(255, 255, 255, 0.2); /* OR的背景色 */
  border-radius: 50%; /* 圆形背景 */
  width: 30px; /* 宽度和高度 */
  height: 30px;
  line-height: 30px; /* OR文字居中 */
}

.btn-area {
  margin-top: 20px;
}
</style>

<script setup>
import { useDisplay } from 'vuetify';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import url from '@/assets/text/url';
import link from '@/assets/text/link';
import SocialAuth from './SocialAuth';
import AuthFrame from './AuthFrame';

const { xs: isMobile } = useDisplay();
const form = ref(null);

const valid = ref(true);
const username = ref('');
const usernameRules = ref([]);
const router = useRouter();
const password = ref('');
const requiredRules = ref([v => !!v || 'This field is required']);
const checkbox = ref(false);
const SERVER = url.fidoUrl;
const assertionStartUrl = SERVER + "/api/diyLogin/start";
const assertionFinishUrl = SERVER + "/api/diyLogin/finish";
const assertionStartUrlDirect = SERVER + "/api/diyLogin/start_direct";
const assertionFinishUrlDirect = SERVER + "/api/diyLogin/finish_direct";
const fetchOptions = {
            method: "POST",
            credentials: "include",
            headers: {"Content-Type": "application/json"}
        }

function handleSubmit() {
  if (valid.value) {
    console.log(username.value);
  }
  _onFormSubmit(username)

}


function handleSubmit_directly() {
  _onFormSubmit_direct();
}


async function _getPublicKeyCredentialRequestOptionsDecoder() {
    
    const {decodePublicKeyCredentialRequestOptions: e} = await import("./parse.js");
    return e;
}

async function _getLoginCredentialEncoder() {
  
    const {encodeLoginCredential: e} = await import("./parse.js");
    return e;
}



async function _onFormSubmit(username) {
    try {
        if (!window.PublicKeyCredential) {
            alert("Fido is not supported on this browser");
            throw new Error("Web Authentication is not supported on this platform");
        }
        if (!PublicKeyCredential.isConditionalMediationAvailable ||
            !PublicKeyCredential.isConditionalMediationAvailable()) {
            alert("Fido is not supported on this browser");
            console.info("error");
            return;
        }


        const n = await fetch(assertionStartUrl, {
            ...fetchOptions,
            body: JSON.stringify({username: username.value})
        }), {assertionId: i, publicKeyCredentialRequestOptions: s, message: m1} = await n.json();


        if (!n.ok) {
            alert(m1);
            throw new Error("Could not successfuly start login");
        }
        const r = await _getPublicKeyCredentialRequestOptionsDecoder(),
            // 这里的r是/utils/parse.js里的i函数 用于处理公钥凭证的编解码和转换操作
         o = await navigator.credentials.get({
                publicKey: r(s)
            });

        const a = await _getLoginCredentialEncoder(),
            cre = a(o);
            cre.response.userHandle = s.userHandle;
        const u = await fetch(assertionFinishUrl, {
            ...fetchOptions,
            body: JSON.stringify({assertionId: i, credential: cre})
        });
        if (!u.ok){
            throw new Error("Could not successfuly complete login");
        }
        const l = await u.json();
        console.info(l);
        if(l.jwt!=null) {
          localStorage.setItem('token', l.jwt);
        }
        
        ElMessage({
          showClose: true,
          message: `Congrats, user ${l.username} login success.`,
          type: 'success',
        });
        router.push('/menus/spaces');
        
    } catch (t) {
        console.error('Error during form submission:', error);
    }
}


async function _onFormSubmit_direct() {
    try {
        if (!window.PublicKeyCredential) {
            alert("Fido is not supported on this browser");
            throw new Error("Web Authentication is not supported on this platform");
        }
        if (!PublicKeyCredential.isConditionalMediationAvailable ||
            !PublicKeyCredential.isConditionalMediationAvailable()) {
            alert("Fido is not supported on this browser");
            console.info("error");
            return;
        }


        const n = await fetch(assertionStartUrlDirect, {
            ...fetchOptions,
            body: JSON.stringify({username: username.value})
        }), {assertionId: i, publicKeyCredentialRequestOptions: s, message: m1} = await n.json();

        if (!n.ok) {
            alert(m1);
            throw new Error("Could not successfuly start login");
        }

        const r = await _getPublicKeyCredentialRequestOptionsDecoder();

        const g = r(s);
            // 这里的r是/utils/parse.js里的i函数 用于处理公钥凭证的编解码和转换操作
        const o = await navigator.credentials.get({
                mediation: undefined,
                signal: undefined,
                publicKey: r(s),

            });

        const a = await _getLoginCredentialEncoder(),
            cre = a(o);
            cre.response.userHandle = s.userHandle;
        const u = await fetch(assertionFinishUrlDirect, {
            ...fetchOptions,
            body: JSON.stringify({assertionId: i, credential: cre})
        });
        if (!u.ok){
            throw new Error("Could not successfuly complete login");
        }
        const l = await u.json();
        console.info(l);
        if(l.jwt!=null) {
          localStorage.setItem('token', l.jwt);
        }
        ElMessage({
          showClose: true,
          message: `Congrats, user ${l.username} login success.`,
          type: 'success',
          duration: 10000, // 消息停留10秒
        });
        router.push('/menus/explore');
        
    } catch (t) {
        console.info('Error during form submission:');
    }
}

</script>
