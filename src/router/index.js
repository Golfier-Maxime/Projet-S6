import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Etape1_AView from '../views/Etape1_A.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/etape1_A',
      name: 'etape1_A',
      component: Etape1_AView
    },
  ]
})

export default router
