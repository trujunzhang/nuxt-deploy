<template>
  <div class="section-header media-header">
    <div class="arrange arrange--12 arrange--bottom">
      <div class="arrange_unit arrange_unit--fill">
        <ul class="breadcrumbs">
          <li
            v-if="user"
          >
            <a
              :href="getUserProfileUrl()"
            >
              {{ getTitle() }}
            </a>
          </li>
          <li>
            <span aria-hidden="true" style="width: 24px; height: 24px;" class="icon icon--24-chevron-right icon--size-24 icon--neutral-gray u-space-r-half">
              <svg role="img" class="icon_svg">
                <use xlink:href="#24x24_chevron_right">
                  <svg id="24x24_chevron_right" height="24" viewBox="0 0 24 24" width="24"><path d="M9.525 5.636L8.11 7.05 13.06 12l-4.95 4.95 1.415 1.414L15.89 12 9.524 5.636z"></path></svg>
                </use>
              </svg>
            </span>Profile photos
          </li>
        </ul>

        <h1 class="media-header_title h2">Add photos</h1>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./user_title.ts" />
