// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  plugins: [{ src: "plugins/amplify.js", mode: "client" }],
  modules: ["@nuxtjs/color-mode"],
  colorMode: {
    classSuffix: "",
  },
  vite: {
    resolve: {
      alias: {
        "./runtimeConfig": "./runtimeConfig.browser",
      },
    },

    server: {
      fs: {
        strict: false,
      },
    },

    // temp-fix for dev, it breaks build for now (see: https://github.com/nuxt/framework/issues/4916)
    define: {
      "window.global": {},
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
