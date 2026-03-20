<script setup lang="ts">
const modelValue = defineModel<string>()
</script>

<template>
  <input v-model="modelValue" class="input" />
</template>

<style scoped>
.input {
  border: 1px solid teal;
  padding: 10px 15px;
  width: 100%;
}
</style>
