import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash && to.hash == '#landing-page') {
      return {
        top: 0,
        behavior: 'smooth'
      }
    }
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    }
  },
})

export default router
