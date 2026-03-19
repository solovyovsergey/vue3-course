<script setup lang="ts">
import { ref } from 'vue'
import PostForm from './components/PostForm.vue'
import type { Post, PostFormData } from './types'
import PostList from './components/PostList.vue'
import BaseButton from './components/UI/BaseButton.vue'
import BaseDialog from './components/UI/BaseDialog.vue'

const baseIdx = ref(0)

const posts = ref<Post[]>([
  { id: baseIdx.value++, title: 'title1', body: 'body1' },
  { id: baseIdx.value++, title: 'title2', body: 'body2' },
  { id: baseIdx.value++, title: 'title3', body: 'body3' },
])

const isDialogVisible = ref(false)

const createPost = (post: PostFormData) => {
  posts.value.push({ ...post, id: Date.now() })
  isDialogVisible.value = false
}
const removePost = (post: Post) => {
  posts.value = posts.value.filter((p) => p.id !== post.id)
}
</script>

<template>
  <div class="app">
    <h1>Страница с постами</h1>
    <BaseButton @click="isDialogVisible = true" class="addBtn">Создать пост</BaseButton>
    <BaseDialog v-model:show="isDialogVisible">
      <PostForm @create="createPost" />
    </BaseDialog>
    <PostList :posts="posts" @removePost="removePost" />
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
