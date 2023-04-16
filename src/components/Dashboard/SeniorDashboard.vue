<template>
<nav class="navbar navbar-expand-lg navbar-light">
  <!-- Container wrapper -->
  <div class="container-fluid">
    <!-- Collapsible wrapper -->
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <!-- Navbar brand -->
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
        <li class="nav-item">
          <a class="nav-link" href="#">Home</a>
        </li>
        <li class="nav-item">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
      <ul class="navbar-nav">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            My Guardians
          </a>
          <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
            <li><span class="dropdown-item-text">My Guardians</span></li>
            <li><a class="dropdown-item" href="#">Guardian 1</a></li>
            <li><a class="dropdown-item" href="#">Guardian 2</a></li>
            <li><a class="dropdown-item" href="#">Guardian 3</a></li>
          </ul>
        </li>
      </ul>
    </div>
        </li>
      </ul>
      <!-- Left links -->
    </div>
    <!-- Collapsible wrapper -->
    <!-- Right elements -->
    <div class="d-flex align-items-center">
      <!-- Icon -->
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
      <ul class="navbar-nav">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Language
          </a>
          <ul class="dropdown-menu dropdown-menu-light" aria-labelledby="navbarDarkDropdownMenuLink">
            <li><span class="dropdown-item-text">Switch to: </span></li>
            <li><a class="dropdown-item" href="#">Language 1</a></li>
            <li><a class="dropdown-item" href="#">Language 2</a></li>
          </ul>
        </li>
      </ul>
    </div>
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
    </div>
    <!-- Right elements -->
  </div>
  <!-- Container wrapper -->
</nav>
<section class="vh-100 gradient-custom">
    <table class="table table-striped table-hover table-bordered">
  <thead>
    <tr class="title">
        <th colspan="2">My Booklet</th>
        <th colspan="2">Remaining Balance:</th>
    </tr>
    <tr class="column-title">
      <th>Reference ID</th>
      <th>Name of Product</th>
      <th>Number of Units</th>
      <th>Date</th>
    </tr>
  </thead>
  <tbody>
    <tr>
    <td>001</td>
    <td>Book</td>
    <td>5</td>
    <td>2022-03-28</td>
  </tr>
  <tr>
    <td>002</td>
    <td>Pen</td>
    <td>10</td>
    <td>2022-03-29</td>
  </tr>
  <tr>
    <td>003</td>
    <td>Notebook</td>
    <td>3</td>
    <td>2022-03-30</td>
  </tr>
  </tbody>
<!--  
     <tbody>
    <?php
      // Retrieve data from database
      $data = // your code to retrieve data from database

      // Loop through data and generate table rows and cells
      foreach ($data as $row) {
        echo "<tr>";
        echo "<td>" . $row['Reference ID'] . "</td>";
        echo "<td>" . $row['Name of Product'] . "</td>";
        echo "<td>" . $row['Number of Units'] . "</td>";
        echo "<td>" . $row['Data'] . "</td>";
        echo "</tr>";
      }
    ?>
  </tbody>
-->
</table>
</section>
</template>

<style scoped>
nav {
  height: 7vh;
  background-color: #F9E07E;
  font-weight: bold;
  font-size: larger;
  padding: 0 1.5rem 0 1.5rem;
}
.vh-100 {
  height: 93vh !important;
}
.gradient-custom {
  background: white;
}
th[colspan="2"] {
  background: #FCCA0C;
  font-weight: 1000;
  font-size:large;
  padding-bottom: 1.5rem;
}
.title {
    height: 5rem;
}
.column-title th{
    font-weight: 1000;
    font-size: large;
}
</style>