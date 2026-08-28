<template>
    <p>Silahkan pilih course yang anda mau perdalami.</p>
    <div>
        <div v-for="(course, index) in courses" :key="index">
            <NuxtLink :to="'/courses/' + course" style="max-width: 100px;">{{ course }}</NuxtLink>
        </div>
    </div>
</template>

<script setup lang="ts">
const courses = ['Vue 3', 'Nuxt 4', 'Laravel 11'];
</script>