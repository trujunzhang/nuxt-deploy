<template>
  <div class=" review__373c0__13kpL border-color--default__373c0__3-ifU">
    <div class=" margin-b3__373c0__q1DuY border-color--default__373c0__3-ifU">
      <div class=" arrange__373c0__2C9bH gutter-auto__373c0__1Ep_j border-color--default__373c0__3-ifU">
        <div class=" arrange-unit__373c0__o3tjT arrange-unit-fill__373c0__3Sfw1 border-color--default__373c0__3-ifU">
          <div class=" border-color--default__373c0__3-ifU" role="region" aria-label="D D.">
            <div class=" arrange__373c0__2C9bH gutter-1-5__373c0__2vL-3 vertical-align-middle__373c0__1SDTo border-color--default__373c0__3-ifU">
              <div class=" arrange-unit__373c0__o3tjT border-color--default__373c0__3-ifU">
                <div class=" avatar__373c0__3kiBW border-color--default__373c0__3-ifU">
                  <div class=" on-click-container border-color--default__373c0__3-ifU">
                    <a
                      class=" link__373c0__1G70M photo-box-link__373c0__1YC9Y link-color--blue-dark__373c0__85-Nu link-size--default__373c0__7tls6"
                      :href="getReviewUserProfileUrl()"
                    ><img
                      class=" photo-box-img__373c0__35y5v"
                      :src="getUserPhotoUrl()"
                      :alt="getUserPhotoAlt()"
                      height="64"
                      width="64"
                    ></a>
                  </div>
                </div>
              </div>
              <!--  Right panel -->
              <div class=" arrange-unit__373c0__o3tjT arrange-unit-fill__373c0__3Sfw1 border-color--default__373c0__3-ifU">
                <!--  Line01 -->
                <div class=" user-passport-info border-color--default__373c0__3-ifU">
                  <span
                    class=" text__373c0__2Kxyz fs-block text-color--black-regular__373c0__2vGEn text-align--left__373c0__2XGa- text-weight--bold__373c0__1elNz text-size--large__373c0__3t60B"
                  >
                    <a
                      class=" link__373c0__1G70M link-color--inherit__373c0__3dzpk link-size--inherit__373c0__1VFlE"
                      :href="getReviewUserProfileUrl()"
                    >{{ review.username }}</a>
                  </span>
                </div>
                <!--  Line02 -->
                <div class=" arrange__373c0__2C9bH gutter-1__373c0__2l5bx vertical-align-middle__373c0__1SDTo border-color--default__373c0__3-ifU">
                  <div class=" arrange-unit__373c0__o3tjT border-color--default__373c0__3-ifU">
                    <span class=" display--inline__373c0__3JqBP border-color--default__373c0__3-ifU">
                      <div
                        :class="getRateStarClassName()"
                        role="img"
                      />
                    </span>
                  </div>
                  <div class=" arrange-unit__373c0__o3tjT arrange-unit-fill__373c0__3Sfw1 border-color--default__373c0__3-ifU">
                    <span
                      class=" text__373c0__2Kxyz text-color--mid__373c0__jCeOG text-align--left__373c0__2XGa-"
                    > {{ getReviewPublishedAt() }}</span>
                    <span
                      v-if="showReviewEditBtn()"
                    >
                      <a :href="getEditReviewUrl()">
                        edit
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class=" margin-b2__373c0__abANL border-color--default__373c0__3-ifU">
      <p
        class=" text__373c0__2Kxyz comment__373c0__1M-px text-color--normal__373c0__3xep9 text-align--left__373c0__2XGa-"
      >
        <span class=" raw__373c0__3rcx7" lang="en">
          {{ review.body }}
        </span>
      </p>
    </div>
  </div>
</template>

<script lang="ts" src="./review_item.ts" />
