<script setup lang="ts">
const sounds = [
    { id: 1, name: 'Sound 1' },
    { id: 2, name: 'Sound 2' },
    { id: 3, name: 'Sound 3' },
];
</script>

<template>
    <div id="sounds-list">
        <h2>Sounds</h2>
        <ul>
            <li v-for="sound in sounds" :key="sound.id">
                {{ sound.name }}
            </li>
        </ul>
    </div>
</template>

<style scoped>
#sounds-list {
    flex: 1 1 30rem;
}
</style>
