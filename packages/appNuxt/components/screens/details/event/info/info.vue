<template>
  <div class="top-shelf top-shelf-grey">
    <div class="content-container">
      <!--  header(title) -->
      <div class="event-details_header ysection">
        <div class="arrange arrange--12">
          <div class="arrange_unit arrange_unit--fill">
            <h1 itemprop="name">
              {{ event.displayName }}
            </h1>
            <div class="event-details_category-links">
              <div class=" arrange__373c0__2C9bH gutter-1-5__373c0__2vL-3 vertical-align-middle__373c0__1SDTo margin-b2__373c0__abANL border-color--default__373c0__3-ifU">
                <div class=" arrange-unit__373c0__o3tjT border-color--default__373c0__3-ifU" style="width: 180px;">
                  <span class=" display--inline__373c0__3JqBP border-color--default__373c0__3-ifU">
                    <div
                      role="img"
                      :class="getRateStarClassName()"
                    >
                    </div>
                  </span>
                </div>
                <div class=" arrange-unit__373c0__o3tjT border-color--default__373c0__3-ifU nowrap__373c0__35McF">
                  <span
                    style="color: #333;"
                    class=" text__373c0__2Kxyz text-color--white__373c0__22aE8 text-align--left__373c0__2XGa- text-weight--semibold__373c0__2l0fe text-size--large__373c0__3t60B"
                  >
                    {{ getRateCountStr() }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="clearfix layout-block layout-a event-details_cards-container top-shelf_overlap column--responsive">
        <!--   left panel  -->
        <div class="column column-alpha column--responsive">
          <div class="event-details_info-card card card--horizontal">
            <div class="card_photo responsive-hidden-small">
              <div class="event-details_photo">
                <div
                  class="photo-slideshow photo-slideshow--full-width js-photo-slideshow-event-details lightbox-media-parent"
                  data-ga-path="media_lightbox/servlet:events/type:event"
                  data-media-count="1"
                  data-media-url="/events/get_media_slice/_POPcd3GRDrJhssTlew40w"
                  data-starting-index="0"
                >
                  <div
                    class="photo-slideshow_slide is-active;"
                  >
                    <div
                      style="opacity:100%;"
                      class="photo-slideshow_image photo"
                    >
                      <img
                        v-lazy="`${getRestaurantPhotoUrl()}`"
                        class="photo-box-img"
                        width="300"
                        height="300"
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card_body">
              <div class="event-details_info">
                <ul class="ylist card_content">
                  <li>
                    <div class="media-block">
                      <div class="media-avatar">
                        <span aria-hidden="true" style="width: 24px; height: 24px;" class="icon icon--24-marker icon--size-24">
                          <svg role="img" class="icon_svg">
                            <use xlink:href="#24x24_marker">
                              <svg id="24x24_marker" height="24" width="24">
                                <path
                                  d="M12 2C8.13 2 5 5.13 5 9c0 2.61 1.43 4.88 3.54 6.08L12 22l3.46-6.92A6.987 6.987 0 0019 9c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"
                                ></path></svg>
                            </use>
                          </svg>
                        </span>
                      </div>
                      <div class="media-story">
                        <div class="media-title">
                          <a
                            class="biz-name js-analytics-click"
                            data-analytics-label="biz-name"
                            data-hovercard-id="hIhrOHaotDFCt2c1wERZgA"
                            :href="getDetailRestaurantUrl() "
                          >
                            <span>{{ getDetailRestaurantTitle() }}</span>
                          </a>
                        </div>
                        <div class="biz-rating biz-rating-medium clearfix">
                          <div class="i-stars i-stars--small-4 rating" title="4.0 star rating">
                            <img
                              class="offscreen"
                              height="303"
                              src="https://s3-media0.fl.yelpcdn.com/assets/srv0/yelp_design_web/9bec2045845c/assets/img/stars/stars.png"
                              width="84"
                              alt="4.0 star rating"
                            >
                          </div>
                          <span class="review-count rating-qualifier">
                            {{ getReviewsCountInRestaurant() }}
                          </span>
                        </div>
                        <address>
                          {{ getDetailRestaurantAddress() }}
                        </address>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="media-block">
                      <div class="media-avatar">
                        <span aria-hidden="true" style="width: 24px; height: 24px;" class="icon icon--24-reservation icon--size-24">
                          <svg role="img" class="icon_svg">
                            <use xlink:href="#24x24_reservation">
                              <svg id="24x24_reservation" height="24" width="24"><path
                                d="M18 21H6a3 3 0 01-3-3V6a3 3 0 013-3 1 1 0 012 0h8a1 1 0 012 0 3 3 0 013 3v12a3 3 0 01-3 3zm1-13H5v10c0 .551.449 1 1 1h12c.551 0 1-.449 1-1V8zm-6 5h4v4h-4v-4z"
                              ></path></svg>
                            </use>
                          </svg>
                        </span>
                      </div>
                      <div class="media-story">
                        <div class="event-details_date">
                          <div>
                            <meta itemprop="startDate" content="2021-01-11T00:00:00-08:00">
                            <b>From:</b>
                            {{ getEventStartString() }}
                          </div>
                          <div>
                            <meta itemprop="endDate" content="2021-02-10T00:00:00-08:00">
                            <b>To:</b>
                            {{ getEventEndString() }}
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <span class="event-details_ticket-info">
                      <span aria-hidden="true" style="width: 24px; height: 24px;" class="icon icon--24-ticket icon--size-24 u-space-r1">
                        <svg role="img" class="icon_svg">
                          <use xlink:href="#24x24_ticket">
                            <svg id="24x24_ticket" height="24" width="24"><path
                              d="M17.303 6.697a2 2 0 010-2.829L14.121.686l-4.066 4.066 2.122 2.121-1.061 1.061-2.121-2.121-8.309 8.308 3.182 3.182a2 2 0 012.829 2.829l3.182 3.182 8.308-8.309-2.121-2.121 1.061-1.061 2.121 2.122 4.066-4.066-3.182-3.182a2 2 0 01-2.829 0zm-1.591 3.712l-1.06 1.061-2.122-2.122 1.061-1.06 2.121 2.121z"
                            ></path></svg>
                          </use>
                        </svg>
                      </span>
                      $10.00
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <!--   right panel  -->
        <div class="column column-beta column--responsive">
          <div class="event-details_map-card">
            <div class="js-map-container yelp-map-container" data-component-bound="true">
              <!--   google map   -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./info.ts" />
