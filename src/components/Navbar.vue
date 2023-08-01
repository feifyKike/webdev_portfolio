<template>
    <nav class="block w-full sticky top-0 z-10 transition-all duration-300" :class="{ '-translate-y-full absolute': !showNavbar }" id="navbar">
        <!-- Navbar Body -->
        <div class="flex flex-wrap items-center justify-between px-9 md:py-4 bg-white/[.9] dark:bg-slate-900 backdrop-blur-sm transition-shadow duration-300" :class="{ 'shadow-lg dark:bg-slate-900/[.8]': !hideNavShadow }">
            <!-- Logo -->
            <router-link to="/#landing-page">
                <div v-if="!portfolio.greeting.logo.custom">
                    <img :src="getImageUrl(portfolio.greeting.logo.link)" class="scale-75 md:scale-100 origin-left drop-shadow-lg" id="logo-img"/>
                </div>
                <!-- Custom Logo -->
                <div v-else>
                    <div class="flex items-center space-x-2 py-4 md:py-1 drop-shadow-lg bg-gradient-to-r from-[#fa3205] to-[#5301c5] bg-clip-text text-transparent">
                        <p>&lt;</p>
                        <p class="text-5xl md:text-7xl" id="custom-logo">M.S.</p>
                        <p>/></p>
                    </div>
                </div>
            </router-link>

            <button @click="dropDownActive = !dropDownActive" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 lg:hidden">
                <div v-if="!dropDownActive">
                    <Bars2Icon class="h-10 w-10 dark:fill-slate-300"/>
                </div>
                <div v-else>
                    <XMarkIcon class="h-10 w-10 dark:fill-slate-300"/>
                </div>
            </button>

            <div class="hidden w-full lg:block lg:w-auto items-center" id="navbar-default">
                <ul class="font-medium flex flex-col p-4 lg:p-0 mt-4 lg:flex-row lg:space-x-8 lg:mt-0">
                    <li>
                        <router-link class="block py-2 pl-3 pr-4 hover:text-link-color" to="/#about-section">About</router-link>
                    </li>
                    <li>
                        <router-link class="block py-2 pl-3 pr-4 hover:text-link-color" to="/#experience-section">Experience</router-link>
                    </li>
                    <li>
                        <router-link class="block py-2 pl-3 pr-4 hover:text-link-color" to="/#work-section">Work</router-link>
                    </li>
                    <li>
                        <router-link class="block py-2 pl-3 pr-4 hover:text-link-color" to="/#contact-section">Contact</router-link>
                    </li>
                    <li>
                        <a :href="portfolio.greeting.resumeLink" class="block py-2 px-6 bg-transparent border border-button-color shadow-sm shadow-button-color text-button-color transition ease-in-out hover:bg-button-color hover:text-white hover:dark:text-slate-300 active:bg-button-color duration-300" target="_blank">Resume</a>
                    </li>
                </ul>
            </div>
        </div>

        <!-- Navbar Dropdown Area -->
        <NavTransition>
            <div v-show="dropDownActive" class="block w-full absolute lg:hidden px-9 pb-4 bg-white/[.9] dark:bg-slate-900/[.8] backdrop-blur-sm">
                <ul>
                    <li>
                        <router-link class="block py-5 pl-3 hover:text-link-color" to="/#about-section">😎 About</router-link>
                    </li>
                    <li>
                        <router-link class="block py-5 pl-3 hover:text-link-color" to="/#experience-section">🛡️ Experience</router-link>
                    </li>
                    <li>
                        <router-link class="block py-5 pl-3 hover:text-link-color" to="/#work-section">💻 Work</router-link>
                    </li>
                    <li>
                        <router-link class="block py-5 pl-3 hover:text-link-color" to="/#contact-section">📭 Contact</router-link>
                    </li>
                    <li>
                        <a :href="portfolio.greeting.resumeLink" class="block text-center bg-button-color py-2 px-6 mt-5 shadow-sm shadow-button-color text-white" target="_blank">Resume</a>
                    </li>
                </ul>
            </div>
        </NavTransition>
    </nav>
</template>

<script setup>
import { Bars2Icon, XMarkIcon } from '@heroicons/vue/24/solid'
import { ref, onMounted, onBeforeUnmount } from 'vue';
import NavTransition from './transitions/NavTransition.vue';
import portfolio from '../portfolio'

const dropDownActive = ref(false)
const showNavbar = ref(true)
const prevScrollPosition = ref(0)

const hideNavShadow = ref(true)

onMounted(() => {
    window.addEventListener('scroll', onScroll)
})

onBeforeUnmount(() => {
    window.removeEventListener('scroll', onScroll)
})

let onScroll = () => {
    const currScrollPosition = window.scrollY

    if (currScrollPosition <= 60) {
        hideNavShadow.value = true
    } else {
        hideNavShadow.value = false
    }

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