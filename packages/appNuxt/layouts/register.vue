<template>
  <body id="yelp_main_body" class="jquery country-us logged-out">
    <div id="wrap" class="lang-en">
      <!-- page header -->
      <LoginHeader />

      <div class="main-content-wrap main-content-wrap--full">
        <div id="super-container" class="content-container">
          <div class="clearfix layout-block layout-h row--responsive">
            <div class="column column-alpha column--responsive">
              <!--        Route-->
              <nuxt />
            </div>
            <div class="column column-beta responsive-visible-large-block">
              <div class="picture-container">
                <img
                  src="~/assets/images/signup_illustration.png"
                >
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="main-content-wrap main-content-wrap--separated">
        <div class="content-container">
          <div class="main-footer webview-hidden">
            <div class="main-footer_city-landscape-img" role="presentation"></div>

            <small class="main-footer_copyright">
              Copyright © 2004–2020 Yelp Inc. Yelp, <img
                src="https://s3-media0.fl.yelpcdn.com/assets/srv0/yelp_styleguide/17089be275f0/assets/img/logos/logo_desktop_xsmall_outline.png"
                alt="Yelp logo"
                class="main-footer_logo-copyright"
              >,
              <img
                src="https://s3-media0.fl.yelpcdn.com/assets/srv0/yelp_styleguide/58cfc999e1f5/assets/img/logos/burst_desktop_xsmall_outline.png"
                alt="Yelp burst"
                class="main-footer_logo-burst"
              >
              and related marks are registered trademarks of Yelp.
            </small>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>
