<template>
  <div>
    <pre>default layout</pre>
    <slot />

    <div v-if="$route.params.id">
      <NuxtLink :to="prev">⬅️</NuxtLink> |
      <NuxtLink :to="next">➡️</NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute();
const id = computed(() => Number(route.params.id || 1));
const prev = computed(() => "/" + (id.value - 1));
const next = computed(() => "/" + (id.value + 1));
</script>

<style scoped>
div {
  background-color: lightgreen;
}
</style>
