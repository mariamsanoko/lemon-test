<template>
  <nav
    class="hidden h-screen w-64 flex-col gap-2 border-r border-zinc-200 bg-zinc-100 md:sticky md:top-0 md:flex dark:border-white/10 dark:bg-black"
  >
    <div class="flex h-full flex-col">
      <div class="p-2">
        <DashboardUserDropdownMenu />
        <ul class="mt-1 space-y-1">
          <li v-for="link in links" :key="link.to">
            <ULink
              :to="link.to"
              exact
              class="flex h-[30px] items-center gap-2 rounded-md p-2 font-medium hover:bg-zinc-200/80 dark:hover:bg-white/20"
              active-class="text-zinc-900 dark:text-white bg-zinc-200/70 dark:bg-white/10 hover:bg-zinc-200/80 dark:hover:bg-white/20"
              inactive-class="text-[var(--ui-text-muted)]"
            >
              <UIcon :name="link.icon" class="h-4 w-4" />
              <p class="text-sm">{{ link.label }}</p>
            </ULink>
          </li>
        </ul>
      </div>
      <USeparator />
      <div class="flex-1 overflow-y-auto p-2">
        <ul class="space-y-1">
          <li v-for="note in notes" :key="note.id">
            <ULink
              :to="`/dashboard/notes/${note.id}`"
              exact
              class="group flex h-[30px] items-center gap-2 rounded-md p-2 font-medium hover:bg-zinc-200/80 dark:hover:bg-white/20"
              active-class="text-zinc-900 dark:text-white bg-zinc-200/70 dark:bg-white/10 hover:bg-zinc-200/80 dark:hover:bg-white/20"
              inactive-class="text-[var(--ui-text-muted)]"
            >
              <UIcon name="i-lucide-file-text" class="h-4 w-4" />
              <p class="truncate text-sm">{{ note.title }}</p>
            </ULink>
          </li>
        </ul>
      </div>
      <USeparator />
      <footer>
        <SupersaasBanner />
      </footer>
    </div>
  </nav>

  <USlideover v-model:open="isMobileOpen" class="md:hidden" side="left">
    <template #header>
      <div
        class="flex w-full items-center gap-3 rounded-lg px-2 py-2.5 text-sm"
      >
        <img
          src="https://supersaas.dev/logo.png"
          alt="Supersaas Logo"
          class="h-auto w-6"
        />
        <p class="font-bold uppercase">Supersaas</p>
      </div>
    </template>

    <template #body>
      <div class="flex flex-1 flex-col p-2">
        <DashboardUserDropdownMenu />
        <ul class="mt-1 flex flex-col gap-0.5">
          <li v-for="link in links" :key="link.to">
            <ULink
              :to="link.to"
              exact
              @click="isMobileOpen = false"
              class="flex h-[30px] items-center gap-2 px-4 py-2 font-medium"
              active-class="text-zinc-900 dark:text-white bg-zinc-200/70 dark:bg-white/10 rounded-md hover:bg-zinc-200/80 dark:hover:bg-white/20"
              inactive-class="text-[var(--ui-text-muted)]"
            >
              <UIcon :name="link.icon" class="h-4 w-4" />
              <p class="text-sm">{{ link.label }}</p>
            </ULink>
          </li>
        </ul>
      </div>
    </template>

    <template #footer>
      <div class="w-full p-2">
        <SupersaasBanner />
      </div>
    </template>
  </USlideover>
</template>

<script setup lang="ts">
import type { Note } from '@@/types/database'
import { toast } from 'vue-sonner'

const isMobileOpen = useState('mobile-sidebar', () => false)
const notes = useState<Note[]>('notes')

const links = [
  {
    label: 'Dashboard',
    icon: 'i-lucide-home',
    to: '/dashboard',
  },
  {
    label: 'Notes',
    icon: 'i-lucide-file-text',
    to: '/dashboard/notes',
  },
  {
    label: 'Settings',
    icon: 'i-lucide-settings',
    to: '/dashboard/settings',
  },
]
</script>
