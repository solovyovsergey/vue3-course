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
    <BaseInput v-model="formData.title" type="text" placeholder="Название" class="input" />
    <BaseInput v-model="formData.body" type="text" placeholder="Описание" class="input" />
    <BaseButton class="btn">Создать</BaseButton>
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
}
</style>
