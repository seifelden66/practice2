// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  css: [
    "/assets/main.scss"
  ],
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
