<template>
    <div class="container pt-4">
      <h1 >New Registrations</h1>
      <hr>
    </div>
  <section class="gradient-custom">
      <table class="table table-striped table-hover table-bordered">
    <thead>
      <tr class="column-title">
        <th>Name</th>
        <th>Contact Number</th>
        <th>Date of Birth</th>
        <th>Address</th>
        <th>ID Number</th>
        <th>Date of Issuance</th>
        <th>Date of Expiration</th>
        <th>ID Upload</th>
        <th>Confirmation</th>
      </tr>
    </thead>
    <tbody>
        <tr v-for="(senior, index) in seniorDetails" :key="index">
          <td>{{ fullName(senior) }}</td>
          <td>{{ senior.contactNumber }}</td>
          <td>{{ new Date(senior.dateOfBirth).toLocaleDateString() }}</td>
          <td>{{ senior.address }}</td>
          <td>{{ senior.idNumber }}</td>
          <td>{{ new Date(senior.dateOfIssue).toLocaleDateString() }}</td>
          <td>{{ new Date(senior.expirationDate).toLocaleDateString() }}</td>
          <td>{{ senior.idUpload }}</td>
          <td class="buttons">
            <button><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="green" class="bi bi-check-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
</svg></button>
            <button><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="red" class="bi bi-x-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
</svg></button>
          </td>
        </tr>
    </tbody>
  </table>
  </section>
  </template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      seniorDetails: []
    }
  },
  methods: {
    fullName(senior) {
    return `${senior.firstName} ${senior.middleName} ${senior.lastName}`;
  },
  acceptAccount() {
    axios.patch(`/api/accounts/${this.accountId}`, { status: 'accepted' })
      .then(() => {
        console.log('Account accepted')
      })
      .catch(error => {
        console.error(error)
      })
  },
  rejectAccount() {
    axios.delete(`/api/accounts/${this.accountId}`)
      .then(() => {
        console.log('Account rejected')
      })
      .catch(error => {
        console.error(error)
      })
  },
},
async mounted() {
  try {
    const response = await axios.get('http://localhost:5000/office/newlyRegistered');
    this.seniorDetails = response.data.seniorDetails;
    console.log(this.seniorDetails);
    // Do something with the seniorDetails data here
  } catch (error) {
    console.error(error);
  }
}
}
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
  border: 10px solid #89CFF1 !important;
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
}
h1 {
    margin-left: 0;
}
td button {
  border: none;
  background-color: rgba(0,0,0,0);
  margin: 1rem .3rem;
}
.buttons {
  padding: .5rem;
  
}
</style>

