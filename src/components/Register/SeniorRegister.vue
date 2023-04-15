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
                        <input type="text" id="firstNameX" class="form-control form-control-lg" />
                        <label class="form-label" for="firstNameX">First Name</label>
                    </div>
                  </div>

                  <div class="mb-md-0 mt-md-0 pb-0">
                    <p class="out-label text-start">Contact No. *</p>
                    <div class="form-outline form-white mb-4">
                      <input type="text" id="contactNumberX" class="form-control form-control-lg" />
                      <label class="form-label" for="contactNumberX">+63</label>
                    </div>
                  </div>

                  <div class="mb-md-0 mt-md-0 pb-0">
                    <p class = "out-label text-start">Password *</p>
                    <div class="form-outline form-white mb-4">
                      <input type="text" id="typePasswordX" class="form-control form-control-lg" />
                      <label class="form-label" for="typePasswordX">Password</label>
                    </div>
                  </div>

                        <div class="attachFile">
                            <div class="mb-3 upload">
                            <label for="formFile" class="form-label">Attach Files</label>
                            <input class="form-control" type="file" id="formFile">
                          </div>
                          <p>Requirements:</p>
                          <p>Senior Citizen ID / Birth Certificate</p>
                        </div>
                      </div>

                      <div class = "right-forms">
                        <div class="mb-md-0 mt-md-0 pb-0">
                            <p class="out-label text-start">Last Name *</p>
                            <div class="form-outline form-white mb-4">
                                <input type="text" id="lastNameX" class="form-control form-control-lg" />
                                <label class="form-label" for="lastNameX">Last Name</label>
                            </div>
                        </div>

                        <div class="mb-md-0 mt-md-0 pb-0">
                            <p class="out-label text-start">E-mail address *</p>
                            <div class="form-outline form-white mb-4">
                                <input type="text" id="emailX" class="form-control form-control-lg" />
                                <label class="form-label" for="emailX">Email Address</label>
                            </div>
                        </div>

                        <div class="mb-md-0 mt-md-0 pb-0">
                          <p class = "out-label text-start">Confirm Password *</p>
                          <div class="form-outline form-white mb-4">
                          <input type="text" id="confirmPasswordX" class="form-control form-control-lg" />
                          <label class="form-label" for="confirmPasswordX">Re-type Password</label>
                          </div>
                        </div>
                      </div>       
                    </div>
                    <div>
                      <button class="btn btn-lg px-5" type="submit">Register</button>
                    </div>
                </div>
              </div>
        </div>
    </div>


  </section>


</template>

<script>
import { MDBNavbar, MDBNavbarBrand } from 'mdb-vue-ui-kit';

export default {
    components: {
      MDBNavbar,MDBNavbarBrand,
    },
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
</style>