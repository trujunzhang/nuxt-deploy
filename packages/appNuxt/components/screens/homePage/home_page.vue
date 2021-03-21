<template>
  <!--  Container -->
  <div class=" spinnerContainer__09f24__2XcuX border-color--default__09f24__R1nRO background-color--white__09f24__2jFAt">
    <div class=" mainContentContainer__09f24__1mGmV border-color--default__09f24__R1nRO">
      <!--  Left -->
      <div class=" leftRailContainer__09f24__3fttY border-color--default__09f24__R1nRO">
        <div class=" leftRailMainContent__09f24__1ncfZ padding-r5__09f24__hWLOF padding-b5__09f24__28TLK padding-l5__09f24__3g2Ty border-color--default__09f24__R1nRO">
          <div class=" leftRailSearchResultsContainer__09f24__3vlwA border-color--default__09f24__R1nRO">
            <div class=" border-color--default__09f24__R1nRO">
              <!--  placeholder -->
              <ul
                v-if="shouldShowPlaceHolder()"
                style="margin-top: 25px;"
                class="lemon--ul__373c0__1_cxs undefined list__373c0__2G8oH"
              >
                <li
                  v-for="(item) in placeHolders"
                  :key="item"
                  class="lemon--li__373c0__1r9wz border-color--default__373c0__3-ifU"
                  style="border: 1px solid #eeeeef;height: 200px;margin-bottom: 20px;padding: 20px;"
                >
                  <FacebookLoader
                    :width="400"
                    :height="100"
                    :speed="2"
                    primary-color="#f3f3f3"
                    secondary-color="#ecebeb"
                  />
                </li>
              </ul>
              <ul class=" undefined list__09f24__17TsU">
                <li class=" border-color--default__09f24__R1nRO">
                  <div class=" padding-t1__09f24__2GVpG padding-b1__09f24__1d8yO border-color--default__09f24__R1nRO">
                    <h3 class=" heading--h5__09f24__FyKNw undefined">All Results</h3>
                  </div>
                </li>
                <li
                  v-for="(item, index) in items"
                  :key="item.uniqueId"
                  class=" border-color--default__09f24__R1nRO"
                >
                  <!-- item -->
                  <RestaurantItem :restaurant="item" :index="index" />
                </li>
              </ul>
              <!-- infinite scroll -->
              <div v-waypoint="{ active: true, callback: onWaypoint}"></div>
            </div>
          </div>
        </div>
        <div class=" padding-t3__09f24__-R_5x border-color--default__09f24__R1nRO background-color--gray-extra-light__09f24__LRQS9">
          <div class=" padding-t6__09f24__airUI padding-r5__09f24__hWLOF padding-b6__09f24__X0s2J padding-l5__09f24__3g2Ty border-color--default__09f24__R1nRO">
            <div class=" arrange__09f24__AiSIM gutter-auto__09f24__2WJTk margin-t3__09f24__5bM2Z border-color--default__09f24__R1nRO">
              <div class=" arrange-unit__09f24__1gZC1 arrange-unit-grid-column--8__09f24__2YKf7 border-color--default__09f24__R1nRO">
                <div class=" border-color--default__09f24__R1nRO">
                  <p class=" text__09f24__2tZKC text-color--black-extra-light__09f24__38DtK text-align--left__09f24__3Drs0 text-size--small__09f24__1Z_UI">
                    Copyright © 2004–2021 Yelp Inc. Yelp,<!-- --> <img
                    class=" align-bottom__09f24__2_PYL"
                    src="https://s3-media0.fl.yelpcdn.com/assets/public/logo_desktop_xsmall_outline.yji-17089be275f0e32eb065304790b0c35e.png"
                    alt="Yelp logo"
                  >, <!-- --> <img
                    class=" align-bottom__09f24__2_PYL"
                    src="https://s3-media0.fl.yelpcdn.com/assets/public/burst_desktop_xsmall_outline.yji-58cfc999e1f5da75e75ddf71c868c656.png"
                    alt="Yelp burst"
                  > <!-- -->and related marks are registered trademarks of Yelp.
                  </p>
                </div>
              </div>
              <div class=" arrange-unit__09f24__1gZC1 arrange-unit-grid-column--4__09f24__1qg_9 border-color--default__09f24__R1nRO">
                <p class=" text__09f24__2tZKC text-color--normal__09f24__3oebo text-align--center__09f24__3NO89 text-size--small__09f24__1Z_UI">
                  <a
                    class=" link__09f24__1kwXV link-color--blue-dark__09f24__2DRa0 link-size--inherit__09f24__2Uj95"
                    href="http://databyacxiom.com/"
                    target="_blank"
                    name=""
                    rel="nofollow"
                  >Some Data By
                    Acxiom</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--  Right -->
      <div class=" rightRailContainer__09f24__3VshM border-color--default__09f24__R1nRO">
        <div class=" rightRailInnerContainer__09f24__1eXhz border-color--default__09f24__R1nRO">
          <div class=" stickyContainer__09f24__1IR-t border-color--default__09f24__R1nRO" style="top: 131px; height: calc(100vh - 131px); margin-top: 34px;">
            <div class=" container__09f24__11Ola border-color--default__09f24__R1nRO">
              <div class=" outer__09f24__2nI2R border-color--default__09f24__R1nRO">
                <div class=" engine__09f24__3vSXb border-color--default__09f24__R1nRO" style="background-color: rgb(229, 227, 223); position: relative; overflow: hidden;">
                  <div style="height: 100%; width: 100%; position: absolute; top: 0px; left: 0px; background-color: rgb(229, 227, 223);">
                    <!-- Google map-->
                    <GmapMap
                      :center="{lat:34.044561, lng:-118.253985}"
                      :zoom="17"
                      style="width: 100%; height: 100%"
                    >
                      <GmapMarker
                        v-for="(m, index) in markers"
                        :key="index"
                        :position="m.position"
                        :clickable="true"
                        :draggable="true"
                        @click="center=m.position"
                      />
                    </GmapMap>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./home_page.ts" />
