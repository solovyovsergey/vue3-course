<script setup lang="ts">
import type { Post } from '@/types'
import axios from 'axios'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const isPostLoading = ref(false)
const postData = ref<Post | null>(null)
const loadPost = () => {
  isPostLoading.value = true

  axios
    .get(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
    .then((res) => {
      postData.value = res.data
    })
    .catch((err) => {
      postData.value = null
      alert(err.message)
      console.log(err)
    })
    .finally(() => {
      isPostLoading.value = false
    })
}

onMounted(loadPost)
</script>

<template>
  <div class="post-page">
    <h1 class="page-title">Страница поста {{ route.params.id }}</h1>

    <div v-if="postData && !isPostLoading" class="post-card">
      <h3 class="post-title">{{ postData.title }}</h3>
      <p class="post-body">{{ postData.body }}</p>
    </div>

    <div v-else class="loader">Загрузка поста...</div>
  </div>
</template>

<style scoped>
.post-page {
  max-width: 700px;
  margin: 2rem auto;
  font-family: sans-serif;
  color: #334155;
}

.page-title {
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #94a3b8;
  margin-bottom: 1.5rem;
}

.post-card {
  padding: 1.5rem;
  border-left: 4px solid #0d9488;
  background: #f8fafc;
}

.post-title {
  margin: 0 0 1rem;
  font-size: 1.5rem;
  color: #0f172a;
}

.post-body {
  line-height: 1.6;
  margin: 0;
}

.loader {
  color: #0d9488;
  font-weight: 500;
}
</style>
