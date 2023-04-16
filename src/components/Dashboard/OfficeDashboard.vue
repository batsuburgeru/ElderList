<template>
  <!--Main Navigation-->
  <header>
    <!-- Sidebar -->
    <nav id="sidebarMenu" class="collapse d-lg-block sidebar collapse bg-white">
      <div class="position-sticky">
        <div class="list-group list-group-flush mx-3 mt-4">
          <div class="profile">
            <a href="">
              <img src="../../assets/img/hypex-logo.png" alt="" class="profile" />
            </a>
            <a href="#" class="profile">Office Name</a>
          </div>
          <a
            href="#"
            class="list-group-item list-group-item-action py-3 ripple"
            :class="{ active: activeButton === 'viewAnalytics' }"
            @click="activeButton = 'viewAnalytics'"
          >
            <i class="fas fa-tachometer-alt fa-fw me-3"></i><span>View Analytics</span>
          </a>
          <a
            href="#"
            class="list-group-item list-group-item-action py-3 ripple"
            :class="{ active: activeButton === 'seniorCitizenList' }"
            @click="activeButton = 'seniorCitizenList'"
          >
            <i class="fas fa-chart-area fa-fw me-1"></i><span>Senior Citizen List</span>
          </a>
          <a
            href="#"
            class="list-group-item list-group-item-action py-3 ripple"
            :class="{ active: activeButton === 'settings' }"
            @click="activeButton = 'settings'"
          >
            <i class="fas fa-lock fa-fw me-3"></i><span>Settings</span></a
          >
          <a
            href="#"
            class="list-group-item list-group-item-action py-3 ripple"
            :class="{ active: activeButton === 'help' }"
            @click="activeButton = 'help'"
          >
            <i class="fas fa-chart-line fa-fw me-3"></i><span>Help</span>
          </a>
        </div>
      </div>
    </nav>
    <!-- Sidebar -->

    <nav id="main-navbar" class="navbar navbar-expand-lg navbar-light bg fixed-top">
  <!-- Container wrapper -->
  <div class="container-fluid">
    <!-- Toggle button -->
    <a class="navbar-brand mt-2 mt-lg-0" href="#">
      <img
        src="../../assets/img/hypex-logo.png"
        height="15"
        alt="MDB Logo"
        loading="lazy"
      />
    </a>
    <!-- Left links -->
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item">
        <a class="nav-link" href="#">ElderList</a>
      </li>
    </ul>
    <!-- Left links -->
  </div>
  <!-- Collapsible wrapper -->
  <!-- Right elements -->
  <div class="right d-flex align-items-center">
    <!-- Icon -->
    <!-- Notifications -->
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
    <ul class="navbar-nav">
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bell-fill" viewBox="0 0 16 16">
<path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"/>
</svg>
        </a>
        <ul class="dropdown-menu dropdown-menu-light" aria-labelledby="navbarDarkDropdownMenuLink">
          <li><span class="dropdown-item-text">Notifications</span></li>
          <li><a class="dropdown-item" href="#">Notif 1</a></li>
          <li><a class="dropdown-item" href="#">Notif 2</a></li>
        </ul>
      </li>
    </ul>
  </div>
    <!-- Avatar -->
    <div class="dropdown">
      <div>
      <a
        class="dropdown-toggle d-flex align-items-center hidden-arrow"
        href="#"
        id="navbarDropdownMenuAvatar"
        role="button"
        data-mdb-toggle="dropdown"
        aria-expanded="false"
      >
        <img
          src="../../assets/img/hypex-logo.png"
          class="rounded-circle"
          height="25"
          alt="Black and White Portrait of a Man"
          loading="lazy"
        />
      </a>
    </div>
    <div>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
    <ul class="navbar-nav">
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Office Account
        </a>
        <ul class="dropdown-menu dropdown-menu-light" aria-labelledby="navbarDarkDropdownMenuLink">
          <li><span class="dropdown-item-text">Profile </span></li>
          <li><a class="dropdown-item" href="#">My Account</a></li>
          <li><a class="dropdown-item" href="#">Sign Out</a></li>
        </ul>
      </li>
    </ul>
  </div>
    </div>
    </div>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
    <ul class="navbar-nav">
      <li class="nav-item dropdown">
        <a class="nav-link" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
<path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
</svg>
        </a>
        <ul class="dropdown-menu dropdown-menu-light" aria-labelledby="navbarDarkDropdownMenuLink">
          <li><span class="dropdown-item-text">Enable Dark Theme</span></li>
          <li><a class="dropdown-item" href="#">Language: Switch to </a></li>
          <li><a class="dropdown-item" href="#">Accesibility Mode: </a></li>
          <div class="dropdown-divider"></div>
          <li class="dropdown-item" href="#">Send Feedback</li>
        </ul>
      </li>
    </ul>
  </div>
  </div>
  <!-- Container wrapper -->
</nav>
<!-- Navbar -->

    <!-- Main content -->
    <main class = "vh-100">
      <div v-if="activeButton === 'viewAnalytics'">View Analytics content goes here</div>
      <div v-if="activeButton === 'seniorCitizenList'"><SeniorCitizenList /></div>
      <div v-if="activeButton === 'settings'">Settings content goes here</div>
      <div v-if="activeButton === 'help'">Help content goes here</div>
    </main>
    <!-- Main content -->
  </header>
</template>

<script>
import SeniorCitizenList from '../OtherPages/SeniorCitizenList.vue';

export default {
  name: 'MainNavigation',
  components: {
    SeniorCitizenList,
  },
  data() {
    return {
      activeButton: 'seniorCitizenList',
    };
  },
};
</script>

<style scoped>
.navbar {
height: 7vh;
}
.navbar-nav {
font-size: larger;
font-weight: bolder;
}
.container-fluid {
padding-left: 3rem;
}
.right {
padding-right: 4rem;
}
.right .navbar-collapse {
padding-right: 1.5rem;
}
.bg {
background-color: #89CFF1 !important;
}
.navbar a {
color: black;
}
.list-group {
padding-top: 3rem;
}
#sidebarMenu {
text-align: left;
}
.profile img{
height: 8rem;
border: 2px solid black;
border-radius: 50%;
background-color: #89CFF1;
}
.profile {
display: flex;
flex-direction: column;
align-items: center;
padding-bottom: 1rem;
}
.profile a {
padding-bottom: 1rem;
font-size: larger;
font-weight: bolder;
color: black;
}
.dropdown {
display: flex;
align-items: center;
}
.dropdown img {
height: 3rem;
border: 2px solid black;
border-radius: 50%;
background-color: white;
}

.sidebar {
position: fixed;
top: 0;
bottom: 0;
left: 0;
padding: 58px 0 0; /* Height of navbar */
box-shadow: 0 2px 5px 0 rgb(0 0 0 / 5%), 0 2px 10px 0 rgb(0 0 0 / 5%);
width: 240px;
z-index: 600;
}

.sidebar .active {
border-radius: 5px;
box-shadow: 0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%);
}

.sidebar-sticky {
position: relative;
top: 0;
height: calc(100vh - 48px);
padding-top: 0.5rem;
overflow-x: hidden;
overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */
}
</style>