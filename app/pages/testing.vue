<template>
    <div class="card">
        <h3>Playground</h3>
        <button @click="submit">add</button>
    </div>
</template>

<script setup lang="ts">
async function submit() {
    const { body }: any = await $fetch('/api/courses', {
        method: 'post',
        body: { test: 123, makan: 'minum' }
    })

    console.log('body nih bos', body)
}
</script>

<style scoped>
.card {
    padding: 10px 20px;
    border: solid black 1px;
    border-radius: 10px;
}
</style>