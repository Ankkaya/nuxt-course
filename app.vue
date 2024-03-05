<template>
  <div>
    <NuxtWelcome />
  </div>
</template>

<script setup lang="ts">
const runtimeConfig = useRuntimeConfig()

console.log(runtimeConfig.secretKey)
console.log(runtimeConfig.public)

console.log(process.env)
</script>
