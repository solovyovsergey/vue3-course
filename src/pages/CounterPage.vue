<script setup lang="ts">
import { useCounterStore } from '@/store/counter'

const counterStore = useCounterStore()
</script>

<template>
  <div class="counter-page">
    <h1 class="title">Counter</h1>

    <div class="display">{{ counterStore.count }}</div>

    <div class="controls">
      <BaseButton @click="counterStore.decrement">Decrement</BaseButton>
      <BaseButton @click="counterStore.increment">Increment</BaseButton>
    </div>
  </div>
</template>

<style scoped>
.counter-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 50px;
  font-family: sans-serif;
}

.title {
  color: teal;
  font-size: 1.2rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.display {
  font-size: 3rem;
  color: #333;
  font-weight: 300;
}

.controls {
  display: flex;
  gap: 10px;
}
</style>
