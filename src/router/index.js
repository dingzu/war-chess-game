import { createRouter, createWebHistory } from 'vue-router'
import Stage from '../views/Stage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Stage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
