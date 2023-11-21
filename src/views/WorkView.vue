<template>
    <section class="min-h-screen w-full" ref="workSection" id="work-section">
        <div class="relative flex py-5 items-center" :class="[visible ? 'translate-y-0 opacity-1 blur-0' : 'translate-y-4 opacity-0 blur-sm', 'transition-all motion-reduce:transition-none duration-500']">
            <h1 class="text-3xl font-bold pr-2 sm:pr-5">💻 Work</h1>
            <div class="flex-grow border-t border-black dark:border-white border-1"></div>
            <a :href="portfolio.archiveLink" class="pl-2 sm:pl-5 hover:text-link-color text-right text-sm">Visit Archive</a>
        </div>
        <div :class="['flex flex-col space-y-12 mb-36 transition-all motion-reduce:transition-none duration-500 delay-300', visible ? 'translate-y-0 opacity-1 blur-0' : 'translate-y-4 opacity-0 blur-sm']">
            <WorkUnit
                v-for="(project, index) in projInitial"
                :key="index" :project="project"
            />
            <WorkUnit
                v-if="showMore"
                v-for="(project, index) in content"
                :key="index" :project="project"
            />

            <button v-show="showPreview" @click="toggleShowMore" class="w-52 py-2 px-6 mx-auto mt-10 bg-transparent border border-button-color text-button-color shadow-sm shadow-button-color transition ease-in-out hover:bg-button-color hover:text-white focus:bg-button-color focus:text-white active:bg-button-color active:text-white duration-300">
                {{ showMore ? "Show Less" : "Show More" }}
            </button>
        </div>
    </section>
</template>
<script setup>
import { ref } from 'vue'
import WorkUnit from '../components/WorkUnit.vue'
import { useRouter } from 'vue-router';
import portfolio from '../portfolio';
import { onIntersect } from '../composables/onIntersect';

const router = useRouter()

const props = defineProps({
    content: Object,
    transitions: Object
})

const showPreview = props.content.length > 3
const showMore = ref(false)
const projInitial = showPreview ? props.content.splice(0, 3) : props.content

const workSection = ref({})
const visible = props.transitions.active && window.matchMedia('(prefers-reduced-motion: no-preference)').matches ? onIntersect(workSection, !!props.transitions.showOnce, { threshold: props.transitions.thresholdOption }) : true

let toggleShowMore = () => {
    showMore.value = !showMore.value
    if (!showMore.value) {
        router.push('/#work-section')
    }
}

</script>