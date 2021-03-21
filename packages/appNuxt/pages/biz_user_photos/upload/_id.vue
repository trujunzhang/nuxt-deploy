<template>
  <div
    v-if="relatedModel"
    class="lemon--div__09f24__1mboc container__09f24__g4i9Y width11__09f24__2cN14"
  >
    <div class="lemon--div__09f24__1mboc content__09f24__2byvy">
      <div
        class="lemon--div__09f24__1mboc u-padding-t3 u-padding-b6 border-color--default__09f24__1eOdn"
      >
        <!-- title -->
        <TopTitle :related-model="relatedModel" />

        <!--  body -->
        <PhotoForm
          v-if="isNormalPanel()"
          :on-upload-image-hook="onUploadImageHook"
        />
        <PhotoConfirm
          v-if="isConfirmPanel()"
          :on-toggle-form-step="onToggleFormStep"
          :related-model="relatedModel"
          :image="image"
        />
      </div>
    </div>
    <PhotoFooter />
  </div>
</template>

<script lang="ts" src="./_id.ts" />
