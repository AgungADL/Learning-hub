<template>
    <p>Silahkan pilih course yang anda mau perdalami.</p>
    <div class="card-container">
        <CourseCard 
            v-for="course in courses"
            :key="course.slug"
            :course="course" 
            @view-course="handleViewCourse" 
        />
    </div>
</template>

<script setup lang="ts">
const router = useRouter()

const courses = [
    {
        slug: 'vue',
        name: 'Vue 3',
        description: 'Learn Vue Fundamentals'
    },
    {
        slug: 'nuxt',
        name: 'Nuxt 3',
        description: 'Learn Nuxt Fundamentals'
    },
    {
        slug: 'laravel',
        name: 'Laravel 3',
        description: 'Learn Laravel Fundamentals'
    }
]

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