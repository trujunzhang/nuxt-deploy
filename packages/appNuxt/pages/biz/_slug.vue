<template>
  <div
    v-if="restaurant"
    class="main-content-wrap main-content-wrap--full">
    <div>
      <!--  Line1    -->
      <RestaurantInfo :restaurant="restaurant" />
    </div>
  </div>
</template>

<script lang="ts" src="./_slug.ts" />
