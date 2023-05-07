<template>
  <SeniorRegister/>
  <GuardianRegister/>
  <SeniorDashboard/>
  
</template>

<script>
import SeniorRegister from './components/Register/SeniorRegister.vue';
import GuardianRegister from './components/Register/GuardianRegister.vue';
import SeniorDashboard from './components/Dashboard/SeniorDashboard.vue';



export default {
  name: 'App',
  components: { SeniorRegister, GuardianRegister, SeniorDashboard }
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
