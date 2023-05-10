<template>
    <nav class="w-full fixed z-10 transition-transform duration-500 bg-white/[.9]" :class="{ '-translate-y-full': !showNavbar }" id="navbar">
      <div class="flex flex-wrap items-center justify-between mx-5 p-4">
        <router-link to="/#landing-page">
          <img src="../assets/images/signature_logo.png" height="100.6" width="184" class="drop-shadow-lg">
        </router-link>

        <button @click="dropDownActive = !dropDownActive" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 lg:hidden">
          <div v-if="!dropDownActive">
            <Bars2Icon class="h-10 w-10"/>
          </div>
          <div v-else>
            <XMarkIcon class="h-10 w-10"/>
          </div>
        </button>

        <div v-show="dropDownActive" class="block w-full lg:hidden">
          <ul>
            <li>
              <!-- <a href="#" class="block py-2 pl-3 pr-4" aria-current="page">About</a> -->
              <router-link class="block py-2 pl-3 pr-4" to="/#about-section">About</router-link>
            </li>
            <li>
              <!-- <a href="#" class="block py-2 pl-3 pr-4">Experience</a> -->
              <router-link class="block py-2 pl-3 pr-4" to="/#experience-section">Experience</router-link>
            </li>
            <li>
              <!-- <a href="#" class="block py-2 pl-3 pr-4">Work</a> -->
              <router-link class="block py-2 pl-3 pr-4" to="/#work-section">Work</router-link>
            </li>
            <li>
              <!-- <a href="#" class="block py-2 pl-3 pr-4">Contact</a> -->
              <router-link class="block py-2 pl-3 pr-4" to="/#contact-section">Contact</router-link>
            </li>
            <li>
              <a href="#" class="block text-center bg-gray-300 py-2 px-6 drop-shadow-lg">Resume</a>
            </li>
          </ul>
        </div>

        <div class="hidden w-full lg:block lg:w-auto items-center" id="navbar-default">
          <ul class="font-medium flex flex-col p-4 lg:p-0 mt-4 lg:flex-row lg:space-x-8 lg:mt-0">
            <li>
              <!-- <a href="#about-section" class="block py-2 pl-3 pr-4" aria-current="page">About</a> -->
              <router-link class="block py-2 pl-3 pr-4" to="/#about-section">About</router-link>
            </li>
            <li>
              <!-- <a href="#" class="block py-2 pl-3 pr-4">Experience</a> -->
              <router-link class="block py-2 pl-3 pr-4" to="/#experience-section">Experience</router-link>
            </li>
            <li>
              <!-- <a href="#" class="block py-2 pl-3 pr-4">Work</a> -->
              <router-link class="block py-2 pl-3 pr-4" to="/#work-section">Work</router-link>
            </li>
            <li>
              <!-- <a href="#" class="block py-2 pl-3 pr-4">Contact</a> -->
              <router-link class="block py-2 pl-3 pr-4" to="/#contact-section">Contact</router-link>
            </li>
            <li>
              <a href="#" class="block bg-gray-300 py-2 px-6 drop-shadow-lg">Resume</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
</template>

<script setup>
import { Bars2Icon, XMarkIcon } from '@heroicons/vue/24/solid'
import { ref, onMounted, onBeforeUnmount } from 'vue';

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
</script>