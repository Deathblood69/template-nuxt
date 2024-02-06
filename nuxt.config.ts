import vuetify, {transformAssetUrls} from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  build: {
    transpile: ['vuetify'],
  },
  css: ['vuetify/styles', '@mdi/font/css/materialdesignicons.css'],
  devServer: {
    port: 3000,
  },
  devtools: {enabled: true},
  modules: [
    '@pinia/nuxt',
    '@nuxt/test-utils/module',
    async (_options: {}, nuxt: Record<string, any>) => {
      // @ts-ignore
      nuxt.hooks.hook('vite:extendConfig', (config) =>
        config.plugins.push(vuetify()),
      )
    },
  ],
  runtimeConfig: {
    public: {
      API_BASE: process.env.API_BASE,
      NUXT_BASE_URL: process.env.NUXT_BASE_URL,
      AUTHOR: 'Romain DIASPARRA',
    },
  },
  srcDir: 'src/',
  typescript: {typeCheck: true, strict: true},
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
    server: {
      proxy: {
        '/api': {
          target: 'http://localhost:8080/',
          changeOrigin: true,
        },
      },
    },
  },
})
