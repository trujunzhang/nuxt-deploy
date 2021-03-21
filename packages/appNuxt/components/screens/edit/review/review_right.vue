<template>
  <div class=" sidebar-inner__09f24__3WaYY sidebar-inner border-color--default__09f24__R1nRO">
    <div class=" margin-t2__09f24__UnfmJ margin-b2__09f24__3k6FQ border-color--default__09f24__R1nRO"><h4 class=" heading--h4__09f24__2ijYq">Recent Reviews</h4></div>
    <!-- Review Items  -->
    <ReviewItem
      v-for="(item) in items"
      :key="item.uniqueId"
      :review="item"
      :show-edit-btn="false"
    />
    <div
      v-if="showEmptyText()"
    >
      <span>
        no Items!
      </span>
    </div>
  </div>
</template>

<script lang="ts" src="./review_right.ts" />
