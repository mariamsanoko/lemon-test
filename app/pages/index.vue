<template>
  <main>
    <header>
      <UContainer class="flex items-center gap-3 py-2">
        <div class="flex items-center gap-3">
          <img src="/logo.png" alt="Logo" class="h-8" />
          <p class="font-semibold">Supersaas Lite</p>
        </div>
        <span class="flex-1" />
        <UButton color="neutral" variant="soft" to="/login">Login</UButton>
        <UButton color="neutral" to="/dashboard">App</UButton>
      </UContainer>
    </header>
    <section class="py-20">
      <UContainer>
        <div class="grid grid-cols-1 place-items-center gap-4 md:grid-cols-2">
          <div>
            <h1 class="max-w-sm text-7xl font-bold">Build Something Amazing</h1>
            <p class="mt-4 text-xl text-gray-500">
              Potion is a free and open source notes template made with
              Supersaas Lite.
            </p>
            <div class="flex items-center gap-3 mt-4">
              <UButton color="neutral" size="lg" to="/dashboard"
                >Get Started</UButton
              >
              <UButton color="neutral" size="lg" variant="soft" to="/login">
                Login
              </UButton>
            </div>
          </div>
          <img src="/ship.svg" alt="Ship" class="w-96" />
        </div>
      </UContainer>
    </section>
  </main>
</template>
