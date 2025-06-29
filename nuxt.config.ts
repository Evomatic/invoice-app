import { defineNuxtConfig } from "nuxt/config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  rootDir: "src",
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  alias: {
    "@": "/src",
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
});
