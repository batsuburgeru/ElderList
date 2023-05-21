<template>
<div class="container pt-4">
  <h1>Senior Citizen Name</h1>
  <div class="d-flex justify-content-between">
    <h2>Senior Citizen Booklet</h2>
  </div>
  <hr class="divider">
</div>

    <main>
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
          <table class="table-borderless">
            <tr class="nested-column-title">
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
</main>    
</template>

<script>
import axios from 'axios'
import jwt_decode from 'jwt-decode';

function getCookieValue(cookieName) {
  const cookieString = document.cookie;
  const cookies = cookieString.split('; ');

  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].split('=');
    const name = cookie[0].trim();
    const value = cookie[1];

    if (name === cookieName) {
      return value;
    }
  }

  return null;
}

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
    const token = getCookieValue('token');
    const decodedToken = jwt_decode(token);
    const accountId = decodedToken.data.accountId;

    const response = await axios.get(`http://localhost:5000/guardian/guardianBooklet/${accountId}`);
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

.divider {
  border: none;
  border-top: 2px solid #ccc;
  margin-top: 10px;
}
main {
  padding: 0;
  margin: 0 1rem;
}
section {
    height: calc(100vh-7vh);
    padding: 0;
}
.table {
  border: 10px solid #6B8E23 !important;
  border-spacing: 0;
  border-radius: 10px;
  border-collapse: collapse;
}
.container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: larger;
  margin-left: 0 !important;
  margin-right: 0 !important;
}
hr {
  border: 2px solid black !important;
  width: 127%;
  margin-left: 0;
  margin-right: auto;
}
h1 {
    margin-left: 0;
    font-size: xx-large;
    font-weight: bold;
}
h2 {
  font-size: larger;
}
td button {
  border: none;
  background-color: rgba(0,0,0,0);
  margin: 1rem .3rem;
}
</style>