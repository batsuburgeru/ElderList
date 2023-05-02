<template>
    <MDBNavbar class="navbar-container" container>
        <MDBNavbarBrand href="#">
            <img
                src="https://scontent.xx.fbcdn.net/v/t1.15752-9/337547182_1615796548898197_278838999557713844_n.png?stp=dst-png_p1080x2048&_nc_cat=105&ccb=1-7&_nc_sid=aee45a&_nc_eui2=AeH_E5_Hamjewj9RxJui337QuEVhLjntFIW4RWEuOe0UhWwQk28SCzqJWfzh_EFibnX1gf1_cLXJgddRJGvkiKT4&_nc_ohc=whWKgZr5o0sAX9cHnX3&_nc_ht=scontent.xx&oh=03_AdT8fAXifIkbfc16SlBl83wwDllDvYgkAyQWLbVt_yL03A&oe=644F9EE2"
                height="35"
                alt=""
                loading="lazy"
            />
      ElderList
    </MDBNavbarBrand>
  </MDBNavbar>

  <section class="vh-100 gradient-custom">
    <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-20 col-md-8 col-lg-6 col-xl-5">
                <div class="card bg-dark text-white" style="border-radius: 1rem;">
                    <div class="card-body p-5 text-center">

                      <div class = "left-forms">
                        <div class="mb-md-0 mt-md-0 pb-0">
                    <p class="out-label text-start">First Name *</p>
                    <div class="form-outline form-white mb-4">
                        <input required type="text" id="firstNameX" class="form-control form-control-lg" v-model="firstName"/>
                        <label class="form-label form-label-above" for="firstNameX">First Name</label>
                    </div>
                  </div>

                  <div class="mb-md-0 mt-md-0 pb-0">
                    <p class="out-label text-start">Middle Name</p>
                    <div class="form-outline form-white mb-4">
                        <input required type="text" id="middleNameX" class="form-control form-control-lg" v-model="middleName"/>
                        <label class="form-label form-label-above" for="middleNameX">Middle Name</label>
                    </div>
                  </div>

                  <div class="mb-md-0 mt-md-0 pb-0">
                            <p class="out-label text-start">Last Name *</p>
                            <div class="form-outline form-white mb-4">
                                <input required type="text" id="lastNameX" class="form-control form-control-lg" v-model="lastName"/>
                                <label class="form-label" for="lastNameX">Last Name</label>
                            </div>
                        </div>

                        <div class="attachFile">
                            <div class="mb-3 upload">
                            <label for="formFile" class="form-label">Attach Files</label>
                            <input class="form-control" type="file" id="formFile">
                          </div>
                          <p>Requirements:</p>
                          <p>Valid ID</p>
                        </div>
                      </div>

                      <div class = "right-forms">

                        <div class="mb-md-0 mt-md-0 pb-0">
                    <p class="out-label text-start">Contact No. *</p>
                    <div class="form-outline form-white mb-4">
                      <input maxlength="11" required type="text" id="contactNumberX" class="form-control form-control-lg" v-model="contactNumber"/>
                      <label class="form-label" for="contactNumberX">09XXXXXXXXX</label>
                    </div>
                  </div>

                        <div class="mb-md-0 mt-md-0 pb-0">
                    <p class = "out-label text-start">Email *</p>
                    <div class="form-outline form-white mb-4">
                      <input required type="email" id="emailX" class="form-control form-control-lg" v-model="email"/>
                      <label class="form-label" for="emailX">Email</label>
                    </div>
                  </div>

                  <div class="mb-md-0 mt-md-0 pb-0">
                          <p class = "out-label text-start">Password *</p>
                          <div class="form-outline form-white mb-4">
                            <button @click="toggleShow">
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-eye d-flex" viewBox="0 0 16 16">
  <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
  <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
</svg>
                            </button>
                            <input v-if="showPassword" type="text" class="input form-control form-control-lg" v-model="password" />
                           <input required v-else type="password" id="passwordX" class="form-control form-control-lg" v-model="password"/>
                          <label class="form-label" for="passwordX">Password</label>
                          </div>
                        </div>  
                      </div>       
                    </div>
                    <div>
                      <button class="btn btn-lg px-5" type="submit" @click="submitForm">Register</button>
                    </div>
                </div>
              </div>
        </div>
    </div>


  </section>


</template>

<script>
import axios from 'axios';
import { MDBNavbar, MDBNavbarBrand } from 'mdb-vue-ui-kit';

export default {
    components: {
      MDBNavbar,MDBNavbarBrand,
    },
    data () {
      return {
        showPassword: false,
        firstName: '',
        middleName: '',
        lastName: '',
        contactNumber: '',
        email: '',
        password: ''
      }
    },
    computed: {
    buttonLabel() {
      return (this.showPassword) ? "Hide" : "Show";
    }
  },
    methods: {
      async submitForm() {
        try {
        const response = await axios.post('http://localhost:5000/auth/guardianSignup', {
        firstName: this.firstName,
        middleName: this.middleName,
        lastName: this.lastName,
        contactNumber: this.contactNumber,
        email: this.email,
        password: this.password,
          });
          console.log(response.data);
          alert('Form Submitted Successfully!');
        } catch (error) {
          console.error(error);
          alert('An error occured while submitting the form.')
        }
      },
      toggleShow() {
      this.showPassword = !this.showPassword;
    }
    }
  };
</script>

<style scoped>
.vh-100 {
  height: 93vh !important;
}
.navbar-container {
  height: 7vh;
  background: linear-gradient(to right, #ffe19d, #eacba7,#c49d84,#c49d84,#c49d84,#c49d84);
  font-weight: bolder;
}
.gradient-custom {
  background: linear-gradient(to right, #ffe19d, #eacba7,#c49d84,#c49d84,#c49d84,#c49d84)
}
.card {
  width: 60rem;
  margin: auto;
}
.card-body {
  padding-bottom: 1rem !important;
}
.bg-dark {
  background-color: rgba(244,244,244,.5) !important;
}
.text-white {
  color: black !important;
}
.text-white-50 {
  color: black !important;
  opacity: .70;
}
.form-outline{
  background-color: white;
  border-radius: 50px;
}
.form-outline .form-control~.form-label {
  color: gray !important;
}
.form-outline.form-white .form-control {
  color: black;
}
.out-label {
  margin-bottom: .5rem;
  margin-left: .5rem;
  font-weight: bold;
}
.left-forms {
  float: left;
  width: 50%;
  padding: 0 1.5rem 0 1.5rem;
}

.right-forms {
  float: right;
  width: 50%;
  padding: 0 1.5rem 0 1.5rem;
}
.col-xl-5 {
  width: 60rem;
}
.attachFile p {
  text-align: start;
  padding-left: .5rem;
}
.upload {
  text-align: start;
  font-weight: bold;
}
.upload .form-label {
  padding-left: .5rem;
}
#formFile {
  border-radius: 50px;
}
.btn {
  border-radius: 50px;
  background-color: #F0B400;
  font-weight: bolder;
  margin-bottom: 2rem;
  margin-right: 3rem;
  float: right;
}

.form-outline input[type="text"]:valid ~ label,
.form-outline input[type="email"]:valid ~ label,
.form-outline input[type="password"]:valid ~ label,
.form-outline input[type="number"]:valid ~ label {
  transform: translateY(-1.25rem) scale(0.85);
}
.form-outline > button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 0;
  margin-right: 1rem;
  border: none;
  background-color: white;
}
</style>