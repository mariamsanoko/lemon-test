<template>
  <DashboardPage :title="note.title">
    <template #actions>
      <UButton
        :loading="loading"
        @click="deleteNote"
        color="neutral"
        variant="soft"
        icon="i-lucide-trash-2"
      >
        Delete
      </UButton>
      <UButton
        :loading="loading"
        @click="saveNote"
        color="neutral"
        variant="soft"
        icon="i-lucide-globe"
      >
        Publish
      </UButton>
      <UButton
        :loading="loading"
        @click="saveNote"
        color="neutral"
        variant="soft"
      >
        Save
      </UButton>
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
import type { Note, InsertNote } from '@@/types/database'
import { toast } from 'vue-sonner'
const notes = useState<Note[]>('notes')
const route = useRoute()
const fetchedNote = computed(() =>
  notes.value?.find((note) => note.id === route.params.id),
)

const note = ref<Partial<InsertNote>>({
  title: fetchedNote.value?.title ?? 'Untitled note',
  image: fetchedNote.value?.image ?? '',
  content: fetchedNote.value?.content ?? '',
})
const loading = ref(false)
const saveNote = async () => {
  try {
    await $fetch(`/api/notes/${route.params.id}`, {
      method: 'PATCH',
      body: note.value,
    })
    notes.value = notes.value?.map((n: Note) =>
      n.id === route.params.id ? note.value : n,
    )
    toast.success('Note saved')
  } catch (error) {
    toast.error('Failed to save note')
    console.error(error)
  }
}

const deleteNote = async () => {
  try {
    await $fetch(`/api/notes/${route.params.id}`, {
      method: 'DELETE',
    })
    notes.value = notes.value?.filter((n: Note) => n.id !== route.params.id)
    toast.success('Note deleted')
    navigateTo('/dashboard/notes')
  } catch (error) {
    toast.error('Failed to delete note')
    console.error(error)
  }
}
</script>
