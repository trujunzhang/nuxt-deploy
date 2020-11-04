<template>
  <Error404
    v-if="show404"
  />
  <div
    v-else
    id="yelp_main_body"
    class="jquery country-us logged-in react-modal-body v2"
  >
    <div id="wrap" class="lang-en">
      <div>
        <!--  header -->
        <HomeHeader />

        <!--  body -->
        <div
          v-if="detailUser"
          class="main-content-wrap main-content-wrap--full"
        >
          <!-- top -->
          <UserTop :detail-user="detailUser" />
          <div id="super-container" class="content-container">
            <div class="clearfix layout-block layout-n user-details_container">
              <!-- left -->
              <UserLeft :detail-user="detailUser" />
              <!-- right -->
              <!-- Route -->
              <nuxt />
            </div>
          </div>
          <PhotoFooter />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./userPage.ts"/>
