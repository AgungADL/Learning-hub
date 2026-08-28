<template>
    <div class="card">
        <h2>{{ course.name }}</h2>
        <p>{{ course.description }}</p>
        <button @click="viewCourse(course.slug)">
            View Course
        </button>
    </div>
</template>

<script setup lang="ts">
interface Course {
    slug: string,
    name: string,
    description: string
}

defineProps<{
    course: Course
}>()

const emit = defineEmits<{
    'view-course': [slug: string]
}>()

const viewCourse = (slug: string) => {
    emit('view-course', slug)
}
</script>

<style scoped>
.card {
    padding: 16px;
    border: solid 1px;
    border-radius: 10px;
}
</style>