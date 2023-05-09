<template>
    <nav>
      <div class="flex flex-wrap items-center justify-between mx-5 p-4">
        <img src="../assets/images/signature_logo.png" height="100.6" width="184" class="drop-shadow-md">

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
              <a href="#" class="block py-2 pl-3 pr-4" aria-current="page">About</a>
            </li>
            <li>
              <a href="#" class="block py-2 pl-3 pr-4">Experience</a>
            </li>
            <li>
              <a href="#" class="block py-2 pl-3 pr-4">Work</a>
            </li>
            <li>
              <a href="#" class="block py-2 pl-3 pr-4">Contact</a>
            </li>
            <li>
              <a href="#" class="block text-center bg-gray-300 py-2 px-6 drop-shadow-md">Resume</a>
            </li>
          </ul>
        </div>

        <div class="hidden w-full lg:block lg:w-auto items-center" id="navbar-default">
          <ul class="font-medium flex flex-col p-4 lg:p-0 mt-4 lg:flex-row lg:space-x-8 lg:mt-0">
            <li>
              <a href="#" class="block py-2 pl-3 pr-4" aria-current="page">About</a>
            </li>
            <li>
              <a href="#" class="block py-2 pl-3 pr-4">Experience</a>
            </li>
            <li>
              <a href="#" class="block py-2 pl-3 pr-4">Work</a>
            </li>
            <li>
              <a href="#" class="block py-2 pl-3 pr-4">Contact</a>
            </li>
            <li>
              <a href="#" class="block bg-gray-300 py-2 px-6 shadow-md">Resume</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
</template>

<script setup>
import { Bars2Icon, XMarkIcon } from '@heroicons/vue/24/solid'
import { ref } from 'vue';

const dropDownActive = ref(false)
</script>