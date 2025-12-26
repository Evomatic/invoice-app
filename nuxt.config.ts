import { defineNuxtConfig } from 'nuxt/config'
import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  modules: ['@prisma/nuxt', 'shadcn-nuxt', '@nuxt/eslint'],
  devtools: { enabled: true },
    vite: {    plugins: [      tailwindcss(),    ],  },

  app: {
    baseURL: '/',
    head: {
      title: 'Invoice app',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'A Nuxt 3 application' },
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap',
        },
      ],
    },
  },
  css: ['./app/assets/css/tailwind.css'],
  alias: {  
    '@': './',
  },

  devServer: {
    port: 3004,
  },
  compatibilityDate: '2025-05-15',
  eslint: {
    config: {
      stylistic: true,
    },
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
    componentDir: '~/components/ui',
  },
})
