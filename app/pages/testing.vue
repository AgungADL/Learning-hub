<template>
    <div class="card">
        <h3>Playground</h3>
        <pre>{{ data }}</pre>
    </div>
</template>

<script setup lang="ts">
const { data } = await useFetch('/api/courses')
</script>

<style scoped>
.card {
    padding: 10px 20px;
    border: solid black 1px;
    border-radius: 10px;
}
</style>