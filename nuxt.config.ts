// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    // pageTransition: { name: "page", mode: "out-in" },
    layoutTransition: {
      name: "layout",
      mode: "out-in",
    },
    // pageTransition: false,
    // layoutTransition: false,
  },
  runtimeConfig: {
    secretKey: "my-secret-key",
    public: {
      baseURL: "/api",
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/css/_colors.scss" as *;',
        },
      },
    },
  },
  css: ["~/assets/css/main.css"],
  // app: {
  //     head: {
  //         link: [
  //             { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css' },
  //         ],
  //     },
  // },
});

// console.log(process.env)
