<template>
  <div id="yelp_main_body" class="jquery country-us logged-in react-modal-body v2">
    <div id="fb-root"></div>

    <div id="wrap" class="lang-en">
      <span id="page-content" class="offscreen">&nbsp;</span>
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
