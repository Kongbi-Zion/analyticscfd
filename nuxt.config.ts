// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  plugins: [{ src: "plugins/amplify.js", mode: "client" }],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
