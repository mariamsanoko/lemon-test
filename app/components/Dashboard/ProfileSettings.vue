<template>
  <UCard>
    <template #header>
      <div class="flex items-center justify-between">
        <h2 class="font-display text-lg leading-7 font-semibold">
          Personal Information
        </h2>
      </div>
      <p class="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-400">
        Your personal information is not shared with anyone.
      </p>
    </template>
    <UForm
      class="max-w-lg space-y-6"
      :schema="schema"
      :state="state"
      @submit="onSubmit"
    >
      <!-- Avatar display only -->
      <UFormField label="Avatar" name="avatarUrl" size="lg">
        <UAvatar :src="state.avatarUrl" size="xl" :alt="user?.name" />
      </UFormField>

      <!-- Email field (readonly) -->
      <UFormField label="Email" size="lg">
        <UInput
          :model-value="user?.email"
          readonly
          disabled
          class="w-full"
          variant="subtle"
        />
      </UFormField>

      <!-- Account ID field (readonly) -->
      <UFormField label="Account ID" size="lg">
        <UInput
          :model-value="user?.id"
          readonly
          disabled
          class="w-full"
          variant="subtle"
        />
      </UFormField>

      <!-- Name field -->
      <UFormField label="Full name" name="name" size="lg">
        <UInput v-model="state.name" placeholder="Full name" class="w-full" />
      </UFormField>

      <UButton
        type="submit"
        :loading="loading"
        :disabled="loading"
        size="lg"
        color="neutral"
      >
        Save changes
      </UButton>
    </UForm>
  </UCard>
</template>

<script setup lang="ts">
import { z } from 'zod'
import type { FormSubmitEvent } from '#ui/types'
import { toast } from 'vue-sonner'

const { user } = await useUserSession()
const loading = ref(false)
const { fetch: refreshSession } = useUserSession()

const schema = z.object({
  name: z.string().min(1, 'Name is required'),
  avatarUrl: z.string().optional(),
})

type Schema = z.output<typeof schema>

const state = reactive<Schema>({
  name: user.value?.name || '',
  avatarUrl: user.value?.avatarUrl || '',
})

async function onSubmit(event: FormSubmitEvent<Schema>) {
  try {
    loading.value = true
    await $fetch('/api/account/update', {
      method: 'POST',
      body: event.data,
    })
    await refreshSession()
    toast.success('Profile updated successfully')
  } catch (error: any) {
    console.error(error)
    toast.error('An error occurred while updating the profile.')
  } finally {
    loading.value = false
  }
}
</script>
