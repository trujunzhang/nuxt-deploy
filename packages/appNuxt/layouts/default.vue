<template>
  <Error404
    v-if="show404"
  />
  <div
    v-else
    id="yelp_main_body"
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

<script lang="ts" src="./default.ts" />
