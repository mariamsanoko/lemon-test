export default defineNuxtConfig({
  modules: ['@nuxthub/core', '@nuxt/ui', '@vueuse/nuxt', 'nuxt-auth-utils', 'nuxt-emoji-picker'],
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  runtimeConfig: {
    // @ts-expect-error - Runtime config is not typed
    session: {
      maxAge: 60 * 60 * 24 * 7, // Session expires after 7 days - change it accordingly
    },
  },
  future: { compatibilityVersion: 4 },
  hub: {
    database: true,
  },
  compatibilityDate: '2024-12-01',
})