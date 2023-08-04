<template>
    <TransitionGroup name="dropdown">
        <slot></slot>
    </TransitionGroup>
</template>
<style>
    @media (prefers-reduced-motion: no-preference) {
        /* styles to apply if a user's device settings are set to reduced motion */
        .dropdown-enter-active,
        .dropdown-leave-active {
            transition: all 0.3s ease-in;
        }

        .dropdown-enter-from,
        .dropdown-leave-to {
            transform: translateY(-5%);
            opacity: 0;
        }

        .dropdown-enter-to,
        .dropdown-leave-from {
            opacity: 1;
        }
    }
</style>