<template>
  <div class="media-details_header">
    <div class="section-header media-header">
      <div
        style="padding-bottom: 8px;"
        class="arrange arrange--12 arrange--bottom">
        <div class="arrange_unit arrange_unit--fill">
          <ul class="breadcrumbs">
            <li>
              <a :href="getRelatedDetailUrl()">{{ relatedModel.displayName }}</a>
            </li>
            <li>
              <span aria-hidden="true" style="width: 24px; height: 24px;" class="icon icon--24-chevron-right icon--size-24 icon--neutral-gray u-space-r-half">
                <svg role="img" class="icon_svg">
                  <use xlink:href="#24x24_chevron_right">
                    <svg id="24x24_chevron_right" height="24" viewBox="0 0 24 24" width="24"><path d="M9.525 5.636L8.11 7.05 13.06 12l-4.95 4.95 1.415 1.414L15.89 12 9.524 5.636z"></path></svg>
                  </use>
                </svg>
              </span>Photos &amp; Videos
            </li>
          </ul>

          <h1 class="media-header_title h2">{{ getPhotoCountStr() }}</h1>
        </div>
        <div class="arrange_unit nowrap media-header_actions">
          <a
            class="ybtn ybtn--primary u-space-r1"
            :href="getUploadImageUrl()"
          >
            <span
              aria-hidden="true"
              style="width: 24px; height: 24px;"
              class="icon icon--24-add-photo icon--size-24 icon--currentColor u-space-r1 icon--fallback-inverted"
            >
              <svg role="img" class="icon_svg">
                <use xlink:href="#24x24_add_photo">
                  <svg id="24x24_add_photo" height="24" viewBox="0 0 24 24" width="24"><path
                    d="M19 20H5a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h2.184A2.99 2.99 0 0 1 10 4h4a2.99 2.99 0 0 1 2.816 2H19a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3zM12.005 8.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9zM13 14v1a1 1 0 0 1-2 0v-1h-1a1 1 0 0 1 0-2h1v-1a1 1 0 0 1 2 0v1h1a1 1 0 0 1 0 2h-1z"
                  ></path></svg>
                </use>
              </svg>
            </span>Add photos
          </a>
        </div>
      </div>
    </div>
  </div>

</template>

<script lang="ts" src="./top_title.ts" />
