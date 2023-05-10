<template>
    <div class="grid grid-cols-2 gap-x-4">
        <div v-if="!alignLeft" class="bg-gray-300"></div>
        <div class="flex flex-col space-y-4" :class="alignLeft ? 'text-left' : 'text-right'"> <!-- Make this dynamic (alternate every one)-->
            <p>Year</p>
            <h3 class="text-xl font-extrabold pb-2">Project #1</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p class="text-gray-400">Django  Python  HTML  CSS  JS  PostgresQL</p>
            <div class="flex space-x-4" :class="!alignLeft ? 'justify-end' : ''">
                <p>Link 1</p>
                <p>Link 2</p>
                <p>Link 3</p>
            </div>
        </div>
        <div v-if="alignLeft" class="bg-gray-300"></div>
    </div>
</template>
<script setup>

const props = defineProps({
    alignLeft: Boolean,
    project: Object
})


</script>