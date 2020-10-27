<template>
  <div
    class="lemon--div__09f24__1mboc header__09f24__5DkBu border-color--default__09f24__1eOdn"
    aria-label="Yelp Header"
  >
    <div class="lemon--div__09f24__1mboc container__09f24__g4i9Y transparent__09f24__16_GH">
      <div class="lemon--div__09f24__1mboc content__09f24__2byvy">
        <div class="lemon--div__09f24__1mboc header-arrange__09f24__26Zfh arrange__09f24__2v3uJ gutter-18__09f24__d_yUz vertical-align-middle__09f24__1tXIr border-color--default__09f24__1eOdn">
          <div class="lemon--div__09f24__1mboc arrange-unit__09f24__3IxLD border-color--default__09f24__1eOdn" data-testid="logo-unit">
            <div class="lemon--div__09f24__1mboc border-color--default__09f24__1eOdn" data-testid="logo-outter-wrapper">
              <div class="lemon--div__09f24__1mboc border-color--default__09f24__1eOdn" data-testid="logo-inner-wrapper">
                <div id="logo" class="lemon--div__09f24__1mboc logo__09f24__2iPWz border-color--default__09f24__1eOdn" data-analytics-label="logo">
                  <a
                    class="lemon--a__09f24__IEZFH link__09f24__1MGLa logo-link__09f24__270y- link-color--blue-dark__09f24__tK18E link-size--default__09f24__QvrjA"
                    href="/"
                    target=""
                    name=""
                    rel=""
                    role="link"
                  >Yelp</a>
                </div>
              </div>
            </div>
          </div>
          <div class="lemon--div__09f24__1mboc arrange-unit__09f24__3IxLD border-color--default__09f24__1eOdn nowrap__09f24__29i9N">
            <h2 class="lemon--h2__09f24__hjA2W subtitle__09f24__36p2V">
              <span
                class="lemon--span__09f24__3997G subtitle-content__09f24__1oIsg display--inline__09f24__EhyFv border-color--default__09f24__1eOdn"
              >Write a Review</span>
            </h2>
          </div>
          <div
            class="lemon--div__09f24__1mboc navigation-wrapper__09f24__2H7H5 arrange-unit__09f24__3IxLD arrange-unit-fill__09f24__1v_h4 border-color--default__09f24__1eOdn"
            data-testid="navigation-unit"
          ></div>
          <div class="lemon--div__09f24__1mboc arrange-unit__09f24__3IxLD border-color--default__09f24__1eOdn nowrap__09f24__29i9N">
            <div class="lemon--div__09f24__1mboc inline__09f24__2fx1q">
              <div
                v-if="user"
                class="lemon--div__09f24__1mboc dropdown__09f24__37RYY"
                role="presentation"
              >
                <button
                  class="link__09f24__3OPFW toggle__09f24__CQ-Lt"
                  aria-label="Toggle Menu"
                  aria-haspopup="menu"
                  aria-controls="header-dropdown-menu"
                  aria-expanded="false"
                  style="--mousedown-x:0px;--mousedown-y:0px;--button-width:0px"
                  type="submit"
                  value="submit"
                >
                  <div class="lemon--div__09f24__1mboc button-content__09f24__2pi7R border-color--default__09f24__1eOdn">
                    <span
                      class="lemon--span__09f24__3997G text__09f24__1RhSS button-content-text__09f24__2MxzI text-color--inherit__09f24__GVMzL text-align--center__09f24__3uzgA text-size--inherit__09f24__1CbOX text--truncated__09f24__1gXXn"
                    ><div
                      class="lemon--div__09f24__1mboc border-color--default__09f24__1eOdn"
                    ><div
                      class="lemon--div__09f24__1mboc photo__09f24__3CeAG responsive-hidden-small responsive-hidden-medium border-color--default__09f24__1eOdn"
                    ><img
                      :src="getUserPhotoUrl()"
                      class="lemon--img__09f24__3GQUb"
                      width="36"
                      height="36"
                    ></div><div
                      class="lemon--div__09f24__1mboc arrow-icon__09f24__3uxye responsive-hidden-small responsive-hidden-medium border-color--default__09f24__1eOdn"
                    ><span
                      class="lemon--span__09f24__3997G icon__09f24__ehCWV icon--14-triangle-down icon--currentColor__09f24__x-sG2"
                      aria-hidden="true"
                      style="width:14px;height:14px"
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      class="icon_svg"
                    ><path d="M7 9L3.5 5h7L7 9z"></path></svg></span></div></div><div
                      class="lemon--div__09f24__1mboc responsive-small-display-inline-block responsive-medium-display-inline-block responsive-hidden-large border-color--default__09f24__1eOdn hidden-non-responsive-inline-block"
                    ><span
                      class="lemon--span__09f24__3997G icon__09f24__ehCWV icon--24-hamburger icon--currentColor__09f24__x-sG2"
                      aria-hidden="true"
                      style="width:24px;height:24px"
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      class="icon_svg"
                    ><path d="M3 18v-2h18v2H3zm0-7h18v2H3v-2zm0-5h18v2H3V6z"></path></svg></span></div></span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./header_edit.ts"/>
