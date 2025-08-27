<template>
  <div class="group p-2 pb-0 transition-all duration-300">
    <a
      href="https://supersaas.dev?ref=supersaas_lite"
      target="_blank"
      class="block rounded-t-3xl bg-zinc-950 p-2 transition-shadow duration-300 hover:ring-4 hover:ring-gray-300 dark:bg-zinc-800 dark:hover:ring-white/10"
    >
      <div
        class="shimmer-container flex items-center gap-2 rounded-full bg-zinc-700 p-1.5"
      >
        <img
          src="https://supersaas.dev/logo.png"
          alt="Supersaas Logo"
          size="xs"
          class="h-6 w-auto ml-1"
        />
        <p class="text-sm font-bold text-white">Get Supersaas pro</p>
        <UIcon
          name="i-lucide-chevron-right"
          class="mr-1 ml-auto h-4 w-4 text-white/50"
        />
      </div>
      <ul
        class="max-h-0 origin-top translate-y-2 transform space-y-1 overflow-hidden pl-3 opacity-0 transition-all duration-500 group-hover:max-h-[300px] group-hover:translate-y-0 group-hover:opacity-100"
      >
        <li class="mt-2 flex items-center gap-3">
          <UIcon name="i-lucide-check" class="h-4 w-4 text-green-500" />
          <p class="text-xs text-white/80 dark:text-white">
            Email/Password login
          </p>
        </li>
        <li class="flex items-center gap-3">
          <UIcon name="i-lucide-check" class="h-4 w-4 text-green-500" />
          <p class="text-xs text-white/80">Magic link login</p>
        </li>
        <li class="flex items-center gap-3">
          <UIcon name="i-lucide-check" class="h-4 w-4 text-green-500" />
          <p class="text-xs text-white/80">Passkeys</p>
        </li>
        <li class="flex items-center gap-3">
          <UIcon name="i-lucide-check" class="h-4 w-4 text-green-500" />
          <p class="text-xs text-white/80">Stripe integration</p>
        </li>
        <li class="flex items-center gap-3">
          <UIcon name="i-lucide-check" class="h-4 w-4 text-green-500" />
          <p class="text-xs text-white/80">Lemonsqueezy integration</p>
        </li>
        <li class="flex items-center gap-3">
          <UIcon name="i-lucide-check" class="h-4 w-4 text-green-500" />
          <p class="text-xs text-white/80">Email notifications</p>
        </li>
        <li class="flex items-center gap-3">
          <UIcon name="i-lucide-check" class="h-4 w-4 text-green-500" />
          <p class="text-xs text-white/80">Super Admin dashboard</p>
        </li>
        <li class="flex items-center gap-3">
          <UIcon name="i-lucide-check" class="h-4 w-4 text-green-500" />
          <p class="text-xs text-white/80">Rate limiting</p>
        </li>
      </ul>
    </a>
  </div>
</template>

<style>
.shimmer-container {
  position: relative;
  overflow: hidden;
}

.shimmer-container::after {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  filter: blur(40px);
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.3) 50%,
    rgba(255, 255, 255, 0) 100%
  );
  transform: rotate(30deg);
  animation: shimmer 3s infinite;
}

@keyframes shimmer {
  0% {
    transform: translateX(-100%) rotate(30deg);
  }
  100% {
    transform: translateX(100%) rotate(30deg);
  }
}
</style>
