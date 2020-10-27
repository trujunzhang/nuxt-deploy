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
        <!-- Route -->
        <nuxt />
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./default.ts"/>
