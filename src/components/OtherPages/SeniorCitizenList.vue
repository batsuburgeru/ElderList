<template>
  <div class="container pt-4">
    <h1 >Senior Citizen List</h1>
    <hr>
  </div>
<section class="gradient-custom">
    <table class="table table-striped table-hover table-bordered">
  <thead>
    <tr class="column-title">
      <th>Reference ID</th>
      <th>Name</th>
      <th>Senior Citizen ID Number</th>
      <th>Contact Number</th>
      <th>Address</th>
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

<style>
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
  width: 128%;
  margin-left: 0;
  margin-right: auto;
}
h1 {
    margin-left: 0;
}
</style>