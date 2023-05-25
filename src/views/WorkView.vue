<template>
    <div class="flex flex-col space-y-12 mb-10">
        <WorkUnit v-for="project in projInitial" :project="project"/>
        <WorkUnit v-if="showMore" v-for="project in content" :project="project"/>

        <button v-show="showPreview" @click="toggleShowMore" class="w-52 py-2 px-6 mx-auto mt-10 bg-button-color text-white shadow-sm shadow-button-color transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-300">{{ showMore ? "Show Less" : "Show More" }}</button>
    </div>
</template>
<script setup>
import { ref} from 'vue'
import WorkUnit from '../components/WorkUnit.vue'
import ProjectTransition from '../components/transitions/ProjectTransition.vue'
import { useRouter } from 'vue-router';

const router = useRouter()

const showMore = ref(false)
const showPreview = ref(props.content.length > 3)
const projInitial = showPreview ? props.content.splice(0, 3) : props.content

const props = defineProps({
    content: Object
})

let toggleShowMore = () => {
    showMore.value = !showMore.value
    if (!showMore.value) {
        router.push('/#work-section')
    }
}

</script>