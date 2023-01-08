<template>
    <app-main>
        <router-view />
    </app-main>
  </template>
  
  <script>
  import Main from "./Main.vue";
  export default {
    components: {"app-main": Main},
    beforeRouteEnter(to, from, next) {
        if (!localStorage.getItem('tokenBearer')) {
             return next('login');
        }
        next();
    },
  }
  </script>
  