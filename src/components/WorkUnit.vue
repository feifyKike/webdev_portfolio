<template>
    <div class="flex flex-col md:grid md:grid-cols-2 md:gap-x-4">
        <div v-if="!project.alignLeft" class="bg-gray-300"></div>
        <div class="flex flex-col space-y-4" :class="project.alignLeft ? 'text-left' : 'md:text-right'">
            <p>{{ project.yearCompleted }}</p>
            <h3 class="text-xl font-extrabold pb-2">{{ project.projectName }}</h3>
            <p>{{ project.description }}</p>
            <p class="text-gray-400">{{ project.techStack }}</p>
            <div class="flex space-x-4" :class="!project.alignLeft ? 'md:justify-end' : ''">
                <a v-for="link in project.links" :href="link.url">{{ link.label }}</a>
            </div>
        </div>
        <div v-if="project.alignLeft" class="bg-gray-300"></div>
    </div>
</template>
<script setup>

const props = defineProps({
    project: Object
})


</script>