<template>
    <div class="flex flex-col my-auto">
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
</template>
<script setup>

const props = defineProps({
    content: Object
})

</script>