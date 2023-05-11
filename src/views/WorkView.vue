<template>
    <div class="flex flex-col space-y-8">
        <WorkUnit v-for="project in projInitial" :project="project"/>
        <WorkUnit v-if="showMore" v-for="project in content" :project="project"/>

        <button v-show="showPreview" @click="showMore = !showMore" class="w-52 bg-gray-300 py-2 px-6 drop-shadow-lg mx-auto mt-10">{{ showMore ? "Show Less" : "Show More" }}</button>
    </div>
</template>
<script setup>
import { ref } from 'vue'
import WorkUnit from '../components/WorkUnit.vue'

const showMore = ref(false)
const showPreview = ref(props.content.length > 3)
const projInitial = showPreview ? props.content.splice(0, 3) : props.content

const props = defineProps({
    content: Object
})

</script>