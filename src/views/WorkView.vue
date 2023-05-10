<template>
    <div class="flex flex-col space-y-8">
        <WorkUnit />
        <WorkUnit :alignLeft="true"/>
        
        <button class="w-52 bg-gray-300 py-2 px-6 drop-shadow-lg mx-auto mt-10">Show More</button>
    </div>
</template>
<script setup>

import WorkUnit from '../components/WorkUnit.vue'

</script>