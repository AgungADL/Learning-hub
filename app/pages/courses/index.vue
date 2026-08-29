<template>
    <p>Silahkan pilih course yang anda mau perdalami.</p>

    <div v-if="pending">Loading...</div>
    <div v-else-if="error">Terjadi kesalahan: {{ error.message }}</div>
    <div v-else class="card-container">
        <CourseCard 
            v-for="course in courses"
            :key="course.slug"
            :course="course" 
            @view-course="handleViewCourse" 
        />
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter()
const { courses, pending, error } = useCourses() 

function handleViewCourse(slug: string) {
    router.push(`/courses/${slug}`);
}
</script>

<style scoped>
.card-container {
    display: flex;
    gap: 8px;
}
</style>