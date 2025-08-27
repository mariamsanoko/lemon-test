<template>
  <main class="flex min-h-screen items-center justify-center">
    <div class="mx-auto w-full max-w-sm space-y-4">
      <img
        src="https://supersaas.dev/logo.png"
        alt="logo"
        class="mx-auto h-10 w-auto"
      />
      <div class="text-center">
        <p class="text-lg font-bold">Sign in to your account</p>
        <p class="text-sm text-gray-500">
          Welcome back! Please sign in to continue.
        </p>
      </div>
      <AuthSocialLogin />
    </div>
  </main>
</template>
  