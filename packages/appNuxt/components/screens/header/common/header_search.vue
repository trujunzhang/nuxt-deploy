<template>
  <div class=" search-suggest-arrange-unit__09f24__3vLVY arrange-unit__09f24__1gZC1 arrange-unit-fill__09f24__O6JFU border-color--default__09f24__R1nRO">
    <div class=" search-suggest-container-outer__09f24__rSgmm border-color--default__09f24__R1nRO">
      <div class=" search-suggest-container-inner__09f24__2C9vZ border-color--default__09f24__R1nRO">
        <div class=" arrange__09f24__AiSIM gutter-2__09f24__UKBse border-color--default__09f24__R1nRO">
          <div class=" arrange-unit__09f24__1gZC1 arrange-unit-fill__09f24__O6JFU border-color--default__09f24__R1nRO">
            <div class=" search-suggest__09f24__1meTU">
              <div class="">
                <!--  Form -->
                <div
                  id="header_find_form"
                  class="find-near-form__09f24__2y8Yy"
                >
                  <div class=" undefined arrange__09f24__AiSIM border-color--default__09f24__R1nRO">
                    <div class=" arrange-unit__09f24__1gZC1 arrange-unit-fill__09f24__O6JFU border-color--default__09f24__R1nRO">
                      <div class=" find-near-arrange__09f24__10iE- arrange__09f24__AiSIM layout-equal__09f24__iAZL_ border-color--default__09f24__R1nRO">
                        <div class=" find-near-arrange-unit__09f24__2nUgJ arrange-unit__09f24__1gZC1 border-color--default__09f24__R1nRO">
                          <label
                            class=" label__09f24__23EB0 pseudo-input__09f24__3IGCg pseudo-input__09f24__14BtC pseudo-input--find-near__09f24__1gi9G pseudo-input--find__09f24__2RFJW"
                            for="search_description"
                          >
                            <span class=" pseudo-input-text__09f24__EWsQz display--inline__09f24__3iACj border-color--default__09f24__R1nRO">
                              <div class=" pseudo-input-icon-container__09f24__31kP9 margin-r1-5__09f24__3fQB8 border-color--default__09f24__R1nRO">
                                <span aria-hidden="false" aria-label="Find" class="icon--24-search-v2 pseudo-input-icon__09f24__3Pmw2 css-1mpk29p">
                                  <svg width="24" height="24" class="icon_svg">
                                    <path
                                      d="M21.853 20.355l-3.444-3.443a9.428 9.428 0 10-16.761-6.171 9.428 9.428 0 0015.348 7.586l3.443 3.442a1 1 0 101.414-1.414zM5.82 16.245a7.429 7.429 0 115.253 2.175 7.38 7.38 0 01-5.253-2.176z"
                                    ></path>
                                  </svg>
                                </span>
                              </div>
                            </span>
                            <div class=" border-color--default__09f24__R1nRO overflow--hidden__09f24__3u-sw">
                              <div class=" typeahead__09f24__2mlJD border-color--default__09f24__R1nRO"><input
                                type="text"
                                autocomplete="off"
                                spellcheck="false"
                                tabindex="-1"
                                value=""
                                aria-hidden="true"
                                disabled=""
                                class="input__09f24__30UUZ input__09f24__1XNzA hidden-input__09f24__3e1WX"
                                placeholder=" "
                              ><input
                                v-model="search"
                                id="search_description"
                                type="text"
                                value=""
                                autocomplete="off"
                                aria-autocomplete="list"
                                tabindex="0"
                                name="find_desc"
                                data-testid="suggest-desc-input"
                                class="input__09f24__30UUZ input__09f24__1XNzA original-input__09f24__fFh2n"
                                placeholder="tacos, cheap dinner, Max’s"
                              ></div>
                            </div>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div class=" buttons-arrange-unit__09f24__zksuB arrange-unit__09f24__1gZC1 border-color--default__09f24__R1nRO">
                      <div class=" arrange__09f24__AiSIM gutter-6__09f24__fMli3 layout-equal__09f24__iAZL_ border-color--default__09f24__R1nRO">
                        <div class=" hidden-non-responsive-inline-block responsive-visible-small-inline-block arrange-unit__09f24__1gZC1 border-color--default__09f24__R1nRO">
                          <a
                            class=" button__09f24__1hAjX secondary__09f24__3mm8J find-near-button__09f24__UO8nW"
                            data-testid="responsive-suggest-submit"
                            style="--mousedown-x:0px;--mousedown-y:0px;--button-width:0px"
                            href="https://www.yelp.com/search?find_desc=&amp;find_loc=Mountain+View%2C+CA#"
                          >
                            <div class=" button-content__09f24__2SF6G border-color--default__09f24__R1nRO"><span
                              class=" text__09f24__2tZKC button-content-text__09f24__3OonI text-color--inherit__09f24__1jgBv text-align--center__09f24__3NO89 text-weight--semibold__09f24__MTlNc text-size--large__09f24__3-9KJ text--truncated__09f24__2NCmr"
                            >Cancel</span>
                            </div>
                          </a>
                        </div>
                        <div class=" arrange-unit__09f24__1gZC1 border-color--default__09f24__R1nRO">
                          <button
                            @click="onSearchClick"
                            class="button__09f24__1hAjX primary__09f24__LBFK2 find-near-button__09f24__UO8nW"
                            data-testid="suggest-submit"
                            style="--mousedown-x:0px;--mousedown-y:0px;--button-width:0px"
                            type="submit"
                            value="submit"
                          >
                            <div class=" button-content__09f24__2SF6G border-color--default__09f24__R1nRO">
                              <span
                                class=" text__09f24__2tZKC button-content-text__09f24__3OonI text-color--inherit__09f24__1jgBv text-align--center__09f24__3NO89 text-weight--semibold__09f24__MTlNc text-size--large__09f24__3-9KJ text--truncated__09f24__2NCmr"
                              >
                                <span aria-hidden="false" aria-label="Search" class="icon--24-search-v2 css-12anxc3">
                                  <svg width="24" height="24" class="icon_svg">
                                    <path
                                      d="M21.853 20.355l-3.444-3.443a9.428 9.428 0 10-16.761-6.171 9.428 9.428 0 0015.348 7.586l3.443 3.442a1 1 0 101.414-1.414zM5.82 16.245a7.429 7.429 0 115.253 2.175 7.38 7.38 0 01-5.253-2.176z"
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

<script lang="ts" src="./header_search.ts" />
