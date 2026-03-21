import AboutPage from '@/pages/AboutPage.vue'
import HomePage from '@/pages/HomePage.vue'
import PostPage from '@/pages/PostPage.vue'
import PostsPage from '@/pages/PostsPage.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', component: HomePage },
  { path: '/about', component: AboutPage },
  { path: '/posts', component: PostsPage },
  { path: '/posts/:id', component: PostPage },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
