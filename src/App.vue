<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import PostForm from './components/PostForm.vue'
import type { Post, PostFormData } from './types'
import PostList from './components/PostList.vue'
import axios from 'axios'

const posts = ref<Post[]>([])

const isDialogVisible = ref(false)
const isPostsLoading = ref(false)

type SelectType = keyof Omit<Post, 'id'>
const selectValue = ref<SelectType>('title')
const options: { name: string; value: SelectType }[] = [
  { name: 'По Заголовку', value: 'title' },
  { name: 'По Контенту', value: 'body' },
]

const sortedPosts = computed(() =>
  [...posts.value].sort((p1, p2) => p1[selectValue.value].localeCompare(p2[selectValue.value])),
)

// alternative sorting implementation
// watch([selectValue, posts], () => {
//   posts.value.sort((p1, p2) => p1[selectValue.value].localeCompare(p2[selectValue.value]))
// })
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
    <div class="controls">
      <BaseButton @click="isDialogVisible = true">Создать пост</BaseButton>
      <BaseSelect v-model="selectValue" :options="options" />
    </div>
    <BaseDialog v-model:show="isDialogVisible">
      <PostForm @create="createPost" />
    </BaseDialog>
    <PostList v-if="!isPostsLoading" :posts="sortedPosts" @removePost="removePost" />
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

.controls {
  margin: 15px 0;
  display: flex;
  justify-content: space-between;
}
</style>
