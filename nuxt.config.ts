// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: [
    '@nuxt/icon',
    '@nuxt/fonts',
    'nuxt-swiper',
    '@vueuse/nuxt',
    "@nuxt/image",
  ],

  fonts: {
    families: [
      { name: 'Poppins', provider: 'google' },
    ],
  },
  runtimeConfig: {
    public: {
      baseUrl: 'https://v2.afrik-flow-api.username-blakvghost.com',
      apiUrl: 'https://v2.afrik-flow-api.username-blakvghost.com/api/v1',
      storageUrl: 'https://v2.afrik-flow-api.username-blakvghost.com/storage',
      appVersion: '1.0.0',
      appUrl: 'https://afrikflow-front-end.vercel.app',
      appEmail: 'ferraydigitalsolutions@gmail.com',
      appPhone: '+229 0196 4311 50'
    },
  }
})