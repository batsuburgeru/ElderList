<template>
  <div class="container pt-4">
    <h1 >Senior Citizen List</h1>
    <hr>
  </div>
<section class="gradient-custom">
    <table class="table table-striped table-hover table-bordered">
  <thead>
    <tr class="column-title">
      <th>Senior ID</th>
      <th>Name</th>
      <th>Contact Number</th>
      <th>Date of Birth</th>
      <th>Address</th>
      <th>Senior Citizen ID Number</th>
      <th>Date Of Issuance</th>
      <th>Date Of Expiry</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(senior, index) in seniorDetails" :key="index">
          <td>{{ senior.accountId }}</td>
          <td>{{ fullName(senior) }}</td>
          <td>{{ senior.contactNumber }}</td>
          <td>{{ new Date(senior.dateOfBirth).toLocaleDateString() }}</td>
          <td>{{ senior.address }}</td>
          <td>{{ senior.idNumber }}</td>
          <td>{{ new Date(senior.dateOfIssue).toLocaleDateString() }}</td>
          <td>{{ new Date(senior.expirationDate).toLocaleDateString() }}</td>
      </tr>
  </tbody>
</table>
</section>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      seniorDetails: [] 
    };
  },
  methods: {
    fullName(senior) {
      return `${senior.firstName} ${senior.middleName} ${senior.lastName}`;
    },
  },
  async mounted() {
  try {
    const response = await axios.get('http://localhost:5000/office/seniorList');
    this.seniorDetails = response.data.seniorDetails;
    console.log(this.seniorDetails);
    // Do something with the seniorDetails data here
  } catch (error) {
    console.error(error);
  }
}}
</script>

<style scoped>
main {
    padding-top: 7vh;
    padding-left: 240px;
}
section {
    height: calc(100vh-7vh);
}
.table {
  border: 15px solid #89CFF1 !important;
  border-spacing: 0;
  border-radius: 10px;
  border-collapse: separate;
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
  margin-top: .5rem;
}
h1 {
    margin-left: 0;
    font-size: xx-large;
    font-weight: bold;
}
h2 {
  font-size: larger;
}
</style>