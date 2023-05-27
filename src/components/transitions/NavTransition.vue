<template>
    <TransitionGroup name="dropdown">
        <slot></slot>
    </TransitionGroup>
</template>
<style>
    .dropdown-enter-active,
    .dropdown-leave-active {
        transition: all 0.3s ease-in;
    }

    .dropdown-enter-from,
    .dropdown-leave-to {
        transform: translateY(-10%);
        opacity: 0;
    }

    .dropdown-enter-to,
    .dropdown-leave-from {
        opacity: 1;
    }
</style>