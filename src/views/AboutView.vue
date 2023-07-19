<template>
    <section class="min-h-screen w-full" ref="aboutSection" id="about-section">
        <div class="relative flex py-5 items-center" :class="[visible ? 'translate-y-0 opacity-1 blur-0' : 'translate-y-4 opacity-0 blur-sm', 'transition-all duration-500 motion-reduce:duration-200']">
            <h1 class="text-3xl font-bold pr-5">😎 About Me</h1>
            <div class="flex-grow border-t border-black dark:border-white border-1"></div>
        </div>
        <div class="flex flex-col gap-y-4 xl:grid xl:grid-cols-2 xl:gap-x-5 xl:gap-y-0 mb-52" :class="[visible ? 'translate-y-0 opacity-1 blur-0' : 'translate-y-4 opacity-0 blur-sm', 'transition-all duration-500 motion-reduce:duration-200 delay-300 motion-reduce:delay-75']">
            <div class="order-2 xl:order-none">
                <p v-for="paragraph in content.autobiography">{{ paragraph }}<br/><br/></p>
                <div>
                    <p class="pb-3">Most Recent Tech Stack:</p>
                    <ul class="flow flow-col list-image-[url(../components/icons/bullet_point.png)] pl-8 sm:grid sm:grid-rows-2 sm:grid-flow-col">
                        <li v-for="tech in content.techStack">{{ tech }}</li>
                    </ul>
                </div>
            </div>
            <div class="grid grid-rows-2 gap-y-4 order-1 xl:order-none">
                <div class="grid grid-cols-2 gap-x-4">
                    <div>
                        <img :src="getImageUrl(content.photo1Link)" class="shadow-md" loading="lazy"/>
                    </div>
                    <div>
                        <img :src="getImageUrl(content.photo2Link)" class="shadow-md" loading="lazy"/>
                    </div>
                </div>
                <div>
                    <img :src="getImageUrl(content.photo3Link)" class="shadow-md" loading="lazy"/>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
import { ref } from 'vue';
import { onIntersect } from '../composables/onIntersect'

const props = defineProps({
    content: Object,
    transitions: Object
})

const aboutSection = ref({})
const visible = props.transitions.active ? onIntersect(aboutSection, !!props.transitions.showOnce, { threshold: props.transitions.thresholdOption }) : true

// Static Images
let getImageUrl = (path) => {
  return new URL(`../assets/${path}`, import.meta.url).href
}

</script>