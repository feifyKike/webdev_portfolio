<template>
    <nav class="w-full fixed z-10 transition-transform duration-500 bg-white/[.9] dark:bg-black/[.8]" :class="{ '-translate-y-full': !showNavbar }" id="navbar">
      <div class="flex flex-wrap items-center justify-between mx-5 md:p-4">
        <router-link to="/#landing-page">
          <img :src="getImageUrl(portfolio.greeting.logoLink)" class="scale-75 md:scale-100 origin-left drop-shadow-lg" id="logo-img"/>
        </router-link>

        <button @click="dropDownActive = !dropDownActive" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 lg:hidden">
          <div v-if="!dropDownActive">
            <Bars2Icon class="h-10 w-10 dark:fill-gray-300"/>
          </div>
          <div v-else>
            <XMarkIcon class="h-10 w-10 dark:fill-gray-300"/>
          </div>
        </button>

        <NavTransition>
          <div v-show="dropDownActive" class="block w-full lg:hidden pb-4 md:pb-0">
            <ul>
              <li>
                <router-link class="block py-5 pl-3 hover:text-link-color" to="/#about-section">About</router-link>
              </li>
              <li>
                <router-link class="block py-5 pl-3 hover:text-link-color" to="/#experience-section">Experience</router-link>
              </li>
              <li>
                <router-link class="block py-5 pl-3 hover:text-link-color" to="/#work-section">Work</router-link>
              </li>
              <li>
                <router-link class="block py-5 pl-3 hover:text-link-color" to="/#contact-section">Contact</router-link>
              </li>
              <li>
                <a :href="portfolio.greeting.resumeLink" class="block text-center bg-button-color py-2 px-6 mt-5 shadow-sm shadow-button-color text-white" target="_blank">Resume</a>
              </li>
            </ul>
          </div>
        </NavTransition>

        <div class="hidden w-full lg:block lg:w-auto items-center" id="navbar-default">
          <ul class="font-medium flex flex-col p-4 lg:p-0 mt-4 lg:flex-row lg:space-x-8 lg:mt-0">
            <li>
              <!-- <a href="#about-section" class="block py-2 pl-3 pr-4" aria-current="page">About</a> -->
              <router-link class="block py-2 pl-3 pr-4 hover:text-link-color" to="/#about-section">About</router-link>
            </li>
            <li>
              <!-- <a href="#" class="block py-2 pl-3 pr-4">Experience</a> -->
              <router-link class="block py-2 pl-3 pr-4 hover:text-link-color" to="/#experience-section">Experience</router-link>
            </li>
            <li>
              <!-- <a href="#" class="block py-2 pl-3 pr-4">Work</a> -->
              <router-link class="block py-2 pl-3 pr-4 hover:text-link-color" to="/#work-section">Work</router-link>
            </li>
            <li>
              <!-- <a href="#" class="block py-2 pl-3 pr-4">Contact</a> -->
              <router-link class="block py-2 pl-3 pr-4 hover:text-link-color" to="/#contact-section">Contact</router-link>
            </li>
            <li>
              <a :href="portfolio.greeting.resumeLink" class="block py-2 px-6 bg-button-color shadow-sm shadow-button-color text-white transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-300" target="_blank">Resume</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
</template>

<script setup>
import { Bars2Icon, XMarkIcon } from '@heroicons/vue/24/solid'
import { ref, onMounted, onBeforeUnmount } from 'vue';
import NavTransition from './NavTransition.vue';
import portfolio from '../portfolio'

const dropDownActive = ref(false)
const showNavbar = ref(true)
const prevScrollPosition = ref(0)

onMounted(() => {
  window.addEventListener('scroll', onScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
})

let onScroll = () => {
  const currScrollPosition = window.scrollY

  if (currScrollPosition < 0 || Math.abs(currScrollPosition - prevScrollPosition.value) < 60) {
    return
  }

  showNavbar.value = currScrollPosition < prevScrollPosition.value
  prevScrollPosition.value = currScrollPosition
  dropDownActive.value = false
}

// Static Images
let getImageUrl = (path) => {
  return new URL(`../assets/${path}`, import.meta.url).href
}

</script>