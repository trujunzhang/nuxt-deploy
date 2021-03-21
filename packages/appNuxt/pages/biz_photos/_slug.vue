<template>
  <div
    v-if="relatedModel"
  >
    <PhotoGrid
      v-if="!photoSelectId"
      :related-model="relatedModel"
    />
    <PhotoSingle
      v-if="photoSelectId"
      :related-model="relatedModel"
    />
    <PhotoFooter />
  </div>
</template>

<script lang="ts" src="./_slug.ts" />
