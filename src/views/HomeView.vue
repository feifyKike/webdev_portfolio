<template>
  <div class="min-h-screen">
    <Navbar />
    <div class="min-h-full mx-10">
      <div class="grid grid-cols-6 min-h-full">
        <div class="col-span-1 flex-none relative">
          <ul class="fixed bottom-0 mb-7 flex flex-col space-y-4">
            <li>
              <a href=""><img class="h-50 w-50" src="../components/icons/github.png"/></a>
            </li>
            <li>
              <a href=""><img class="h-50 w-50" src="../components/icons/linkedin.png"/></a>
            </li>
            <li>
              <a href=""><img class="h-50 w-50" src="../components/icons/medium.png"/></a>
            </li>
            <li>
              <a href=""><img class="h-50 w-50" src="../components/icons/stackoverflow.png"/></a>
            </li>
          </ul>
        </div>
        <div class="col-span-4 flex-initial flex flex-col items-center space-y-72 relative">
          <div class="flex items-center space-x-5">
            <img class="w-72 h-72 rounded-full" src="../assets/images/portrait.jpg"/>
            <div>
              <h1 class="text-4xl font-bold">Hello, my name is Maxim Shelepov</h1>
              <p>I'm a web developer and a computer science student at NC State University</p>
            </div>
          </div>
          <!-- <div>
            <span class="text-3xl font-bold px-5">About Me</span>
            <span class="h-5 border-b-2 border-black"></span>
          </div> -->
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

</script>