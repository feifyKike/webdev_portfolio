<template>
    <LoadTransition>
        <div v-show="showProject" class="flex flex-col lg:grid lg:grid-cols-2 lg:gap-x-4">
            <div v-if="!project.alignLeft" class="order-first pb-4 lg:pb-0 lg:order-none lg:block">
                <img
                    @load="showProject = !showProject"
                    :src="getImageUrl(project.imageLink)"
                    class="drop-shadow-lg"
                />
            </div>
            <div class="flex flex-col space-y-4" :class="project.alignLeft ? 'text-left' : 'lg:text-right'">
                <p>{{ project.yearCompleted }}</p>
                <h3 class="text-xl font-extrabold pb-2">{{ project.projectName }}</h3>
                <p>{{ project.description }}</p>
                <p class="text-gray-400">{{ project.techStack }}</p>
                <div class="flex space-x-4" :class="!project.alignLeft ? 'lg:justify-end' : ''">
                    <a v-for="link in project.links" :href="link.url" class="hover:text-link-color">{{ link.label }}</a>
                </div>
            </div>
            <div v-if="project.alignLeft" class="order-first pb-4 lg:pb-0 lg:order-none lg:block">
                <img
                    @load="showProject = !showProject"
                    :src="getImageUrl(project.imageLink)"
                    class="drop-shadow-lg"
                />
            </div>
        </div>
    </LoadTransition>
</template>
<script setup>
import {ref} from 'vue'
import LoadTransition from './transitions/LoadTransition.vue';

const props = defineProps({
    project: Object
})

// Static Images
const showProject = ref(false)

let getImageUrl = (path) => {
  return new URL(`../assets/${path}`, import.meta.url).href
}

</script>