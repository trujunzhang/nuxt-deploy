<template>
  <div
    v-if="restaurant"
  >
    <PhotoGrid
      v-if="!photoSelectId"
      :restaurant="restaurant"
    />
    <PhotoSingle
      v-if="photoSelectId"
      :restaurant="restaurant"
    />
    <PhotoFooter />
  </div>
</template>

<script lang="ts" src="./_slug.ts" />
