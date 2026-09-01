<template>
    <div class="header">
        <h3>Courses</h3>
        <button class="create-button" @click="handleCreateCourse">
            Create
        </button>
    </div>
    <p>Choose the course that you want to learn.</p>

    <div v-if="pending">Loading...</div>
    <div v-else-if="error">Error: {{ error.message }}</div>
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

function handleCreateCourse() {
    router.push('/courses/create');
}
</script>

<style scoped>
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.create-button {
    padding: 12px 9px;
    border: solid black 1px;
    border-radius: 20px;
}
.card-container {
    display: flex;
    gap: 8px;
}
</style>