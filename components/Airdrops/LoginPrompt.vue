<template>
  <v-dialog
    v-model="dialog"
    max-width="300"
    @click:outside="closeDialog"
  >
    <v-card>
      <v-card-title class="text-h5">Tips</v-card-title>
      <v-card-text>You need to log in to perform this action.</v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="blue darken-1"
          text
          center
          @click="navigateToLogin"
        >
          Login
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import link from '@/assets/text/link';
import url from '@/assets/text/url';

export default {
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  setup(props, { emit }) {
    const router = useRouter();
    const dialog = ref(props.value);
    const fidoServer = url.fidoUrl;
    function navigateToLogin() {
      dialog.value = false; // 关闭对话框
      const currentPage = window.location.href;
      const loginWindow = window.open(fidoServer + `/login.html?redirect=${encodeURIComponent(currentPage)}`, 'Login', 'width=600,height=600');
      emit('update:value', false); // 更新 v-model 绑定的值
    }

    function closeDialog() {
      dialog.value = false;
      emit('update:value', false); // 更新 v-model 绑定的值
    }

    // 监听 prop 值的变化来更新 dialog 的显示状态
    watch(() => props.value, (newVal) => {
      dialog.value = newVal;
    });

    return {
      dialog,
      navigateToLogin,
      closeDialog
    };
  }
};
</script>