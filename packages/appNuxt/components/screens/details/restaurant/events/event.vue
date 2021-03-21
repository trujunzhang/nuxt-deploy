<template>
  <div class="column column-alpha column--responsive">
    <div class="arrange">
      <div class="arrange_unit arrange_unit--fill">
        <h2>Events</h2>
      </div>
    </div>
    <div
      v-if="showEmptyHint()"
      class="feeds feed-module activity-feed"
    >
      <ul
        class="content-list"
      >
        <li data-section-id="self">
          <p class="no-recent-activity nobtm">
            You don't have any events right now.
          </p>
        </li>
      </ul>
    </div>
    <ul class="ylist ylist-bordered">
      <li
        v-for="(item) in items"
        :key="item.uniqueId"
      >
        <div class="media-block">
          <div
            v-if="false"
            class="media-avatar">
            <div class="photo-box pb-120s">
              <a :href="getDetailEventUrl(item)">
                <img
                  class="photo-box-img"
                  height="120"
                  src="https://s3-media0.fl.yelpcdn.com/ephoto/SQipAUOXfUxPsc_U5cmpRg/120s.jpg"
                  width="120"
                >
              </a>
            </div>
          </div>
          <div class="media-story u-space-l1">
            <h3>
              <a :href="getDetailEventUrl(item)">
                {{ item.displayName }}
              </a>
            </h3>
            <div class="u-text-truncate u-space-b1 u-space-t1">
              <span aria-hidden="true" style="width: 24px; height: 24px;" class="icon icon--24-reservation icon--size-24">
                <svg role="img" class="icon_svg">
                  <use xlink:href="#24x24_reservation">
                    <svg id="24x24_reservation" height="24" width="24"><path
                      d="M18 21H6a3 3 0 01-3-3V6a3 3 0 013-3 1 1 0 012 0h8a1 1 0 012 0 3 3 0 013 3v12a3 3 0 01-3 3zm1-13H5v10c0 .551.449 1 1 1h12c.551 0 1-.449 1-1V8zm-6 5h4v4h-4v-4z"></path></svg>
                  </use>
                </svg>
              </span>
              {{ getEventStartEndDate(item) }}
            </div>
            <p class="event_desc" itemprop="description">
              {{ item.want }}
            </p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" src="./event.ts" />
