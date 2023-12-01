// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['nuxt-primevue', "@nuxtjs/tailwindcss"],
  primevue: {
    options: {
      ripple: true
    },
    components: {
      include: ['Button', 'Dropdown']
    }
  },
  css: ['primevue/resources/themes/saga-blue/theme.css', "primevue/resources/primevue.css"],
})