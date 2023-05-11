import { createRouter, createWebHistory } from 'vue-router'
import MainView from '../views/MainView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: MainView
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
        top: isScrollingUp(to.hash) ? getNavHeight() : 0,
        behavior: 'smooth'
      }
    }
  },
})

let isScrollingUp = (elem_id) => {
  const elem = document.querySelector(elem_id)
  const toScrollPos = elem.getBoundingClientRect().top

  return toScrollPos < 0
}

let getNavHeight = () => {
  const nav = document.querySelector('#navbar')
  const navHeight = nav.getBoundingClientRect().height

  return navHeight
}

export default router
