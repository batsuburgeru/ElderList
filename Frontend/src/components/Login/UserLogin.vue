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
      <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        <div class="card bg-dark text-white" style="border-radius: 1rem;">
          <div class="card-body p-5 text-center">

            <div class="mb-md-5 mt-md-4 pb-5">

              <h2 class="fw-bold mb-2 text-uppercase">Welcome Back!</h2>
              <p class="text-white-50 mb-5">Please enter your email and password!</p>
              
              <div class="form-outline form-white mb-4">
                <input required type="email" id="typeEmailX" class="form-control form-control-lg" />
                <label class="form-label" for="typeEmailX">Email</label>
              </div>

              <div class="form-outline form-white mb-4">
                  <input required :type="showPassword ? 'text' : 'password'" id="typePasswordX" class="form-control form-control-lg" />
                  <label class="form-label" for="typePasswordX">Password</label>
                  <button @click="toggleShow" class="show-password-button">
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-eye d-flex" viewBox="0 0 16 16">
    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
  </svg>
</button>
                </div>

              <p class="small mb-5 pb-lg-2 text-start"><a class="text-white-50" href="#!">Forgot password?</a></p>
              <div class="mdb-form-check">
                <MDBCheckbox label="Remember Me" v-model="checkbox2"/>
              </div>
              <button class="btn btn-lg px-5" type="submit">Sign In</button>
            </div>
            <div>
              <p class="sign-up mb-0 pb-lg-2 small mb-5">Don't have an account? <a href="#!" class="text-white-50 fw-bold">Sign Up</a>
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</section> 
</template>
<script>
  import { MDBNavbar, MDBNavbarBrand } from 'mdb-vue-ui-kit';
  import { MDBCheckbox } from "mdb-vue-ui-kit";
  import { ref, onMounted} from "vue";

  export default {
    components: {
      MDBCheckbox, MDBNavbar, MDBNavbarBrand,
    },
    setup() {
      const checkbox2 = ref(false);
      const showPassword = ref(false);

      const toggleShow = () => {
        showPassword.value = !showPassword.value;
      };

      onMounted(() => {
      const rememberMePreference = localStorage.getItem('rememberMe');

      if (rememberMePreference === 'true') {
        checkbox2.value = true;
      }
    });

    const saveRememberMePreference = () => {
      localStorage.setItem('rememberMe', checkbox2.value.toString());
    };

      return {
        checkbox2,
        saveRememberMePreference,
        showPassword,
        toggleShow
      };
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
.mdb-form-check {
  display: flex;
  align-items: center;
  justify-content: center;
}
.form-outline.form-white .form-control {
  color: black;
}
.btn {
  border-radius: 50px;
  background-color: #F0B400;
  font-weight: bolder;
  margin-top: .5rem;
}
.sign-up {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.sign-up a {
  margin-top: .25rem;
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