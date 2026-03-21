<script setup lang="ts">
import { onMounted, ref } from 'vue'

import type { Post, PostFormData } from '@/types'
import PostForm from '@/components/PostForm.vue'
import PostList from '@/components/PostList.vue'
import { useRouter } from 'vue-router'
import { usePostsFilter, usePostsSort } from '@/hooks'
import { usePostsStore } from '@/store/posts'

const postStore = usePostsStore()

const router = useRouter()

const isDialogVisible = ref(false)
const searchQuery = ref<string>('')

type SelectType = keyof Omit<Post, 'id'>
const sortBy = ref<SelectType>('title')
const options: { name: string; value: SelectType }[] = [
  { name: 'По Заголовку', value: 'title' },
  { name: 'По Контенту', value: 'body' },
]

const filteredPosts = usePostsFilter(() => postStore.posts, searchQuery)
const sortedAndFilteredPosts = usePostsSort(filteredPosts, sortBy)

const createPost = (post: PostFormData) => {
  postStore.posts.push({ ...post, id: Date.now() })
  isDialogVisible.value = false
}

const observerCallback: IntersectionObserverCallback = (entries) => {
  const hasMore =
    postStore.currentPageNum < Math.ceil(postStore.pageTotalCount / postStore.pageSize)

  entries.forEach((entry) => {
    if (entry.isIntersecting && hasMore && !postStore.isPostsLoading) {
      postStore.currentPageNum += 1
      postStore.loadMorePosts()
    }
  })
}

onMounted(() => {
  postStore.loadMorePosts()
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
      @removePost="postStore.removePost"
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
