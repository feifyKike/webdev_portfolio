<template>
  <div class="min-h-screen overscroll-contain bg-white dark:bg-black dark:text-white text-base md:text-xl">
    <Navbar />

    <div class="min-h-full mx-10">
      <div class="flex flex-col md:grid md:grid-cols-6 min-h-full">
        <div class="col-span-1 flex-initial relative mx-auto md:mx-0 order-2 md:order-none">
          <ul class="md:fixed md:bottom-0 mb-7 flex space-x-4 md:flex-col md:space-y-4 md:space-x-0">
            <li v-show="githubLink.length">
              <a :href="githubLink" target="_blank"><img class="h-50 w-50 transition ease-out hover:-translate-y-1 duration-300 dark:invert" src="../components/icons/github.png"/></a>
            </li>
            <li v-show="linkedinLink.length">
              <a :href="linkedinLink" target="_blank"><img class="h-50 w-50 transition ease-out hover:-translate-y-1 duration-300 dark:invert" src="../components/icons/linkedin.png"/></a>
            </li>
            <li v-show="mediumLink.length">
              <a :href="mediumLink" target="_blank"><img class="h-50 w-50 transition ease-out hover:-translate-y-1 duration-300 dark:invert" src="../components/icons/medium.png"/></a>
            </li>
            <li v-show="stackoverflowLink.length">
              <a :href="stackoverflowLink" target="_blank"><img class="h-50 w-50 transition ease-out hover:-translate-y-1 duration-300 dark:invert" src="../components/icons/stackoverflow.png"/></a>
            </li>
          </ul>
        </div>
        <div class="col-span-4 flex-1 flex-col order-1 md:order-none">
          <section class="min-h-screen w-full flex justify-center" id="landing-page">
            <div class="flex items-center space-x-0 space-y-7 md:space-y-0 md:space-x-7 flex-col md:flex-row m-auto">
              <img
                @load="showImage = !showImage"
                class="w-64 h-64 md:w-72 md:h-72 lg:w-96 lg:h-96 rounded-full drop-shadow-lg transition-opacity"
                :class="showImage ? 'opacity-100' : 'opacity-0'"
                :src="getImageUrl(portfolio.greeting.portraitLink)"
                loading="lazy"
              />
              <div>
                <h1 class="text-3xl lg:text-4xl font-bold">{{ portfolio.greeting.intro }}</h1>
                <p>{{ portfolio.greeting.message }}</p>
              </div>
            </div>
          </section>

          <section class="min-h-screen w-full" id="about-section">
            <div class="relative flex py-5 items-center">
              <h1 class="text-3xl font-bold pr-5">😎 About Me</h1>
              <div class="flex-grow border-t border-black dark:border-white border-1"></div>
            </div>
            <AboutView :content="portfolio.about"/>
          </section>

          <section class="min-h-screen w-full" id="experience-section">
            <div class="relative flex py-5 items-center">
              <h1 class="text-3xl font-bold pr-5">🛡️ Experience</h1>
              <div class="flex-grow border-t border-black dark:border-white border-1"></div>
            </div>
            <ExperienceView :content="portfolio.experiences"/>
          </section>

          <section class="min-h-screen w-full" id="work-section">
            <div class="relative flex py-5 items-center">
              <h1 class="text-3xl font-bold pr-2 sm:pr-5">💻 Work</h1>
              <div class="flex-grow border-t border-black dark:border-white border-1"></div>
              <a :href="portfolio.archiveLink" class="pl-2 sm:pl-5 hover:text-link-color text-right">Visit Archive</a>
            </div>
            <WorkView :content="portfolio.works"/>
          </section>

          <section class="min-h-screen w-full flex flex-col" id="contact-section">
            <div class="relative flex py-5 items-center">
              <div class="flex-grow border-t border-black dark:border-white border-1"></div>
              <h1 class="text-3xl font-bold px-5">📇 Contact</h1>
              <div class="flex-grow border-t border-black dark:border-white border-1"></div>
            </div>
            <ContactView :content="portfolio.contact"/>
          </section>

          <footer class="hidden text-center md:block">
            <p>Designed & Created by <a href="https://maximshelepov.com" class="hover:text-link-color">Maxim Shelepov</a></p>
            <a href="https://github.com/feifyKike/webdev_portfolio" class="hover:text-link-color">Code available on Github 👾</a>
          </footer>
        </div>
        <div class="hidden col-span-1 md:flex flex-initial relative order-2 text-center md:order-none">
          <p class="fixed bottom-0 right-10 origin-top-right rotate-90">📍 Based in {{ portfolio.greeting.basedLocation }}</p>
        </div>
        <footer class="block text-center md:hidden order-last mb-5">
            <p>Designed & Created by <a href="https://maximshelepov.com" class="hover:text-link-color">Maxim Shelepov</a></p>
            <a href="https://github.com/feifyKike/webdev_portfolio" class="hover:text-link-color">Code available on Github 👾</a>
        </footer>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue'
import Navbar from '../components/Navbar.vue'
import AboutView from './AboutView.vue'
import ExperienceView from './ExperienceView.vue'
import WorkView from './WorkView.vue'
import ContactView from './ContactView.vue'

import portfolio from '../portfolio'

// Social Media Links
const githubLink = portfolio.socialMediaLinks.github
const linkedinLink = portfolio.socialMediaLinks.linkedin
const mediumLink = portfolio.socialMediaLinks.medium
const stackoverflowLink = portfolio.socialMediaLinks.stackoverflow

// Static Images
const showImage = ref(false)

let getImageUrl = (path) => {
  return new URL(`../assets/${path}`, import.meta.url).href
}

</script>