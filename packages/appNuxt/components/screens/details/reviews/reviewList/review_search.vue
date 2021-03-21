<template>
  <div class=" arrange-unit__373c0__o3tjT padding-r3__373c0__57InZ border-color--default__373c0__3-ifU">
    <div class="">
      <div class=" inline-search-container__373c0__1KujM border-color--default__373c0__3-ifU">
        <label
          id="inline-search-d99a8890-0bc0-4692-b4f2-534572d5d9e9"
          class=" label__373c0__2kYNn offscreen__373c0__1m54U"
        >
          <span
            class=" text__373c0__2Kxyz text-color--normal__373c0__3xep9 text-align--left__373c0__2XGa- text-weight--bold__373c0__1elNz"
          >Search within reviews</span>
        </label>
        <div class=" floating-label-container__373c0__HMENw border-color--default__373c0__3-ifU">
          <label class="">
            <input
              v-model="searchReviews"
              name="query"
              aria-labelledby="inline-search-d99a8890-0bc0-4692-b4f2-534572d5d9e9"
              class="input__373c0__1kQwh no-margin__373c0__2tp2T inline-search__373c0__1HMvs"
              type="text"
              placeholder=" "
              value=""
            >
            <div class=" floating-label__373c0__2cRgY border-color--default__373c0__3-ifU">
              <span
                class=" text__373c0__2Kxyz floating-label-text__373c0__3rZHW text-color--inherit__373c0__1lczC text-align--left__373c0__2XGa-"
              >Search within reviews</span>
            </div>
          </label>
        </div>
        <div class=" inline-search-button-container__373c0__1DQpj border-color--default__373c0__3-ifU">
          <button
            @click="onSearchReviewsClick"
            class="button__373c0__3lYgT secondary__373c0__1bsQo button--icon__373c0__2j9IF inline-search-button-v2__373c0__15kf3"
            style="--mousedown-x:0px; --mousedown-y:0px; --button-width:0px;"
          >
            <div class=" button-content__373c0__1QNtB border-color--default__373c0__3-ifU">
              <span
                class=" display--inline__373c0__3JqBP border-color--default__373c0__3-ifU"
              >
                <span
                  aria-hidden="true"
                  class="icon--16-search-v2 button-icon__373c0__2HeR8 css-1c2abjj"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    class="icon_svg"
                  >
                    <path
                      d="M14.62 13.21l-2-2a6.47 6.47 0 10-1.42 1.42l2 2a1 1 0 00.71.3 1 1 0 00.7-1.71l.01-.01zM4.23 10.54a4.46 4.46 0 116.31 0 4.45 4.45 0 01-6.31 0z"
                    ></path>
                  </svg>
                </span>
              </span>
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./review_search.ts" />
