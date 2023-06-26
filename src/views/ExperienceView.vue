<template>
    <div class="flex flex-col space-y-4 lg:grid lg:grid-cols-2 lg:gap-x-4 lg:space-y-0 mb-52">
        <ExperienceCard v-for="experience in content" :experience="experience"/>
    </div>
</template>
<script setup>

import ExperienceCard from '../components/ExperienceCard.vue'

const props = defineProps({
    content: Object
})

</script>