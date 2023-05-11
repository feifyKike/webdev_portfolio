<template>
    <div class="flex flex-col lg:grid lg:grid-cols-2 lg:gap-x-4">
        <img :src="project.imageLink" class="block lg:hidden pb-4"/>
        <div v-if="!project.alignLeft" class="hidden lg:block">
            <img :src="project.imageLink"/>
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
            <img :src="project.imageLink"/>
        </div>
    </div>
</template>
<script setup>

const props = defineProps({
    project: Object
})


</script>