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
      <input type="text" class="form-control" id="codeInput" v-model="randomCode">
    </div>
    <div class="col-sm-1">
      <button class="btn btn-primary" @click=confirmCode()>Confirm</button>
    </div>
  </div>
  <p class="pt-3">Enter the One-Time Invite Code generated from your Senior Citizen’s Account to add them to your list of Senior Citizens.</p>
  </div>
</div>
</main>
</template>

<script>
import axios from 'axios';
import jwt_decode from 'jwt-decode';

function getCookieValue(cookieName) {
  const cookieString = document.cookie;
  const cookies = cookieString.split('; ');

  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].split('=');
    const name = cookie[0].trim();
    const value = cookie[1];

    if (name === cookieName) {
      return value;
    }
  }

  return null;
}

export default {
  data() {
    return {
      randomCode: ''
    };
  },

  methods: {
    confirmCode() {
      // Decode the token to extract the accountId
      const token = getCookieValue('token');
      const decodedToken = jwt_decode(token);
      const accountId = decodedToken.data.accountId;

      const relationshipCode = this.randomCode; // Placeholder for relationshipCode

      axios.post(`guardian/inputCodeValidation/${accountId}`, {
          relationshipCode
        })
        .then(response => {
          console.log(response.data);
          alert('Matched Confirmed!')

        })
        .catch(error => {
          console.error(error);
          alert('Incorrect Code. Try again.')

        });
    }
  },
};
</script>

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