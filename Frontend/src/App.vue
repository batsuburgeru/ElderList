<template>
<SeniorDashboard/>

</template>

<script>
import SeniorDashboard from './components/Dashboard/SeniorDashboard.vue';


export default {
  name: 'App',
  components: {SeniorDashboard }
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
