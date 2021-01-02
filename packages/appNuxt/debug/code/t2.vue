<template>
  <div class="lemon--div__373c0__1mboc margin-b3__373c0__q1DuY border-color--default__373c0__3-ifU">
    <div
      class="lemon--div__373c0__1mboc arrange__373c0__2C9bH gutter-4__373c0__3s8bL border-color--default__373c0__3-ifU"
    >
      <div
        class="lemon--div__373c0__1mboc arrange-unit__373c0__o3tjT arrange-unit-fill__373c0__3Sfw1 border-color--default__373c0__3-ifU"
      >
        <div class="lemon--div__373c0__1mboc margin-b1__373c0__1khoT border-color--default__373c0__3-ifU">
          <h1
            class="lemon--h1__373c0__2ZHSL heading--h1__373c0__dvYgw undefined heading--inline__373c0__10ozy"
          >
            {{ restaurant.displayName }}
          </h1>
        </div>
        <div
          class="lemon--div__373c0__1mboc arrange__373c0__2C9bH gutter-1-5__373c0__2vL-3 vertical-align-middle__373c0__1SDTo margin-b1__373c0__1khoT border-color--default__373c0__3-ifU"
        >
          <div
            class="lemon--div__373c0__1mboc arrange-unit__373c0__o3tjT border-color--default__373c0__3-ifU"
          >
            <span
              class="lemon--span__373c0__3997G display--inline__373c0__3JqBP border-color--default__373c0__3-ifU"
            ><div
              :class="getRateStarClassName()"
              role="img"
            ><img
              class="lemon--img__373c0__3GQUb offscreen__373c0__1KofL"
              src="https://s3-media0.fl.yelpcdn.com/assets/public/stars_v2.yelp_design_web.yji-52d3d7a328db670d4402843cbddeed89.png"
              width="132"
              height="560"
              alt=""
            ></div></span>
          </div>
          <div
            class="lemon--div__373c0__1mboc arrange-unit__373c0__o3tjT border-color--default__373c0__3-ifU nowrap__373c0__35McF"
          >
            <p
              class="lemon--p__373c0__3Qnnj text__373c0__2Kxyz text-color--mid__373c0__jCeOG text-align--left__373c0__2XGa- text-size--large__373c0__3t60B"
            >
              {{ getRateCountStr() }}
            </p>
          </div>
          <!--  edit -->
          <div
            class="lemon--div__373c0__1mboc arrange-unit__373c0__o3tjT arrange-unit-fill__373c0__3Sfw1 border-color--default__373c0__3-ifU"
          >
            <div class="lemon--div__373c0__1mboc border-color--default__373c0__3-ifU">
              <div
                class="lemon--div__373c0__1mboc tooltipContainer__373c0__2PjJt display--inline-block__373c0__1ZKqC border-color--default__373c0__3-ifU"
              >
              </div>
            </div>
          </div>
        </div>
        <span
          class="lemon--span__373c0__3997G display--inline__373c0__3JqBP margin-r1__373c0__zyKmV border-color--default__373c0__3-ifU"
        ><span
          class="lemon--span__373c0__3997G text__373c0__2Kxyz text-color--normal__373c0__3xep9 text-align--left__373c0__2XGa- text-bullet--after__373c0__3fS1Z text-size--large__373c0__3t60B"
        >$$
        </span>
        </span>
        <span
          class="lemon--span__373c0__3997G display--inline__373c0__3JqBP margin-r1__373c0__zyKmV border-color--default__373c0__3-ifU"
        >
          <span
            class="lemon--span__373c0__3997G text__373c0__2Kxyz text-color--black-extra-light__373c0__2OyzO text-align--left__373c0__2XGa- text-size--large__373c0__3t60B"
          >
            <span
              style="text-decoration:none;"
              class="lemon--a__373c0__IEZFH link__373c0__1G70M link-color--inherit__373c0__3dzpk link-size--inherit__373c0__1VFlE"
            >
              {{ restaurant.address }}
            </span>
          </span>
        </span>
        <a
          class="lemon--a__373c0__IEZFH link__373c0__1G70M editCategories__373c0__3oys3 link--chiclet__373c0__NqY9d link-color--blue-dark__373c0__85-Nu link-size--default__373c0__7tls6"
          :href="getEditLink()"
          target=""
          name=""
          rel=""
        >Edit</a>
        <div
          class="lemon--div__373c0__1mboc margin-t0-5__373c0__1VMSL border-color--default__373c0__3-ifU"
        >
          <div
            class="lemon--div__373c0__1mboc alert-container__373c0__2_UFV display--inline-block__373c0__1ZKqC border-color--default__373c0__3-ifU"
            aria-label="Info"
            role="alert"
          >
            <div
              class="lemon--div__373c0__1mboc alert__373c0__2W4cB inline__373c0__1NjZh info__373c0__1yGqK medium__373c0__tfVgt arrange__373c0__2C9bH vertical-align-middle__373c0__1SDTo border-color--default__373c0__3-ifU"
            >
              <div
                class="lemon--div__373c0__1mboc alert-icon-unit__373c0__2WHUe arrange-unit__373c0__o3tjT border-color--default__373c0__3-ifU"
              >
                <div
                  class="lemon--div__373c0__1mboc alert-icon-container__373c0__2Vlsq border-color--default__373c0__3-ifU"
                >
                  <div
                    class="lemon--div__373c0__1mboc alert-icon__373c0__5A99z border-color--default__373c0__3-ifU"
                  >
                    <span
                      class="lemon--span__373c0__3997G icon__373c0__ehCWV icon--16-info-v2 icon--blue-regular__373c0__1TKX8 icon--v2__373c0__1yp8c"
                      aria-hidden="true"
                      style="width:16px;height:16px"
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      class="icon_svg"
                    ><path
                      d="M8 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1zm0 2a5 5 0 1 0 0 10A5 5 0 0 0 8 3zm0 3.86a1 1 0 0 1 1 1v3a1 1 0 0 1-2 0v-3a1 1 0 0 1 1-1zm0-2.74a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
                    ></path></svg></span>
                  </div>
                </div>
              </div>
              <div
                class="lemon--div__373c0__1mboc arrange-unit__373c0__o3tjT border-color--default__373c0__3-ifU"
              >
                <span
                  class="lemon--span__373c0__3997G text__373c0__2Kxyz text-color--inherit__373c0__1lczC text-align--left__373c0__2XGa- text-size--inherit__373c0__2fB3p"
                >
                  <p
                    class="lemon--p__373c0__3Qnnj text__373c0__2Kxyz text-color--inherit__373c0__1lczC text-align--left__373c0__2XGa- text-size--large__373c0__3t60B"
                  >
                    {{ getUpdatedDateStr() }}
                  </p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./info.ts" />
