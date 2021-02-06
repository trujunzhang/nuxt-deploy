<template>
  <!--  Line1    -->

  <div class="lemon--div__373c0__1mboc photoHeader__373c0__YdvQE border-color--default__373c0__3-ifU" data-testid="photoHeader">
    <!--   info -->
    <div
      style="padding-bottom: 24px;"
      class="lemon--div__373c0__1mboc photo-header-content-container__373c0__2SmKC border-color--default__373c0__3-ifU"
    >
      <div class="lemon--div__373c0__1mboc photo-header-content__373c0__j8x16 padding-r2__373c0__28zpp border-color--default__373c0__3-ifU">
        <div class="lemon--div__373c0__1mboc arrange__373c0__2C9bH gutter-2__373c0__1DiLQ border-color--default__373c0__3-ifU">
          <div class="lemon--div__373c0__1mboc arrange-unit__373c0__o3tjT arrange-unit-fill__373c0__3Sfw1 border-color--default__373c0__3-ifU">
            <div class="lemon--div__373c0__1mboc headingLight__373c0__2ci9X margin-b1__373c0__1khoT border-color--default__373c0__3-ifU">
              <h1
                class="lemon--h1__373c0__2ZHSL heading--h1__373c0__dvYgw undefined heading--inline__373c0__10ozy"
              >
                {{ restaurant.displayName }}
              </h1>
            </div>
            <div class="lemon--div__373c0__1mboc arrange__373c0__2C9bH gutter-1-5__373c0__2vL-3 vertical-align-middle__373c0__1SDTo margin-b2__373c0__abANL border-color--default__373c0__3-ifU">
              <div class="lemon--div__373c0__1mboc arrange-unit__373c0__o3tjT border-color--default__373c0__3-ifU">
                <span
                  class="lemon--span__373c0__3997G display--inline__373c0__3JqBP border-color--default__373c0__3-ifU"
                >
                  <div
                    :class="getRateStarClassName()"
                    role="img"
                  >
                    <img
                      class="lemon--img__373c0__3GQUb offscreen__373c0__1KofL"
                      src="https://s3-media0.fl.yelpcdn.com/assets/public/stars_v2.yji-52d3d7a328db670d4402843cbddeed89.png"
                      width="132"
                      height="560"
                      alt=""
                    >
                  </div>
                </span>
              </div>
              <div class="lemon--div__373c0__1mboc arrange-unit__373c0__o3tjT border-color--default__373c0__3-ifU nowrap__373c0__35McF">
                <span
                  class="lemon--span__373c0__3997G text__373c0__2Kxyz text-color--white__373c0__22aE8 text-align--left__373c0__2XGa- text-weight--semibold__373c0__2l0fe text-size--large__373c0__3t60B"
                >
                  {{ getRateCountStr() }}
                </span>
              </div>
              <!-- Detail -->
              <div class="lemon--div__373c0__1mboc arrange-unit__373c0__o3tjT arrange-unit-fill__373c0__3Sfw1 border-color--default__373c0__3-ifU">
                <div class="lemon--div__373c0__1mboc border-color--default__373c0__3-ifU">
                  <div class="lemon--div__373c0__1mboc css-19sk4h4 display--inline-block__373c0__1ZKqC border-color--default__373c0__3-ifU">
                  </div>
                </div>
              </div>
            </div>
            <span
              class="lemon--span__373c0__3997G display--inline__373c0__3JqBP margin-r1__373c0__zyKmV border-color--default__373c0__3-ifU"
            ><span
              class="lemon--span__373c0__3997G text__373c0__2Kxyz text-color--white__373c0__22aE8 text-align--left__373c0__2XGa- text-weight--semibold__373c0__2l0fe text-bullet--after__373c0__3fS1Z text-size--large__373c0__3t60B"
            >$$ </span>
            </span>
            <span
              class="lemon--span__373c0__3997G display--inline__373c0__3JqBP margin-r1__373c0__zyKmV border-color--default__373c0__3-ifU"
            >
              <span
                class="lemon--span__373c0__3997G text__373c0__2Kxyz text-color--white__373c0__22aE8 text-align--left__373c0__2XGa- text-weight--semibold__373c0__2l0fe text-size--large__373c0__3t60B"
              >
                {{ restaurant.address }}
              </span>
            </span>
            <a
              class="lemon--a__373c0__IEZFH button__373c0__3lYgT small__373c0__Wsszq tertiary-dark__373c0__3cLwZ editCategories__373c0__3oys3"
              :href="getEditLink()"
              style="--mousedown-x:0px; --mousedown-y:0px; --button-width:0px;"
            >
              <div class="lemon--div__373c0__1mboc button-content__373c0__1QNtB border-color--default__373c0__3-ifU"><span
                class="lemon--span__373c0__3997G text__373c0__2Kxyz button-content-text__373c0__Z-7FO text-color--inherit__373c0__1lczC text-align--center__373c0__3VrfZ text-weight--semibold__373c0__2l0fe text-size--small__373c0__3NVWO text--truncated__373c0__3sLaf"
              >Edit</span>
              </div>
            </a>
            <div class="lemon--div__373c0__1mboc arrange__373c0__2C9bH margin-t1__373c0__oLmO6 border-color--default__373c0__3-ifU">
              <div class="lemon--div__373c0__1mboc arrange-unit__373c0__o3tjT arrange-unit-fill__373c0__3Sfw1 border-color--default__373c0__3-ifU">
                <div class="lemon--div__373c0__1mboc alert-container__373c0__2_UFV display--inline-block__373c0__1ZKqC border-color--default__373c0__3-ifU" aria-label="Info" role="alert">
                  <div
                    class="lemon--div__373c0__1mboc alert__373c0__2W4cB inline__373c0__1NjZh info__373c0__1yGqK medium__373c0__tfVgt arrange__373c0__2C9bH vertical-align-middle__373c0__1SDTo border-color--default__373c0__3-ifU"
                  >
                    <div class="lemon--div__373c0__1mboc alert-icon-unit__373c0__2WHUe arrange-unit__373c0__o3tjT border-color--default__373c0__3-ifU">
                      <div class="lemon--div__373c0__1mboc alert-icon-container__373c0__2Vlsq border-color--default__373c0__3-ifU">
                        <div class="lemon--div__373c0__1mboc alert-icon__373c0__5A99z border-color--default__373c0__3-ifU">
                          <span aria-hidden="true" class="icon--16-info-v2 css-1jnn9ss">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              class="icon_svg"
                            >
                              <path
                                d="M8 1a7 7 0 110 14A7 7 0 018 1zm0 2a5 5 0 100 10A5 5 0 008 3zm0 3.86a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm0-2.74a1 1 0 110 2 1 1 0 010-2z"
                              ></path>
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div class="lemon--div__373c0__1mboc arrange-unit__373c0__o3tjT border-color--default__373c0__3-ifU">
                      <span
                        class="lemon--span__373c0__3997G text__373c0__2Kxyz text-color--inherit__373c0__1lczC text-align--left__373c0__2XGa- text-size--inherit__373c0__2fB3p"
                      >
                        <p
                          class="lemon--p__373c0__3Qnnj text__373c0__2Kxyz text-color--inherit__373c0__1lczC text-align--left__373c0__2XGa- text-weight--semibold__373c0__2l0fe text-size--large__373c0__3t60B"
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
      </div>
      <div class="lemon--div__373c0__1mboc photo-header-buttons__373c0__3ZdZU border-color--default__373c0__3-ifU">
        <div class="lemon--div__373c0__1mboc border-color--default__373c0__3-ifU">
          <span
            v-if="photosLen"
            class="lemon--span__373c0__3997G display--inline__373c0__3JqBP margin-l2__373c0__wvUpT border-color--default__373c0__3-ifU"
          >
            <a
              class="lemon--a__373c0__IEZFH button__373c0__3lYgT large__373c0__3EPuS secondary-dark__373c0__5iZ63"
              :href="getSeeAllLink()"
              style="--mousedown-x:0px; --mousedown-y:0px; --button-width:0px;"
            >
              <div class="lemon--div__373c0__1mboc button-content__373c0__1QNtB border-color--default__373c0__3-ifU">
                <span
                  class="lemon--span__373c0__3997G text__373c0__2Kxyz button-content-text__373c0__Z-7FO text-color--inherit__373c0__1lczC text-align--center__373c0__3VrfZ text-weight--semibold__373c0__2l0fe text-size--large__373c0__3t60B text--truncated__373c0__3sLaf"
                >
                  {{ getPhotosLen() }}
                </span>
              </div>
            </a>
          </span>
        </div>
      </div>
    </div>
    <!--    photos -->
    <div class="lemon--div__373c0__1mboc carousel__373c0__pUIax border-color--default__373c0__3-ifU">
      <div class="lemon--div__373c0__1mboc scrollContainer__373c0__3qIqZ scrollContainerNoOverflow__373c0__3SY1f border-color--default__373c0__3-ifU nowrap__373c0__35McF">
        <div
          v-for="(index) in photoItems"
          :key="index"
          class="lemon--div__373c0__1mboc photo-header-media__373c0__UThKJ photo-header-media--overlay__373c0__1Pq9Z display--inline-block__373c0__1ZKqC border-color--default__373c0__3-ifU"
          style="width: 319.5px;"
        >
          <a
            v-if="showPhotoItem(index)"
            class="lemon--a__373c0__IEZFH link__373c0__1G70M photo-header-media-link__373c0__3nH1_ link-color--blue-dark__373c0__85-Nu link-size--default__373c0__7tls6"
            :href="getImageLink(index)"
            role="link"
          >
            <img
              v-lazy="getPhotoUrl(index)"
              class="lemon--img__373c0__3GQUb photo-header-media-image__373c0__2Qf5H"
              width="319.5"
              height="426"
            >
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./info.ts" />
