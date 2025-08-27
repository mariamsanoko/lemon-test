<template>
  <NuxtLink
    :to="`/dashboard/notes/${note.id}`"
    class="block overflow-hidden rounded-xl border border-zinc-200 bg-white dark:border-white/10 dark:bg-black"
  >
    <img
      v-if="note.image"
      :src="note.image"
      alt=""
      class="h-32 w-full object-cover"
    />
    <div v-else class="h-32 w-full bg-zinc-200 dark:bg-white/10" />

    <div class="p-4">
      <h3 class="text-md font-semibold">{{ note.title }}</h3>
      <p class="mt-2 truncate text-zinc-500 dark:text-zinc-400">
        {{ note.content }}
      </p>
      <p class="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
        {{ useTimeAgo(new Date(note.createdAt ?? '')) }}
      </p>
    </div>
  </NuxtLink>
</template>

<script lang="ts" setup>
import { useTimeAgo } from '@vueuse/core'

import type { Note } from '@@/types/database'
defineProps<{
  note: Note
}>()
</script>
