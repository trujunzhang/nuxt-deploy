<template>
  <div
    class="lemon--div__373c0__1mboc arrange-unit__373c0__o3tjT arrange-unit-fill__373c0__3Sfw1 border-color--default__373c0__3-ifU"
  >
    <div class="lemon--form__373c0__2fChY">
      <div
        class="lemon--div__373c0__1mboc arrange__373c0__2C9bH border-color--default__373c0__3-ifU"
      >
        <div
          class="lemon--div__373c0__1mboc arrange-unit__373c0__o3tjT arrange-unit-fill__373c0__3Sfw1 border-color--default__373c0__3-ifU"
        >
          <label
            id="inline-search-0a35177c-04ac-4ca8-80ca-4ba10a05b67b"
            class="lemon--label__373c0__2BjWI label__373c0__2kYNn offscreen__373c0__1m54U"
          ><span
            class="lemon--span__373c0__3997G text__373c0__2Kxyz text-color--normal__373c0__3xep9 text-align--left__373c0__2XGa- text-weight--bold__373c0__1elNz"
          >Search within reviews</span>
          </label>
          <input
            v-model="searchReviews"
            type="text"
            name="query"
            value=""
            class="input__373c0__1kQwh no-margin__373c0__2tp2T"
            placeholder="Search within reviews"
          >
        </div>
        <div
          class="lemon--div__373c0__1mboc arrange-unit__373c0__o3tjT border-color--default__373c0__3-ifU"
        >
          <button
            class="button__373c0__3lYgT small__373c0__Wsszq primary__373c0__2ZWOb inline-search-button__373c0__2x4ge inline-search-button--no-margin__373c0__3uu32"
            style="--mousedown-x:0px;--mousedown-y:0px;--button-width:0px"
            type="submit"
            value="submit"
            @click="onSearchReviewsClick"
          >
            <div
              class="lemon--div__373c0__1mboc button-content__373c0__1QNtB border-color--default__373c0__3-ifU"
            >
              <span
                class="lemon--span__373c0__3997G text__373c0__2Kxyz button-content-text__373c0__Z-7FO text-color--inherit__373c0__1lczC text-align--center__373c0__3VrfZ text-weight--semibold__373c0__2l0fe text-size--small__373c0__3NVWO text--truncated__373c0__3sLaf"
              >
                <span
                  class="lemon--span__373c0__3997G icon__373c0__ehCWV icon--24-search-v2 icon--currentColor__373c0__x-sG2 icon--v2__373c0__1yp8c"
                  aria-hidden="true"
                  style="width:24px;height:24px;color:white;"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    class="icon_svg"
                  ><path
                    d="M22.46 21.05l-3.72-3.72a10 10 0 1 0-1.41 1.41l3.72 3.72a1 1 0 0 0 1.41 0 1 1 0 0 0 0-1.41zM5.34 16.66A8 8 0 1 1 16.66 5.353 8 8 0 0 1 5.34 16.66z"
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

<script lang="ts" src="./review_search.ts"/>
