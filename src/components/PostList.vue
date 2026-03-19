<script setup lang="ts">
import type { Post } from '@/types'
import PostItem from './PostItem.vue'

type Props = {
  posts: Post[]
}

const { posts } = defineProps<Props>()
</script>

<template>
  <div>
    <h3>Список постов</h3>
    <PostItem v-for="post in posts" :key="post.id" :post="post" />
  </div>
</template>

<style scoped></style>
