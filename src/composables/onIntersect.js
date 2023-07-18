/**
 * @function onIntersect
 * @param  {HTMLElement} elementToWatch elementToWatch
 * @param  {Boolean} once           if true only run once
 * @param  {Object} options        Intersection Observer API options
 * @return {type} Ref<boolean>
 */
import { ref, onMounted, onUnmounted } from 'vue';

export const onIntersect = (elementToWatch, once = true, options = { threshold: 0.15 }) => {
    // toggleable visibility
    const visible = ref(false)

    // Initiate the observer
    const observer = new IntersectionObserver(([entry]) => {
        // If the element to watch is intersecting within the threshold
        if (entry && entry.isIntersecting) {
            // set to visible
            visible.value = true

            // If should only run once, unobserve the element
            if (once) {
                observer.unobserve(entry.target);
            }
        }

        // If the element is not intersecting, run visibility off
        else {
            visible.value = false
        }
    }, options);

    // Hook into components onMounted and onUnmounted states for setup and cleanup
    onMounted(() => observer.observe(elementToWatch.value))
    onUnmounted(() => observer.disconnect())

    return visible;
};

// Credit: Megan Valcour & Tim Spears - https://www.imarc.com/blog/adding-intersection-observer-to-your-vue-animation