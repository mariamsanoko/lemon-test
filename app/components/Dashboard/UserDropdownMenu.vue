<template>
  <div class="flex items-center justify-between">
    <UDropdownMenu
      :items="items"
      :ui="{
        content: 'w-48',
      }"
      :content="{
        align: 'start',
      }"
    >
      <UButton
        :avatar="{
          src:
            user?.avatarUrl ||
            `https://api.dicebear.com/9.x/thumbs/svg?seed=${user?.name}`,
          alt: user?.name,
          class: 'rounded ring-1 ring-zinc-200 dark:ring-white/10',
        }"
        :label="user?.name"
        color="neutral"
        trailing-icon="i-lucide-chevron-down"
        variant="soft"
        class="p-2 font-medium"
      />
    </UDropdownMenu>
    <UButton
      icon="i-lucide-square-pen"
      size="xs"
      color="neutral"
      variant="soft"
      to="/dashboard/notes/new"
    />
  </div>
</template>

<script setup lang="ts">
const { user, clear } = useUserSession()

async function signOut() {
  await clear()
  await navigateTo('/')
}
const items = ref([
  [
    {
      label: user.value?.name,
      avatar: {
        src: user.value?.avatarUrl,
      },
      type: 'label',
    },
  ],
  [
    {
      label: 'Billing',
      icon: 'i-lucide-credit-card',
      to: '/dashboard/billing',
    },
    {
      label: 'Settings',
      icon: 'i-lucide-cog',
      to: '/dashboard/settings',
    },
  ],
  [
    {
      label: 'Theme',
      icon: 'i-lucide-palette',
      children: [
        [
          {
            label: 'Light',
            icon: 'i-lucide-sun',
            onSelect: () => setColorMode('light'),
          },
          {
            label: 'Dark',
            icon: 'i-lucide-moon',
            onSelect: () => setColorMode('dark'),
          },
        ],
        [
          {
            label: 'System',
            icon: 'i-lucide-monitor',
            onSelect: () => setColorMode('system'),
          },
        ],
      ],
    },
  ],
  [
    {
      label: 'GitHub',
      icon: 'i-lucide-github',
      to: 'https://github.com/nuxt/ui',
      target: '_blank',
    },
    {
      label: 'Support',
      icon: 'i-lucide-life-buoy',
    },
    {
      label: 'Docs',
      icon: 'i-lucide-cloud',
    },
  ],
  [
    {
      label: 'Logout',
      icon: 'i-lucide-log-out',
      onSelect: signOut,
      color: 'error' as const,
    },
  ],
])

const colorMode = useColorMode()

function setColorMode(mode: string) {
  colorMode.preference = mode
}
</script>
