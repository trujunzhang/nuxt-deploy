<template>
  <div class="column column-beta ">
    <div class="user-details-overview">
      <div
        style="width: 100%;"
        class="user-details-overview_activity"
      >
        <h2>Notifications</h2>

        <p class="user_details-no_notifications u-space-b2">No new friend requests or compliments at this time.</p>

        <div class="media-details js-media-details js-media-details-template hidden">
          <div class="media-details_container media-details_container--embed media-details_container--with-sidebar">
            <div class="media-container js-media-container"></div>
            <div class="media-nav js-media-nav"></div>
          </div>
        </div>

        <div class="user-details-overview_reviews activity-feed">
          <div class="review-drafts-container js-review-drafts-container">
            <h2>Recent Activity</h2>

            <ul class="review-drafts">
              <!-- Restaurants List -->

              <RestaurantItem
                v-for="(item) in items"
                :key="item.uniqueId"
                :restaurant="item"
              />
            </ul>

            <div
              v-if="showEmptyHint()"
              class="feeds feed-module">
              <ul class="content-list">
                <li data-section-id="self">
                  <p class="no-recent-activity nobtm">
                    We don't have any recent activity for you right now.
                  </p>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./right_default.ts" />
