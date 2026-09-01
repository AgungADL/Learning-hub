<template>
    <div v-if="pending">Loading...</div>
    <div v-else-if="error">Failed to load course.</div>
    <div v-else-if="currentCourse">
        <h2>{{ currentCourse.name }}</h2>
        <p>{{ currentCourse.description }}</p>
        <button @click="back">Back</button>
    </div>
    <div v-else>
        Course tidak ditemukan
    </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import type { Course } from '~/composables/useCourses';

const route = useRoute();
const router = useRouter();
const { getCourse } = useCourses();

const slug = String(route.params.slug);

const { data: currentCourse, pending, error } = await useAsyncData<Course>(
    `current-${slug}`,
    () => getCourse(slug)
)

const back = () => {
    router.back()
}
</script>