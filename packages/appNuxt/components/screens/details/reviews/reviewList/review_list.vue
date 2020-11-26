<template>
  <div
    class="lemon--div__373c0__1mboc border-color--default__373c0__3-ifU"
    style="position:relative;min-height:0px"
  >
    <section
      class="lemon--section__373c0__fNwDM margin-t4__373c0__1TRkQ padding-t4__373c0__3hVZ3 border--top__373c0__3gXLy border-color--default__373c0__3-ifU"
    >
      <div
        class="lemon--div__373c0__1mboc arrange__373c0__2C9bH gutter-auto__373c0__1Ep_j vertical-align-middle__373c0__1SDTo margin-b3__373c0__q1DuY border-color--default__373c0__3-ifU"
      >
        <div
          class="lemon--div__373c0__1mboc arrange-unit__373c0__o3tjT arrange-unit-fill__373c0__3Sfw1 border-color--default__373c0__3-ifU"
        >
          <h4 class="lemon--h4__373c0__1yd__ heading--h4__373c0__27bDo heading--inline__373c0__10ozy">
            Recommended Reviews
          </h4>
        </div>
      </div>

      <div
        class="lemon--div__373c0__1mboc spinner-container__373c0__N6Hff border-color--default__373c0__3-ifU"
        aria-live="polite"
        role="region"
      >
        <div class="lemon--div__373c0__1mboc border-color--default__373c0__3-ifU">
          <div
            class="lemon--div__373c0__1mboc margin-b3__373c0__q1DuY border-color--default__373c0__3-ifU"
          >
            <div
              class="lemon--div__373c0__1mboc arrange__373c0__2C9bH gutter-3__373c0__nws1y vertical-align-middle__373c0__1SDTo border-color--default__373c0__3-ifU"
            >
              <!-- Search -->
              <ReviewSearch />
              <!-- Sort -->
              <ReviewSort />
            </div>
          </div>
          <!-- write review -->
          <NewReviewPanel :restaurant="restaurant" />
          <!-- Review Item -->
          <ul class="lemon--ul__373c0__1_cxs undefined list__373c0__2G8oH">
            <li
              v-for="(item) in items"
              :key="item.uniqueId"
              class="lemon--li__373c0__1r9wz margin-b3__373c0__q1DuY padding-b3__373c0__342DA border--bottom__373c0__3qNtD border-color--default__373c0__3-ifU"
            >
              <ReviewItem :review="item" />
            </li>
          </ul>
          <div
            v-if="showEmptyHint()"
            class="feeds feed-module activity-feed"
          >
            <ul
              class="content-list"
            >
              <li data-section-id="self">
                <p class="no-recent-activity nobtm">
                  We don't have any recent reviews for you right now.
                </p>
              </li>
            </ul>
          </div>
          <!-- infinite scroll -->
          <div v-waypoint="{ active: true, callback: onWaypoint}"></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts" src="./review_list.ts" />
