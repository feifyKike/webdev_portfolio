<template>
    <Transition name="slide-fade-in">
        <slot></slot>
    </Transition>
</template>
<style>
    .slide-fade-in-enter-active,
    .slide-fade-in-leave-active {
        transition: all 0.15s ease-in;
    }

    .slide-fade-in-enter-from,
    .slide-fade-in-leave-to {
        opacity: 0;
        transform: translateY(-5px);
    }

    .slide-fade-in-enter-to,
    .slide-fade-in-leave-from {
        opacity: 1;
        transform: translateY(0px);
    }

</style>