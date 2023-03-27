<template>
<NavbarHero/>
</template>

<script>
import NavbarHero from "./components/NavbarHero.vue"

export default {
  name: 'App',
  components: {
    NavbarHero
  }
}
</script>

<style>
#app {
  box-sizing: content-box;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
