<template>
  <div class="relative">
    <div
      class="relative flex h-64 items-center justify-center bg-zinc-50 bg-cover bg-center dark:bg-white/10 group"
      :style="{ backgroundImage: `url(${modelValue})` }"
    >
      <UModal>
        <UButton
          icon="i-lucide-image-plus"
          size="lg"
          color="neutral"
          variant="soft"
          class="rounded-full"
          :class="{ 'opacity-0 group-hover:opacity-100': modelValue }"
        />

        <template #content>
          <div class="grid grid-cols-4 gap-2 p-2">
            <div
              v-for="image in randomImages"
              :key="image"
              @click="selectImage(image)"
              class="cursor-pointer hover:opacity-80"
            >
              <img :src="image" class="h-24 w-full rounded-lg object-cover" />
            </div>
          </div>
        </template>
      </UModal>
    </div>
  </div>
</template>

<script lang="ts" setup>
const modelValue = defineModel()

const selectImage = (image: string) => {
  modelValue.value = image
}

const randomImages = [
  '/images/abstract-shpere.jpg',
  '/images/ball.jpg',
  '/images/blocks.jpg',
  '/images/building.jpg',
  '/images/christmas.jpg',
  '/images/crowded-city.jpg',
  '/images/dark.jpg',
  '/images/egypt.jpg',
  '/images/furniture.jpg',
  '/images/meteor.jpg',
  '/images/moon.jpg',
  '/images/mountains.jpg',
  '/images/plants.jpg',
  '/images/river.jpg',
  '/images/sunset.jpg',
  '/images/waves-2.jpg',
  '/images/waves.jpg',
  '/images/white-waves.jpg',
  '/images/yosemite.jpg',
  '/images/cloudy-mountain.jpg',
  '/images/golden-waves.jpg',
  '/images/lake.jpg',
  '/images/windows.jpg',
  '/images/lighthouse.jpg',
]
</script>
