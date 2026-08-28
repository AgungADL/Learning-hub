<template>
    <h3>{{ slug }} Course</h3>
    <p>{{ slug }}</p>
    <button @click="back">
        Back
    </button>
</template>

<script setup lang="ts">
const route = useRoute();
const router = useRouter();

const slug = ref(route.params.slug);

const dataCourses = [
    {
        'name': 'vue',
        'text': 'Learn how to build front-end environment with Vue 3'
    },
    {
        'name': 'nuxt',
        'text': 'Learn how to build full-stack applications with Nuxt 4'
    },
    {
        'name': 'laravel',
        'text': 'Learn how to build full-stack applications with Laravel 11'
    }
];

const back = () => {
    router.back()
}
</script>