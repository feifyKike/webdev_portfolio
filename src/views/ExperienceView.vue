<template>
    <div class="flex flex-wrap md:space-x-4 space-y-4 md:space-y-0">
        <ExperienceCard v-for="experience in content" :experience="experience"/>
    </div>
</template>
<script setup>

import ExperienceCard from '../components/ExperienceCard.vue'

const props = defineProps({
    content: Object
})

</script>