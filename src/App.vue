<script setup lang="ts">
import { onMounted, ref } from 'vue'
import PostForm from './components/PostForm.vue'
import type { Post, PostFormData } from './types'
import PostList from './components/PostList.vue'
import axios from 'axios'

const posts = ref<Post[]>([])

const isDialogVisible = ref(false)
const isPostsLoading = ref(false)

const createPost = (post: PostFormData) => {
  posts.value.push({ ...post, id: Date.now() })
  isDialogVisible.value = false
}
const removePost = (post: Post) => {
  posts.value = posts.value.filter((p) => p.id !== post.id)
}

const fetchPosts = () => {
  isPostsLoading.value = true

  axios
    .get<Post[]>('https://jsonplaceholder.typicode.com/posts', { params: { _limit: 10 } })
    .then((response) => (posts.value = response.data))
    .catch((e) => alert(e.message))
    .finally(() => (isPostsLoading.value = false))
}

onMounted(fetchPosts)
</script>

<template>
  <div class="app">
    <h1>Страница с постами</h1>
    <BaseButton @click="isDialogVisible = true" class="addBtn">Создать пост</BaseButton>
    <BaseDialog v-model:show="isDialogVisible">
      <PostForm @create="createPost" />
    </BaseDialog>
    <PostList v-if="!isPostsLoading" :posts="posts" @removePost="removePost" />
    <div v-else>Идет загрузка...</div>
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

.addBtn {
  margin: 15px 0;
}
</style>
