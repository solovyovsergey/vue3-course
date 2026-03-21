<script setup lang="ts">
import { onMounted, ref } from 'vue'

import axios from 'axios'
import type { Post, PostFormData } from '@/types'
import PostForm from '@/components/PostForm.vue'
import PostList from '@/components/PostList.vue'
import { useRouter } from 'vue-router'
import { usePostsFilter, usePostsSort } from '@/hooks'

const posts = ref<Post[]>([])

const router = useRouter()

const isDialogVisible = ref(false)
const isPostsLoading = ref(false)
const searchQuery = ref<string>('')

const pageSize = 10
const currentPageNum = ref(1)
const pageTotalCount = ref(0)

type SelectType = keyof Omit<Post, 'id'>
const sortBy = ref<SelectType>('title')
const options: { name: string; value: SelectType }[] = [
  { name: 'По Заголовку', value: 'title' },
  { name: 'По Контенту', value: 'body' },
]

const filteredPosts = usePostsFilter(posts, searchQuery)
const sortedAndFilteredPosts = usePostsSort(filteredPosts, sortBy)

const createPost = (post: PostFormData) => {
  posts.value.push({ ...post, id: Date.now() })
  isDialogVisible.value = false
}
const removePost = (post: Post) => {
  posts.value = posts.value.filter((p) => p.id !== post.id)
}

const loadMorePosts = () => {
  isPostsLoading.value = true

  axios
    .get<Post[]>('https://jsonplaceholder.typicode.com/posts', {
      params: { _limit: pageSize, _page: currentPageNum.value },
    })
    .then((response) => {
      posts.value = [...posts.value, ...response.data]
      pageTotalCount.value = response.headers['x-total-count'] || 0
    })
    .catch((e) => alert(e.message))
    .finally(() => (isPostsLoading.value = false))
}

const observerCallback: IntersectionObserverCallback = (entries) => {
  const hasMore = currentPageNum.value < Math.ceil(pageTotalCount.value / pageSize)

  entries.forEach((entry) => {
    if (entry.isIntersecting && hasMore && !isPostsLoading.value) {
      currentPageNum.value += 1
      loadMorePosts()
    }
  })
}

onMounted(() => {
  loadMorePosts()
})
</script>

<template>
  <div>
    <h1>Страница с постами</h1>
    <BaseInput v-focus v-model="searchQuery" placeholder="Поиск..." />
    <div class="controls">
      <BaseButton @click="isDialogVisible = true">Создать пост</BaseButton>
      <BaseSelect v-model="sortBy" :options="options" />
    </div>
    <BaseDialog v-model:show="isDialogVisible">
      <PostForm @create="createPost" />
    </BaseDialog>
    <PostList
      :posts="sortedAndFilteredPosts"
      @removePost="removePost"
      @openPost="router.push(`/posts/${$event.id}`)"
    />
    <div v-intersection="observerCallback" />
    <!-- <div v-if="isPostsLoading">Идет загрузка...</div> -->
    <!-- <BasePagination :total="pageTotalCount" :pageSize="pageSize" v-model:current="currentPageNum" /> -->
  </div>
</template>

<style scoped>
h1 {
  margin-bottom: 15px;
}

.controls {
  margin: 15px 0;
  display: flex;
  justify-content: space-between;
}
</style>
