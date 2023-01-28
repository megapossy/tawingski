// import path from "path";
// const srcDir = path.resolve(__dirname);

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt"],

  sourcemap: {
    server: true,
    client: true,
  },
});
