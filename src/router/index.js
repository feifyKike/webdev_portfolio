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
                behavior: window.matchMedia('(prefers-reduced-motion: no-preference)').matches ? 'smooth' : 'instant'
            }
        }
        if (to.hash) {
            return {
                el: to.hash,
                top: isScrollingUp(to.hash) ? getOffsetHeight() : 0,
                behavior: window.matchMedia('(prefers-reduced-motion: no-preference)').matches ? 'smooth' : 'instant'
            }
        }
    },
})

let isScrollingUp = (elem_id) => {
  const elem = document.querySelector(elem_id)
  const toScrollPos = elem.getBoundingClientRect().top

  return toScrollPos < 0
}

let getOffsetHeight = () => {
  const nav = document.querySelector('nav')
  const navHeight = nav.getBoundingClientRect().height + 25

  return navHeight
}

export default router
