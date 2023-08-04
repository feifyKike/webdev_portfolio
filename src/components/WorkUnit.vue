<template>
    <div :class="['flex flex-col lg:grid lg:grid-cols-2 lg:gap-x-4 transition-opacity motion-reduce:transition-none duration-500', showProject ? 'opacity-1' : 'opacity-0']">
        <div v-if="!project.alignLeft" class="order-first pb-4 lg:pb-0 lg:order-none lg:block">
            <img
                @load="showProject = !showProject"
                :src="getImageUrl(project.imageLink)"
                class="shadow-md hover:shadow-lg hover:-translate-y-1 motion-reduce:hover:shadow-md motion-reduce:hover:translate-y-0 duration-300"
                loading="lazy"
            />
        </div>
        <div class="flex flex-col space-y-4" :class="project.alignLeft ? 'text-left' : 'lg:text-right'">
            <p>{{ project.yearCompleted }}</p>
            <h3 class="text-xl font-extrabold pb-2">{{ project.projectName }}</h3>
            <p class="text-slate-500 dark:text-slate-300">{{ project.description }}</p>
            <p class="text-slate-600">{{ project.techStack }}</p>
            <div class="flex space-x-8 items-center text-slate-400" :class="!project.alignLeft ? 'lg:justify-end' : ''">
                <a v-for="link in project.links" :href="link.url" class=" hover:text-link-color flex items-center space-x-2" target="_blank">
                    <LinkIcon class="h-5 w-5"/>
                    <span>{{ link.label }}</span>
                </a>
            </div>
        </div>
        <div v-if="project.alignLeft" class="order-first pb-4 lg:pb-0 lg:order-none lg:block">
            <img
                @load="showProject = !showProject"
                :src="getImageUrl(project.imageLink)"
                class="shadow-md hover:shadow-lg hover:-translate-y-1 motion-reduce:hover:shadow-md motion-reduce:hover:translate-y-0 duration-300"
                loading="lazy"
            />
        </div>
    </div>
</template>
<script setup>
import {ref} from 'vue'
import { LinkIcon } from '@heroicons/vue/24/solid';

const props = defineProps({
    project: Object
})

// Static Images
const showProject = ref(false)

let getImageUrl = (path) => {
  return new URL(`../assets/${path}`, import.meta.url).href
}

</script>