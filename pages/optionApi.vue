<template>
  <div>
    123
    {{ hello }}
  </div>
</template>

<script>
export default defineNuxtComponent({
  /* Use the fetchKey option to provide a unique key */
  fetchKey: "hello",
  async asyncData() {
    return {
      hello: await $fetch("http://localhost:3001/xxx"),
    };
  },
});
</script>
