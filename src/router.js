import { createRouter, createWebHistory } from 'vue-router'

import { Home, Programs, UsersBlog, TechZone } from '@/views'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/tech',
    name: 'TechZone',
    component: TechZone
  },
  {
    path: '/programs',
    name: 'Programs',
    component: Programs
  },
  {
    path: '/users-blog',
    name: 'UsersBlog',
    component: UsersBlog
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;
