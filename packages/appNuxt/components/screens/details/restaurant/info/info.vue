<template>
  <div class=" photoHeader__373c0__YdvQE border-color--default__373c0__3-ifU" data-testid="photoHeader">
    <div class=" photo-header-content-container__373c0__2SmKC border-color--default__373c0__3-ifU">
      <div class=" photo-header-content__373c0__j8x16 padding-r2__373c0__28zpp border-color--default__373c0__3-ifU">
        <div class=" arrange__373c0__2C9bH gutter-2__373c0__1DiLQ border-color--default__373c0__3-ifU">
          <div class=" arrange-unit__373c0__o3tjT arrange-unit-fill__373c0__3Sfw1 border-color--default__373c0__3-ifU">
            <div class=" headingLight__373c0__2ci9X margin-b1__373c0__1khoT border-color--default__373c0__3-ifU">
              <h1 class=" heading--h1__373c0__dvYgw undefined heading--inline__373c0__10ozy">
                {{ restaurant.displayName }}
              </h1>
            </div>
            <div class=" arrange__373c0__2C9bH gutter-1-5__373c0__2vL-3 vertical-align-middle__373c0__1SDTo margin-b2__373c0__abANL border-color--default__373c0__3-ifU">
              <div
                style="width: 180px;"
                class=" arrange-unit__373c0__o3tjT border-color--default__373c0__3-ifU"
              >
                <span class=" display--inline__373c0__3JqBP border-color--default__373c0__3-ifU">
                  <div
                    :class="getRateStarClassName()"
                    role="img"
                  />
                </span>
              </div>
              <div class=" arrange-unit__373c0__o3tjT border-color--default__373c0__3-ifU nowrap__373c0__35McF">
                <span
                  class=" text__373c0__2Kxyz text-color--white__373c0__22aE8 text-align--left__373c0__2XGa- text-weight--semibold__373c0__2l0fe text-size--large__373c0__3t60B"
                >
                  {{ getRateCountStr() }}
                </span>
              </div>
            </div>
            <span
              class=" display--inline__373c0__3JqBP margin-r1__373c0__zyKmV border-color--default__373c0__3-ifU"
            >
              <span
                class=" text__373c0__2Kxyz text-color--white__373c0__22aE8 text-align--left__373c0__2XGa- text-weight--semibold__373c0__2l0fe text-bullet--after__373c0__3fS1Z text-size--large__373c0__3t60B"
              >
                $$
              </span>
            </span>
            <span class=" display--inline__373c0__3JqBP margin-r1__373c0__zyKmV border-color--default__373c0__3-ifU">
              <span
                class=" text__373c0__2Kxyz text-color--white__373c0__22aE8 text-align--left__373c0__2XGa- text-weight--semibold__373c0__2l0fe text-size--large__373c0__3t60B"
              >
                {{ restaurant.address }}
              </span>
            </span>
            <a
              :href="getEditLink()"
              class=" button__373c0__3lYgT small__373c0__Wsszq tertiary-dark__373c0__3cLwZ editCategories__373c0__3oys3"
              style="--mousedown-x:0px;--mousedown-y:0px;--button-width:0px"
            >
              <div class=" button-content__373c0__1QNtB border-color--default__373c0__3-ifU">
                <span
                  class=" text__373c0__2Kxyz button-content-text__373c0__Z-7FO text-color--inherit__373c0__1lczC text-align--center__373c0__3VrfZ text-weight--semibold__373c0__2l0fe text-size--small__373c0__3NVWO text--truncated__373c0__3sLaf"
                >Edit</span>
              </div>
            </a>
            <div class=" arrange__373c0__2C9bH margin-t1__373c0__oLmO6 border-color--default__373c0__3-ifU">
              <div class=" arrange-unit__373c0__o3tjT arrange-unit-fill__373c0__3Sfw1 border-color--default__373c0__3-ifU">
                <div class=" inline-alert__373c0__3fRDg inline-alert--info__373c0__38J4J display--inline-block__373c0__1ZKqC border-color--default__373c0__3-ifU" aria-label="Info" role="alert">
                  <div class=" inline-alert-text__373c0__2o34- padding-l1__373c0__1UBqt border-color--default__373c0__3-ifU">
                    <span
                      class=" text__373c0__2Kxyz text-color--inherit__373c0__1lczC text-align--left__373c0__2XGa-"
                    >
                      <p
                        class=" text__373c0__2Kxyz text-color--inherit__373c0__1lczC text-align--left__373c0__2XGa- text-weight--semibold__373c0__2l0fe text-size--large__373c0__3t60B"
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
      <div
        v-if="photosLen"
        class=" photo-header-buttons__373c0__3ZdZU border-color--default__373c0__3-ifU"
      >
        <span
          class=" display--inline__373c0__3JqBP margin-l2__373c0__wvUpT border-color--default__373c0__3-ifU"
        >
          <a
            class=" button__373c0__3lYgT large__373c0__3EPuS secondary-dark__373c0__5iZ63"
            href="https://www.yelp.com/biz_photos/the-ramen-bar-san-francisco-san-francisco-3"
            style="--mousedown-x:0px; --mousedown-y:0px; --button-width:0px;"
          >
            <div
              class=" button-content__373c0__1QNtB border-color--default__373c0__3-ifU"
            >
              <span
                class=" text__373c0__2Kxyz button-content-text__373c0__Z-7FO text-color--inherit__373c0__1lczC text-align--center__373c0__3VrfZ text-weight--semibold__373c0__2l0fe text-size--large__373c0__3t60B text--truncated__373c0__3sLaf"
              >
                {{ getPhotosLen() }}
              </span>
            </div>
          </a>
        </span>
      </div>
    </div>
    <div class=" carousel__373c0__pUIax border-color--default__373c0__3-ifU">
      <div class=" scrollContainer__373c0__3qIqZ scrollContainerNoOverflow__373c0__3SY1f border-color--default__373c0__3-ifU nowrap__373c0__35McF">
        <div
          v-for="(index) in photoItems"
          :key="index"
          class=" photo-header-media__373c0__UThKJ photo-header-media--overlay__373c0__1Pq9Z display--inline-block__373c0__1ZKqC border-color--default__373c0__3-ifU"
          style="width: 25%;"
        >
          <a
            v-if="showPhotoItem(index)"
            class=" link__373c0__1G70M photo-header-media-link__373c0__3nH1_ link-color--blue-dark__373c0__85-Nu link-size--default__373c0__7tls6"
            :href="getImageLink(index)"
            role="link"
          >
            <img
              v-lazy="getPhotoUrl(index)"
              class=" photo-header-media-image__373c0__2Qf5H"
              alt="Photo of The Ramen Bar San Francisco - San Francisco, CA, United States. Shoyu bass with Chad shu"
              height="426"
              width="319.5"
            >
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./info.ts" />
