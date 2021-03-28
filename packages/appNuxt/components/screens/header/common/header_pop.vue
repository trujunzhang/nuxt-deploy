<template>
  <menu
    id="header-dropdown-menu"
    class="lemon--menu__373c0__3fJQ8 menu__373c0__35yNN menu__373c0__2WGij padding-t2__373c0__11Iek padding-r2__373c0__28zpp padding-b2__373c0__34gV1 padding-l2__373c0__1Dr82 border-color--default__373c0__3-ifU"
  >
    <div class="lemon--div__373c0__1mboc menu-section__373c0__11HSz border-color--default__373c0__3-ifU" role="presentation">
      <div class="lemon--div__373c0__1mboc menu-section__373c0__11HSz border-color--default__373c0__3-ifU" role="presentation">
        <a
          class="lemon--a__373c0__IEZFH menu-item__373c0__3Vezz menu-item--highlight-auto__373c0__2vEUJ"
          :href="getUserProfileUrl()"
        >
          <div
            class="lemon--div__373c0__1mboc padding-t1__373c0__2aTOb padding-r1__373c0__1xqrz padding-b1__373c0__3erWW padding-l1__373c0__1UBqt border-color--default__373c0__3-ifU"
          >
            <div class="lemon--div__373c0__1mboc arrange__373c0__2C9bH gutter-1-5__373c0__2vL-3 vertical-align-middle__373c0__1SDTo border-color--default__373c0__3-ifU">
              <div class="lemon--div__373c0__1mboc arrange-unit__373c0__o3tjT border-color--default__373c0__3-ifU">
                <div class="lemon--div__373c0__1mboc notification-wrapper__373c0__1jhvt display--inline-block__373c0__1ZKqC border-color--default__373c0__3-ifU">
                  <span aria-hidden="true" class="icon--24-profile-v2 css-1mpk29p"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="icon_svg">
                    <path
                      d="M12 1a11 11 0 1011 11A11.012 11.012 0 0012 1zm0 2a8.986 8.986 0 017.33 14.205l-1.395-1.55a4.974 4.974 0 00-1.996-1.324 5.5 5.5 0 10-7.878 0 4.974 4.974 0 00-1.996 1.324l-1.395 1.55A8.986 8.986 0 0112 3zm-3.5 7.5a3.5 3.5 0 117 0 3.5 3.5 0 01-7 0zm-2.487 8.202l1.539-1.709A3.003 3.003 0 019.782 16h4.437a3.004 3.004 0 012.23.993l1.537 1.71a8.946 8.946 0 01-11.973-.001z"
                    ></path></svg></span>
                </div>
              </div>
              <div class="lemon--div__373c0__1mboc arrange-unit__373c0__o3tjT arrange-unit-fill__373c0__3Sfw1 border-color--default__373c0__3-ifU">
                <span
                  class="lemon--span__373c0__3997G text__373c0__2Kxyz text__373c0__3UkLB text-color--inherit__373c0__1lczC text-align--left__373c0__2XGa-"
                >About Me</span>
              </div>
            </div>
          </div>
        </a>
        <a
          class="lemon--a__373c0__IEZFH menu-item__373c0__3Vezz menu-item--highlight-auto__373c0__2vEUJ"
          href="/find_friends"
          aria-disabled="false"
          tabindex="0"
        >
          <div
            class="lemon--div__373c0__1mboc padding-t1__373c0__2aTOb padding-r1__373c0__1xqrz padding-b1__373c0__3erWW padding-l1__373c0__1UBqt border-color--default__373c0__3-ifU"
          >
            <div class="lemon--div__373c0__1mboc menu-item-inner__373c0__gv1Ar border-color--default__373c0__3-ifU">
              <div
                class="lemon--div__373c0__1mboc menu-item-content-container__373c0__17dmW display--table-cell__373c0__3otg8 padding-r1-5__373c0__1s-Oo border-color--default__373c0__3-ifU"
              >
                <span
                  aria-hidden="true"
                  style="fill: black;"
                  class="icon--24-add-friend-v2 menu-item-icon__373c0__FIApg css-12anxc3"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    class="icon_svg"
                  >
                    <path
                      d="M15.94 10.33A6 6 0 0120 16v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6a6 6 0 014.06-5.67 5.5 5.5 0 117.88 0zM12 3a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm6 18v-5a4 4 0 00-4-4h-4a4 4 0 00-4 4v5h12zm-3.5-5.5a1 1 0 110 2H13V19a1 1 0 11-2 0v-1.5H9.5a1 1 0 110-2H11V14a1 1 0 112 0v1.5h1.5z"
                    >
                    </path>
                  </svg>
                </span>
              </div>
              <div class="lemon--div__373c0__1mboc menu-item-content-container__373c0__17dmW display--table-cell__373c0__3otg8 border-color--default__373c0__3-ifU">
                <span
                  class="lemon--span__373c0__3997G text__373c0__2Kxyz text__373c0__3UkLB text-color--inherit__373c0__1lczC text-align--left__373c0__2XGa-"
                >Find Friends</span>
              </div>
            </div>
          </div>
        </a>
        <a
          class="lemon--a__373c0__IEZFH menu-item__373c0__3Vezz menu-item--highlight-auto__373c0__2vEUJ"
          href="/profile"
          aria-disabled="false"
          tabindex="0"
        >
          <div
            class="lemon--div__373c0__1mboc padding-t1__373c0__2aTOb padding-r1__373c0__1xqrz padding-b1__373c0__3erWW padding-l1__373c0__1UBqt border-color--default__373c0__3-ifU"
          >
            <div class="lemon--div__373c0__1mboc menu-item-inner__373c0__gv1Ar border-color--default__373c0__3-ifU">
              <div
                class="lemon--div__373c0__1mboc menu-item-content-container__373c0__17dmW display--table-cell__373c0__3otg8 padding-r1-5__373c0__1s-Oo border-color--default__373c0__3-ifU"
              >
                <span
                  aria-hidden="true"
                  style="fill: black;"
                  class="icon--24-settings-v2 menu-item-icon__373c0__FIApg css-12anxc3"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    class="icon_svg"
                  ><path
                    d="M12 16.5a4.5 4.5 0 114.5-4.5 4.51 4.51 0 01-4.5 4.5zm0-7a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM13.18 23h-2.36a2 2 0 01-2-1.61l-.1-.49a.49.49 0 00-.3-.36.49.49 0 00-.47.05l-.41.27a2 2 0 01-2.52-.25l-1.63-1.67a2 2 0 01-.25-2.52l.27-.42a.49.49 0 000-.47.49.49 0 00-.37-.3l-.48-.1a2 2 0 01-1.61-2v-2.31a2 2 0 011.61-2l.49-.1a.49.49 0 00.36-.3.49.49 0 000-.47l-.27-.41a2 2 0 01.25-2.52l1.67-1.63a2 2 0 012.52-.25l.42.27a.49.49 0 00.47 0 .49.49 0 00.3-.37l.1-.48a2 2 0 012-1.61h2.36a2 2 0 012 1.61l.1.49a.49.49 0 00.3.36.49.49 0 00.47 0l.41-.27a2 2 0 012.52.25l1.67 1.67a2 2 0 01.25 2.52l-.36.42a.49.49 0 00-.05.47.49.49 0 00.37.3l.48.1a2 2 0 011.61 2v2.36a2 2 0 01-1.61 2l-.49.1a.49.49 0 00-.36.3.49.49 0 00.05.47l.27.41a2 2 0 01-.25 2.52l-1.67 1.67a2 2 0 01-2.52.25l-.42-.36a.49.49 0 00-.47-.05.49.49 0 00-.3.37l-.1.48A2 2 0 0113.18 23zm-4.91-4.5c.342 0 .682.064 1 .19a2.49 2.49 0 011.49 1.82l.1.49h2.36l.1-.49c.16-.818.72-1.5 1.49-1.82a2.52 2.52 0 012.35.23l.41.28 1.67-1.67-.28-.41a2.52 2.52 0 01-.23-2.35 2.49 2.49 0 011.82-1.49l.49-.1v-2.36l-.49-.1a2.49 2.49 0 01-1.82-1.49 2.52 2.52 0 01.23-2.35l.28-.41-1.71-1.67-.41.28a2.52 2.52 0 01-2.35.23 2.49 2.49 0 01-1.49-1.82l-.1-.49h-2.36l-.1.49a2.49 2.49 0 01-1.49 1.82 2.52 2.52 0 01-2.35-.23l-.41-.28L4.8 6.47l.28.41a2.52 2.52 0 01.23 2.35 2.49 2.49 0 01-1.82 1.49l-.49.1v2.36l.49.1c.818.16 1.5.72 1.82 1.49a2.52 2.52 0 01-.23 2.35l-.28.41 1.67 1.67.41-.28a2.49 2.49 0 011.39-.42z"
                  ></path></svg></span>
              </div>
              <div class="lemon--div__373c0__1mboc menu-item-content-container__373c0__17dmW display--table-cell__373c0__3otg8 border-color--default__373c0__3-ifU"><span
                class="lemon--span__373c0__3997G text__373c0__2Kxyz text__373c0__3UkLB text-color--inherit__373c0__1lczC text-align--left__373c0__2XGa-"
              >Account Settings</span>
              </div>
            </div>
          </div>
        </a>
      </div>
      <div class="lemon--div__373c0__1mboc menu-section__373c0__11HSz show-below-a__373c0__2aM0f border-color--default__373c0__3-ifU" role="presentation">
        <a
          class="lemon--a__373c0__IEZFH menu-item__373c0__3Vezz menu-item--highlight-auto__373c0__2vEUJ"
          href="/writeareview"
          aria-disabled="false"
          tabindex="0"
        >
          <div
            class="lemon--div__373c0__1mboc padding-t1__373c0__2aTOb padding-r1__373c0__1xqrz padding-b1__373c0__3erWW padding-l1__373c0__1UBqt border-color--default__373c0__3-ifU"
          >
            <div class="lemon--div__373c0__1mboc menu-item-inner__373c0__gv1Ar border-color--default__373c0__3-ifU">
              <div
                class="lemon--div__373c0__1mboc menu-item-content-container__373c0__17dmW display--table-cell__373c0__3otg8 padding-r1-5__373c0__1s-Oo border-color--default__373c0__3-ifU"
              >
                <span aria-hidden="true" class="icon--24-review-v2 menu-item-icon__373c0__FIApg css-12anxc3"><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  class="icon_svg"
                ><path
                  d="M17 22H5a5 5 0 01-5-5V5a5 5 0 015-5h12a5 5 0 015 5v12a5 5 0 01-5 5zM5 2a3 3 0 00-3 3v12a3 3 0 003 3h12a3 3 0 003-3V5a3 3 0 00-3-3H5zm11.23 7.56a.51.51 0 01-.13.56l-2.19 2.13.52 3a.51.51 0 01-.2.49.49.49 0 01-.53 0L11 14.32l-2.7 1.41a.5.5 0 01-.73-.53l.52-3-2.17-2.13a.51.51 0 01-.13-.51.51.51 0 01.41-.34l3-.44L10.55 6a.52.52 0 01.9 0l1.37 2.78 3 .44a.51.51 0 01.41.34z"
                ></path></svg></span>
              </div>
              <div class="lemon--div__373c0__1mboc menu-item-content-container__373c0__17dmW display--table-cell__373c0__3otg8 border-color--default__373c0__3-ifU"><span
                class="lemon--span__373c0__3997G text__373c0__2Kxyz text__373c0__3UkLB text-color--inherit__373c0__1lczC text-align--left__373c0__2XGa-"
              >Write a Review</span>
              </div>
            </div>
          </div>
        </a><a class="lemon--a__373c0__IEZFH menu-item__373c0__3Vezz menu-item--highlight-auto__373c0__2vEUJ" aria-disabled="false" tabindex="0">
          <div
            class="lemon--div__373c0__1mboc padding-t1__373c0__2aTOb padding-r1__373c0__1xqrz padding-b1__373c0__3erWW padding-l1__373c0__1UBqt border-color--default__373c0__3-ifU"
          >
            <div class="lemon--div__373c0__1mboc menu-item-inner__373c0__gv1Ar border-color--default__373c0__3-ifU">
              <div
                class="lemon--div__373c0__1mboc menu-item-content-container__373c0__17dmW display--table-cell__373c0__3otg8 padding-r1-5__373c0__1s-Oo border-color--default__373c0__3-ifU"
              >
                <span aria-hidden="true" class="icon--24-bizhouse-v2 menu-item-icon__373c0__FIApg css-12anxc3"><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  class="icon_svg"
                ><path
                  d="M22.93 11.63L21 6.81V3a1 1 0 00-1-1H4a1 1 0 00-1 1v3.81l-1.93 4.82A1 1 0 002 13h1v9a1 1 0 001 1h16a1 1 0 001-1v-9h1a1 1 0 00.93-1.37zM3.48 11l1.2-3h14.64l1.2 3H3.48zM19 4v2H5V4h14zm-5 17h-4v-4h4v4zm5 0h-3v-5a1 1 0 00-1-1H9a1 1 0 00-1 1v5H5v-8h14v8z"
                ></path></svg></span>
              </div>
              <div class="lemon--div__373c0__1mboc menu-item-content-container__373c0__17dmW display--table-cell__373c0__3otg8 border-color--default__373c0__3-ifU"><span
                class="lemon--span__373c0__3997G text__373c0__2Kxyz text__373c0__3UkLB text-color--inherit__373c0__1lczC text-align--left__373c0__2XGa-"
              >For Businesses</span>
              </div>
            </div>
          </div>
        </a>
        <a
          class="lemon--a__373c0__IEZFH menu-item__373c0__3Vezz menu-item--highlight-auto__373c0__2vEUJ"
          href="/mail"
          aria-disabled="false"
          tabindex="0"
        >
          <div
            class="lemon--div__373c0__1mboc padding-t1__373c0__2aTOb padding-r1__373c0__1xqrz padding-b1__373c0__3erWW padding-l1__373c0__1UBqt border-color--default__373c0__3-ifU"
          >
            <div class="lemon--div__373c0__1mboc arrange__373c0__2C9bH gutter-1-5__373c0__2vL-3 vertical-align-middle__373c0__1SDTo border-color--default__373c0__3-ifU">
              <div class="lemon--div__373c0__1mboc arrange-unit__373c0__o3tjT border-color--default__373c0__3-ifU">
                <div class="lemon--div__373c0__1mboc notification-wrapper__373c0__1jhvt display--inline-block__373c0__1ZKqC border-color--default__373c0__3-ifU"><span
                  aria-hidden="true"
                  class="icon--24-message-v2 css-1mpk29p"
                ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="icon_svg"><path
                  d="M7.39 11.75a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5zm4.61 0a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5zm4.61 0a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5zM7 22.53a.94.94 0 01-.43-.1 1 1 0 01-.57-.9v-3a8.19 8.19 0 01-5-7.4v-.9A8.26 8.26 0 019.26 2h5.48A8.26 8.26 0 0123 10.26v.48A8.26 8.26 0 0114.74 19h-3l-4.12 3.31a1 1 0 01-.62.22zM9.26 4A6.27 6.27 0 003 10.26v.9A6.29 6.29 0 007.34 17a1 1 0 01.66.94v1.56l2.79-2.23a1 1 0 01.62-.22h3.33A6.27 6.27 0 0021 10.74v-.48A6.27 6.27 0 0014.74 4H9.26z"
                ></path></svg></span>
                </div>
              </div>
              <div class="lemon--div__373c0__1mboc arrange-unit__373c0__o3tjT arrange-unit-fill__373c0__3Sfw1 border-color--default__373c0__3-ifU"><p
                class="lemon--p__373c0__3Qnnj text__373c0__2Kxyz text-color--normal__373c0__3xep9 text-align--left__373c0__2XGa- text-weight--semibold__373c0__2l0fe"
              >Messages</p>
              </div>
            </div>
          </div>
        </a>
        <a
          class="lemon--a__373c0__IEZFH menu-item__373c0__3Vezz menu-item--highlight-auto__373c0__2vEUJ"
          href="/user_details"
          aria-disabled="false"
          tabindex="0"
        >
          <div
            class="lemon--div__373c0__1mboc padding-t1__373c0__2aTOb padding-r1__373c0__1xqrz padding-b1__373c0__3erWW padding-l1__373c0__1UBqt border-color--default__373c0__3-ifU"
          >
            <div class="lemon--div__373c0__1mboc arrange__373c0__2C9bH gutter-1-5__373c0__2vL-3 vertical-align-middle__373c0__1SDTo border-color--default__373c0__3-ifU">
              <div class="lemon--div__373c0__1mboc arrange-unit__373c0__o3tjT border-color--default__373c0__3-ifU">
                <div class="lemon--div__373c0__1mboc notification-wrapper__373c0__1jhvt display--inline-block__373c0__1ZKqC border-color--default__373c0__3-ifU"><span
                  aria-hidden="true"
                  class="icon--24-notification-v2 css-1mpk29p"
                ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="icon_svg"><path
                  d="M22.64 17.23A7.31 7.31 0 0120 11.59V9A8 8 0 004 9v2.59a7.31 7.31 0 01-2.64 5.64A1 1 0 002 19h6a4 4 0 008 0h6a1 1 0 00.64-1.77zM6 9a6 6 0 0112 0v2.59c.001.472.038.943.11 1.41H5.89A9.36 9.36 0 006 11.59V9zm6 12a2 2 0 01-2-2h4a2 2 0 01-2 2zm-7.72-4a9.42 9.42 0 001.08-2h13.28a9.42 9.42 0 001.08 2H4.28z"
                ></path></svg></span>
                </div>
              </div>
              <div class="lemon--div__373c0__1mboc arrange-unit__373c0__o3tjT arrange-unit-fill__373c0__3Sfw1 border-color--default__373c0__3-ifU"><p
                class="lemon--p__373c0__3Qnnj text__373c0__2Kxyz text-color--normal__373c0__3xep9 text-align--left__373c0__2XGa- text-weight--semibold__373c0__2l0fe"
              >
                Notifications</p></div>
            </div>
          </div>
        </a>
      </div>
    </div>
    <div class="lemon--div__373c0__1mboc menu-section__373c0__11HSz border-color--default__373c0__3-ifU" role="presentation">
      <div id="logout-form" class="lemon--form__373c0__2fChY">
        <button
          class="menu-item__373c0__3Vezz menu-item--highlight-auto__373c0__2vEUJ"
          type="submit"
          role="menuitem"
          @click="onLogoutClick"
        >
          <div
            class="lemon--div__373c0__1mboc padding-t1__373c0__2aTOb padding-r1__373c0__1xqrz padding-b1__373c0__3erWW padding-l1__373c0__1UBqt border-color--default__373c0__3-ifU"
          >
            <div class="lemon--div__373c0__1mboc menu-item-inner__373c0__gv1Ar border-color--default__373c0__3-ifU">
              <div
                class="lemon--div__373c0__1mboc menu-item-content-container__373c0__17dmW display--table-cell__373c0__3otg8 padding-r1-5__373c0__1s-Oo border-color--default__373c0__3-ifU"
              >
                <span
                  aria-hidden="true"
                  style="fill: black;"
                  class="icon--24-log-out-v2 menu-item-icon__373c0__FIApg css-12anxc3"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    class="icon_svg"
                  ><path
                    d="M15 2a1 1 0 110 2H4v16h11a1 1 0 110 2H3a1 1 0 01-1-1V3a1 1 0 011-1h12zm1.09 4.72a1 1 0 011.41 0L22 11.3a1 1 0 010 1.4l-4.59 4.58a1 1 0 01-1.41.02 1 1 0 010-1.42L18.87 13H7a1 1 0 110-2h11.87l-2.78-2.86a1 1 0 010-1.42z"
                  ></path></svg></span>
              </div>
              <div class="lemon--div__373c0__1mboc menu-item-content-container__373c0__17dmW display--table-cell__373c0__3otg8 border-color--default__373c0__3-ifU">
                <span
                  class="lemon--span__373c0__3997G text__373c0__2Kxyz text__373c0__3UkLB text-color--inherit__373c0__1lczC text-align--left__373c0__2XGa-"
                >Log Out</span>
              </div>
            </div>
          </div>
        </button>
      </div>
    </div>
  </menu>
</template>

<script lang="ts" src="./header_pop.ts" />
