import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Delivery from '../views/Delivery.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/delivery',
    name: 'Delivery',
    component: Delivery
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
