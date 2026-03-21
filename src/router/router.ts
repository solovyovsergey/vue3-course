import AboutPage from '@/pages/AboutPage.vue'
import CounterPage from '@/pages/CounterPage.vue'
import HomePage from '@/pages/HomePage.vue'
import PostPage from '@/pages/PostPage.vue'
import PostsConfigPage from '@/pages/PostsConfigPage.vue'
import PostsPage from '@/pages/PostsPage.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', component: HomePage },
  { path: '/about', component: AboutPage },
  { path: '/posts', component: PostsPage },
  { path: '/posts/:id', component: PostPage },
  { path: '/posts-config', component: PostsConfigPage },
  { path: '/counter', component: CounterPage },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
