// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: false },

  ssr: true,

  modules: ['@nuxt/content'],

  content: {
    contentHead: false,
    markdown: {
      remarkPlugins: [ "remark-math" ],
      rehypePlugins: [ "rehype-katex" ],
    },
  },

  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  app: {
    head: {
      title: process.env.APP_NAME,
      htmlAttrs: { lang: 'ja' },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "stylesheet", href: "https://unpkg.com/destyle.css@3.0.2/destyle.min.css" },
        { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/katex@0.15.3/dist/katex.min.css", integrity: "sha384-KiWOvVjnN8qwAZbuQyWDIbfCLFhLXNETzBQjA/92pIowpC0d2O3nppDGQVgwd2nB", crossorigin: "anonymous" },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Zen+Dots&family=Zen+Maru+Gothic:wght@300;400;500;700;900&display=swap", crossorigin: "" },
      ],
    },
  },

  runtimeConfig: {
    public: {
      appName: process.env.APP_NAME,
    },
  },
})
