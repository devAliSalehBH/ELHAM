// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "nuxt-icon",
    "@hypernym/nuxt-anime",
    "@formkit/auto-animate"
  ],
  css: ["~/assets/css/main.css"],
  googleFonts: {
    families: {
      Jost: [400, 500, 600, 700],
      "El Messiri": [400, 500, 600, 700],
      Manjari: [400, 500, 600, 700],
    },
  },
});
