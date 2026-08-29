<template>
    <h1>Learning Hub</h1>
    <ul style="display: flex; gap: 8px; list-style-type: none;">
        <li v-for="(nav, index) in navs" :key="index">
            <NuxtLink :to="nav.to">{{ nav.label }}</NuxtLink>
            <span v-if="isPipeShow(index)" style="margin-left: 8px;">|</span>
        </li>
    </ul>
    <slot />
</template>

<script setup lang="ts">
const navs = [
    { 'label': 'Home', 'to': '/' },
    { 'label': 'Courses', 'to': '/courses' },
    { 'label': 'Profile', 'to': '/profile' },
    { 'label': 'Testing', 'to': '/testing' }
]

const isPipeShow = (index: number) => {
    const offset = navs.length - 1;
    if (index >= offset) return false
    return true
} 
</script>