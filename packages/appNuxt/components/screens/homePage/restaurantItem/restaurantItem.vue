<template>
  <div
    class="lemon--div__373c0__1mboc container__373c0__3HMKB hoverable__373c0__VqkG7 margin-t3__373c0__1l90z margin-b3__373c0__q1DuY padding-t3__373c0__1gw9E padding-r3__373c0__57InZ padding-b3__373c0__342DA padding-l3__373c0__1scQ0 border--top__373c0__3gXLy border--right__373c0__1n3Iv border--bottom__373c0__3qNtD border--left__373c0__d1B7K border-color--default__373c0__3-ifU"
    @mouseover="mouseover"
    @mouseleave="mouseleave"
  >
    <div class="lemon--div__373c0__1mboc border-color--default__373c0__3-ifU">
      <div class="lemon--div__373c0__1mboc arrange__373c0__2C9bH border-color--default__373c0__3-ifU">
        <div
          class="lemon--div__373c0__1mboc arrange-unit__373c0__o3tjT border-color--default__373c0__3-ifU"
        >
          <div class="lemon--div__373c0__1mboc border-color--default__373c0__3-ifU">
            <div
              class="lemon--div__373c0__1mboc display--inline-block__373c0__1ZKqC margin-r3__373c0__r37sx border-color--default__373c0__3-ifU"
            >
              <div class="lemon--div__373c0__1mboc border-color--default__373c0__3-ifU">
                <div
                  class="lemon--div__373c0__1mboc container__373c0__1sAOA dontTriggerCardClick__373c0__GpqIc container--responsive__373c0__KpQnU border-color--default__373c0__3-ifU"
                >
                  <div
                    class="lemon--div__373c0__1mboc container__373c0__3EC6S border-color--default__373c0__3-ifU"
                  >
                    <div
                      class="lemon--div__373c0__1mboc child__373c0__1DxWZ border-color--default__373c0__3-ifU"
                      style="transition: transform 150ms ease-in-out 0s;"
                    >
                      <div
                        class="lemon--div__373c0__1mboc on-click-container border-color--default__373c0__3-ifU"
                      >
                        <a
                          class="lemon--a__373c0__IEZFH link__373c0__1G70M photo-box-link__373c0__1YC9Y link-color--blue-dark__373c0__85-Nu link-size--default__373c0__7tls6"
                          :href="getDetailRestaurantUrl() "
                        >
                          <img
                            class="lemon--img__373c0__3GQUb photo-box-img__373c0__35y5v"
                            :src="`${getRestaurantPhotoUrl()}`"
                            :alt="`${restaurant.displayName}`"
                            height="100%"
                            width="100%"
                          >
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="lemon--div__373c0__1mboc arrange-unit__373c0__o3tjT arrange-unit-fill__373c0__3Sfw1 border-color--default__373c0__3-ifU"
        >
          <div class="lemon--div__373c0__1mboc border-color--default__373c0__3-ifU">
            <div
              class="lemon--div__373c0__1mboc scrollablePhotos__373c0__1LEvd arrange__373c0__2C9bH border-color--default__373c0__3-ifU"
            >
              <div
                class="lemon--div__373c0__1mboc mainAttributes__373c0__1r0QA arrange-unit__373c0__o3tjT arrange-unit-fill__373c0__3Sfw1 border-color--default__373c0__3-ifU"
              >
                <div class="lemon--div__373c0__1mboc border-color--default__373c0__3-ifU">
                  <div class="lemon--div__373c0__1mboc border-color--default__373c0__3-ifU">
                    <div
                      class="lemon--div__373c0__1mboc businessNameWithNoVerifiedBadge__373c0__24q4s display--inline-block__373c0__1ZKqC border-color--default__373c0__3-ifU"
                    >
                      <div class="lemon--div__373c0__1mboc border-color--default__373c0__3-ifU">
                        <h4
                          class="lemon--h4__373c0__1yd__ heading--h4__373c0__27bDo alternate__373c0__2Mge5"
                        >
                          <span
                            class="lemon--span__373c0__3997G text__373c0__2Kxyz text-color--black-regular__373c0__2vGEn text-align--left__373c0__2XGa- text-weight--bold__373c0__1elNz text-size--inherit__373c0__2fB3p"
                          >{{ index + 1 }}.&nbsp;<a
                            class="lemon--a__373c0__IEZFH link__373c0__1G70M link-color--inherit__373c0__3dzpk link-size--inherit__373c0__1VFlE"
                            :href="getDetailRestaurantUrl() "
                            target=""
                            :name="`${restaurant.displayName}`"
                            rel=""
                          >{{ restaurant.displayName }}</a></span>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div class="lemon--div__373c0__1mboc border-color--default__373c0__3-ifU">
                    <div
                      class="lemon--div__373c0__1mboc display--inline-block__373c0__1ZKqC border-color--default__373c0__3-ifU"
                    >
                      <div class="lemon--div__373c0__1mboc border-color--default__373c0__3-ifU">
                        <div
                          class="lemon--div__373c0__1mboc attribute__373c0__1hPI_ display--inline-block__373c0__1ZKqC margin-r1__373c0__zyKmV border-color--default__373c0__3-ifU"
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
                          class="lemon--div__373c0__1mboc attribute__373c0__1hPI_ display--inline-block__373c0__1ZKqC border-color--default__373c0__3-ifU"
                        >
                          <span
                            class="lemon--span__373c0__3997G text__373c0__2Kxyz reviewCount__373c0__2r4xT text-color--black-extra-light__373c0__2OyzO text-align--left__373c0__2XGa-"
                          >{{ restaurant.reviewCount }}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="lemon--div__373c0__1mboc border-color--default__373c0__3-ifU">
                    <div
                      class="lemon--div__373c0__1mboc priceCategory__373c0__3zW0R display--inline-block__373c0__1ZKqC border-color--default__373c0__3-ifU"
                    >
                      <div class="lemon--div__373c0__1mboc border-color--default__373c0__3-ifU">
                        <span
                          class="lemon--span__373c0__3997G display--inline__373c0__3JqBP border-color--default__373c0__3-ifU"
                        >
                          <span
                            class="lemon--span__373c0__3997G text__373c0__2Kxyz priceRange__373c0__2DY87 text-color--black-extra-light__373c0__2OyzO text-align--left__373c0__2XGa- text-bullet--after__373c0__3fS1Z"
                          >$$</span>
                        </span>
                        <span
                          class="lemon--span__373c0__3997G display--inline__373c0__3JqBP border-color--default__373c0__3-ifU"
                        >
                          <span
                            class="lemon--span__373c0__3997G display--inline__373c0__3JqBP border-color--default__373c0__3-ifU"
                          >
                            <span
                              class="lemon--span__373c0__3997G text__373c0__2Kxyz text-color--black-extra-light__373c0__2OyzO text-align--left__373c0__2XGa-"
                            >
                              <span
                                class="lemon--a__373c0__IEZFH link__373c0__1G70M link-color--inherit__373c0__3dzpk link-size--default__373c0__7tls6"
                                style="text-decoration:none;"
                              >{{ restaurant.address }}</span>
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
          <div class="lemon--div__373c0__1mboc border-color--default__373c0__3-ifU">
            <div
              class="lemon--div__373c0__1mboc display--inline-block__373c0__1ZKqC margin-t1__373c0__oLmO6 border-color--default__373c0__3-ifU"
            >
              <div class="lemon--div__373c0__1mboc border-color--default__373c0__3-ifU">
                <div
                  class="lemon--div__373c0__1mboc arrange__373c0__2C9bH gutter-auto__373c0__1Ep_j vertical-align-middle__373c0__1SDTo border-color--default__373c0__3-ifU"
                >
                  <div
                    class="lemon--div__373c0__1mboc arrange-unit__373c0__o3tjT arrange-unit-fill__373c0__3Sfw1 border-color--default__373c0__3-ifU"
                  >
                    <p
                      class="lemon--p__373c0__3Qnnj text__373c0__2Kxyz text-color--black-extra-light__373c0__2OyzO text-align--left__373c0__2XGa-"
                    >
                      {{ getRestaurantNote() }}
                    </p>
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

<script lang="ts" src="./restaurantItem.ts" />
