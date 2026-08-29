<template>
    <div v-if="currentCourse">
        <h2>{{ currentCourse.name }}</h2>
        <p>{{ currentCourse.description }}</p>
        <button @click="back">Back</button>
    </div>
    <p v-else>Course tidak ditemukan</p>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const { courses } = useCourses();

const slug = ref(route.params.slug);

const currentCourse = courses.value.find(item => item.slug === slug.value);

const back = () => {
    router.back()
}
</script>