<template>
  <div
    class="lemon--div__373c0__1mboc mainContentContainer__373c0__32Mqa verticalFilterPanelEnabled__373c0__3lDVF border-color--default__373c0__3-ifU"
  >
    <!--  left -->
    <div class="lemon--div__373c0__1mboc leftRailContainer__373c0__390Ky border-color--default__373c0__3-ifU">
      <!--  Home Left  -->
      <div
        class="lemon--div__373c0__1mboc leftRailMainContent__373c0__4Lx_e padding-r5__373c0__126QE padding-b5__373c0__3XORh padding-l5__373c0__2Dc5X border-color--default__373c0__3-ifU"
      >
        <div
          class="lemon--div__373c0__1mboc leftRailSearchResultsContainer__373c0__GUx8Y border-color--default__373c0__3-ifU"
        >
          <!-- Restaurant List -->
          <div
            style="min-height: 400px;"
            class="lemon--div__373c0__1mboc border-color--default__373c0__3-ifU"
          >
            <ul class="lemon--ul__373c0__1_cxs undefined list__373c0__2G8oH">
              <li
                v-for="(item, index) in items"
                :key="item.uniqueId"
                class="lemon--li__373c0__1r9wz border-color--default__373c0__3-ifU"
              >
                <RestaurantItem :restaurant="item" :index="index" />
              </li>
            </ul>
          </div>
          <!-- infinite scroll -->
          <div v-waypoint="{ active: true, callback: onWaypoint}"></div>
        </div>
      </div>
      <HomeFooter />
    </div>
    <!--  right -->
    <div class="lemon--div__373c0__1mboc rightRailContainer__373c0__1fHyi border-color--default__373c0__3-ifU">
      <div
        class="lemon--div__373c0__1mboc rightRailInnerContainer__373c0__AyrX- border-color--default__373c0__3-ifU"
      >
        <div
          class="lemon--div__373c0__1mboc stickyContainer__373c0__j2qLJ border-color--default__373c0__3-ifU"
          style="top: 133px; height: calc(100vh - 133px); margin-top: 36px;"
        >
          <div class="lemon--div__373c0__1mboc container__373c0__1uRu5 border-color--default__373c0__3-ifU">
            <div class="lemon--div__373c0__1mboc outer__373c0__IdrqQ border-color--default__373c0__3-ifU">
              <div
                class="lemon--div__373c0__1mboc engine__373c0__1xWKv border-color--default__373c0__3-ifU"
                style="background-color: rgb(229, 227, 223); position: relative; overflow: hidden;"
              >
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
</template>

<script lang="ts" src="./home_page.ts"/>
