<template>
  <!--  Line4[Recommended Reviews]    -->
  <div class=" border-color--default__373c0__3-ifU" style="position:relative;min-height:0px">
    <section class=" margin-t4__373c0__1TRkQ padding-t4__373c0__3hVZ3 border--top__373c0__3gXLy border-color--default__373c0__3-ifU" aria-label="Recommended Reviews">
      <div class=" arrange__373c0__2C9bH gutter-auto__373c0__1Ep_j vertical-align-middle__373c0__1SDTo margin-b3__373c0__q1DuY border-color--default__373c0__3-ifU">
        <div class=" arrange-unit__373c0__o3tjT arrange-unit-fill__373c0__3Sfw1 border-color--default__373c0__3-ifU">
          <h4
            class=" heading--h4__373c0__27bDo heading--inline__373c0__10ozy"
          >
            Recommended Reviews
          </h4>
        </div>
      </div>
      <div class=" css-79elbk border-color--default__373c0__3-ifU" aria-live="polite" role="region">
        <div class=" border-color--default__373c0__3-ifU">
          <!-- Search/Sort -->
          <div class=" margin-b4__373c0__3Oacm border-color--default__373c0__3-ifU">
            <div class=" arrange__373c0__2C9bH gutter-3__373c0__nws1y layout-equal__373c0__Z9vkY vertical-align-middle__373c0__1SDTo border-color--default__373c0__3-ifU">
              <!--  Search -->
              <ReviewSearch />
              <!--  Sort -->
              <ReviewSort />
            </div>
          </div>
          <!-- Write a review -->
          <NewReviewPanel
            :related-model="relatedModel"
            :review-type="reviewType"
            :related-id="relatedId"
          />
          <ul class=" undefined list__373c0__3GI_T">
            <!-- Review Item -->
            <li
              v-for="(item) in items"
              :key="item.uniqueId"
              class=" margin-b5__373c0__2ErL8 border-color--default__373c0__3-ifU"
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
