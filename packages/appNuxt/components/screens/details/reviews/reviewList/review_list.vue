<template>
  <div
    class="lemon--div__373c0__1mboc border-color--default__373c0__3-ifU"
    style="position:relative;min-height:0px"
  >
    <section
      class="lemon--section__373c0__fNwDM margin-t4__373c0__1TRkQ padding-t4__373c0__3hVZ3 border--top__373c0__3gXLy border-color--default__373c0__3-ifU"
    >
      <div
        class="lemon--div__373c0__1mboc arrange__373c0__2C9bH gutter-auto__373c0__1Ep_j vertical-align-middle__373c0__1SDTo margin-b3__373c0__q1DuY border-color--default__373c0__3-ifU"
      >
        <div
          class="lemon--div__373c0__1mboc arrange-unit__373c0__o3tjT arrange-unit-fill__373c0__3Sfw1 border-color--default__373c0__3-ifU"
        >
          <h4 class="lemon--h4__373c0__1yd__ heading--h4__373c0__27bDo heading--inline__373c0__10ozy">
            Recommended Reviews
          </h4>
        </div>
      </div>

      <div
        class="lemon--div__373c0__1mboc spinner-container__373c0__N6Hff border-color--default__373c0__3-ifU"
        aria-live="polite"
        role="region"
      >
        <div class="lemon--div__373c0__1mboc border-color--default__373c0__3-ifU">
          <div
            class="lemon--div__373c0__1mboc margin-b3__373c0__q1DuY border-color--default__373c0__3-ifU"
          >
            <div
              class="lemon--div__373c0__1mboc arrange__373c0__2C9bH gutter-3__373c0__nws1y vertical-align-middle__373c0__1SDTo border-color--default__373c0__3-ifU"
            >
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
              <div
                class="lemon--div__373c0__1mboc arrange-unit__373c0__o3tjT border-color--default__373c0__3-ifU"
              >
                <div
                  class="lemon--div__373c0__1mboc arrange__373c0__2C9bH border-color--default__373c0__3-ifU"
                >
                  <div
                    class="lemon--div__373c0__1mboc arrange-unit__373c0__o3tjT border-color--default__373c0__3-ifU nowrap__373c0__35McF"
                  >
                    <div class="lemon--div__373c0__1mboc dropdown__373c0__E-y9d" role="presentation">
                      <span
                        class="lemon--span__373c0__3997G display--inline__373c0__3JqBP border-color--default__373c0__3-ifU"
                      >
                        <span
                          class="lemon--span__373c0__3997G display--inline__373c0__3JqBP margin-r0-5__373c0__3bbaI border-color--default__373c0__3-ifU"
                        >
                          <span
                            class="lemon--span__373c0__3997G text__373c0__2Kxyz text-color--black-regular__373c0__2vGEn text-align--left__373c0__2XGa-"
                          >Sort by</span>
                        </span>
                        <span
                          class="lemon--span__373c0__3997G text__373c0__2Kxyz text-color--blue-dark__373c0__1jX7S text-align--left__373c0__2XGa-"
                        >
                          <a
                            class="lemon--a__373c0__IEZFH link__373c0__1G70M link-color--inherit__373c0__3dzpk link-size--default__373c0__7tls6"
                            role="button"
                            @click="onSortIconClick"
                          >
                            <span
                              class="lemon--span__373c0__3997G display--inline__373c0__3JqBP margin-r0-5__373c0__3bbaI border-color--default__373c0__3-ifU"
                            >
                              <span
                                class="lemon--span__373c0__3997G text__373c0__2Kxyz text-color--inherit__373c0__1lczC text-align--left__373c0__2XGa- text-weight--bold__373c0__1elNz"
                                style="cursor: pointer;"
                              >{{ sortTitle }}</span>
                            </span>
                            <span
                              class="lemon--span__373c0__3997G icon__373c0__ehCWV icon--16-chevron-down-v2 icon--blue-dark__373c0__3uVwj icon--v2__373c0__1yp8c"
                              aria-hidden="true"
                              style="width:16px;height:16px"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                class="icon_svg"
                              >
                                <path
                                  d="M8 10.5a1 1 0 0 1-.7-.29l-3.06-3a1 1 0 1 1 1.41-1.42L8 8.1l2.35-2.31a1 1 0 0 1 1.41 1.42l-3.06 3a1 1 0 0 1-.7.29z"
                                >
                                </path>
                              </svg>
                            </span>
                          </a>
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
            </div>
          </div>
          <!-- write review -->
          <NewReviewPanel :restaurant="restaurant" />
          <!-- Review Item -->
          <ul class="lemon--ul__373c0__1_cxs undefined list__373c0__2G8oH">
            <li
              v-for="(item) in items"
              :key="item.uniqueId"
              class="lemon--li__373c0__1r9wz margin-b3__373c0__q1DuY padding-b3__373c0__342DA border--bottom__373c0__3qNtD border-color--default__373c0__3-ifU"
            >
              <ReviewItem :review="item" />
            </li>
          </ul>
          <div
            v-if="showEmptyHint()"
            class="feeds feed-module activity-feed"
          >
            <ul
              class="content-list"
            >
              <li data-section-id="self">
                <p class="no-recent-activity nobtm">
                  We don't have any recent reviews for you right now.
                </p>
              </li>
            </ul>
          </div>
          <!-- infinite scroll -->
          <div v-waypoint="{ active: true, callback: onWaypoint}"></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts" src="./review_list.ts" />
