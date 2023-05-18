<template>
    <header>
  <!-- Navbar -->
  <nav class="navbar navbar-expand-lg navbar-light fixed-top mask-custom shadow-0">
    <div class="container">
        <a href="#" class="navbar-brand"><img src="../../assets/img/elderlist-logo.png" alt="ElderList Logo"></a>
      <a class="navbar-brand" href="#"><span style="color: #89CFF1;">Elder</span><span style="color: #fff;">List</span></a>
      <button class="navbar-toggler" type="button" data-mdb-toggle="collapse"
        data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
        aria-label="Toggle navigation">
        <i class="fas fa-bars"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <a class="nav-link" style="color: #4f4f4f; font-size: large;" href="#about-us">About Us</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" style="color: #4f4f4f; font-size: large;" href="#about-us">How to Use</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" style="color: #4f4f4f; font-size: large;" href="#team">Team</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" style="color: #4f4f4f; font-size: large;" href="#contact">Contact</a>
          </li>
        </ul>
        <ul class="navbar-nav d-flex flex-row">
          <li class="nav-item me-3 me-lg-0">
            <router-link class="nav-link" to="/SeniorRegister" style="color: #4f4f4f; font-size: large;">Register as Senior</router-link>
          </li>
          <li class="nav-item me-3 me-lg-0">
            <router-link class="nav-link" to="/GuardianRegister" style="color: #4f4f4f; font-size: large;">Register as Guardian</router-link>
          </li>
          <li class="nav-item me-3 me-lg-0">
            <router-link class="nav-link" to="/UserLogin" style="color: #4f4f4f; font-size: large;">Login</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <!-- Navbar -->

  <!--Section: Design Block-->
  <section class="position-relative vh-100">
    <!-- Intro -->
    <div id="intro" class="bg-image vh-100">
        <img src="../../assets/img/elders-bg.jpg" alt="" class="vw-100">
      <div class="mask" style="background-color: rgba(47,79,79,.3);"></div>
    </div>
    <!-- Intro -->

    <div class="hero-tag position-absolute top-50 start-50 translate-middle text-center">
        <h1>Making Discounts More Accessible to our Elders</h1>
        <h2>An easy way to track senior citizen's discounts and expenses</h2>
      </div>
  </section>

  <section id="about-us" class="about-us">
    <div class="bg-white py-5">
  <div class="container py-5">
    <div class="row align-items-center mb-5">
      <div class="col-lg-6 order-2 order-lg-1"><i class="fa fa-leaf fa-2x mb-3 text-primary"></i>
        <h2 class="font-weight-light" style="color: black; font-weight: bold;">Hypex</h2>
        <p class="font-italic text-muted mb-4">Hypex is a digital software development company dedicated to solving problems using digital 
          tools. Our mission is to create innovative digital solutions that will improve the lives of people around the world.</p>
          <a href="#team" class="btn btn-light px-5 rounded-pill shadow-sm">Learn More</a>
      </div>
      <div class="col-lg-5 px-5 mx-auto order-1 order-lg-2"><img src="../../assets/img/hypex-logo.png" alt="" class="img-fluid mb-4 mb-lg-0"></div>
    </div>
    <div class="row align-items-center">
      <div class="col-lg-5 px-5 mx-auto"><img src="../../assets/img/elderlist-laptop.png" alt="" class="img-fluid mb-4 mb-lg-0"></div>
      <div class="col-lg-6"><i class="fa fa-bar-chart fa-2x mb-3 text-primary"></i>
        <h2 class="font-weight-light" style="color: black; font-weight: bold;">ElderList</h2>
        <p class="font-italic text-muted mb-4">To start using ElderList, just create your account using the Register button either as a senior citizen or a guardian 
          for a senior citizen. Once your account and identity has been verified, you can start using ElderList as your digital booklet for all your discounted purchases.
        </p><a href="#contact" class="btn btn-light px-5 rounded-pill shadow-sm">Learn More</a>
      </div>
    </div>
  </div>
</div>
  </section>

<section id="team">
    <div class="bg-light py-5">
    <div class="container py-5">
      <div class="row justify-content-center text-center">
        <div class="col-lg-5">
          <h2 class="display-4 font-weight-light" style="color: black; font-weight: bold;">Our team</h2>
          <p class="font-italic text-muted">Meet the people behind ElderList.</p>
        </div>
      </div>

    <div class="row text-center">
      <!-- Team item-->
      <div class="col-xl-3 col-sm-6 mb-5">
        <div class="bg-white rounded shadow-sm py-5 px-4"><img src="https://bootstrapious.com/i/snippets/sn-about/avatar-3.png" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm">
          <h5 class="mb-0">Bato, Alexander Q.</h5><span class="small text-uppercase text-muted">Programmer</span>
          <ul class="social mb-0 list-inline mt-3">
            <li class="list-inline-item"><a href="#" class="social-link"><i class="bi bi-facebook"></i></a></li>
            <li class="list-inline-item"><a href="#" class="social-link"><i class="bi bi-twitter"></i></a></li>
            <li class="list-inline-item"><a href="#" class="social-link"><i class="bi bi-instagram"></i></a></li>
            <li class="list-inline-item"><a href="#" class="social-link"><i class="bi bi-linkedin"></i></a></li>
          </ul>
        </div>
      </div>
      <!-- End-->

      <!-- Team item-->
      <div class="col-xl-3 col-sm-6 mb-5">
        <div class="bg-white rounded shadow-sm py-5 px-4"><img src="../../assets/img/bautista.png" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm">
          <h5 class="mb-0">Bautista, Henry James</h5><span class="small text-uppercase text-muted">System Analyst</span>
          <ul class="social mb-0 list-inline mt-3">
            <li class="list-inline-item"><a href="#" class="social-link"><i class="bi bi-facebook"></i></a></li>
            <li class="list-inline-item"><a href="#" class="social-link"><i class="bi bi-twitter"></i></a></li>
            <li class="list-inline-item"><a href="#" class="social-link"><i class="bi bi-instagram"></i></a></li>
            <li class="list-inline-item"><a href="#" class="social-link"><i class="bi bi-linkedin"></i></a></li>
          </ul>
        </div>
      </div>
      <!-- End-->

      <!-- Team item-->
      <div class="col-xl-3 col-sm-6 mb-5">
        <div class="bg-white rounded shadow-sm py-5 px-4"><img src="../../assets/img/bernal.png" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm">
          <h5 class="mb-0">Bernal, Joshua Miguel</h5><span class="small text-uppercase text-muted">Designer</span>
          <ul class="social mb-0 list-inline mt-3">
            <li class="list-inline-item"><a href="#" class="social-link"><i class="bi bi-facebook"></i></a></li>
            <li class="list-inline-item"><a href="#" class="social-link"><i class="bi bi-twitter"></i></a></li>
            <li class="list-inline-item"><a href="#" class="social-link"><i class="bi bi-instagram"></i></a></li>
            <li class="list-inline-item"><a href="#" class="social-link"><i class="bi bi-linkedin"></i></a></li>
          </ul>
        </div>
      </div>
      <!-- End-->

      <!-- Team item-->
      <div class="col-xl-3 col-sm-6 mb-5">
        <div class="bg-white rounded shadow-sm py-5 px-4"><img src="../../assets/img/martirez.png" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm">
          <h5 class="mb-0">Martirez, John Veejay</h5><span class="small text-uppercase text-muted">Documentation</span>
          <ul class="social mb-0 list-inline mt-3">
            <li class="list-inline-item"><a href="#" class="social-link"><i class="bi bi-facebook"></i></a></li>
            <li class="list-inline-item"><a href="#" class="social-link"><i class="bi bi-twitter"></i></a></li>
            <li class="list-inline-item"><a href="#" class="social-link"><i class="bi bi-instagram"></i></a></li>
            <li class="list-inline-item"><a href="#" class="social-link"><i class="bi bi-linkedin"></i></a></li>
          </ul>
        </div>
      </div>

      <div class="row justify-content-center">
        <div class="col-xl-3 col-sm-6 mb-5">
        <div class="bg-white rounded shadow-sm py-5 px-4"><img src="https://bootstrapious.com/i/snippets/sn-about/avatar-1.png" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm">
          <h5 class="mb-0">Mozo, Brendan Govic</h5><span class="small text-uppercase text-muted">Quality Assurance</span>
          <ul class="social mb-0 list-inline mt-3">
            <li class="list-inline-item"><a href="#" class="social-link"><i class="bi bi-facebook"></i></a></li>
            <li class="list-inline-item"><a href="#" class="social-link"><i class="bi bi-twitter"></i></a></li>
            <li class="list-inline-item"><a href="#" class="social-link"><i class="bi bi-instagram"></i></a></li>
            <li class="list-inline-item"><a href="#" class="social-link"><i class="bi bi-linkedin"></i></a></li>
          </ul>
        </div>
      </div>
      </div>
      <!-- End-->

    </div>
  </div>
</div>
</section>

      
<section id="contact" class="m-0 p-5 vw-99">
<!--Section heading-->
<h2 class="h1-responsive font-weight-bold text-center my-4" style="color: black; font-weight: bold;">Contact us</h2>
<!--Section description-->
<p class="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
    a matter of hours to help you.</p>

<div class="row">

    <!--Grid column-->
    <div class="col-md-9 mb-md-0 mb-5">
        <form id="contact-form" name="contact-form" action="mail.php" method="POST">

            <!--Grid row-->
            <div class="row">

                <!--Grid column-->
                <div class="col-md-6">
                    <div class="md-form mb-0">
                        <input type="text" id="name" name="name" class="form-control">
                        <label for="name" class="">Your name</label>
                    </div>
                </div>
                <!--Grid column-->

                <!--Grid column-->
                <div class="col-md-6">
                    <div class="md-form mb-0">
                        <input type="text" id="email" name="email" class="form-control">
                        <label for="email" class="">Your email</label>
                    </div>
                </div>
                <!--Grid column-->

            </div>
            <!--Grid row-->

            <!--Grid row-->
            <div class="row">
                <div class="col-md-12">
                    <div class="md-form mb-0">
                        <input type="text" id="subject" name="subject" class="form-control">
                        <label for="subject" class="">Subject</label>
                    </div>
                </div>
            </div>
            <!--Grid row-->

            <!--Grid row-->
            <div class="row">

                <!--Grid column-->
                <div class="col-md-12">

                    <div class="md-form">
                        <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>
                        <label for="message">Your message</label>
                    </div>

                </div>
            </div>
            <!--Grid row-->

        </form>

        <div class="text-center text-md-left">
            <a class="btn btn-primary" onclick="document.getElementById('contact-form').submit();">Send</a>
        </div>
        <div class="status"></div>
    </div>
    <!--Grid column-->

    <!--Grid column-->
    <div class="col-md-3 text-center">
        <ul class="list-unstyled mb-0">
            <li><i class="fas fa-map-marker-alt fa-2x"></i>
                <p>363 Pascual Casal St, Quiapo, Manila, 1001 Metro Manila</p>
            </li>

            <li><i class="fas fa-phone mt-4 fa-2x"></i>
                <p>(+632) 8733-9117</p>
            </li>

            <li><i class="fas fa-envelope mt-4 fa-2x"></i>
                <p>info@tip.edu.ph</p>
            </li>
        </ul>
    </div>
    <!--Grid column-->
</div>
</section>
</header>
</template>

<script>
export default {
  methods: {
    toRegisterSenior(path) {
      window.location.href = path;
    },
  },
};
</script>

<style scoped>
#about-us .bg-white {
    background-image: linear-gradient(to bottom, white, #F9E07E, white) !important;
}
#team .bg-light {
    background-image: linear-gradient(to bottom, white, #89CFF1, white) !important;
}
#contact{
    background-image: linear-gradient(to bottom, white, #6B8E23, white) !important;
    color: black;
}
h1 {
    font-size: xxx-large;
}
h2 {
    font-size: x-large;
    color:beige;
}
.hero-tag {
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    color: aliceblue;
}
header {
    font-weight: bold;
}
.navbar-brand img {
    width: 3.5rem;
    margin: 0;
}
.mask-custom {
  backdrop-filter: blur(5px);
  background-color: rgba(255, 255, 255, .15);
}
.navbar-brand {
  font-size: 1.75rem;
  letter-spacing: 3px;
}
</style>