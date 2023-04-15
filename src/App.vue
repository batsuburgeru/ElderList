<template>
  <UserLogin/>
  <SeniorRegister/>
  <GuardianRegister/>
  <SeniorDashboard/>
  <GuardianDashboard/>
</template>

<script>

import UserLogin from "./components/Login/UserLogin.vue";
import SeniorRegister from "./components/Register/SeniorRegister.vue"
import GuardianRegister from "./components/Register/GuardianRegister.vue"
import SeniorDashboard from "./components/Dashboard/SeniorDashboard.vue";
import GuardianDashboard from "./components/Dashboard/GuardianDashboard.vue";

export default {
  name: 'App',
  components: { UserLogin, SeniorRegister, GuardianRegister, SeniorDashboard, GuardianDashboard }
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
