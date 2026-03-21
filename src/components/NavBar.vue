<script setup lang="ts">
import { RouterLink, useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <nav>
    <RouterLink to="/" class="main-link">Vue 3 App</RouterLink>
    <div class="group-btn">
      <BaseButton @click="router.push('/posts')">Посты</BaseButton>
      <BaseButton @click="router.push('/about')">О сайте</BaseButton>
    </div>
  </nav>
</template>

<style scoped>
nav {
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color: #f3f4f6;
}

.main-link {
  display: flex;
  align-items: center;

  color: #0d9488;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  border-bottom: 1px solid transparent;
  padding-bottom: 2px;
}

.main-link:hover {
  color: #0f766e;
  border-bottom: 1px solid #0f766e;
  opacity: 0.8;
}

.group-btn {
  display: flex;
  gap: 10px;
}
</style>
