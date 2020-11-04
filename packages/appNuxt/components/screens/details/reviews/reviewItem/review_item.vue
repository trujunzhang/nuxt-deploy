<template>
  <div
    class="lemon--div__373c0__1mboc review__373c0__13kpL sidebarActionsHoverTarget__373c0__2kfhE arrange__373c0__2C9bH gutter-2__373c0__1DiLQ grid__373c0__1Pz7f layout-stack-small__373c0__27wVp border-color--default__373c0__3-ifU"
  >
    <!-- left -->
    <div
      class="lemon--div__373c0__1mboc arrange-unit__373c0__o3tjT border-color--default__373c0__3-ifU"
      style="width: 60px;"
    >
      <a
        class="lemon--a__373c0__IEZFH link__373c0__1G70M photo-box-link__373c0__1YC9Y link-color--blue-dark__373c0__85-Nu link-size--default__373c0__7tls6"
        :href="getReviewUserProfileUrl()"
      >
        <img
          class="lemon--img__373c0__3GQUb photo-box-img__373c0__35y5v"
          :src="getUserPhotoUrl()"
          :alt="getUserPhotoAlt()"
          height="60"
          width="60"
        ></a>
    </div>
    <!-- right -->
    <div
      class="lemon--div__373c0__1mboc arrange-unit__373c0__o3tjT border-color--default__373c0__3-ifU"
    >
      <div
        class="lemon--div__373c0__1mboc user-passport-info border-color--default__373c0__3-ifU"
      >
        <span
          class="lemon--span__373c0__3997G text__373c0__2Kxyz fs-block text-color--blue-dark__373c0__1jX7S text-align--left__373c0__2XGa- text-weight--bold__373c0__1elNz"
        >
          <a
            class="lemon--a__373c0__IEZFH link__373c0__1G70M link-color--inherit__373c0__3dzpk link-size--inherit__373c0__1VFlE"
            :href="getReviewUserProfileUrl()"
          >
            {{ review.username }}
          </a>
        </span>
      </div>

      <div
        class="lemon--div__373c0__1mboc margin-t1__373c0__oLmO6 margin-b1__373c0__1khoT border-color--default__373c0__3-ifU"
      >
        <div
          class="lemon--div__373c0__1mboc arrange__373c0__2C9bH gutter-1__373c0__2l5bx vertical-align-middle__373c0__1SDTo border-color--default__373c0__3-ifU"
        >
          <div
            class="lemon--div__373c0__1mboc arrange-unit__373c0__o3tjT border-color--default__373c0__3-ifU"
          >
            <span
              class="lemon--span__373c0__3997G display--inline__373c0__3JqBP border-color--default__373c0__3-ifU"
            ><div
              :class="getRateStarClassName()"
              role="img"
            ><img
              class="lemon--img__373c0__3GQUb offscreen__373c0__1KofL"
              src="~/assets/images/stars_v2.yelp_design_web.yji-52d3d7a328db670d4402843cbddeed89.png"
              width="132"
              height="560"
            >
            </div>
            </span>
          </div>
          <div
            class="lemon--div__373c0__1mboc arrange-unit__373c0__o3tjT arrange-unit-fill__373c0__3Sfw1 border-color--default__373c0__3-ifU"
          >
            <span
              class="lemon--span__373c0__3997G text__373c0__2Kxyz text-color--mid__373c0__jCeOG text-align--left__373c0__2XGa-"
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
      </div>
      <div
        class="lemon--div__373c0__1mboc margin-b2__373c0__abANL border-color--default__373c0__3-ifU"
      >
        <p
          class="lemon--p__373c0__3Qnnj text__373c0__2Kxyz comment__373c0__3EKjH text-color--normal__373c0__3xep9 text-align--left__373c0__2XGa-"
        >
          <span class="lemon--span__373c0__3997G raw__373c0__3rKqk" lang="en">
            {{ review.body }}
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./review_item.ts" />
