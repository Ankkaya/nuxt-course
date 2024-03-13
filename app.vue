<template>
  <!-- <div>
    <Head>
      <Title>{{ title }}</Title>
      <Meta name="description" :content="title" />
      <Style
        type="text/css"
        children="body { background-color: green; }"
      ></Style>
    </Head>

    <h1>{{ title }}</h1>
  </div> -->
  <!-- <NuxtLayout> -->
  <NuxtPage
    :transition="{
      name: 'page',
      mode: 'out-in',
    }"
  />
  <!-- </NuxtLayout> -->
</template>

<script setup lang="ts">
// const title = ref("Hello World");

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Site Title` : "Site Title";
  },
});

const runtimeConfig = useRuntimeConfig();

// if (process.server) {
//     console.log(runtimeConfig.secretKey)
// }
// console.log(runtimeConfig.public)

// console.log(process.env.NXUT_API_SECRET)
// console.log(process.env)

// const appConfig = useAppConfig();

// useHead({
//   title: title,
//   meta: [{ name: "description", content: "My amazing site." }],
//   bodyAttrs: {
//     class: "test",
//   },
//   script: [{ innerHTML: "console.log('Hello world')" }],
// });

// console.log(appConfig);
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

.rotate-enter-active,
.rotate-leave-active {
  transition: all 4s;
}
.rotate-enter-from,
.rotate-leave-to {
  opacity: 0;
  transform: rotate3d(1, 1, 1, 90deg);
}

.layout-enter-active,
.layout-leave-active {
  transition: all 0.4s;
}
.layout-enter-from,
.layout-leave-to {
  filter: grayscale(1);
}

.slide-in-enter-active,
.slide-in-leave-active {
  transition: all 0.4s;
}

.slide-in-enter-from,
.slide-in-leave-to {
  transform: rotate3d(1, 1, 1, 95deg);
}
</style>
