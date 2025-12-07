import { defineNuxtConfig } from "nuxt/config";
import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  vite: {
    plugins: [
      tailwindcss(),
    ],
    resolve: {
      alias: {
        '.prisma/client/index-browser': './node_modules/.prisma/client/index-browser.js',
      },
    },
  },
  alias: {
    "@/*": "./*",
  },

  app: {
    baseURL: "/",
    head: {
      title: "Invoice app",
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: "A Nuxt 3 application" },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap",
        },
      ],
    },
  },

  devServer: {
    port: 3004,
  },

  modules: ["@prisma/nuxt", 'shadcn-nuxt', '@nuxtjs/tailwindcss', "@nuxt/eslint"],
  eslint: {
    config: {
      stylistic: true
    }
  },
  css: ['~/assets/css/tailwind.css'],
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
});