<script setup lang="ts">
import type { Post } from '@/types'

type Props = {
  post: Post
}

const { post } = defineProps<Props>()

const emit = defineEmits<{
  (e: 'remove', post: Post): void
}>()
</script>

<template>
  <div class="post">
    <div>
      <div><strong>Название: </strong>{{ post.title }}</div>
      <div><strong>Описание: </strong>{{ post.body }}</div>
    </div>
    <div><BaseButton @click="emit('remove', post)">Удалить</BaseButton></div>
  </div>
</template>

<style scoped>
.post {
  padding: 15px;
  border: 2px solid teal;
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
