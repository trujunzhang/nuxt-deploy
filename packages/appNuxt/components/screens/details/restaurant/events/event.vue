<template>
  <div class="column column-alpha column--responsive">
    <div class="arrange">
      <div class="arrange_unit arrange_unit--fill">
        <h2>Events</h2>
      </div>
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
              <a href="/events/woodacre-creative-visioning-2021-manifesting-your-creative-and-life-dreams">
                <img
                  alt="Creative Visioning 2021: Manifesting Your Creative &amp; Life Dreams"
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
              <a href="/events/woodacre-creative-visioning-2021-manifesting-your-creative-and-life-dreams">
                {{ item.displayName }}
              </a>
            </h3>
            <meta itemprop="startDate" content="2021-01-09T10:00:00-08:00">
            <div class="u-text-truncate u-space-b1 u-space-t1">
              <span aria-hidden="true" style="width: 24px; height: 24px;" class="icon icon--24-reservation icon--size-24">
                <svg role="img" class="icon_svg">
                  <use xlink:href="#24x24_reservation"></use>
                </svg>
              </span>
              Saturday, Jan 9, 10:00 am â€“ 12:00 pm
            </div>
            <div class="u-text-truncate u-space-b1">
              <span aria-hidden="true" style="width: 24px; height: 24px;" class="icon icon--24-marker icon--size-24">
                <svg role="img" class="icon_svg">
                  <use xlink:href="#24x24_marker"></use>
                </svg>
              </span>
              ONLINE-ZOOM â€” Woodacre, CA
            </div>
            <p class="event_desc" itemprop="description">
              2021 is YOUR year to take your writing AND your life to that next level! In this extraordinary 2 hour writing &amp; mindfulness workshop you will learnâ€¦
            </p>
            <a href="/events/sf/browse?c=5">Lectures &amp; Books</a>
            <span class="u-text-subtle u-space-l1">
              2 are interested!
            </span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" src="./event.ts" />
