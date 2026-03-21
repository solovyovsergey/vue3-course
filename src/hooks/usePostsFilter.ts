import type { Post } from '@/types'
import { computed, toValue, type MaybeRefOrGetter } from 'vue'

export default function usePostsFilter(
  posts: MaybeRefOrGetter<Post[]>,
  query: MaybeRefOrGetter<string>,
) {
  return computed(() => {
    const rawPosts = toValue(posts)
    const searchQuery = toValue(query).trim().toLowerCase()

    // Если строка поиска пустая — возвращаем весь список без фильтрации
    if (!searchQuery) {
      return rawPosts
    }

    return rawPosts.filter((post) => String(post.title).toLowerCase().includes(searchQuery))
  })
}
