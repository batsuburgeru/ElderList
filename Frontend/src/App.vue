<template>
<SeniorRegister/>
<GuardianRegister/>
<UserLogin/>
<OfficeDashboard/>

</template>

<script>
import SeniorRegister from './components/Register/SeniorRegister.vue';
import GuardianRegister from './components/Register/GuardianRegister.vue';
import UserLogin from './components/Login/UserLogin.vue';
import OfficeDashboard from './components/Dashboard/OfficeDashboard.vue';

export default {
  name: 'App',
  components: {SeniorRegister, GuardianRegister, UserLogin, OfficeDashboard }
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
