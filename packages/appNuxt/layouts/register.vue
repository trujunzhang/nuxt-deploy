<template>
  <body id="yelp_main_body" class="jquery country-us logged-out">
    <div id="wrap" class="lang-en">
      <div class="page-header">
        <div>
          <div
            class="lemon--div__373c0__1mboc header__373c0__AlFmH border-color--default__373c0__2oFDT"
            aria-label="Yelp Header"
          >
            <div class="lemon--div__373c0__1mboc container__373c0__13FCe transparent__373c0__3oxYH">
              <div class="lemon--div__373c0__1mboc content__373c0__Zrlv5">
                <div
                  class="lemon--div__373c0__1mboc header-arrange__373c0__zC1DR arrange__373c0__UHqhV gutter-18__373c0__31Z0U vertical-align-middle__373c0__2TQsQ border-color--default__373c0__2oFDT"
                >
                  <div
                    class="lemon--div__373c0__1mboc arrange-unit__373c0__1piwO arrange-unit-fill__373c0__17z0h border-color--default__373c0__2oFDT"
                    data-testid="logo-unit"
                  >
                    <div
                      class="lemon--div__373c0__1mboc border-color--default__373c0__2oFDT text-align--center__373c0__1l506"
                      data-testid="logo-outter-wrapper"
                    >
                      <div
                        class="lemon--div__373c0__1mboc display--inline-block__373c0__2de_K border-color--default__373c0__2oFDT"
                        data-testid="logo-inner-wrapper"
                      >
                        <div
                          id="logo"
                          class="lemon--div__373c0__1mboc logo__373c0__oXueP border-color--default__373c0__2oFDT"
                          data-analytics-label="logo"
                        >
                          <a
                            class="lemon--a__373c0__IEZFH link__373c0__29943 logo-link__373c0__16Y0F link-color--blue-dark__373c0__1mhJo link-size--default__373c0__1skgq"
                            href="/"
                            target=""
                            name=""
                            rel=""
                            role="link"
                          >Yelp</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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
