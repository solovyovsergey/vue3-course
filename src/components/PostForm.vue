<script setup lang="ts">
import type { FomrData } from '@/types'
import { ref } from 'vue'

const formData = ref<FomrData>({
  title: '',
  body: '',
})

const emit = defineEmits<{
  create: [data: FomrData]
}>()

const createPost = () => {
  emit('create', formData.value)
  formData.value.title = ''
  formData.value.body = ''
}
</script>

<template>
  <form @submit.prevent="createPost">
    <h4>Создать пост</h4>
    <input v-model="formData.title" type="text" placeholder="Название" class="input" />
    <input v-model="formData.body" type="text" placeholder="Описание" class="input" />
    <button class="btn">Создать</button>
  </form>
</template>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.input {
  border: 1px solid teal;
  padding: 10px 15px;
}

.btn {
  align-self: flex-end;
  border: 1px solid teal;
  padding: 10px 15px;
  background: none;
  color: teal;
}
</style>
