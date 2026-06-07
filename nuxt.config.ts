export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
  ],
  
  typescript: {
    strict: true,
  },
  
  css: [
    '~/assets/css/main.css',
  ],
  
  app: {
    head: {
      title: 'LeiMall - AI驱动的全球跨境电商SaaS平台',
      htmlAttrs: {
        lang: 'zh',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'LeiMall - 面向全球中小企业的一站式AI跨境电商SaaS平台' },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap' },
      ],
    },
  },
  
  nitro: {
    preset: 'cloudflare-pages',
  },
})