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
          <td><img :src="senior.seniorUpload" alt="ID Upload" class="uploadImg"></td>
          <td class="buttons">
            <button data-bs-toggle="modal" data-bs-target="#modalAccept" @click="accountId = senior.accountId"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="green" class="bi bi-check-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
</svg></button>
            <button data-bs-toggle="modal" data-bs-target="#modalReject" @click="accountId = senior.accountId"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="red" class="bi bi-x-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
</svg></button>
          </td>
        </tr>
    </tbody>
  </table>
  </section>

  <div class="modal fade" id="modalAccept" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header" style="background-color: #A0D2E7;">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Accept Applicant</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>Are you sure you want to accept this applicant?</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Back</button>
        <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="acceptAccount(accountId)">Confirm</button>
      </div>
    </div>
  </div>
</div>

<div class="modal fade" id="modalReject" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content text-start">
      <div class="modal-header" style="background-color: #A0D2E7;">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Reject Applicant</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body pt-0">
        <form>
          <div class="mb-1">
            <label for="recipient-name pt-1" class="col-form-label">Why? (Select all that are applicable)</label>
            <div class="list-group pt-1">
              <label class="list-group-item">
              <input class="form-check-input me-1" type="checkbox" value="">
              Invalid Submitted ID
              </label>
              <label class="list-group-item">
              <input class="form-check-input me-1" type="checkbox" value="">
              Invalid Contact Number
              </label>
              <label class="list-group-item">
              <input class="form-check-input me-1" type="checkbox" value="">
              Entered Information does not match submitted ID
              </label>
              <label class="list-group-item">
              <input class="form-check-input me-1" type="checkbox" value="">
              Entered Information does not match anyone from OSCA Database
              </label>
              <label class="list-group-item">
              <input class="form-check-input me-1" type="checkbox" value="" id="checkboxOthers">
              Others:
              </label>
              </div>
          </div>
          <div class="mb-3">
            <label for="message-text" class="col-form-label">If others, please specify:</label>
            <textarea class="form-control" id="message-text" disabled></textarea>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Go Back</button>
        <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="rejectAccount(accountId)">Send message</button>
      </div>
    </div>
  </div>
</div>
  </template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      seniorDetails: [],
      accountId: null
    }
  },
  methods: {
    fullName(senior) {
    return `${senior.firstName} ${senior.middleName} ${senior.lastName}`;
  },
  acceptAccount(accountId) {
  axios.patch(`/office/registrationAccept/${accountId}`)
    .then(() => {
      console.log('Account accepted');
      // Remove the confirmed table row from seniorDetails
      this.seniorDetails = this.seniorDetails.filter(senior => senior.accountId !== accountId);
    })
    .catch(error => {
      console.error(error);
    });
},
rejectAccount(accountId) {
  axios.delete(`/office/registrationReject/${accountId}`)
    .then(() => {
      console.log('Account rejected')
      this.seniorDetails = this.seniorDetails.filter(senior => senior.accountId !== accountId);
    })
    .catch(error => {
      console.error(error)
    })
},
},
async mounted() {
  try {
    const response = await axios.get('http://localhost:5000/office/newlyRegistered');
    this.seniorDetails = response.data;
    console.log(response);
    // Do something with the seniorDetails data here
  } catch (error) {
    console.error(error);
  }

  document.getElementById("checkboxOthers").addEventListener("change", function() {
    var textarea = document.getElementById("message-text");
    textarea.disabled = !this.checked;
  });
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
  margin-top: .5rem;
}
h1 {
    margin-left: 0;
    font-size: xx-large;
    font-weight: bold;
}
td button {
  border: none;
  background-color: rgba(0,0,0,0);
  margin: 1rem .3rem;
}
.buttons {
  padding: .5rem;
}
.uploadImg {
  height: 8rem;
  width: 12rem;
}
</style>

