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
    <TransitionGroup name="posts">
      <PostItem
        v-for="post in posts"
        :key="post.id"
        :post="post"
        @remove="$emit('removePost', post)"
        @open="$emit('openPost', post)"
      />
    </TransitionGroup>
  </div>
  <h2 v-else class="empty-msg">Список постов пуст</h2>
</template>

<style scoped>
.empty-msg {
  color: red;
}
.posts-move,
.posts-enter-active,
.posts-leave-active {
  transition: all 0.5s ease;
}

.posts-enter-from,
.posts-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.posts-leave-active {
  position: absolute;
}
</style>
