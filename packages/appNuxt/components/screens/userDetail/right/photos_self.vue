<template>
  <div class="main-content-wrap main-content-wrap--full">
    <div id="super-container" class="content-container">
      <div class="container">
        <div class="js-media-landing_container" data-component-bound="true">
          <div class="media-landing js-media-landing">
            <div class="media-landing_gallery photos">
              <ul
                class="photo-box-grid photo-box-grid--highlight photo-box-grid--small clearfix lightbox-media-parent"
              >
                <li
                  v-for="(item) in items"
                  :key="item.uniqueId"
                >
                  <div
                    class="photo-box photo-box--interactive"
                  >
                    <img
                      class="photo-box-img"
                      width="226"
                      height="226"
                      :src="getPhotoUrl(item)"
                    >
                  </div>
                </li>
                <li
                  v-if="showEmptyHint()"
                >
                  <div
                    class="photo-box photo-box--interactive"
                    style="text-align: center;"
                  >
                    <p class="no-recent-activity nobtm">
                      No photos!
                    </p>
                  </div>
                </li>
              </ul>
              <!-- infinite scroll -->
              <div v-waypoint="{ active: true, callback: onWaypoint}"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./photos_self.ts"/>
