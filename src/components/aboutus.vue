<template>
<div>
<!-- ========== MAIN ========== -->
  <main id="content" role="main">
    <!-- Hero Section -->
    <div class="container space-2 space-top-md-5 space-top-lg-4">
      <div class="mb-10 w-lg-80 text-center mx-lg-auto">
        <div>
          <h1 class="display-4 font-weight-semi-bold" >About Us</h1>
          <p class="lead font-weight-normal"><span class="font-weight-semi-bold" style="color: green">CODE</span> (Community Of Developers and Entrepreneurs) is the heart of technology and entrepreneurship at Babson.
        </p>
        </div>
      </div>

 
    </div>
    <!-- End Hero Section -->

    <!-- Stats Section -->
    <div class="container space-top-1 space-bottom-2 space-bottom-lg-3">
      <div class="row justify-content-lg-center">
        <div class="col-sm-4 col-lg-3 mb-7 mb-sm-0">
          <!-- Stats -->
          <div class="text-center">
            <span class="d-block h2 font-weight-semi-bold text-uppercase mb-0">2015</span>
            <span class="text-secondary">Founded</span>
          </div>
          <!-- End Stats -->
        </div>

        <div class="col-sm-4 col-lg-3 mb-7 mb-sm-0">
          <!-- Stats -->
          <div class="text-center">
            <span class="d-block h2 font-weight-semi-bold text-uppercase mb-0">21</span>
            <span class="text-secondary">Residents</span>
          </div>
          <!-- End Stats -->
        </div>

        <div class="col-sm-4 col-lg-3">
          <!-- Stats -->
          <div class="text-center">
            <span class="d-block h2 font-weight-semi-bold text-uppercase mb-0">180+</span>
            <span class="text-secondary">General Members</span>
          </div>
          <!-- End Stats -->
        </div>
      </div>
    </div>
    <!-- End Stats Section -->

    <!-- Divider -->
    <div class="container">
      <div class="w-lg-65 mx-lg-auto">
        <hr class="my-0">
      </div>
    </div>
    <!-- End Divider -->

    <!-- About Section -->
    <div class="container space-2">
      <div class="row justify-content-lg-between">
        <div class="col-lg-5 mb-5 mb-lg-0">
          <h2 class="font-weight-semi-bold">Tools should adapt to the user, not the other way around.</h2>
        </div>
        <div class="col-lg-6">
        <p>We view technology as a tool to form disruptive companies that change the world. CODE is a platform to find co-founders, collaborate on ideas and learn more about technology and entrepreneurship as a whole. CODE also consults to technology startups through the Blank Center of entrepreneurship at Babson.</p>
        <p>We are proud to say most of our residents are working on solving tough problems around the world they are passionate about through a startup. </p> 
      
        </div>
      </div>
    </div>
    <!-- End About Section -->

    <!-- Workshop Section -->
    <div class="container space-2">
      <div class="row justify-content-lg-between">
        <div class="col-lg-5 mb-5 mb-lg-0">
          <h2 class="font-weight-semi-bold">Learn.</h2>
          <h2 class="font-weight-semi-bold">Develop.</h2>
          <h2 class="font-weight-semi-bold">Launch.</h2>

        </div>
        <div class="col-lg-6">
        <p>CODE hosts a variety of workshops with partner companies. It allows students to learn on demand skills with real world projects under their belt. It allows them to launch their startup or find a job without a problem.</p>
        <img style="max-height:90%; max-width:100%;" src="../assets/local/don.png" alt="img description/reload your page">
        <p class="mb-1" style="font-size: 80%">Don Woodlock, head of HealthShare at Intersystems shares his experience at a CODE event. Formerly he was the CTO of GE’s $19 Billion Healthcare Business.</p>
        </div>
      </div>
    </div>
    <!-- End Workshop Section -->
    <!-- Hackathon Section -->
    <div class="container space-2">
      <div class="row justify-content-lg-between">
        <div class="col-lg-5 mb-5 mb-lg-0">
          <h2 class="font-weight-semi-bold">Opportunities to apply your knowledge.</h2>

        </div>
        <div class="col-lg-6">
        <p>Apart from competingin Hackathons ourselves, CODE also hosts learning hackathons where students compete to learn a new language or skill and build a notable project for an specific amount of time.</p>
        <img style="max-height:90%; max-width:100%;" src="../assets/local/build.png" alt="img description/reload your page">        
        <p class="mb-1" style="font-size: 80%">This is a team in a CODE building hackathon where students get to intensely focus on a project for an specific amount of time alongside their peers.</p>
        </div>
      </div>
    </div>
    <!-- End Hackathon Section -->
    <!-- Divider -->
    <div class="container">
      <div class="w-lg-65 mx-lg-auto">
        <hr class="my-0">
      </div>
    </div>
    <!-- End Divider -->

    
    <!-- Subscribe Section -->
    <div class="space-1">
      <div class="bg-img-hero" style="background-image: url(../assets/img/bg-shapes/bg5.png);">
        <div class="container space-2 space-bottom-lg-3">
          <!-- Title -->
          <div class="w-md-60 text-center mx-auto mb-7">
            <h2 class="font-weight-semi-bold">Stay in the know</h2>
            <p>Get the latest news from Babson's tech scene.</p>
          </div>
          <!-- End Title -->
        <transition>
        
        </transition>
          <!-- Subscribe Form -->
          <div class="w-md-75 w-lg-50 mx-md-auto">
            <form class="js-validate form-row">
              <div class="col-8">
                <div class="js-form-message">
                  <label class="sr-only" for="signupSrEmailExample1">Your email</label>
                  <div class="input-group input-group-pill">
                    <input type="email" class="form-control" name="email" id="signupSrEmailExample1" placeholder="Your email" aria-label="Your email" required
                           data-msg="Please enter a valid email address."
                           data-error-class="u-has-error"
                           data-success-class="u-has-success">
                  </div>
                </div>
              </div>

              <div class="col-4">
                <button type="submit" class="btn btn-success btn-pill btn-wide transition-3d-hover">Sign me up!</button>
              </div>
            </form>
          </div>
          <!-- End Subscribe Form -->
        </div>
      </div>
    </div>
    <!-- End Subscribe Section -->
  </main>
  <!-- ========== END MAIN ========== -->

</div>
</template>

<script>
export default {
    
}
</script>