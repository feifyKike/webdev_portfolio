<template>
    <div class="flex flex-col my-auto">
        <div v-if="content.formEmbedLink">
            <iframe :src="content.formEmbedLink" frameborder="0" marginheight="0" marginwidth="0" class="mb-10 min-h-screen w-full">Loading...</iframe>
        </div>
        <div v-else class="space-y-8 mx-auto">
            <h1 class="text-3xl font-extrabold text-center">Get in Touch</h1>
            <p v-for="msg in content.externalLink.note">{{ msg }}<br/></p>
            <div class="flex items-center justify-center space-x-5">
                <template v-if="content.externalLink.link.email">
                    <a :href="'mailto:'+content.externalLink.link.email">
                        <button class="bg-gray-300 py-2 px-6 drop-shadow-lg">Send an Email</button>
                    </a>
                    <p class="text-sm">{{ content.externalLink.responseTimeMessage }}</p>
                </template>
                <template v-else>
                    <a :href="content.externalLink.link.externalLink">
                        <button class="bg-gray-300 py-2 px-6 drop-shadow-lg">Reach Out</button>
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