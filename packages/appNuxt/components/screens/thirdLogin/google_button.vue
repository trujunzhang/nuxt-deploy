<template>
  <button
    type="submit"
    value="submit"
    class="ybtn ybtn--social ybtn--google ybtn-full"
    @click="onButtonClick"
  >
    <span>
      <div
        class="u-text-centered"
      >
        <span class="icon--png">
          <img
            height="24"
            width="24"
            src="https://s3-media0.fl.yelpcdn.com/assets/srv0/yelp_styleguide/cae242fd3929/assets/img/structural/24x24_google_rainbow.png"
          >
        </span> Sign in with Google</div>
    </span>
  </button>
</template>

<script lang="ts" src="./google_button.ts" />
