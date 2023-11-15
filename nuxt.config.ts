// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  css: [
    "/assets/main.scss"
  ],
  app: {
    head: {
        link: [
            { rel: 'stylesheet', href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" }
        ]
    },
    
},
  modules: ['@nuxtjs/tailwindcss', '@vueuse/nuxt', 'nuxt-swiper', '@nuxtjs/i18n'],
  i18n: {
    locales: [
      { code: 'ar', iso: 'ar', file: 'ar.ts', dir: 'rtl' },
      { code: 'en', iso: 'en-US', file: 'en.ts', dir: 'ltr' },
    ],

    lazy: true,
    langDir: 'lang/',

  }
})
