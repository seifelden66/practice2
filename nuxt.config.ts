// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  plugins: [{ src: '~/plugins/aos.ts', mode: 'client' },],
  css: [
    "/assets/main.scss"
  ],
  modules: ['@nuxtjs/tailwindcss','nuxt-swiper']
})
