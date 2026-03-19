<script setup lang="ts">
const { show } = defineProps<{ show: boolean }>()
const emit = defineEmits<{ 'update:show': [value: false] }>()
const close = () => {
  emit('update:show', false)
}
</script>

<template>
  <div v-if="show" @click="close" class="dialog">
    <div @click.stop class="dialog-content">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.dialog {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
  display: flex;
}

.dialog-content {
  margin: auto;
  background-color: white;
  padding: 20px;
}
</style>
