<template>
    <div class="container pt-2 d-flex">
      <h1>ElderList Dataset</h1>
      <h2>About this dataset</h2>
      <p>
        This dataset contains senior citizen data gathered from their ElderList
        usage.. It contains data such
        as their name, the number of guardians they have registered, the number
        of transactions they have made in the specific month or period, the
        amount of money they have spent, and the amount of money they saved
        through discounts. This data is only the raw data taken from ElderList's
        databases. You may download the CSV file below for your perusal. All data
        was collected according to the Data Privacy Act of 2012
      </p>
      <button class="btn btn-primary">Download CSV</button>
      <hr />
    </div>

    <section class="mx-5">
  <table class="table table-striped table-hover table-bordered">
  <thead>
    <tr class="column-title">
      <th>Senior ID</th>
      <th>Name</th>
      <th>Senior Citizen ID Number</th>
      <th>Date of Last Purchase</th>
      <th>Total Amount Spent</th>
      <th>Frequently Bought Item</th>
      <th>Stores Visited</th>
      <th>Total Discount Availed</th>
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
      previewData: [],
    };
  },
  mounted() {
    this.generatePreview();
  },
  methods: {
    async generatePreview() {
      try {
        const response = await axios.get('office/excel-preview');
        this.previewData = response.data;
      } catch (error) {
        console.error(error);
        alert('An error occurred while generating the Excel preview.');
      }
    },
  },
};
</script>

<style scoped>
.container {
      align-items: flex-start;
      flex-direction: column;
      padding-left: 1rem !important;
      margin-left: 1rem !important;
    }
    
    hr {
      border: 2px solid black !important;
      width: 125%;
      margin-left: 0;
      margin-right: auto;
      margin-top: 0.5rem;
    }
    
    h1 {
      margin-left: 0;
      font-size: xx-large;
      font-weight: bold;
    }
    
    h2 {
      font-size: larger;
      font-weight: bold;
    }
    p {
      text-align: left;
    }
  </style>
  