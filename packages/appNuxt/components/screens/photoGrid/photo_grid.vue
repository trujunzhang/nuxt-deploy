<template>
  <div class="main-content-wrap main-content-wrap--full">
    <div id="super-container" class="content-container">
      <div class="container">
        <div class="js-media-landing_container" data-component-bound="true">
          <!-- header -->
          <RestaurantTitle :restaurant="restaurant" />
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

                    <a
                      class="biz-shim js-lightbox-media-link js-analytics-click"
                      :href="getImageLink(item)"
                    >
                    </a>
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

<script lang="ts" src="./photo_grid.ts"/>
