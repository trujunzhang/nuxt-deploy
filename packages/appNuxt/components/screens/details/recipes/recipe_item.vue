<template>
  <div class=" card__373c0__k5RCh card--pablo__373c0__xKJ01 border-color--default__373c0__3-ifU">
    <div class=" margin-b1__373c0__1khoT border-color--default__373c0__3-ifU">
      <div class=" border-color--default__373c0__3-ifU">
        <div class=" photo__373c0__1tYpH border-color--default__373c0__3-ifU" style="height: 186px;">
          <a
            class=" link__373c0__1G70M photo-link__373c0__1sZ41 link-color--blue-dark__373c0__85-Nu link-size--default__373c0__7tls6"
            href="https://www.yelp.com/biz/kirimachi-ramen-san-francisco-2?page_src=related_bizes"
            target=""
            name=""
            rel=""
          >
            <div
              class=" on-click-container photo-box__373c0__34MB1 photo-box-background__373c0__Ti5rn border-color--default__373c0__3-ifU"
            >
              <img
                v-lazy="`${getRecipePhotoUrl()}`"
                style="opacity:100%;"
                class=" photo-box-img__373c0__35y5v"
                alt="recipe.displayName"
                height="186"
                width="100%"
                draggable="true"
              >
            </div>
          </a>
          <!--  price  -->
          <div class=" overlay-container__373c0__Xg5rm border-color--default__373c0__3-ifU">
            <div
              style="height: 100px;"
              class=" overlay-text-container__373c0__1ZySb border-color--default__373c0__3-ifU"
            >
              <h5
                style="margin-top: 30px;"
                class=" heading--h2__373c0__1g9VN"
              >
                <p class=" text__373c0__2Kxyz overlay-text__373c0__1Ad7k text-color--white__373c0__22aE8 text-align--center__373c0__3VrfZ text-size--inherit__373c0__2fB3p">
                  {{ "$ "+recipe.price }}
                </p>
              </h5>
            </div>
          </div>
        </div>
        <div class=" padding-t1-5__373c0__n5dYm border-color--default__373c0__3-ifU overflow--hidden__373c0__2y4YK">
          <div class=" border-color--default__373c0__3-ifU" aria-labelledby="businessPassport-8c65d634-9c71-4613-a3a6-0067092a2abe" role="region">
            <div class=" container__373c0__2vNT3 arrange__373c0__2C9bH gutter-1-5__373c0__2vL-3 border-color--default__373c0__3-ifU">
              <div class=" arrange-unit__373c0__o3tjT border-color--default__373c0__3-ifU">
                <div class=" arrange__373c0__2C9bH vertical-align-baseline__373c0__3HGi9 border-color--default__373c0__3-ifU">
                  <div class=" businessTitleContainer__373c0__vLRae arrange-unit__373c0__o3tjT arrange-unit-fill__373c0__3Sfw1 border-color--default__373c0__3-ifU">
                    <p
                      class=" text__373c0__2Kxyz fixed-size-text__373c0__1oHrR fixed-size-text--large__373c0__1yK0i text-color--black-regular__373c0__2vGEn text-align--left__373c0__2XGa- text-weight--bold__373c0__1elNz text-size--large__373c0__3t60B text--truncated__373c0__3sLaf"
                    >
                      <a
                        id="businessPassport-8c65d634-9c71-4613-a3a6-0067092a2abe"
                        class=" link__373c0__1G70M link-color--inherit__373c0__3dzpk link-size--inherit__373c0__1VFlE"
                        href="https://www.yelp.com/biz/kirimachi-ramen-san-francisco-2?page_src=related_bizes"
                        target=""
                        name=""
                        rel=""
                      >{{ recipe.displayName }}</a>
                    </p>
                  </div>
                </div>
                <div class=" margin-t0-5__373c0__1VMSL margin-b0-5__373c0__Fo75u border-color--default__373c0__3-ifU nowrap__373c0__35McF">
                  <div class=" arrange__373c0__2C9bH gutter-1__373c0__2l5bx vertical-align-middle__373c0__1SDTo border-color--default__373c0__3-ifU">
                    <div class=" arrange-unit__373c0__o3tjT border-color--default__373c0__3-ifU nowrap__373c0__35McF">
                      <span
                        class=" display--inline__373c0__3JqBP border-color--default__373c0__3-ifU"
                      >
                        <div
                          :class="getRateStarClassName()"
                          role="img"
                        />
                      </span>
                    </div>
                    <div class=" arrange-unit__373c0__o3tjT arrange-unit-fill__373c0__3Sfw1 border-color--default__373c0__3-ifU">
                      <span
                        class=" text__373c0__2Kxyz fixed-size-text__373c0__1oHrR fixed-size-text--small__373c0__2RjZy text-color--black-extra-light__373c0__2OyzO text-align--left__373c0__2XGa-"
                      >
                        <span class="">
                          <span itemprop="reviewCount">
                            {{ recipe.reviewCount }}
                          </span>
                        </span>
                      </span>
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

<script lang="ts" src="./recipe_item.ts"/>
