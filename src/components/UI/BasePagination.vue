<script setup lang="ts">
import { computed } from 'vue'

type Props = {
  current?: number
  total: number
  pageSize?: number
}

const { current, total, pageSize = 10 } = defineProps<Props>()
const pageCount = computed<number>(() => Math.ceil(total / pageSize))

const emit = defineEmits<{ 'update:current': [pageNum: number] }>()
</script>

<template>
  <div class="pagination">
    <div
      v-for="pageNum in pageCount"
      :key="pageNum"
      :class="['pagination__item', { 'pagination__item--current': current === pageNum }]"
      @click="emit('update:current', pageNum)"
    >
      {{ pageNum }}
    </div>
  </div>
</template>

<style scoped>
.pagination {
  margin-top: 15px;
  display: flex;
  justify-content: end;

  .pagination__item {
    border: 1px solid black;
    padding: 10px;
    cursor: pointer;
  }

  .pagination__item--current {
    border: 2px solid teal;
  }
}
</style>
