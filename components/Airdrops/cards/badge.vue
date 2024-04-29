<!-- Badge.vue -->
<template>
  <span class="badge" :class="bType">
    <slot></slot>
  </span>
</template>

<script>
export default {
  props: {
    bType: {
      type: String,
      default: 'primary'
    }
  }
}
</script>

<style scoped>
.badge {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  padding: 0.25em 0.4em;
  font-size: 75%;
  font-weight: 600;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: 0.25rem;
}

.badge.primary { background-color: #007bff; }
.badge.secondary { background-color: #6c757d; }
.badge.success { background-color: #28a745; }
.badge.danger { background-color: #dc3545; }
.badge.warning { background-color: #ffc107; }
.badge.info { background-color: #17a2b8; }
.badge.light { background-color: #f8f9fa; }
.badge.dark { background-color: #343a40; }
</style>
