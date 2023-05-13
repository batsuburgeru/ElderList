<template>
<main class="vh-100">
    <div class="head container pt-4">
  <h1>Add Senior Citizen</h1>
  <div class="d-flex justify-content-between">
    <h2>Senior Citizen Booklet</h2>
  </div>
  <hr>
</div>

<div class="addSenior container-fluid pt-4">
  <p class="header-title">Enter your Senior Citizen’s One-Time Invite Code:</p>
  <hr>
  <div>
    <div class="row">
    <div class="col-sm-8">
      <input type="text" class="form-control" id="codeInput" >
    </div>
    <div class="col-sm-1">
      <button class="btn btn-primary" onclick="confirmCode()">Confirm</button>
    </div>
  </div>
  <p class="pt-3">Enter the One-Time Invite Code generated from your Senior Citizen’s Account to add them to your list of Senior Citizens.</p>
  </div>
</div>
</main>
</template>


<style scoped>
main {
    padding:0;
}
.addSenior {
    border-radius: 10px;
    border: 10px solid #556B2F;
    padding: 1rem;
    margin-left: 1rem !important;
    background-color: #F4F4F4;
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
.container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 0;
}
.container-fluid {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 0;
    width: 102rem;
}
.container-fluid hr {
    width: 100%;
    margin-top: 0;
}
.header-title {
    font-weight: bold;
    font-size: larger;
}
</style>