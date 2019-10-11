<template>
    <div>
    <!-- ========== HEADER ========== -->
    <header id="header" class="u-header u-header--floating-md">
      <div id="logoAndNav" class="container">
        <div class="u-header__section nav-shadow u-header--floating__inner">
          <!-- Nav -->
          <nav class="js-mega-menu navbar  navbar-expand-md u-header__navbar u-header__navbar--no-space">
            <!-- Logo -->
            <a class="navbar-brand u-header__navbar-brand u-header__navbar-brand-center" href="/"
              aria-label="Front">
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                width="46px" height="46px" viewBox="0 0 46 46" xml:space="preserve" style="margin-bottom: 0;">
                <path fill="#3F7DE0" opacity=".65"
                  d="M23,41L23,41c-9.9,0-18-8-18-18v0c0-9.9,8-18,18-18h11.3C38,5,41,8,41,11.7V23C41,32.9,32.9,41,23,41z" />
                <path class="fill-info" opacity=".5"
                  d="M28,35.9L28,35.9c-9.9,0-18-8-18-18v0c0-9.9,8-18,18-18l11.3,0C43,0,46,3,46,6.6V18C46,27.9,38,35.9,28,35.9z" />
                <path class="fill-primary" opacity=".7"
                  d="M18,46L18,46C8,46,0,38,0,28v0c0-9.9,8-18,18-18h11.3c3.7,0,6.6,3,6.6,6.6V28C35.9,38,27.9,46,18,46z" />
                <!-- <path class="fill-white" d="M17.4,34V18.3h10.2v2.9h-6.4v3.4h4.8v2.9h-4.8V34H17.4z"/> -->
              </svg>
              <span class="u-header__navbar-brand-text" style="color: #42b983">&lt;CODE/&gt;</span>
            </a>
            <!-- End Logo -->
  
            <!-- Responsive Toggle Button -->
            <button type="button" class="navbar-toggler btn u-hamburger" aria-label="Toggle navigation"
              aria-expanded="false" aria-controls="navBar" data-toggle="collapse" data-target="#navBar">
              <span id="hamburgerTrigger" class="u-hamburger__box">
                <span class="u-hamburger__inner"></span>
              </span>
            </button>
            <!-- End Responsive Toggle Button -->
  
            <!-- Navigation -->
            <div id="navBar" class="collapse navbar-collapse u-header__navbar-collapse">
              <ul class="navbar-nav u-header__navbar-nav">
                <!-- Home -->
                <li class="nav-item u-header__nav-item">
                  <router-link to="/"><a class="nav-link u-header__nav-link">Home</a></router-link>
                </li>
                <!-- End Home -->
  
                <!-- Selling -->
                <li class="nav-item u-header__nav-item">
                  <router-link to="/about"><a class="nav-link u-header__nav-link">About Us</a></router-link>
                </li>
                <!-- End Selling -->
  
                <!-- Button -->
                <li class="nav-item u-header__nav-last-item">
                  <a class="btn btn-sm btn-success transition-3d-hover"
                    href="/contact">
                    
                    Contact Us
                  </a>
                </li>
                <!-- End Button -->
              </ul>
            </div>
            <!-- End Navigation -->
          </nav>
          <!-- End Nav -->
        </div>
      </div>
    </header>
    <!-- ========== END HEADER ========== -->
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
a {
  color: #42b983;
}

a:hover{
  color: #228b22;
}


</style>