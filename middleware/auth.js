export default defineNuxtRouteMiddleware((to, from) => {
  console.log("auth...");
  console.log(to, from);
});
