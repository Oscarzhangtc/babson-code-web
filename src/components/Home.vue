<template>
  <div id="app">
    <!-- Hero Section -->
<div class="d-md-flex bg-img-hero" v-bind:style="{'background-image': 'url(' + require('../assets/img/others/electric.jpg') + ')'}">

      <div
        class="container d-md-flex align-items-md-center height-md-100vh position-relative space-top-2 space-bottom-3 space-top-md-3 space-top-lg-2 space-bottom-md-0">
        <div class="w-lg-65 mb-5">
          <div class="w-lg-65 w-xl-50 mb-5">
            <!-- <h1 class="display-4 text-white">Sell your <strong class="font-weight-semi-bold">house</strong> online</h1> -->
            <h1 class="display-4 text-white" style="text-align: left"><span>Join our <strong
                  class="font-weight-semi-bold">community</strong></span></h1>
          </div>

          <!-- Form -->
          <form class="js-validate" action="https://usebasin.com/f/37b877e6c3a6" method="POST">
            <div class="form-row mb-2">
              <!-- <div class="col-6 col-md-5 mb-2">
                <div class="js-form-message">
                  <label class="sr-only" for="signupSrName">Name</label>
                  <div class="input-group">
                    <input type="text" class="form-control" name="name" id="signupSrName" placeholder="Name"
                      aria-label="Name" required data-msg="Name must contain only letters.">
                  </div>
                </div>
              </div> -->

              <div class="col-6 col-md-5 mb-2">
                <div class="js-form-message">
                  <label class="sr-only" for="signupSrEmail">Email</label>
                  <div class="input-group">
                    <input type="email" class="form-control" name="email" id="signupSrEmail" placeholder="Email"
                      aria-label="Email" required data-msg="Please enter a valid email address.">
                  </div>
                </div>
              </div>

              <div class="col-md-2 mb-2">
                <button type="submit" class="btn btn-block btn-success transition-3d-hover">Signup</button>
              </div>
            </div>

            <!-- Checkbox -->
            <div class="js-form-message">
              <div class="custom-control custom-checkbox d-flex align-items-center text-muted">
                <input type="checkbox" class="custom-control-input" id="termsCheckbox" name="termsCheckbox" required
                  data-msg="Please accept our Terms and Conditions.">
                <label class="custom-control-label text-white" for="termsCheckbox">
                  <small>
                    I agree to receive emails (We don't spam!)
                  </small>
                </label>
              </div>
            </div>
            <!-- End Checkbox -->
          </form>
          <!-- End Form -->
        </div>

        <!-- Clients -->
        <div class="container position-absolute right-0 bottom-0 left-0 space-2">
          <div class="text-center mb-4">
            <h2 class="u-divider u-divider--text-alt" style="color: white">Startups from C.O.D.E</h2>
          </div>
          <div class="js-slick-carousel u-slick" data-autoplay="true" data-speed="5000" data-infinite="true"
            data-slides-show="6" data-responsive='[{
                 "breakpoint": 1200,
                 "settings": {
                   "slidesToShow": 4
                 }
               }, {
                 "breakpoint": 992,
                 "settings": {
                   "slidesToShow": 4
                 }
               }, {
                 "breakpoint": 768,
                 "settings": {
                   "slidesToShow": 3
                 }
               }, {
                 "breakpoint": 576,
                 "settings": {
                   "slidesToShow": 3
                 }
               }, {
                 "breakpoint": 480,
                 "settings": {
                   "slidesToShow": 2
                 }
               }]'>
            <div class="js-slide">
              <img class="u-clients ml-0" v-bind:src="'../assets/svg/clients-logo/airbnb-white.svg'" alt="Image Description">
              
            </div>
            <div class="js-slide">
              <img class="u-clients ml-0" v-bind:src="'../assets/svg/clients-logo/samsung-white.svg'" alt="Image Description">
            </div>
            <div class="js-slide">
              <img class="u-clients ml-0" v-bind:src="'../assets/svg/clients-logo/netflix-white.svg'" alt="Image Description">
            </div>
            <div class="js-slide">
              <img class="u-clients ml-0" v-bind:src="'../assets/svg/clients-logo/uber-white.svg'" alt="Image Description">
            </div>
            <div class="js-slide">
              <img class="u-clients ml-0" v-bind:src="'../assets/svg/clients-logo/google-white.svg'" alt="Image Description">
            </div>
            <div class="js-slide">
              <img class="u-clients ml-0" v-bind:src="'../assets/svg/clients-logo/amazon-white.svg'" alt="Image Description">
            </div>
            <div class="js-slide">
              <img class="u-clients ml-0" v-bind:src="'../assets/svg/clients-logo/spotify-white.svg'" alt="Image Description">
            </div>
            <div class="js-slide">
              <img class="u-clients ml-0" v-bind:src="'../assets/svg/clients-logo/paypal-white.svg'" alt="Image Description">
            </div>
          </div>
        </div>
        <!-- End Clients -->
      </div>
    </div>

 <!-- Features Section -->
    <div id="SVGmockupBg" class=" container space-2">
      <!-- Nav Classic -->
      <div class="position-relative w-lg-85 bg-white text-center z-index-2 mx-lg-auto">
        <ul class="nav nav-classic nav-rounded nav-shadow nav-justified" id="pills-tab" role="tablist">
          <li class="nav-item">
            <a class="nav-link font-weight-medium active" id="pills-one-example1-tab" data-toggle="pill"
              href="#pills-one-example1" role="tab" aria-controls="pills-one-example1" aria-selected="true">
              <div class="d-md-flex justify-content-md-center align-items-md-center">
                <figure class="ie-height-40 d-none d-md-block w-100 max-width-6 mr-3">
                  <img class="js-svg-injector" v-bind:src="'../assets/svg/icons/icon-7.svg'" alt="SVG"
                    data-parent="#SVGmockupBg">
                </figure>
                About
              </div>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link font-weight-medium" id="pills-two-example1-tab" data-toggle="pill"
              href="#pills-two-example1" role="tab" aria-controls="pills-two-example1" aria-selected="false">
              <div class="d-md-flex justify-content-md-center align-items-md-center">
                <figure class="ie-height-40 d-none d-md-block w-100 max-width-6 mr-3">
                  <img class="js-svg-injector" src="../assets/svg/icons/icon-29.svg" alt="SVG"
                    data-parent="#SVGmockupBg">
                </figure>
                Apply
              </div>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link font-weight-medium" id="pills-three-example1-tab" data-toggle="pill"
              href="#pills-three-example1" role="tab" aria-controls="pills-three-example1" aria-selected="false">
              <div class="d-md-flex justify-content-md-center align-items-md-center">
                <figure class="ie-height-40 d-none d-md-block w-100 max-width-6 mr-3">
                  <img class="js-svg-injector" src="../assets/svg/icons/icon-8.svg" alt="SVG"
                    data-parent="#SVGmockupBg">
                </figure>
                Explore
              </div>
            </a>
          </li>
        </ul>
      </div>
      <!-- End Nav Classic -->

      <!-- Tab Content -->
      <div class="tab-content" id="pills-tabContent">
        <div class="tab-pane fade pt-9 show active" id="pills-one-example1" role="tabpanel"
          aria-labelledby="pills-one-example1-tab">
          <!-- Mockup Block -->
          <div class="row justify-content-lg-between align-items-lg-center">
            <div class="col-lg-4 mb-9 mb-lg-0">
              <!-- Info -->
              <div class="mb-5">
                <h3 class="h4 font-weight-semi-bold">Tech Entreprenuership at <span style="color: green">Babson</span>
                </h3>
                <p>Technology lowers the barrier for business. We're here to help you:</p>
              </div>

              <ul class="list-unstyled text-secondary font-size-1">
                <li class="media my-3">
                  <span class="fas fa-check text-primary mt-1 mr-3"></span>
                  <span class="media-body">
                    Learn and leverage existing technologies
                  </span>
                </li>
                <li class="media my-3">
                  <span class="fas fa-check text-primary mt-1 mr-3"></span>
                  <span class="media-body">
                    Disrupt industries
                  </span>
                </li>
                <li class="media my-3">
                  <span class="fas fa-check text-primary mt-1 mr-3"></span>
                  <span class="media-body">
                    Start a tech-based venture
                  </span>
                </li>
              </ul>
              <!-- End Info -->
            </div>

            <div class="col-lg-7 position-relative">
             <img class="img-fluid shadow-sm rounded" src="../assets/img/700x525/img2.jpg" alt="Image Description">
            </div>
          </div>
          <!-- End Mockup Block -->
        </div>
        <div class="tab-pane fade pt-9" id="pills-two-example1" role="tabpanel"
          aria-labelledby="pills-two-example1-tab">
          <!-- Mockup Block -->
          <div class="row justify-content-lg-between align-items-lg-center">
            <div class="col-lg-4 mb-9 mb-lg-0">
              <!-- Info -->
              <div class="mb-5">
                <h3 class="h4 font-weight-semi-bold">The Sky's the Limit</h3>
                <p>Applications are open during a 4-week window every semester. We love to see the following in our
                  applicants:</p>
              </div>

              <ul class="list-unstyled text-secondary font-size-1">
                <li class="media my-3">
                  <span class="fas fa-check text-primary mt-1 mr-3"></span>
                  <span class="media-body">
                    Engaged at CODE events
                  </span>
                </li>
                <li class="media my-3">
                  <span class="fas fa-check text-primary mt-1 mr-3"></span>
                  <span class="media-body">
                    Passion for technology
                  </span>
                </li>
                <li class="media my-3">
                  <span class="fas fa-check text-primary mt-1 mr-3"></span>
                  <span class="media-body">
                    Strong initiative
                  </span>
                </li>
              </ul>
              <!-- End Info -->
            </div>

            <div class="col-lg-7 position-relative">
              <div class="pl-md-9">
                <img class="img-fluid shadow-sm rounded" src="../assets/img/700x525/img2.jpg" alt="Image Description">
              </div>

              <!-- SVG Component -->

              <!-- End SVG Component -->
            </div>
          </div>
          <!-- End Mockup Block -->
        </div>
        <div class="tab-pane fade pt-9" id="pills-three-example1" role="tabpanel"
          aria-labelledby="pills-three-example1-tab">
          <!-- Mockup Block -->
          <div class="row justify-content-lg-between align-items-lg-center">
            <div class="col-lg-4 mb-9 mb-lg-0">
              <!-- Info -->
              <div class="mb-5">
                <h3 class="h4 font-weight-semi-bold">Our Residents are <span class="text-primary">Amazing</span></h3>
                <p>Check out who they are and what they've been up to!</p>
              </div>

              <a class="btn btn-soft-indigo" href="coming-soon.html ">Explore Community <span
                  class="fas fa-chevron-right font-size-1"></span></a>
              <!-- End Info -->
            </div>

            <div class="col-lg-7 position-relative">
              <div class="pl-md-9">
              <img class="img-fluid shadow-sm rounded" src="../assets/img/700x525/img2.jpg" alt="Image Description">

              </div>


            </div>
          </div>
          <!-- End Mockup Block -->
        </div>
      </div>
      <!-- End Tab Content -->
    </div>
    <!-- End Features Section -->

    <!-- Icon Blocks Section -->
    <div class="bg-light">
      <div class="container space-2 space-md-3">
        <!-- Title -->
        <div class="w-md-60 w-lg-35 text-center mx-auto mb-9">
          <h2 class="h5 font-weight-normal">
            Apply for housing or explore our community.
          </h2>
        </div>
        <!-- End Title -->

        <div class="w-lg-85 mx-lg-auto">
          <div class="card-deck d-block d-md-flex card-md-gutters-3">
            <!-- Card -->
            <article class="card text-center">
              <div class="card-body p-7">
                <!-- SVG Icon -->
                <div id="SVGforSale" class=" w-75 mx-auto mb-6">
                  <figure class="ie-for-sale">
                    <img class="js-svg-injector" src="../assets/svg/flat-icons/for-sale.svg" alt="Image Description"
                      data-parent="#SVGforSale">
                  </figure>
                </div>
                <!-- End SVG Icon -->

                <h3 class="h4 mb-3">Apply for Housing</h3>
                <p class="mb-4">Unfortunately, our application deadline has passed!</p>
                <a class="btn btn-sm btn-soft-danger transition-3d-hover" disabled>
                  Apply
                  <span class="fas fa-angle-right ml-2"></span>
                </a>
              </div>
            </article>
            <!-- End Card -->

            <!-- Card -->
            <article class="card text-center">
              <div class="card-body p-7">
                <!-- SVG Icon -->
                <div id="SVGbuyer" class=" w-75 mx-auto mb-6">
                  <figure class="ie-buyer">
                    <img class="js-svg-injector" src="../assets/svg/flat-icons/buyer.svg" alt="Image Description"
                      data-parent="#SVGbuyer">
                  </figure>
                </div>
                <!-- End SVG Icon -->

                <h3 class="h4 mb-3">Explore our Community</h3>
                <p class="mb-4">Our residents are amazing! Check out what they've been up to.</p>
                <a class="btn btn-sm btn-soft-primary transition-3d-hover" href="coming-soon.html">
                  Our Community
                  <span class="fas fa-angle-right ml-2"></span>
                </a>
              </div>
            </article>
            <!-- End Card -->
          </div>
        </div>
      </div>
    </div>
    <!-- End Icon Blocks Section -->
  </main>

  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {

    }
  }
}

</script>

<style>


  
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}



</style>
