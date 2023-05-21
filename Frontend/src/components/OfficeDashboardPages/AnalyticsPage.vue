<template>
  <div class="container pt-2">
    <div class="row">
      <div class="col">
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
      </div>
    </div>
    <div class="row">
      <div class="col">
        <button class="btn btn-primary" @click="downloadExcel">Download Senior Booklets</button>
      </div>
      <div class="col">
        <button class="btn btn-primary" @click="downloadUsers">Download User List</button>
      </div>
    </div>
    <hr />
  </div>
</template>

<script>
import axios from 'axios';

export default {
  methods: {
    async downloadExcel() {
      try {
        const response = await axios.get('/office/export-excel', { responseType: 'blob' });
        const url = URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'database.xlsx');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
      } catch (error) {
        console.error('Failed to download the file:', error);
      }
    },
    async downloadUsers() {
      try {
        const response = await axios.get('/office/export-users', { responseType: 'blob' });
        const url = URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'elderlist_users.xlsx');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
      } catch (error) {
        console.error('Failed to download the file:', error);
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
  