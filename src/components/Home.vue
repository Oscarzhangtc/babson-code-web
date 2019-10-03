<template>
  <div id="app">
    <!-- Hero Section -->
<div :style="{'background-image': 'url(' + require('../assets/img/others/electric.jpg') + ')'}">
    ../assets/img/others/electric.jpg
      <div
        class="container d-md-flex align-items-md-center height-md-100vh position-relative space-top-2 space-bottom-3 space-top-md-3 space-top-lg-2 space-bottom-md-0">
        <div class="w-lg-65 mb-5">
          <div class="w-lg-65 w-xl-50 mb-5">
            <!-- <h1 class="display-4 text-white">Sell your <strong class="font-weight-semi-bold">house</strong> online</h1> -->
            <h1 class="display-4 text-white"><span>Join our <strong
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
                <button type="submit" class="btn btn-block btn-primary transition-3d-hover">Signup</button>
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
            <h2 class="u-divider u-divider--text-alt">Alumni At</h2>
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
              <img class="u-clients ml-0" src="assets/svg/clients-logo/airbnb-white.svg" alt="Image Description">
            </div>
            <div class="js-slide">
              <img class="u-clients ml-0" src="assets/svg/clients-logo/samsung-white.svg" alt="Image Description">
            </div>
            <div class="js-slide">
              <img class="u-clients ml-0" src="assets/svg/clients-logo/netflix-white.svg" alt="Image Description">
            </div>
            <div class="js-slide">
              <img class="u-clients ml-0" src="assets/svg/clients-logo/uber-white.svg" alt="Image Description">
            </div>
            <div class="js-slide">
              <img class="u-clients ml-0" src="assets/svg/clients-logo/google-white.svg" alt="Image Description">
            </div>
            <div class="js-slide">
              <img class="u-clients ml-0" src="assets/svg/clients-logo/amazon-white.svg" alt="Image Description">
            </div>
            <div class="js-slide">
              <img class="u-clients ml-0" src="assets/svg/clients-logo/spotify-white.svg" alt="Image Description">
            </div>
            <div class="js-slide">
              <img class="u-clients ml-0" src="assets/svg/clients-logo/paypal-white.svg" alt="Image Description">
            </div>
          </div>
        </div>
        <!-- End Clients -->
      </div>
    </div>


    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
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
  margin-top: 60px;
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
