<template>
  <DashboardPage :title="note.title">
    <template #actions>
      <UButton
        :loading="loading"
        @click="saveNote"
        color="neutral"
        variant="soft"
        >Save</UButton
      >
    </template>
    <div>
      <DashboardNoteMedia v-model="note.image" />
      <UContainer class="group mx-auto max-w-5xl py-12">
        <UTextarea
          color="neutral"
          variant="none"
          placeholder="Untitled note"
          size="xl"
          :ui="{ base: 'text-5xl font-bold resize-none' }"
          autoresize
          :rows="1"
          v-model="note.title"
          autofocus
          :autofocusDelay="500"
          class="w-full"
        />
        <div class="h-12" />
        <UTextarea
          v-model="note.content"
          placeholder="Write your note here..."
          color="neutral"
          variant="none"
          :ui="{ base: 'text-xl resize-none' }"
          autoresize
          :rows="1"
          class="w-full"
        />
      </UContainer>
    </div>
  </DashboardPage>
</template>

<script setup lang="ts">
import type { InsertNote, Note } from '@@/types/database'
import { toast } from 'vue-sonner'
const note = ref<Partial<InsertNote>>({
  title: 'Untitled note',
  image: '',
  content: '',
})
const loading = ref(false)
const notes = useState<Note[]>('notes')

const saveNote = async () => {
  try {
    const data = await $fetch('/api/notes', {
      method: 'POST',
      body: note.value,
    })
    toast.success('Note saved')
    if (data.id) {
      notes.value?.push(data)
      return navigateTo(`/dashboard/notes/${data.id}`)
    }
  } catch (error) {
    toast.error('Failed to save note')
    console.error(error)
  }
}
</script>
