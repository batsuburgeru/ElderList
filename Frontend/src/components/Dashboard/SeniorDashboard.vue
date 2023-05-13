<template>
<nav class="navbar navbar-expand-lg navbar-light">
  <!-- Container wrapper -->
  <div class="container-fluid">
    <!-- Collapsible wrapper -->
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <!-- Navbar brand -->
      <a class="navbar-brand mt-2 mt-lg-0" href="#">
        <img
          src="../../assets/img/elderlist-logo.png"
          height="50"
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
        <li v-for="guardian in guardians" :key="guardian.id">
          <a class="dropdown-item" :href="getGuardianLink(guardian.id)">{{ guardian.name }}</a>
        </li>
        <div class="dropdown-divider"></div>
        <li>
          <a href="" class="dropdown-item" data-bs-toggle="modal" data-bs-target="#addGuardianModal">Add a guardian</a>
        </li>
        <li>
          <a href="" class="dropdown-item">Remove a guardian</a>
        </li>
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
    <div class="right d-flex align-items-center m-3">
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
          <ul class="dropdown-menu dropdown-menu-light dropdown-menu-lg-end" aria-labelledby="navbarDarkDropdownMenuLink">
            <li><span class="dropdown-item-text">Switch to: </span></li>
            <li><a class="dropdown-item disabled" href="#">English</a></li>
            <li><a class="dropdown-item disabled" href="#">Filipino</a></li>
          </ul>
        </li>
      </ul>
    </div>
      <!-- Notifications -->
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
      <ul class="navbar-nav dropdown-menu-lg-end">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bell-fill" viewBox="0 0 16 16">
  <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"/>
</svg>
          </a>
          <ul class="dropdown-menu dropdown-menu-light dropdown-menu-lg-end" aria-labelledby="navbarDarkDropdownMenuLink">
            <li><span class="dropdown-item-text">Notifications</span></li>
            <li><a class="dropdown-item disabled" href="#">Notification 1</a></li>
            <li><a class="dropdown-item disabled" href="#">Notification 2</a></li>
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
        <th colspan="4">My Booklet</th>
        <th colspan="1">Remaining Balance: {{ calculateRemainingLimit(bookletDetails) }}</th>
      </tr>
      <tr class="column-title">
        <th>Reference ID</th>
        <th>Date of Purchase</th>
        <th>Purchased Items</th>
        <th>Total Price</th>
        <th>Total Discount</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(booklet, index) in bookletDetails" :key="index">
        <td>{{ booklet.referenceId }}</td>
        <td>{{ new Date(booklet.dateOfPurchase).toLocaleDateString() }}</td>
        <td>
          <table class="table table-borderless table-hover">
            <tr class="nested-column-title ">
              <th>Item Name</th>
              <th>Quantity</th>
              <th>Price / Unit</th>
            </tr>
            <tr v-for="(item, itemIndex) in booklet.purchasedItems" :key="itemIndex">
              <td>{{ item.itemName }}</td>
              <td>{{ item.quantity }}</td>
              <td>{{ item.pricePerUnit }}</td>
            </tr>
          </table>
        </td>
        <td>{{ booklet.totalPrice}}</td>
        <td>{{ booklet.discountAmount }}</td>
      </tr>
    </tbody>
  </table>
</section>

<div class="modal fade" id="addGuardianModal" tabindex="-1" aria-labelledby="addGuardianModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="addGuardianModalLabel">Add Guardian</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="mb-3">
          <label for="guardianNameInput" class="form-label">Generate One-Time Invite Code</label>
          <input type="text" class="form-control" id="guardianNameInput">
        </div>
        <button type="button" class="btn btn-primary" onclick="addGuardian()">Generate</button>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-success" onclick="done()">Done</button>
      </div>
    </div>
  </div>
</div>
</template>
<script>
import axios from 'axios'

export default {
  data() {
    return {
      bookletDetails: []
    }
  },

  methods: {
    calculateRemainingLimit(bookletDetails) {
      const weeklyLimit = 150000; // Weekly discount limit in PHP
      const currentDate = new Date();
      const startOfWeek = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() - currentDate.getDay());
      const endOfWeek = new Date(startOfWeek.getTime() + 7 * 24 * 60 * 60 * 1000);

      let remainingBalance = weeklyLimit;
      for (const booklet of bookletDetails) {
        if (new Date(booklet.dateOfPurchase) >= startOfWeek && new Date(booklet.dateOfPurchase) < endOfWeek) {
          // Purchase falls within the current week
          remainingBalance -= booklet.discountAmount;
        }
      }
      return remainingBalance;
    },
    parsePurchasedItems(purchasedItems) {
    // Parse the JSON string to convert it into an array of objects
    return JSON.parse(purchasedItems);
  },
  },

  async mounted() {
  try {
    const response = await axios.get('http://localhost:5000/senior/bookletRender');
    this.bookletDetails = response.data.bookletDetails.map((booklet) => {
      return {
        ...booklet,
        purchasedItems: this.parsePurchasedItems(booklet.purchasedItems),
      };
    });
    console.log(this.bookletDetails);
    // Do something with the bookletDetails data here
  } catch (error) {
    console.error(error);
  }
}};


</script>

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
th[colspan] {
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
.right li{
  padding-right: 1rem;
}
</style>