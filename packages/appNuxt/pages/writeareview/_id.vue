<template>
  <div
    v-if="shouldShowPage()"
    class=" content__09f24__2dXk- border-color--default__09f24__R1nRO"
  >
    <!-- Left Panel -->
    <div class=" container__09f24__g4i9Y">
      <div class=" content__09f24__2byvy">
        <!-- form -->
        <ReviewForm
          :related-model="relatedModel"
          :review="review"
          :is-new-review="isNewReview"
        />
      </div>
    </div>
    <!--  Right Panel  -->
    <div class=" sidebar__09f24__3Yqmh responsive-hidden-medium__09f24__czMWz border-color--default__09f24__R1nRO">
      <ReviewRight
        :related-model="relatedModel"
      />
    </div>
  </div>
</template>

<script lang="ts" src="./_id.ts" />
