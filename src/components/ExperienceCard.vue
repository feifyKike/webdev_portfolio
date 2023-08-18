<template>
    <div class="flex flex-col flex-1 rounded-md bg-white shadow-md hover:shadow-lg hover:-translate-y-1 motion-reduce:hover:translate-y-0 motion-reduce:hover:shadow-md dark:bg-slate-800 text-left p-4 transition-all duration-300">
        <h3 class="text-xl font-extrabold">{{ experience.position }} <a :href="experience.company.link" class="hover:text-link-color">@{{ experience.company.name }}</a></h3>
        <p class="italic">{{ experience.duration }}</p>
        <ul class="list-['\1F449'] pl-6 pt-4 text-slate-500 dark:text-slate-300">
            <li v-for="bullet in experience.bulletPoints" class="pl-2 pb-2">{{ bullet }}</li>
        </ul>
        <div class="text-slate-600 pt-4 flex flex-wrap mt-auto">
            <p v-for="hashtag in experience.hashtags" class="pr-4 last:pr-0">#{{ hashtag }}</p>
        </div>
    </div>
</template>

<script setup>

const props = defineProps({
    experience: Object,
})

</script>