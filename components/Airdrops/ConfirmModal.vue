<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">

          <div class="modal-header">
            <slot name="header">
              注意事项：
            </slot>
          </div>

          <div class="modal-body">
            <slot name="body">
              一个设备只能注册一个账户，如果设备中已经存在账户，则新注册的账户会覆盖旧账户，且旧帐户无法找回<br>
              请点击Sign in with passkey directly按钮检查此设备是否已经注册
            </slot>
          </div>

          <div class="modal-footer">
            <slot name="footer">
              <button class="modal-default-button" @click="$emit('cancel')">
                取消
              </button>
              <button class="modal-confirm-button" @click="$emit('confirm')">
                继续注册
              </button>
            </slot>
          </div>

        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>

</script>


<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.75); /* 更深的背景色 */
  display: flex; /* 改用flex布局以便于居中 */
  justify-content: center;
  align-items: center;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  /* 删除了 display: table-cell 和 vertical-align: middle 以支持flex布局 */
}

.modal-container {
  width: 500px; /* 更大的宽度 */
  margin: 0 auto;
  padding: 40px 60px; /* 更多的padding */
  background-color: #333; /* 更深的背景色 */
  border-radius: 20px; /* 更圆的边角 */
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
  transition: all 0.3s ease;
  color: #fff; /* 文字颜色为白色 */
  font-family: Arial, sans-serif;
}

.modal-header {
  margin-bottom: 30px; /* 增加header和body之间的距离 */
}

.modal-body ul {
  list-style-type: none;
  padding: 0;
  text-align: left; /* 文本左对齐 */
}

.modal-body li {
  margin-bottom: 15px; /* 增加列表项之间的距离 */
  line-height: 1.6; /* 增加行高 */
}

.modal-footer {
  text-align: right;
  margin-top: 30px; /* 增加body和footer之间的距离 */
}

.modal-default-button, .modal-confirm-button {
  margin: 0 8px; /* 调整按钮间距 */
  border: none;
  border-radius: 10px; /* 圆角按钮 */
  padding: 12px 24px; /* 更大的按钮 */
  font-size: 16px; /* 更大的字体 */
  cursor: pointer;
  transition: background-color 0.2s; /* 平滑背景色变化 */
}

.modal-default-button {
  background-color: #555; /* 深灰色按钮 */
  color: #ccc; /* 浅灰色文字 */
}

.modal-confirm-button {
  background-color: #007BFF; /* 亮蓝色按钮 */
  color: white;
}

.modal-default-button:hover {
  background-color: #666; /* 深灰色按钮悬浮 */
}

.modal-confirm-button:hover {
  background-color: #0056b3; /* 亮蓝色按钮悬浮 */
}
</style>