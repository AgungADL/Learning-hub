<template>
    <div v-if="currentCourse">
        <h2>{{ currentCourse.label }}</h2>
        <p>{{ currentCourse.description }}</p>
        <button @click="back">Back</button>
    </div>
    <p v-else>Course tidak ditemukan</p>
</template>

<script setup lang="ts">
const route = useRoute();
const router = useRouter();

interface DetailCourse {
    name: string,
    label: string,
    description: string
}

const slug = ref(route.params.slug);

const detailCourses: DetailCourse[] = [
    {
        'name': 'vue',
        'label': 'Vue 3',
        'description': 'Learn how to build front-end environment with Vue 3'
    },
    {
        'name': 'nuxt',
        'label': 'Nuxt 4',
        'description': 'Learn how to build full-stack applications with Nuxt 4'
    },
    {
        'name': 'laravel',
        'label': 'Laravel 11',
        'description': 'Learn how to build full-stack applications with Laravel 11'
    }
];

const currentCourse = detailCourses.find(item => item.name === slug.value);

const back = () => {
    router.back()
}
</script>