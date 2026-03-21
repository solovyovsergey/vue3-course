import type { Post } from '@/types'
import { computed, toValue, type MaybeRefOrGetter } from 'vue'

export default function usePostsSort(
  posts: MaybeRefOrGetter<Post[]>,
  sortBy: MaybeRefOrGetter<keyof Post>,
) {
  const collator = new Intl.Collator(undefined, { numeric: true, sensitivity: 'base' })

  return computed(() => {
    const rawPosts = toValue(posts)
    const key = toValue(sortBy)

    // Делаем копию массива, чтобы не мутировать оригинал
    return [...rawPosts].sort((p1, p2) => {
      const v1 = p1[key]
      const v2 = p2[key]

      // Если оба значения — числа, сортируем их математически
      if (typeof v1 === 'number' && typeof v2 === 'number') {
        return v1 - v2
      }

      // В остальных случаях приводим к строке и сравниваем через collator
      return collator.compare(String(v1), String(v2))
    })
  })
}
