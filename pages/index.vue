<template>
  <div class="index animate__animated animate__bounce">
    An animated element
    <!-- <div class="parent">
      <div class="child">123456</div>
    </div>
    <div class="partial">partial</div> -->
    <div :class="$style.dynamic" @click="changeColor">dynamic-style</div>
  </div>
</template>

<script setup lang="ts">
// useHead({
//     link: [{ rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css' }],
// })
const color = ref("red");
const changeColor = () => {
  // generate a random color
  color.value = "#" + Math.floor(Math.random() * 16777215).toString(16);
};
</script>

<style module>
/* @import url('animate.css'); */
/* .index {
  font-family: "Cartoon", sans-serif;
} */
.dynamic {
  color: v-bind(color);
  cursor: pointer;
}
</style>

<!-- <style lang="scss">
@use "~/assets/css/other.scss";

.partial {
  color: $primary;
}
</style> -->
