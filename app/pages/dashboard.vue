<template>
  <main class="flex">
    <DashboardSidebar />
    <NuxtPage />
  </main>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: ['auth'],
})
const { data } = await useFetch('/api/notes')
useState('notes', () => data.value)
</script>
