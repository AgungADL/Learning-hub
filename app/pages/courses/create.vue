<template>
    <h3>Create Course</h3>
    <form @submit.prevent="submitForm">
        <div>
            <label>Name</label>
            <input v-model="form.name" type="text" required>
        </div>

        <div>
            <label>Description</label>
            <textarea v-model="form.description" required></textarea>
        </div>

        <div>
            <label>Description Preview</label>
            <input v-model="form.descriptionPreview" type="text" required>
        </div>

        <div style="display: flex; gap: 12px;">
            <button type="button" @click="back">
                Back
            </button>
            <button type="submit" :disabled="pending">
                {{ pending ? 'Saving...' : 'Save' }}
            </button>
        </div>

        <p v-if="error" style="color: red;">{{ error }}</p>
        <p v-if="success" style="color: green;">{{ success }}</p>
    </form>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
import type { Course } from '~/composables/useCourses'

interface CreateCourseResponse {
    message: string,
    course: Course
}

const router = useRouter()

const form = reactive({
    name: '',
    description: '',
    descriptionPreview: '',
})

const pending = ref(false)
const error = ref<string | null>(null)
const success = ref<string | null>(null)

const submitForm = async () => {
    pending.value = true
    error.value = null
    success.value = null

    try {
        const res = await $fetch<CreateCourseResponse>('/api/courses', {
            method: 'POST',
            body: form
        })
        success.value = res.message

        form.name = ''
        form.description = ''
        form.descriptionPreview = ''
        router.push('/courses')
    } catch (err: any) {
        error.value = err.data.statusMessage || 'Create new course failed'
    } finally {
        pending.value = false
    }
}

function back() {
    router.back()
}
</script>