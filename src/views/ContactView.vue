<template>
    <section class="min-h-screen w-full flex flex-col" ref="contactSection" id="contact-section">
        <div class="relative flex py-5 items-center" :class="[visible ? 'translate-y-0 opacity-1 blur-0' : 'translate-y-4 opacity-0 blur-sm', 'transition-all duration-500 motion-reduce:duration-200']">
            <div class="flex-grow border-t border-black dark:border-white border-1"></div>
            <h1 class="text-3xl font-bold px-5">📭 Contact</h1>
            <div class="flex-grow border-t border-black dark:border-white border-1"></div>
        </div>
        <div class="flex flex-col my-auto" :class="[visible ? 'translate-y-0 opacity-1 blur-0' : 'translate-y-4 opacity-0 blur-sm', 'transition-all duration-500 motion-reduce:duration-200 delay-300 motion-reduce:delay-75']">
            <div v-if="content.formEmbedLink">
                <iframe :src="content.formEmbedLink" frameborder="0" marginheight="0" marginwidth="0" class="mb-10 min-h-screen w-full">Loading...</iframe>
            </div>
            <div v-else class="space-y-8 mx-auto">
                <h1 class="text-3xl font-extrabold text-center">Get in Touch</h1>
                <p v-for="msg in content.externalLink.note">{{ msg }}<br/></p>
                <div class="block sm:flex sm:items-center sm:justify-center sm:space-x-5">
                    <template v-if="content.externalLink.link.email">
                        <a :href="'mailto:'+content.externalLink.link.email">
                            <button class="py-2 px-6 bg-button-color shadow-sm shadow-button-color text-white transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-300">Send an Email</button>
                        </a>
                        <p class="text-sm mt-8 sm:mt-0">{{ content.externalLink.responseTimeMessage }}</p>
                    </template>
                    <template v-else>
                        <a :href="content.externalLink.link.externalLink">
                            <button class="py-2 px-6 bg-button-color shadow-sm shadow-button-color text-white transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-300">Reach Out</button>
                        </a>
                    </template>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
import { ref } from 'vue';
import { onIntersect } from '../composables/onIntersect';

const props = defineProps({
    content: Object,
    transitions: Object
})

const contactSection = ref({})
const visible = props.transitions.active ? onIntersect(contactSection, !!props.transitions.showOnce, { threshold: props.transitions.thresholdOption }) : true

</script>