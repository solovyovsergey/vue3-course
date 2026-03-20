<script setup lang="ts">
import type { PostFormData } from '@/types'
import { ref } from 'vue'

const formData = ref<PostFormData>({
  title: '',
  body: '',
})

const emit = defineEmits<{
  create: [data: PostFormData]
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
    <BaseInput v-model="formData.title" type="text" placeholder="Название" />
    <BaseInput v-model="formData.body" type="text" placeholder="Описание" />
    <BaseButton class="btn">Создать</BaseButton>
  </form>
</template>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.btn {
  align-self: flex-end;
}
</style>
