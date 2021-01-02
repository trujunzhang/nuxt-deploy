<template>
  <div
    class="lemon--div__373c0__1mboc search-suggest-arrange-unit__373c0__3SJDR arrange-unit__373c0__o3tjT arrange-unit-fill__373c0__3Sfw1 border-color--default__373c0__3-ifU"
  >
    <div
      class="lemon--div__373c0__1mboc search-suggest-container-outer__373c0__1JORv border-color--default__373c0__3-ifU"
    >
      <div
        class="lemon--div__373c0__1mboc search-suggest-container-inner__373c0__2ddQW border-color--default__373c0__3-ifU"
      >
        <div
          class="lemon--div__373c0__1mboc arrange__373c0__2C9bH gutter-2__373c0__1DiLQ border-color--default__373c0__3-ifU"
        >
          <div
            class="lemon--div__373c0__1mboc arrange-unit__373c0__o3tjT arrange-unit-fill__373c0__3Sfw1 border-color--default__373c0__3-ifU"
          >
            <div class="lemon--div__373c0__1mboc search-suggest__373c0__31JJZ">
              <div class="lemon--div__373c0__1mboc">
                <div
                  id="header_find_form"
                  class="lemon--form__373c0__2fChY find-near-form__373c0__QkXpc"
                >
                  <div
                    class="lemon--div__373c0__1mboc undefined arrange__373c0__2C9bH border-color--default__373c0__3-ifU"
                  >
                    <div
                      class="lemon--div__373c0__1mboc arrange-unit__373c0__o3tjT arrange-unit-fill__373c0__3Sfw1 border-color--default__373c0__3-ifU"
                    >
                      <div
                        class="lemon--div__373c0__1mboc find-near-arrange__373c0__dhora arrange__373c0__2C9bH layout-equal__373c0__Z9vkY border-color--default__373c0__3-ifU"
                      >
                        <div
                          class="lemon--div__373c0__1mboc find-near-arrange-unit__373c0__1x8M9 arrange-unit__373c0__o3tjT border-color--default__373c0__3-ifU"
                        >
                          <label
                            class="lemon--label__373c0__2BjWI label__373c0__2kYNn pseudo-input__373c0__5zGeH pseudo-input--find-near__373c0__2MkBe pseudo-input--find__373c0__tF4yY"
                            for="search_description"
                          >
                            <span
                              class="lemon--span__373c0__3997G pseudo-input-text__373c0__1Waqo display--inline__373c0__3JqBP border-color--default__373c0__3-ifU"
                            >
                              <div
                                class="lemon--div__373c0__1mboc pseudo-input-icon-container__373c0__2jsaM margin-r1-5__373c0__1Vie3 border-color--default__373c0__3-ifU"
                              >
                                <span
                                  class="lemon--span__373c0__3997G icon__373c0__ehCWV icon--24-search-v2 icon--black-regular__373c0__2b8r3 icon--v2__373c0__1yp8c pseudo-input-icon__373c0__1e_Dt"
                                  aria-hidden="false"
                                  aria-label="Find"
                                  style="width: 24px; height: 24px;"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    class="icon_svg"
                                  >
                                    <path
                                      d="M22.46 21.05l-3.72-3.72a10 10 0 1 0-1.41 1.41l3.72 3.72a1 1 0 0 0 1.41 0 1 1 0 0 0 0-1.41zM5.34 16.66A8 8 0 1 1 16.66 5.353 8 8 0 0 1 5.34 16.66z"
                                    >
                                    </path>
                                  </svg>
                                </span>
                              </div>
                            </span>
                            <div
                              class="lemon--div__373c0__1mboc border-color--default__373c0__3-ifU overflow--hidden__373c0__2y4YK"
                            >
                              <div
                                class="lemon--div__373c0__1mboc typeahead__373c0__HGjy7 border-color--default__373c0__3-ifU"
                              >
                                <input
                                  id="search_description"
                                  v-model="search"
                                  autocomplete="off"
                                  aria-autocomplete="list"
                                  name="find_desc"
                                  class="input__373c0__1kQwh original-input__373c0__3YWBR"
                                  type="text"
                                  placeholder="tacos, cheap dinner, Max’s"
                                  @keydown.enter.prevent="onSearchClick"
                                >
                              </div>
                            </div>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div
                      class="lemon--div__373c0__1mboc buttons-arrange-unit__373c0__3npNo arrange-unit__373c0__o3tjT border-color--default__373c0__3-ifU"
                    >
                      <div
                        class="lemon--div__373c0__1mboc arrange__373c0__2C9bH gutter-6__373c0__15Q_2 layout-equal__373c0__Z9vkY border-color--default__373c0__3-ifU"
                      >
                        <div
                          class="lemon--div__373c0__1mboc arrange-unit__373c0__o3tjT border-color--default__373c0__3-ifU"
                        >
                          <button
                            class="button__373c0__3lYgT primary__373c0__2ZWOb find-near-button__373c0__3S334"
                            type="submit"
                            value="submit"
                            style="--mousedown-x:0px; --mousedown-y:0px; --button-width:0px;"
                            @click="onSearchClick"
                          >
                            <div
                              class="lemon--div__373c0__1mboc button-content__373c0__1QNtB border-color--default__373c0__3-ifU"
                            >
                              <span
                                class="lemon--span__373c0__3997G text__373c0__2Kxyz text-color--inherit__373c0__1lczC text-align--center__373c0__3VrfZ text-weight--semibold__373c0__2l0fe text-size--large__373c0__3t60B text--truncated__373c0__3sLaf"
                              >
                                <span
                                  class="lemon--span__373c0__3997G icon__373c0__ehCWV icon--24-search-v2 icon--currentColor__373c0__x-sG2 icon--v2__373c0__1yp8c"
                                  aria-hidden="false"
                                  aria-label="Search"
                                  style="width: 24px; height: 24px;color:white"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    class="icon_svg"
                                  >
                                    <path
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./header_search.ts"/>
