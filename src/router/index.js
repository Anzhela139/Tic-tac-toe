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
      path: '/end-game',
      name: 'end-game',
      component: () => import('../views/EndGame.vue')
    },
    {
      path: '/scores',
      name: 'scores',
      component: () => import('../views/Scores.vue')
    },
    {
      path: '/solution',
      name: 'solution',
      component: () => import('../views/Solution.vue')
    },
  ]
})

export default router
