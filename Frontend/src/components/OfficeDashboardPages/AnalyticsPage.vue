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
  </template>

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
  