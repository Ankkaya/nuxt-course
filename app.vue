<template>
    <NuxtPage />
</template>

<script setup lang="ts">
const runtimeConfig = useRuntimeConfig()

// if (process.server) {
//     console.log(runtimeConfig.secretKey)
// }
// console.log(runtimeConfig.public)

// console.log(process.env.NXUT_API_SECRET)
// console.log(process.env)

const appConfig = useAppConfig()

console.log(appConfig)
</script>
