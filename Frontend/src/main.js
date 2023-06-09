import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import 'mdb-vue-ui-kit/css/mdb.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import LandingPage from './components/LandingPage/LandingPage.vue'
import SeniorRegister from './components/Register/SeniorRegister.vue';
import GuardianRegister from './components/Register/GuardianRegister.vue'
import UserLogin from './components/Login/UserLogin.vue'
import SeniorDashboad from './components/Dashboard/SeniorDashboard.vue'
import GuardianDashboard from './components/Dashboard/GuardianDashboard.vue'
import OfficeDashboard from './components/Dashboard/OfficeDashboard.vue'



const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/',
    name: 'Landing Page', 
    component: LandingPage
    },
    { path: '/SeniorRegister',
    name: 'SeniorRegister', 
    component: SeniorRegister
    },
    { path: '/GuardianRegister',
    name: 'GuardianRegister', 
    component: GuardianRegister
    },
    { path: '/UserLogin',
    name: 'UserLogin', 
    component: UserLogin
    },
    { path: '/SeniorDashboard',
    name: 'SeniorDashboard', 
    component: SeniorDashboad
    },
    { path: '/GuardianDashboard',
    name: 'GuardianDashboard', 
    component: GuardianDashboard
    },
    { path: '/OfficeDashboard',
    name: 'OfficeDashboard', 
    component: OfficeDashboard
    },
  ]
});

const app = createApp(App);
app.use(router);
app.mount('#app');
