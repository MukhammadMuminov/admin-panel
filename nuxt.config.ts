import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/tailwind.css'],

  routeRules: {
    '/': { redirect: '/dashboard' },
  },

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui'
  },

  modules: ['shadcn-nuxt'],
})