<script setup lang="ts">
import AppInfo from './components/AppInfo.vue';
import SoundsList from './components/SoundsList.vue';
import PropertiesView from './components/PropertiesView.vue';
</script>

<template>
  <div id="contents">
    <AppInfo />
    <SoundsList />
    <PropertiesView />
  </div>
</template>

<style scoped>
#contents {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: start;
  flex-wrap: wrap;
  gap: 1rem;
  height: 100%;
}

#contents > * {
  border: 1px solid var(--c-border);
  border-radius: 1rem;
  padding: 1rem;
}

@media (max-width: 768px) {
  #contents {
    flex-wrap: nowrap;
  }
}
</style>
