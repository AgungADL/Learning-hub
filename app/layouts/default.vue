<template>
    <div class="main-container">
        <div class="header">
            <h1>Learning Hub</h1>
            <div class="nav">
                <span v-for="(nav, index) in navs" :key="index">
                    <NuxtLink :to="nav.to">{{ nav.label }}</NuxtLink>
                    <span v-if="isPipeShow(index)" style="margin-left: 8px;">|</span>
                </span>
            </div>
        </div>
        <div class="content">
            <slot />
        </div>
    </div>
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

<style scoped>
.main-container {
    padding: 14px;
}
.header {
    padding-bottom: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: solid black 1px;
    border-radius: 8px;
}
.content {
    margin-top: 12px;
    padding: 0 24px 24px 24px;
    border: solid black 1px;
    border-radius: 8px;
    min-height: 28rem;
}
.nav {
    display: flex;
    gap: 8px;
    list-style-type: none;
}
</style>