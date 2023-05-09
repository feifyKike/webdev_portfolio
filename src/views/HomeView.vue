<template>
  <div class="min-h-screen">
    <Navbar />

    <div class="min-h-full mx-10">
      <div class="grid grid-cols-6 min-h-full">
        <div class="col-span-1 flex-none relative">
          <ul class="fixed bottom-0 mb-7 flex flex-col space-y-4">
            <li>
              <a href="#"><img class="h-50 w-50" src="../components/icons/github.png"/></a>
            </li>
            <li>
              <a href="#"><img class="h-50 w-50" src="../components/icons/linkedin.png"/></a>
            </li>
            <li>
              <a href="#"><img class="h-50 w-50" src="../components/icons/medium.png"/></a>
            </li>
            <li>
              <a href="#"><img class="h-50 w-50" src="../components/icons/stackoverflow.png"/></a>
            </li>
          </ul>
        </div>
        <div class="col-span-4 flex-initial flex flex-col">
          <section class="min-h-screen w-full flex justify-center" id="landing-page">
            <div class="flex items-center space-x-7 mx-auto">
              <img class="w-96 h-96 rounded-full" src="../assets/images/portrait.jpg"/>
              <div>
                <h1 class="text-4xl font-bold">Hello, my name is Maxim Shelepov 👨🏻‍💻</h1>
                <p>I'm a web developer and a computer science student at NC State University</p>
              </div>
            </div>
          </section>

          <section class="min-h-screen w-full" id="about-section">
            <div class="relative flex py-5 items-center">
              <h1 class="text-3xl font-bold pr-5">😎 About Me</h1>
              <div class="flex-grow border-t border-black border-1"></div>
            </div>
            <AboutView />
          </section>

          <section class="min-h-screen w-full" id="experience-section">
            <div class="relative flex py-5 items-center">
              <h1 class="text-3xl font-bold pr-5">🛡️ Experience</h1>
              <div class="flex-grow border-t border-black border-1"></div>
            </div>
            <ExperienceView/>
          </section>

          <section class="min-h-screen w-full" id="work-section">
            <div class="relative flex py-5 items-center">
              <h1 class="text-3xl font-bold pr-5">Work</h1>
              <div class="flex-grow border-t border-black border-1"></div>
            </div>
          </section>

          <section class="min-h-screen w-full" id="contact-section">
            <div class="relative flex py-5 items-center">
              <h1 class="text-3xl font-bold pr-5">Contact</h1>
              <div class="flex-grow border-t border-black border-1"></div>
            </div>
          </section>

          <footer class="text-center">
            <p>Designed & Created by Maxim Shelepov</p>
            <a href="#">Code available on Github 👾</a>
          </footer>
        </div>
        <div class="col-span-1 flex-none relative">
          <p class="fixed bottom-0 right-10 origin-top-right rotate-90">📍 Based in Raleigh, NC</p>
        </div>
      </div>
  </div>
  </div>
</template>

<script setup>
import Navbar from '../components/Navbar.vue'
import AboutView from './AboutView.vue'
import ExperienceView from './ExperienceView.vue'

</script>