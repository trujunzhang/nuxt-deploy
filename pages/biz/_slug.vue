<template>
  <div
    v-if="restaurant"
    class="main-content-wrap main-content-wrap--full">
    <div>
      <!--    photo header  -->
      <RestaurantPhotoHeader :restaurant="restaurant" />

      <div
        class="lemon--div__373c0__1mboc margin-t3__373c0__1l90z margin-b6__373c0__2Azj6 border-color--default__373c0__3-ifU"
      >
        <div
          class="lemon--div__373c0__1mboc biz-details-page-container-outer__373c0___byUp border-color--default__373c0__3-ifU"
        >
          <div
            class="lemon--div__373c0__1mboc biz-details-page-container-inner__373c0__2fjQF border-color--default__373c0__3-ifU"
          >
            <div class="lemon--div__373c0__1mboc margin-b3__373c0__q1DuY border-color--default__373c0__3-ifU"></div>
            <div
              class="lemon--div__373c0__1mboc stickySidebar--heightContext__373c0__133M8 tableLayoutFixed__373c0__12cEm arrange__373c0__2C9bH margin-b6__373c0__2Azj6 padding-b4__373c0__uiolV border-color--default__373c0__3-ifU"
            >
              <div
                class="lemon--div__373c0__1mboc arrange-unit__373c0__o3tjT arrange-unit-grid-column--8__373c0__2dUx_ padding-r6__373c0__2Qlev border-color--default__373c0__3-ifU"
              >
                <!-- detail -->
                <RestaurantInfo :restaurant="restaurant" />
                <!-- event -->
                <RestaurantEvent :restaurant="restaurant" />
                <!-- dish -->
                <!-- reviews -->
                <ReviewsList :restaurant="restaurant" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--      footer -->
      <HomeFooter />
    </div>
  </div>
</template>

<script lang="ts" src="./_slug.ts" />
