<template>
  <div>
    <div>this is userInfo page</div>
    <NuxtLink to="/">Home page</NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { gsap } from "gsap";

import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

useHead({
  title: "userInfo",
});

definePageMeta({
  // middleware: "auth",
  // pageTransition: {
  //   name: "rotate",
  // },
  // pageTransition: false,
  pageTransition: {
    name: "custom-flip",
    mode: "out-in",
    onBeforeEnter: (el) => {
      console.log("Before enter...");
    },
    onEnter: (el, done) => {
      console.log("Enter...");
      done();
    },
    onAfterEnter: (el) => {
      console.log(el, "el");
      gsap.to(el, {
        duration: 3,
        text: "this si the new text",
        ease: "none",
      });
    },
  },
  layout: "orange",
  // layoutTransition: {
  //   name: "slide-in",
  // },
  // layoutTransition: false,
  validate: async (route) => {
    // return {
    //   statusCode: 301,
    //   statusMessage: "重定向",
    // };
    return true;
  },
});
</script>
