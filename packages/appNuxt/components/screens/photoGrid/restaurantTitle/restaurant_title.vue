<template>
  <div class="js-media-landing_header media-landing_header" data-component-bound="true">
    <h1 class="js-media-landing_header_title">{{ getTitle() }}</h1>
    <div class="section-header media-header--tabbed">
      <div class="arrange arrange--12 arrange--bottom">
        <div class="arrange_unit arrange_unit--fill media-header_biz-listing">
          <div class="media-block media-block biz-passport--slim">
            <div class="media-avatar">
              <div class="photo-box pb-30s">
                <a
                  :href="getDetailRestaurantUrl()"
                  class="js-analytics-click"
                >
                  <img
                    class="photo-box-img"
                    width="30"
                    height="30"
                    v-lazy="`${getRestaurantPhotoUrl()}`"
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
                  <span>{{ getSubTitle() }}</span>
                </a>
              </div>
              <div class="biz-passport_rating">
                <div class="biz-rating biz-rating-medium clearfix">
                  <div :class="getRateStarClassName()">
                    <img
                      class="offscreen"
                      width="84"
                      height="303"
                      src="https://s3-media0.fl.yelpcdn.com/assets/srv0/yelp_design_web/9bec2045845c/assets/img/stars/stars.png"
                    >
                  </div>
                  <span class="review-count rating-qualifier">
                    <span itemprop="reviewCount">{{ restaurant.reviewCount }}</span> reviews
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="arrange_unit nowrap media-header_actions">
          <a
            class="ybtn ybtn--primary u-space-r1"
            :href="getUploadImageLink()"
          >
            <span
              aria-hidden="true"
              style="width: 24px; height: 24px;"
              class="icon icon--24-add-photo icon--size-24 icon--currentColor u-space-r1 icon--fallback-inverted"
            >
              <svg role="img" class="icon_svg">
                <use xlink:href="#24x24_add_photo">
                  <svg id="24x24_add_photo" height="24" viewBox="0 0 24 24" width="24">
                    <path
                      d="M19 20H5a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h2.184A2.99 2.99 0 0 1 10 4h4a2.99 2.99 0 0 1 2.816 2H19a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3zM12.005 8.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9zM13 14v1a1 1 0 0 1-2 0v-1h-1a1 1 0 0 1 0-2h1v-1a1 1 0 0 1 2 0v1h1a1 1 0 0 1 0 2h-1z"
                    >
                    </path>
                  </svg>
                </use>
              </svg>
            </span>Add photos
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./restaurant_title.ts" />
