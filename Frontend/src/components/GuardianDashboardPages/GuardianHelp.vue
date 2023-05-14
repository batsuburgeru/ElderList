<template>
<div class="container pt-2 d-flex">
  <h1>Help Center</h1>
  <h2>Frequently Asked Questions</h2>
</div>

  <div class="container d-flex">
    <div class="accordion" id="accordionPanelsStayOpenExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
        What is ElderList, and how does it work?
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
      <div class="accordion-body">
        <strong>ElderList is a software designed to digitize the senior citizen booklet used to avail of discounts and benefits under the Expanded Senior Citizens Act of 2010 in the Philippines. </strong>
        It allows senior citizens to easily track their transactions and savings, access information on their privileges and rights, and enables their relatives to monitor their spending habits and health needs. 
        The software also provides raw data on the consumption patterns and preferences of senior citizens, which can help in creating better projects and solutions for them.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
        How does ElderList benefit senior citizens?
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
      <div class="accordion-body">
        <strong>ElderList benefits senior citizens by simplifying the process of availing discounts and benefits under the Expanded Senior Citizens Act of 2010.</strong> 
        It digitizes the booklet, making it less likely for it to be forgotten, lost, or damaged, and enables senior citizens to easily track their transactions and savings. 
        It also provides them with information on their privileges and rights, and allows their relatives to monitor their spending habits and health needs.

      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
        How does ElderList differ from traditional senior citizen booklets?
      </button>
    </h2>
    <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
      <div class="accordion-body">
        <strong>ElderList is a proposed digital platform that aims to replace the physical booklets and IDs currently used to validate senior citizens' identities when availing discounts. </strong> 
        It can record and track discounted purchases of senior citizens, solve the lack of tracking of availed discounts, and send the data to the Office of Senior Citizen Affairs.
      </div>
    </div>
  </div>
</div>
  </div>

  <div class="container pt-4 ask-us d-flex">
    <h2>Ask us a Question</h2>
    <div class="container-fluid">
      <input disabled type="email" class="form-control" placeholder="Email" aria-label="Email" aria-describedby="basic-addon1">
      <textarea disabled class="form-control" aria-label="With textarea" placeholder="Type your question here..."></textarea>
      <button class="btn btn-primary m-4 disabled" type="button">Send Email</button>
    </div>
  </div>
</template>

<style scoped>
.container-fluid {
  padding-left: 0 !important;
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
  align-items: flex-start;
  flex-direction: column;
  padding-left: 1rem !important;
  margin-left: 1rem !important;
}
.ask-us {
  margin-bottom: 5rem;
}
.ask-us h2 {
  text-align: left;
}
.ask-us input {
  margin-bottom: 2rem;
  background-color: aliceblue;
  box-shadow: 3px 5px #888888;
}
.ask-us textarea {
  height: 150px;
  background-color: aliceblue;
  box-shadow: 3px 5px #888888;
  
}
.accordion {
  width: 100%;
  max-width: 50rem;  
}
.accordion-body {
  background-color: aliceblue;
}
</style>