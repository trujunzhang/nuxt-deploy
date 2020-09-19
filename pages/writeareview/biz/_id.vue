<template>
  <div
    v-if="shouldShowPage()"
    class="lemon--div__09f24__1mboc container__09f24__3tLpX border-color--default__09f24__1eOdn"
  >
    <!-- form -->
    <ReviewForm
      :restaurant="restaurant"
      :review="review"
      :isNewReview="isNewReview"
    />
    <!-- right -->
    <ReviewRight
      :restaurant="restaurant"
    />
  </div>
</template>

<script lang="ts" src="./_id.ts" />
