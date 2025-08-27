<template>
  <DashboardPage title="Notes">
    <template #actions>
      <UButton
        label="New note"
        to="/dashboard/notes/new"
        color="neutral"
        variant="soft"
      />
    </template>
    <div>
      <UContainer class="py-8">
        <div
          class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        >
          <DashboardNoteCard
            v-for="note in notes"
            :key="note.id"
            :note="note"
          />
        </div>
      </UContainer>
    </div>
  </DashboardPage>
</template>

<script setup lang="ts">
import type { Note } from '@@/types/database'
const notes = useState<Note[]>('notes')
</script>
