<template>
    <div v-if="pending">Loading...</div>
    <div v-else-if="error">Failed to load course.</div>
    <div v-else-if="currentCourse">
        <h2>{{ currentCourse.name }}</h2>
        <p>{{ currentCourse.description }}</p>

        <div style="display: flex; gap: 8px;">
            <button @click="back">Back</button>
            <button @click="handleEdit">Edit</button>
            <button @click="handleDelete" style="color: white; background-color: red; border-color: red;">
                {{ loadingDelete ? 'Deleting...' : 'Delete' }}
            </button>
        </div>

        <div v-if="errorDelete" style="color: red;">Failed to delete course</div>
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
const loadingDelete = ref(false)
const errorDelete = ref<string | null>(null)

const { data: currentCourse, pending, error } = await useAsyncData<Course>(
    `current-${slug}`,
    () => getCourse(slug)
)

const back = () => {
    router.back()
}
const handleEdit = () => {
    router.push(`/courses/${slug}/edit`)
}
const handleDelete = async () => {
    const isAccept = confirm("Are you sure want to delete this course?")
    if (isAccept) {
        loadingDelete.value = true
        errorDelete.value = null

        try {
            await $fetch(`/api/courses/${slug}`, {
                method: 'DELETE',
            })

            await refreshNuxtData('courses')
            router.push('/courses')
        } catch (err: any) {
            errorDelete.value = err.data.statusMessage || 'Delete Course Failed'
        } finally {
            loadingDelete.value = false
        }
    }
}
</script>