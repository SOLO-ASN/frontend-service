<template>
      <div v-if="detecting" class="overlay">
        <div class="loading-text">Dectecting...</div>
      </div>

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
        <v-btn size="small" variant="text" class="button-link" :href="'/menus/login'">
          <v-icon>mdi-arrow-right</v-icon>
          {{ $t('register_already') }}
        </v-btn>
      </div>
      <video id="video" autoplay style="display: none"></video>

      <v-form
        ref="form"
        v-model="valid"
      >
        <v-row class="spacing3">
          <v-col cols="12" sm="12" class="px-3">
            <v-text-field
              v-model="username"
              :label="$t('register_name')"
              :rules="requiredRules"
              color="secondary"
              variant="filled"
              name="username"
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
                <a href="#" class="link" @click="openModal">
                  {{ $t('form_privacy') }}
                </a>
              </span>
            
              <!-- 隐私政策模态窗口 -->
              <div v-if="showPrivacyPolicyModal" class="privacy-policy-modal">
                <!-- 模态窗口内容 -->
                <p>Each device can only register one account. If there is already an account on this device, the new registration will overwrite the old account, and the old account cannot be retrieved...</p>
                <p></p>
                <button @click="closeModal" style="float: right;">Close</button>
              </div>
            </div>
          </div>
          <v-btn
            :block="isTablet || isMobile"
            size="large"
            color="primary"
            :disabled="!checkbox"
            @click="handleRegister"
          >
            {{ $t('sign up') }}
          </v-btn>
          <confirm 
            v-if="showModal" 
            @confirm="onConfirm" 
            @cancel="onCancel"
          >
          </confirm>
        </div>
            <!-- 分隔符 -->
        <div class="separator">
          <span class="line"></span>
          <span class="or">OR</span>
          <span class="line"></span>
        </div>
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
  </AuthFrame>
</template>

<style lang="scss" scoped>
@import './form-style';

.privacy-policy-modal {
  position: fixed;
  z-index: 1000;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 80%; /* 调整宽度为视口的80% */
  max-width: 800px; /* 最大宽度为800px */
  background-color: #333; /* 深色背景 */
  color: #fff; /* 白色文字 */
  padding: 40px; /* 增加内边距 */
  border-radius: 20px; /* 更大的圆角 */
  box-shadow: 0 8px 16px rgba(0,0,0,0.2); /* 更大的阴影效果 */
  font-size: 18px; /* 文字大小 */
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw; /* 使用视口宽度确保覆盖整个屏幕 */
  height: 100vh; /* 使用视口高度确保覆盖整个屏幕 */
  background-color: rgba(0, 0, 0, 0.5); /* 半透明黑色背景 */
  backdrop-filter: blur(10px); /* 背景模糊效果增加至10px */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000; /* 确保它在最前面 */
}

.loading-text {
  color: #fff;
  font-size: 24px;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}

</style>

<script setup>
import { ref } from 'vue';
import { useDisplay } from 'vuetify';
import { useRouter } from 'vue-router';
import * as faceapi from 'face-api.js';
import link from '@/assets/text/link';
import url from '@/assets/text/url';
import SocialAuth from './SocialAuth';
import AuthFrame from './AuthFrame';
import Confirm from '@/components/Airdrops/ConfirmModal';

const form = ref(null);
const valid = ref(true);
const email = ref('');
const username = ref('');
const emailRules = ref([]);
const checkbox = ref(false);
const router = useRouter();
const { md: isTablet } = useDisplay();
const { xs: isMobile } = useDisplay();
const { smAndDown: isMobile2 } = useDisplay();
const showModal = ref(false);
const showPrivacyPolicyModal = ref(false);
const videoRef = ref(null);
const detecting = ref(false);
const SERVER = url.fidoUrl;
const registrationStartUrl = SERVER + "/api/diyRegister/start";
const registrationFinishUrl = SERVER + "/api/diyRegister/finish";
const assertionStartUrlDirect = SERVER + "/api/diyLogin/start_direct";
const assertionFinishUrlDirect = SERVER + "/api/diyLogin/finish_direct";
const fetchOptions = {
            method: "POST",
            credentials: "include",
            headers: {"Content-Type": "application/json"}
        }
        
        
function  confirmRegistration() {
  // 显示模态对话框
  showModal.value = true;
}
function  onConfirm() {
  // 用户点击模态对话框中的"确定"
  showModal.value = false;
  _onFormSubmit(username);
}
function  onCancel() {
  // 用户点击模态对话框中的"取消"
  showModal.value = false;
}

const openModal = () => showPrivacyPolicyModal.value = true;
const closeModal = () => showPrivacyPolicyModal.value = false;


async function startVideo() {
    if (videoRef.value) {
        videoRef.value.remove(); // 确保先移除旧元素
    }
    const newVideo = document.createElement('video');
    newVideo.id = 'video';
    newVideo.autoplay = true;
    newVideo.style.display = 'none'; // 根据需要设置可见性
    document.body.appendChild(newVideo);
    videoRef.value = newVideo;
    const video = document.getElementById('video');
    videoRef.value = video;
    try {
        video.srcObject = await navigator.mediaDevices.getUserMedia({ video: true });
        return video;
    } catch (error) {
        console.error('Error accessing the camera:', error);
        alert('Error accessing the camera, make sure you have given permissions.');
    }
}

async function loadModels() {
    await faceapi.nets.tinyFaceDetector.load('/models');
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function detectFace() {
    await loadModels();
    const options = new faceapi.TinyFaceDetectorOptions({ inputSize: 512, scoreThreshold: 0.5 });

    let timeout = 10000; // 设置超时时间，例如10秒
    const startTime = Date.now();

    // 循环检查视频流是否准备就绪
    while (videoRef.value.readyState < HTMLMediaElement.HAVE_ENOUGH_DATA) {
        if (Date.now() - startTime > timeout) {
            throw new Error("Timeout waiting for video to be ready");
        }
        await delay(500); // 每500毫秒检查一次
    }

    // 现在视频流已经准备好，可以进行人脸检测
    const detection = await faceapi.detectSingleFace(videoRef.value, options);
    return detection;
}

async function handleRegister() {
    detecting.value = true; // 结束检测，隐藏加载指示
    await startVideo();
    const faceDetected = await detectFace();
    detecting.value = false; // 结束检测，隐藏加载指示
    if (faceDetected) {
        console.log('Face detected, proceeding with registration.');
        handleSubmit(); // 替换你的原有注册函数调用
        videoRef.value.pause();
        videoRef.value.srcObject.getTracks().forEach(track => track.stop());
        videoRef.value.remove();
    } else {
        console.log('No face detected, please ensure your face is in front of the camera.');
        alert('No face detected, registration cannot proceed.');
    }
}


function handleSubmit() {
  showModal.value  = true;
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

async function _getPublicKeyCredentialCreateOptionsDecoder() {
  const {decodePublicKeyCredentialCreateOptions: e} = await import("./parse.js");
  return e;
}

async function _getRegisterCredentialEncoder() {
  const {encodeRegisterCredential: e} = await import("./parse.js");
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


        const i = await fetch(registrationStartUrl, {
            ...fetchOptions,
            body: JSON.stringify({username: username.value})
        }), {status: r, registrationId: n, publicKeyCredentialCreationOptions: s, message: m1} = await i.json();
        if (!i.ok) {
            alert(m1);
            throw new Error("Could not successfuly start registration");
        }
        // add by mark   need to delete---------------------------
        s.user.id = "DEMO//9fX19ERU1P";
        s.authenticatorSelection = {
          requireResidentKey: true,
          residentKey: "required",
          userVerification: "preferred"
        };

        // add by mark   need to delete---------------------------
        s.authenticatorSelection = {
          requireResidentKey: true,
          residentKey: "required",
          userVerification: "preferred",
          authenticatorAttachment: "platform"
        };
        const o = await _getPublicKeyCredentialCreateOptionsDecoder();
        const v = o(s);
        const a = await navigator.credentials.create({publicKey: o(s)});

        const u = await _getRegisterCredentialEncoder();
        const l = await fetch(registrationFinishUrl, {
                ...fetchOptions,
                body: JSON.stringify({registrationId: n, credential: u(a), userAgent: window.navigator.userAgent})
            }), c = await l.json();

        if (!l.ok){
            throw new Error("Could not successfuly complete login");
        }
       
        ElMessage({
          showClose: true,
          message: `Congrats, register success.`,
          type: 'success',
          duration: 10000, // 消息停留10秒
        });
        router.push('/en/menus/login');
        
    } catch (t) {
        console.error('Error during form submission:');
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
            body: JSON.stringify({username: ''})
        }), {assertionId: i, publicKeyCredentialRequestOptions: s, message: m1} = await n.json();

        if (!n.ok) {
            alert(m1);
            throw new Error("Could not successfuly start login");
        }

        const r = await _getPublicKeyCredentialRequestOptionsDecoder(),
            // 这里的r是/utils/parse.js里的i函数 用于处理公钥凭证的编解码和转换操作
            o = await navigator.credentials.get({
                mediation: undefined,
                signal: undefined,
                publicKey: r(s)
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
        })
        router.push('/menus/explore');
        
    } catch (t) {
        console.info('Error during form submission:');
    }
}

</script>
