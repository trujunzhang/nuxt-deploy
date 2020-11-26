<template>
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
</template>

<script lang="ts" src="./review_sort.ts"/>
