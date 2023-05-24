<template>
    <div class="flex flex-col lg:grid lg:grid-cols-2 lg:gap-x-4">
        <ImageTransition>
            <img
                @load="showImage1 = !showImage1"
                v-show="showImage1"
                :src="getImageUrl(project.imageLink)"
                class="block lg:hidden pb-4 drop-shadow-lg"
            />
        </ImageTransition>
        <div v-if="!project.alignLeft" class="hidden lg:block">
            <ImageTransition>
                <img
                    @load="showImage2 = !showImage2"
                    v-show="showImage2"
                    :src="getImageUrl(project.imageLink)"
                    class="drop-shadow-lg"
                />
            </ImageTransition>
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
        <div v-if="project.alignLeft" class="hidden lg:block">
            <ImageTransition>
                <img
                    @load="showImage3 = !showImage3"
                    v-show="showImage3"
                    :src="getImageUrl(project.imageLink)"
                    class="drop-shadow-lg"
                />
            </ImageTransition>
        </div>
    </div>
</template>
<script setup>
import {ref} from 'vue'
import ImageTransition from './ImageTransition.vue';

const props = defineProps({
    project: Object
})

// Static Images
const showImage1 = ref(false)
const showImage2 = ref(false)
const showImage3 = ref(false)

let getImageUrl = (path) => {
  return new URL(`../assets/${path}`, import.meta.url).href
}

</script>