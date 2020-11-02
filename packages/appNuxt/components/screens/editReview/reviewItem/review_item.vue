<template>
  <div
    class="lemon--div__09f24__1mboc u-space-r1 u-space-b4 border-color--default__09f24__1eOdn"
    style="word-break:break-word"
  >
    <div class="lemon--div__09f24__1mboc u-space-b1 border-color--default__09f24__1eOdn">
      <div
        class="lemon--div__09f24__1mboc border-color--default__09f24__1eOdn"
      >
        <div class="lemon--div__09f24__1mboc user-passport__09f24__9Qvwb user-passport-slim__09f24__fCZ1w arrange__09f24__2v3uJ gutter-6__09f24__2Egju border-color--default__09f24__1eOdn">
          <div class="lemon--div__09f24__1mboc arrange-unit__09f24__3IxLD border-color--default__09f24__1eOdn">
            <div class="lemon--div__09f24__1mboc slim-avatar__09f24__X3jpv border-color--default__09f24__1eOdn">
              <div class="lemon--div__09f24__1mboc on-click-container border-color--default__09f24__1eOdn">
                <img
                  class="lemon--img__09f24__3GQUb photo-box-img__09f24__3mj0s"
                  :src="getUserPhotoUrl()"
                  width="30"
                  height="30"
                >
              </div>
            </div>
          </div>
          <div class="lemon--div__09f24__1mboc arrange-unit__09f24__3IxLD arrange-unit-fill__09f24__1v_h4 border-color--default__09f24__1eOdn">
            <div
              style="margin-top: 6px;"
              class="lemon--div__09f24__1mboc user-passport-info border-color--default__09f24__1eOdn"
            >
              <span
                class="lemon--span__09f24__3997G text__09f24__1RhSS fs-block text-color--normal__09f24__3mwlT text-align--left__09f24__ceIWW text-weight--bold__09f24__37wBe"
              >
                {{ review.username }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="lemon--div__09f24__1mboc arrange__09f24__2v3uJ gutter-6__09f24__2Egju u-space-b1 border-color--default__09f24__1eOdn">
      <div class="lemon--div__09f24__1mboc arrange-unit__09f24__3IxLD border-color--default__09f24__1eOdn">
        <span
          class="lemon--span__09f24__3997G display--inline__09f24__EhyFv border-color--default__09f24__1eOdn"
        >
          <div
            :class="getRateStarClassName()"
            role="img"
          >
            <img
              class="lemon--img__09f24__3GQUb offscreen__09f24__1VFco"
              src="https://s3-media0.fl.yelpcdn.com/assets/public/stars.yji-9bec2045845c24d3bff3ddb582884eda.png"
              width="132"
              height="560"
              alt=""
            >
          </div>
        </span>
      </div>
      <div class="lemon--div__09f24__1mboc arrange-unit__09f24__3IxLD arrange-unit-fill__09f24__1v_h4 border-color--default__09f24__1eOdn">
        <span
          class="lemon--p__09f24__3Qnnj text__09f24__1RhSS text-color--subtle__09f24__2VYkF text-align--left__09f24__ceIWW"
        >
          {{ getReviewPublishedAt() }}
        </span>
        <span
          v-if="showReviewEditBtn()"
        >
          <a :href="getEditReviewUrl()">
            edit
          </a>
        </span>
      </div>
    </div>
    <div class="lemon--div__09f24__1mboc border-color--default__09f24__1eOdn">
      <p
        class="lemon--p__09f24__3Qnnj text__09f24__1RhSS review-text__09f24__1fU5W text-color--normal__09f24__3mwlT text-align--left__09f24__ceIWW text-display--paragraph__09f24__1bMBN"
      >
        {{ review.body }}
      </p>
    </div>
  </div>
</template>

<script lang="ts" src="./review_item.ts" />
