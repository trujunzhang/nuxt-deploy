<template>
  <div
    v-if="restaurant"
    class="main-content-wrap main-content-wrap--full"
  >
    <div>
      <!--  Header    -->
      <RestaurantInfo :restaurant="restaurant" />

      <!--  Container    -->
      <div class=" margin-t3__373c0__1l90z margin-b6__373c0__2Azj6 border-color--default__373c0__3-ifU">
        <div class=" biz-details-page-container-outer__373c0___byUp border-color--default__373c0__3-ifU">
          <div class=" biz-details-page-container-inner__373c0__2fjQF border-color--default__373c0__3-ifU">
            <div class=" margin-b6__373c0__2Azj6 border-color--default__373c0__3-ifU">
              <div
                class=" stickySidebar--heightContext__373c0__133M8 tableLayoutFixed__373c0__12cEm arrange__373c0__2C9bH padding-b4__373c0__uiolV border--bottom__373c0__3qNtD border-color--default__373c0__3-ifU"
              >
                <div class=" arrange-unit__373c0__o3tjT arrange-unit-grid-column--8__373c0__2dUx_ padding-r2__373c0__28zpp border-color--default__373c0__3-ifU">
                  <!--  Line1[Action]    -->
                  <RestaurantActions :restaurant="restaurant" />

                  <!--  Line2[Menu]    -->

                  <!--  Line3[Location & Hours]    -->

                  <!--  Line4[Recommended Reviews]    -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!--  Footer    -->
      <div class=" padding-t3__373c0__1gw9E border-color--default__373c0__3-ifU background-color--gray-extra-light__373c0__1yN-l">
        <div class=" container__373c0__13FCe space6__373c0__3cRS3 smSpace3__373c0__2wRS3 transparent__373c0__3oxYH">
          <div class=" content__373c0__Zrlv5">
            <div class=" arrange__373c0__2C9bH gutter-auto__373c0__1Ep_j margin-t3__373c0__1l90z border-color--default__373c0__3-ifU">
              <div class=" arrange-unit__373c0__o3tjT arrange-unit-grid-column--8__373c0__2dUx_ border-color--default__373c0__3-ifU">
                <div class=" border-color--default__373c0__3-ifU">
                  <p
                    class=" text__373c0__2Kxyz text-color--black-extra-light__373c0__2OyzO text-align--left__373c0__2XGa- text-size--small__373c0__3NVWO"
                  >
                    Copyright © 2004–2021 Yelp Inc. Yelp,<!-- -->
                    <img
                      class=" align-bottom__373c0__1PMP-"
                      src="https://s3-media0.fl.yelpcdn.com/assets/public/logo_desktop_xsmall_outline.yji-17089be275f0e32eb065304790b0c35e.png"
                      alt="Yelp logo"
                    >, <!-- --> <img
                      class=" align-bottom__373c0__1PMP-"
                      src="https://s3-media0.fl.yelpcdn.com/assets/public/burst_desktop_xsmall_outline.yji-58cfc999e1f5da75e75ddf71c868c656.png"
                      alt="Yelp burst"
                    > <!-- -->and related marks
                    are registered trademarks of Yelp.
                  </p>
                </div>
              </div>
              <div class=" arrange-unit__373c0__o3tjT arrange-unit-grid-column--4__373c0__33Wpc border-color--default__373c0__3-ifU"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./_slug.ts" />
