<template>
    <div class="flex items-center justify-center absolute z-50 bg-white text-black dark:bg-slate-900 dark:text-slate-300 text-center w-screen h-screen">
        <div>
            <div class="flex w-full space-x-2 items-center">
                <div class="flex w-full relative items-center justify-between py-4">
                    <span>[</span>
                    <p class="text-left w-[20ch]">{{ hashtags.join('') }}</p> <!-- Change width if changing max value -->
                    <span class="ml-auto">]</span>
                </div>
                <p>{{ percentage }}%</p>
            </div>
            <p :class="['transition-all duration-200', status ? 'text-green-600' : 'text-black dark:text-slate-300']">{{ message }}</p>
        </div>
    </div>
</template>
<script setup>
import { ref, computed, onMounted } from 'vue';

onMounted(() => {
    progress()
})

const max = 20
const character = '#'
const hashtags = ref([]);
const message = computed(() => {
    switch (status.value) {
        case 0:
            return "🤔 LOADING..."
        case 1:
            return "🚀 SUCCESS!"
    }
})
const percentage = computed(() => {
    return Math.floor((hashtags.value.length / max) * 100)
})
const status = ref(0)

const progress = () => {
    if (hashtags.value.length == 0) {
        hashtags.value.push(character)
        const interval = setInterval(advance, 65)
    }
}
const advance = () => {
    if (hashtags.value.length >= max) {
        status.value = 1

        clearInterval(0)
    } else {
        hashtags.value.push(character)
    }
}
</script>