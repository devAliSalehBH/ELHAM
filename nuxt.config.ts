// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "nuxt-icon",
    "@hypernym/nuxt-anime",
    "@formkit/auto-animate",
  ],
  gsap: {
    extraPlugins: {
      scrollTrigger: true,
      scrollTo: true,
    },
  },

  css: ["~/assets/css/main.css"],
  googleFonts: {
    families: {
      Jost: [400, 500, 600, 700],
      "El Messiri": [400, 500, 600, 700],
      Manjari: [400, 500, 600, 700],
    },
  },
});
