<template>
    <main class="vh-100">
  <div class="container pt-4">
    <h1 >Senior Citizen Name</h1>
    <p>Senior Citizen Booklet</p> 
    <hr>
  </div>


  <section class="gradient-custom">
    <table class="table table-striped table-hover table-bordered">
  <thead>
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
</main>    

</template>