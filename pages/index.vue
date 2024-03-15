<template>
  <div>
    <h1>Home page</h1>
    <NuxtLink to="/user/userInfo">userInfo</NuxtLink>
    <div></div>
    <NuxtLink to="/optionApi">options api support</NuxtLink>
    <!-- {{ data }} -->
    <!-- <div v-if="pending">Loading...</div>
    <div v-else>loading finish {{ result }}</div> -->
    <!-- {{ data }} -->
    <!-- <button @click="refresh">Refresh data</button>
    <button @click="id++">Change id</button> -->
    <!-- <div v-if="status === 'idle'">
      <button @click="execute">Get data</button>
    </div>

    <div v-else-if="pending">Loading comments...</div>

    <div v-else>
      {{ data }}
    </div> -->
    {{ data }}
  </div>
</template>

<script setup lang="ts">
import superjson from "superjson";

const { data } = await useFetch("/api/superjson", {
  transform: (value) => {
    return superjson.parse(value as unknown as string);
  },
});

console.log(data);
// import { fetchWithCookie } from "~/composables/fetch";

// const event = useRequestEvent();
// const { data } = await useAsyncData(() =>
//   fetchWithCookie(event!, "http://localhost:3001/xxx")
// );

// onMounted(() => {
//   console.log(document.cookie);
// });
// const headers = useRequestHeaders(["cookie"]);
// const { data } = useFetch("http://localhost:3001/xxx", {
//   headers,
// });
// const { data, status, execute, pending } = await useFetch(
//   "http://localhost:3001/xxx",
//   {
//     immediate: false,
//   }
// );
// const id = ref(0);
// const { data, refresh } = await useFetch("http://localhost:3001/xxx", {
//   watch: [id],
// });
// console.log(data);
// const { data: result, status } = await useFetch("http://localhost:3001/xxx", {
//   pick: ["name"],
//   server: false,
// });
// console.log(result);
// watch(status, (newStatus, oldStatus) => {
//   console.log(oldStatus);
//   console.log(newStatus);
//   console.log(result);
// });
// const { pending, data: result } = useFetch("http://localhost:3001/xxx", {
//   lazy: true,
// });

// useHead({
//   script: [
//     {
//       src: "https://third-party-script.com",
//       tagPosition: "bodyClose",
//     },
//   ],
// });

// const { data: result } = await useFetch("http:localhost:3001/xxx");
// console.log(result);

// const result = ref();

// async function test() {
//   result.value = await $fetch("http://localhost:3001/xxx", {
//     method: "GET",
//   });
//   console.log(result);
// }

// test();

// const { data, error } = await useAsyncData("xxx", () => {
//   return $fetch("http://localhost:3001/xxx", {
//     method: "GET",
//   });
// });
// console.log(data, error);

// const { data, error } = await useAsyncData("xxx", async () => {
//   const [result1, result2] = await Promise.all([
//     $fetch("http://localhost:3001/xxx"),
//     $fetch("http://localhost:3001/xxx"),
//   ]);
//   return { result1, result2 };
// });
// console.log(data, error);

// const {
//   data: result,
//   pending,
//   status,
// } = useFetch("http://localhost:3001/xxx", {
//   server: false,
// });
// console.log(result);
// console.log(pending);
// console.log(status);

// watch(status, (newStatus, oldStatus) => {
//   console.log(oldStatus);
//   console.log(newStatus);
//   console.log(result);
// });
</script>
