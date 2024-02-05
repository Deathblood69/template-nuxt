// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devServer: {
    port: process.env.PORT ? parseInt(process.env.PORT, 10) : 3000,
  },
  devtools: { enabled: true },
  srcDir: "src/",
});
