<script setup lang="ts">
import { usePostsStore } from '@/store/posts'

const postStore = usePostsStore()
</script>

<template>
  <div class="posts-settings">
    <!-- Настройка лимита (_limit) -->
    <div class="field">
      <label>Кол-во постов на странице:</label>
      <BaseInput v-model.number="postStore.pageSize" type="number" class="input" />
    </div>
  </div>
</template>

<style scoped>
.posts-settings {
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-width: 300px;
  padding: 20px;
  border-left: 3px solid teal;
  margin-bottom: 30px;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

label {
  color: teal;
  font-size: 11px;
  font-weight: 900;
  text-transform: uppercase;
}
</style>
