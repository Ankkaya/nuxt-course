// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    runtimeConfig: {
        secretKey: 'my-secret-key',
        public: {
            baseURL: '/api',
        },
    },
})

console.log(process.env)
