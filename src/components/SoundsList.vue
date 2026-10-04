<script setup lang="ts">
import { ref, reactive } from 'vue';

const containerCollapsed = ref<boolean>(false);

const sounds = [
    { id: 1, name: 'Sound 1' },
    { id: 2, name: 'Sound 2' },
    { id: 3, name: 'Sound 3' },
];
</script>

<template>
    <div id="sounds-list" class="collapsible-container" :class="{ collapsed: containerCollapsed }">
        <h2>Sounds</h2>
        <button @click="containerCollapsed = !containerCollapsed" class="collapse-button">
            {{ containerCollapsed ? '展开' : '折叠' }}
        </button>
        <div v-show="!containerCollapsed">
            <ul>
                <li v-for="sound in sounds" :key="sound.id">
                    {{ sound.name }}
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
#sounds-list {
    flex: 1 1 30rem;
}
</style>
