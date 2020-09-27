<template>
  <div class="main-content-wrap main-content-wrap--full">
    <div id="super-container" class="content-container">
      <div class="container media-details js-media-details">
        <!-- header -->
        <RestaurantTitle
          :photos-len="photosLen"
          :restaurant="restaurant"
        />
        <!-- body -->
        <div class="media-details_container media-details_container--fixed-height media-details_container--with-sidebar">
          <div
            class="media-container js-media-container"
          >
            <div class="media-details-grid">
              <div class="media-details-grid_main">
                <div
                  v-if="photosLen"
                  class="media js-media-photo"
                >
                  <img
                    alt="Photo of The Ramen Bar - San Francisco, CA, United States. Menu 6/2018"
                    class="photo-box-img"
                    :src="currentImageUrl"
                  >
                </div>

                <div class="media-footer photo-box-overlay">
                  <ul class="media-footer_inner">
                    <li>
                      <a
                        :href="getSeeAllLink()"
                        class="media-nav_link--browse-all"
                      >
                        <span
                          aria-hidden="true"
                          style="width: 18px; height: 18px;"
                          class="icon icon--18-grid icon--size-18 icon--inverse icon--fallback-inverted u-space-r-half"
                        >
                          <svg role="img" class="icon_svg">
                            <use xlink:href="#18x18_grid"></use>
                          </svg>
                        </span>Browse all
                      </a>
                    </li>
                    <li
                      v-if="photosLen"
                      class="media-footer_count"
                    >
                      <span class="media-count js-media-count">
                        <span class="media-count_current">{{ getCurrentPhotoIndex() }}</span> of <span class="media-count_total">{{ photosLen }}</span>
                      </span>
                    </li>
                    <li class="media-footer_actions">
                      <ul class="media-actions">
                        <li>
                          <a
                            v-if="false"
                            class="photo-box_action-link send-to-friend"
                          >
                            <span
                              style="width: 18px; height: 18px;"
                              class="icon icon--18-share icon--size-18 icon--currentColor u-space-r1"
                            >
                              <svg role="img" class="icon_svg">
                                <use xlink:href="#18x18_share"></use>
                              </svg>
                            </span>Share
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="media-details-grid_side media-details-grid_side--with-local-ads">
                <div class="media-details-grid_side-inner">
                  <div
                    v-if="currentImage"
                    class="media-info"
                  >
                    <div class="media-info_item media-info_user">
                      <div class="photo-user-passport">
                        <div
                          class="ypassport ypassport-slim media-block"
                        >
                          <div class="media-avatar">
                            <div
                              class="photo-box pb-30s"
                            >
                              <a
                                :href="getUserProfileUrl()"
                                class="js-analytics-click"
                              >
                                <img
                                  class="photo-box-img"
                                  width="30"
                                  height="30"
                                  :src="getUserPhotoUrl()"
                                >
                              </a>
                            </div>
                          </div>
                          <div
                            class="media-story"
                          >
                            <ul
                              style="margin-top: 8px;"
                              class="user-passport-info"
                            >
                              <li class="user-name">
                                <a
                                  id="dropdown_user-name"
                                  class="user-display-name js-analytics-click"
                                  :href="getUserProfileUrl()"
                                >{{ this.currentImage.username }}</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="media-info_item media-info_caption">
                      <div class="selected-photo-caption">
                        <div class="caption selected-photo-caption-text">
                          {{ currentImage.extraNote }}
                        </div>
                      </div>
                    </div>

                    <div class="media-info_item media-info_time">
                      <div class="selected-photo-details">
                        <span class="selected-photo-upload-date time-stamp">{{ getPhotoPublishedAt() }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="media-nav js-media-nav">
          <a
            :class="getPreLinkClassName()"
            title="Prev"
            @click="onPreClick"
          >
            <span
              aria-hidden="true"
              style="width: 48px; height: 48px;"
              class="icon icon--48-chevron-left icon--size-48 icon--inverse icon--fallback-inverted"
            >
              <svg role="img" class="icon_svg">
                <use xlink:href="#48x48_chevron_left">
                  <svg id="48x48_chevron_left" height="48" viewBox="0 0 48 48" width="48"><path
                    d="M29.414 5.992c.566 0 1.137.192 1.614.588 1.115.925 1.296 2.613.404 3.77L20.902 24l10.53 13.65c.892 1.156.71 2.844-.404 3.77-1.116.924-2.743.737-3.635-.42L15.57 25.675a2.76 2.76 0 0 1 0-3.35L27.394 6.998a2.548 2.548 0 0 1 2.02-1.008z"
                  ></path></svg>
                </use>
              </svg>
            </span>
          </a>

          <a
            :class="getNextLinkClassName()"
            style="right: 302px;"
            title="Next"
            @click="onNextClick"
          >
            <span
              style="width: 48px; height: 48px;"
              class="icon icon--48-chevron-right icon--size-48 icon--inverse icon--fallback-inverted"
            >
              <svg role="img" class="icon_svg">
                <use xlink:href="#48x48_chevron_right">
                  <svg id="48x48_chevron_right" height="48" viewBox="0 0 48 48" width="48">
                    <path
                      d="M18.586 42.008a2.518 2.518 0 0 1-1.614-.588c-1.115-.925-1.296-2.613-.404-3.77L27.098 24l-10.53-13.65c-.892-1.156-.71-2.844.404-3.77 1.116-.924 2.743-.737 3.635.42L32.43 22.325a2.76 2.76 0 0 1 0 3.35L20.606 41.002a2.548 2.548 0 0 1-2.02 1.008z"
                    ></path>
                  </svg>
                </use>
              </svg>
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./photo_single.ts" />
