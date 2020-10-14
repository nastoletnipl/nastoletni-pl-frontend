import {createRouter, createWebHistory} from 'vue-router'
import Home from "@/views/Home";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/tech',
    name: 'Tech',
    component: () => import('@/views/Home')
  },
  {
    path: '/programs',
    name: 'Programs',
    component: () => import('@/views/Home')
  },
  {
    path: '/users-blog',
    name: 'UsersBlog',
    component: () => import('@/views/Home')
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
