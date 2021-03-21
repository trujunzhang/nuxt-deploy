<template>
  <li class="review-draft">
    <div class="arrange">
      <div class="arrange_unit arrange_unit--fill">
        <div class="media-block media-block--12 biz-listing-medium">
          <div class="media-avatar">
            <div class="photo-box pb-60s">
              <a
                :href="getDetailRestaurantUrl()"
                class="js-analytics-click"
              >
                <img
                  alt="Brenda's French Soul Food"
                  class="photo-box-img"
                  height="60"
                  :src="getRestaurantPhotoUrl()"
                  width="60"
                >

              </a>
            </div>
          </div>
          <div class="media-story">
            <div class="media-title clearfix">
              <a
                class="biz-name js-analytics-click"
                :href="getDetailRestaurantUrl()"
              >
                <span>
                  {{ restaurant.displayName }}
                </span>
              </a>
            </div>
            <address>
              {{ getStreet() }}<br>{{ getLocation() }}
            </address>
          </div>
        </div>
      </div>
      <div class="arrange_unit">
        <p class="time-stamp nowrap review-draft_date-created text-right">
          {{ getRestaurantPublishedAt() }}
        </p>
      </div>
    </div>

    <div
      :class="getRateStarClassName()"
    >
      <img
        class="offscreen"
        width="84"
        height="303"
        src="https://s3-media0.fl.yelpcdn.com/assets/srv0/yelp_design_web/9bec2045845c/assets/img/stars/stars.png"
      >
    </div>
  </li>
</template>

<script lang="ts" src="./restaurant_item.ts" />
