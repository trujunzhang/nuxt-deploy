<template>
  <div class="column column-beta ">
    <div class="user-details-overview">
      <div
        style="width: 100%;"
        class="user-details-overview_activity"
      >
        <div class="user-details-overview_reviews activity-feed">
          <div class="review-drafts-container js-review-drafts-container">
            <h2>Restaurants</h2>

            <ul class="review-drafts">
              <!-- Restaurants List -->

              <RestaurantItem
                v-for="(item, index) in items"
                :key="item.uniqueId"
                :restaurant="item"
                :index="index"
              />
            </ul>
            <!-- infinite scroll -->
            <div v-waypoint="{ active: true, callback: onWaypoint}"></div>
            <div
              v-if="showEmptyHint()"
              class="feeds feed-module"
            >
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

<script lang="ts" src="./restaurants_self.ts"/>
