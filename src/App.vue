<script setup lang="ts">
import { ref } from 'vue'
import PostForm from './components/PostForm.vue'
import type { Post } from './types'
import PostList from './components/PostList.vue'

const baseIdx = ref(0)

const posts = ref<Post[]>([
  { id: baseIdx.value++, title: 'title1', body: 'body1' },
  { id: baseIdx.value++, title: 'title2', body: 'body2' },
  { id: baseIdx.value++, title: 'title3', body: 'body3' },
])
</script>

<template>
  <div class="app">
    <PostForm @create="(post) => posts.push({ ...post, id: Date.now() })" />
    <PostList :posts="posts" />
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  padding: 20px;
}
</style>
