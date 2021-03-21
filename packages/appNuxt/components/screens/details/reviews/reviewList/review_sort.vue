<template>
  <div class=" arrange-unit__373c0__o3tjT border-color--default__373c0__3-ifU">
    <div class=" arrange__373c0__2C9bH border-color--default__373c0__3-ifU">
      <div class=" arrange-unit__373c0__o3tjT border-color--default__373c0__3-ifU nowrap__373c0__35McF">
        <div class=" inline__373c0__2fx1q">
          <span class=" wrapper__373c0__hsenC display--inline__373c0__3JqBP border-color--default__373c0__3-ifU">
            <span
              class=" toggle__373c0__IRNL_ display--inline__373c0__3JqBP border-color--default__373c0__3-ifU"
            >
              <button
                class="pill-container__373c0__3BXQT filterToggle__373c0__3HDLv leftRounded__373c0__1PA8v rightRounded__373c0__2P3HW  button__373c0__2bV8b"
                aria-disabled="false"
                aria-pressed="false"
                type="button"
                @click="onSortIconClick"
              >
                <span
                  class=" text__373c0__2Kxyz text-color--inherit__373c0__1lczC text-align--left__373c0__2XGa- text-weight--semibold__373c0__2l0fe text-size--small__373c0__3NVWO"
                >{{ sortTitle }}</span>
                <span
                  aria-hidden="true"
                  class="icon--16-chevron-down-v2 css-1wu4sus"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="icon_svg">
                    <path
                      d="M8 10.5a1 1 0 01-.7-.29l-3.06-3a1 1 0 111.41-1.42L8 8.1l2.35-2.31a1 1 0 111.41 1.42l-3.06 3a1 1 0 01-.7.29z"
                    ></path>
                  </svg>
                </span>
              </button>
            </span>
          </span>
          <!-- review pop -->
          <div
            v-if="showPopMenu"
            v-click-outside="onClickOutside"
          >
            <ReviewPop
              :on-sort-item-changed="onSortItemChanged"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./review_sort.ts" />
