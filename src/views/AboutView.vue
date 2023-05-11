<template>
    <div class="flex flex-col md:grid md:grid-cols-2 md:gap-x-5">
        <div class="order-2 md:order-none">
            <p v-for="paragraph in content.autobiography">{{ paragraph }}<br/><br/></p>
            <br/>
            <div>
                <p class="pb-3">Most Recent Tech Stack:</p>
                <ul class="list-image-[url(../components/icons/bullet_point.png)] pl-8 grid grid-rows-2 grid-flow-col">
                    <li v-for="tech in content.techStack">{{ tech }}</li>
                </ul>
            </div>
        </div>
        <div class="grid grid-rows-2 gap-y-4 order-1 md:order-none">
            <div class="grid grid-cols-2 gap-x-4">
                <div class="">
                    <img :src="content.photo1Link"/>
                </div>
                <div class="">
                    <img :src="content.photo2Link"/>
                </div>
            </div>
            <div class="">
                <img :src="content.photo3Link"/>
            </div>
        </div>
    </div>
</template>
<script setup>

const props = defineProps({
    content: Object
})

</script>