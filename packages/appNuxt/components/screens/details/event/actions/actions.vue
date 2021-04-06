<template>
  <div class="clearfix layout-block layout-a layout-border event-details_container column--responsive">
    <div
      style="padding-bottom: 16px;"

      class=" arrange__373c0__2C9bH gutter-1__373c0__2l5bx border-color--default__373c0__3-ifU"
    >
      <div class=" arrange-unit__373c0__o3tjT border-color--default__373c0__3-ifU nowrap__373c0__35McF">
        <a
          class=" button__373c0__3lYgT primary__373c0__2ZWOb button--icon__373c0__2j9IF"
          style="--mousedown-x:0px;--mousedown-y:0px;--button-width:0px"
          :href="getWriteReviewUrl()"
        >
          <div class=" button-content__373c0__1QNtB border-color--default__373c0__3-ifU">
            <span
              class=" display--inline__373c0__3JqBP margin-r1__373c0__zyKmV border-color--default__373c0__3-ifU"
            >
              <span
                aria-hidden="true"
                class="icon--24-star-v2 button-icon__373c0__2HeR8 css-12anxc3"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  class="icon_svg"
                >
                  <path
                    d="M17.87 22a.93.93 0 01-.46-.12L12 19.08l-5.41 2.84a1 1 0 01-1-.08 1 1 0 01-.4-1l1-6-4.39-4.26a1 1 0 01.56-1.7L8.4 8l2.7-5.48a1 1 0 011.8 0L15.6 8l6 .88a1 1 0 01.56 1.7l-4.38 4.27 1 6a1 1 0 01-1 1.17l.09-.02zM12 17c.163.002.323.04.47.11l4.07 2.15-.78-4.54a1 1 0 01.29-.89l3.3-3.21-4.56-.72a1 1 0 01-.79-.54l-2-4.14-2 4.14a1 1 0 01-.75.54l-4.56.67L8 13.78a1 1 0 01.29.89l-.78 4.54 4.07-2.15A1.12 1.12 0 0112 17z"
                  ></path>
                </svg>
              </span>
            </span>
            <span
              class=" text__373c0__2Kxyz button-content-text__373c0__Z-7FO text-color--inherit__373c0__1lczC text-align--center__373c0__3VrfZ text-weight--semibold__373c0__2l0fe text-size--large__373c0__3t60B text--truncated__373c0__3sLaf"
            >Write a Review</span>
          </div>
        </a>
      </div>
    </div>

    <div class="column column--responsive">
      <div class="ysection">
        <h3>What/Why:</h3>
        <p itemprop="description">
          {{ event.want }}
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./actions.ts" />
