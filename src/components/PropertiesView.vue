<script setup lang="ts">
import { ref, reactive } from 'vue';

const containerCollapsed = ref<boolean>(false);
</script>

<template>
    <div id="properties-view" class="collapsible-container" :class="{ collapsed: containerCollapsed }">
        <h2>Properties</h2>
        <button @click="containerCollapsed = !containerCollapsed" class="collapse-button">
            {{ containerCollapsed ? '展开' : '折叠' }}
        </button>
        <div v-show="!containerCollapsed">
            <p>这里将显示选中音效的属性。</p>
        </div>
    </div>
</template>

<style scoped>
#properties-view {
    flex: 1 1 auto;
}
</style>