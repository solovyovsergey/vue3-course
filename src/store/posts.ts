import type { Post } from '@/types'
import axios from 'axios'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const usePostsStore = defineStore('posts', () => {
  const pageSize = ref(10)
  const posts = ref<Post[]>([])
  const isPostsLoading = ref(false)

  const currentPageNum = ref(1)
  const pageTotalCount = ref(0)

  const removePost = (post: Post) => {
    posts.value = posts.value.filter((p) => p.id !== post.id)
  }

  const loadMorePosts = () => {
    isPostsLoading.value = true

    axios
      .get<Post[]>('https://jsonplaceholder.typicode.com/posts', {
        params: { _limit: pageSize.value, _page: currentPageNum.value },
      })
      .then((response) => {
        posts.value = [...posts.value, ...response.data]
        pageTotalCount.value = response.headers['x-total-count'] || 0
      })
      .catch((e) => alert(e.message))
      .finally(() => (isPostsLoading.value = false))
  }

  return {
    posts,
    isPostsLoading,
    currentPageNum,
    pageTotalCount,
    pageSize,
    // actions
    loadMorePosts,
    removePost,
  }
})
