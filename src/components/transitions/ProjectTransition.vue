<template>
    <TransitionGroup name="slide-fade">
        <slot></slot>
    </TransitionGroup>
</template>
<style>
    .slide-fade-enter-active,
    .slide-fade-leave-active {
        transition: all 0.3s ease-in;
    }

    .slide-fade-enter-from,
    .slide-fade-leave-to {
        opacity: 0;
        transform: translateY(-10px);
    }

    .slide-fade-enter-to,
    .slide-fade-leave-from {
        opacity: 1;
        transform: translateY(0px);
    }

</style>