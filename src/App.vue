<template>
  <OfficeDashboard/>
  
</template>

<script>
import OfficeDashboard from './components/Dashboard/OfficeDashboard.vue';


export default {
  name: 'App',
  components: { OfficeDashboard }
}
</script>

<style>
#app {
  box-sizing: content-box;
  font-family: Avenir, Helvetica, Arial, sans-serif, Roboto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
