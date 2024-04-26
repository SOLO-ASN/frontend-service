<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">

          <div class="modal-header">
            <slot name="header">
              Notice:
            </slot>
          </div>

          <div class="modal-body">
            <slot name="body">
              <p class="warning-message">Each device can only register one account. If there is already an account on this device, the new registration will overwrite the old account, and the old account cannot be retrieved.</p>
              <p class="action-message">Please click the <strong>Sign in with Passkey Directly</strong> button to check if this device has already been registered.</p>
            </slot>
          </div>

          <div class="modal-footer">
            <slot name="footer">
              <button class="modal-default-button" @click="$emit('cancel')">
                Cancel
              </button>
              <button class="modal-confirm-button" @click="$emit('confirm')">
                Continue Registration
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

.modal-header, .modal-footer {
  margin-bottom: 20px; /* 统一间距 */
}

.warning-message {
  font-size: 20px; /* 增大字体大小 */
  margin-bottom: 20px; /* 增加与下一段的间距 */
  color: #FFD700; /* 明显的警告颜色 */
}

.action-message {
  font-size: 16px; /* 略小的字体大小强调差异 */
  color: #ADFF2F; /* 行动信息使用不同颜色 */
}

strong {
  font-weight: bold;
  color: #00BFFF; /* 突出显示特定操作 */
}

.modal-default-button, .modal-confirm-button {
  margin: 10px 8px; /* 调整按钮间距 */
  border: none;
  border-radius: 5px; /* 圆角 */
  padding: 12px 24px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.2s ease-in-out; /* 平滑过渡效果 */
  outline: none; /* 移除轮廓 */
}

.modal-default-button {
  background-color: #555;
  color: #ccc;
}

.modal-confirm-button {
  background-color: #28a745; /* 使用Bootstrap绿色作为确认按钮颜色 */
  color: white;
}

.modal-default-button:hover {
  background-color: #666;
  transform: scale(1.05); /* 轻微放大 */
}

.modal-confirm-button:hover {
  background-color: #218838; /* 确认按钮悬浮颜色 */
  transform: scale(1.05); /* 轻微放大 */
}
</style>