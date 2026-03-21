<script setup lang="ts">
import type { Post } from '@/types'

type Props = {
  post: Post
}

const { post } = defineProps<Props>()

const emit = defineEmits<{
  (e: 'remove', post: Post): void
  (e: 'open', post: Post): void
}>()
</script>

<template>
  <div class="post">
    <div class="post__content">
      <span class="post__id">#{{ post.id }}</span>
      <div class="post__title"><strong>Название: </strong>{{ post.title }}</div>
      <div class="post__body"><strong>Описание: </strong>{{ post.body }}</div>
    </div>
    <div class="post__actions">
      <BaseButton class="btn--open" @click="emit('open', post)">Открыть</BaseButton>
      <BaseButton class="btn--remove" @click="emit('remove', post)">Удалить</BaseButton>
    </div>
  </div>
</template>

<style scoped>
.post {
  padding: 1.25rem;
  margin-top: 1rem;
  background: #f8fafc;
  border-left: 4px solid #0d9488;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem;
  overflow-anchor: none; /* fix: предотвращаем зависание скролла при добавлении в начало */
  transition: transform 0.2s ease;
}

.post:hover {
  background: #f1f5f9;
}

.post__id {
  font-size: 0.8rem;
  color: #94a3b8;
  font-weight: 600;
}

.post__content {
  flex: 1;
  color: #334155;
  line-height: 1.5;
}

.post__title {
  font-size: 1.1rem;
  color: #0f172a;
  margin: 0.25rem 0;
}

.post__actions {
  display: flex;
  gap: 0.75rem;
  flex-shrink: 0;
}

/* Стили для кнопок, если они пробрасывают классы */
.btn--remove {
  color: #ef4444;
}
</style>
