<template>
    <div class="flex flex-col flex-1 rounded-md bg-white shadow-sm dark:bg-black shadow-black dark:border dark:border-white text-left p-4">
        <h3 class="text-xl font-extrabold">{{ experience.position }} <a :href="experience.company.link" class="hover:text-link-color">@{{ experience.company.name }}</a></h3>
        <p class="italic">{{ experience.duration }}</p>
        <ul class="list-image-[url(../components/icons/bullet_point.png)] pl-8 pt-4">
            <li v-for="bullet in experience.bulletPoints" class="pb-2">{{ bullet }}</li>
        </ul>
        <div class="text-gray-400 pt-4 flex flex-wrap mt-auto">
            <p v-for="hashtag in experience.hashtags" class="pr-4 last:pr-0">#{{ hashtag }}</p>
        </div>
    </div>
</template>

<script setup>

const props = defineProps({
    experience: Object,
})

</script>