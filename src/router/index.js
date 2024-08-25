import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/start-screen',
      name: 'start-screen',
      component: () => import('../views/StartScreen.vue')
    },
    {
      path: '/gameplay',
      name: 'gameplay',
      component: () => import('../views/Gameplay.vue')
    },
    {
      path: '/settings',
      name: 'settings',
      component: () => import('../views/Settings.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/rules',
      name: 'rules',
      component: () => import('../views/Rules.vue')
    },
    {
      path: '/keys',
      name: 'keys',
      component: () => import('../views/Keys.vue')
    },
    {
      path: '/solution',
      name: 'solution',
      component: () => import('../views/Solution.vue')
    },
    {
      path: '/audio',
      name: 'audio',
      component: () => import('../views/Audio.vue')
    }
  ]
})

export default router
