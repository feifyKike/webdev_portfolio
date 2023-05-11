<template>
    <div class="flex flex-wrap space-y-4 space-x-0 sm:space-x-4 sm:space-y-0 mb-10">
        <ExperienceCard v-for="experience in content" :experience="experience"/>
    </div>
</template>
<script setup>

import ExperienceCard from '../components/ExperienceCard.vue'

const props = defineProps({
    content: Object
})

</script>