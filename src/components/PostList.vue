<script setup lang="ts">
import type { Post } from '@/types'
import PostItem from './PostItem.vue'

type Props = {
  posts: Post[]
}

const { posts } = defineProps<Props>()
</script>

<template>
  <div v-if="!!posts.length">
    <h3>Список постов</h3>
    <PostItem
      v-for="post in posts"
      :key="post.id"
      :post="post"
      @remove="$emit('removePost', post)"
    />
  </div>
  <h2 v-else class="empty-msg">Список постов пуст</h2>
</template>

<style scoped>
.empty-msg {
  color: red;
}
</style>
