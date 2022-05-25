<template>
  <div
    class=" container__09f24__21w3G hoverable__09f24__2nTf3 margin-t3__09f24__5bM2Z margin-b3__09f24__1DQ9x padding-t3__09f24__-R_5x padding-r3__09f24__1pBFG padding-b3__09f24__1vW6j padding-l3__09f24__1yCJf border--top__09f24__1H_WE border--right__09f24__28idl border--bottom__09f24__2FjZW border--left__09f24__33iol border-color--default__09f24__R1nRO"
  >
    <div class=" border-color--default__09f24__R1nRO">
      <div class=" arrange__09f24__AiSIM border-color--default__09f24__R1nRO">
        <div class=" arrange-unit__09f24__1gZC1 border-color--default__09f24__R1nRO">
          <div class=" border-color--default__09f24__R1nRO">
            <div class=" display--inline-block__09f24__FsgS4 margin-r3__09f24__2CcgQ border-color--default__09f24__R1nRO">
              <div class=" border-color--default__09f24__R1nRO">
                <div
                  class=" container__09f24__2BlDc dontTriggerCardClick__09f24__2GWZF container--responsive__09f24__1BXoY container__09f24__1SkkV border-color--default__09f24__R1nRO"
                >
                  <div class=" container__09f24__15LDH border-color--default__09f24__R1nRO" aria-label="Slideshow">
                    <div class=" child__09f24__27sCM border-color--default__09f24__R1nRO" style="transition:transform 150ms ease-in-out">
                      <div class=" on-click-container border-color--default__09f24__R1nRO">
                        <a
                          class=" link__09f24__1kwXV photo-box-link__09f24__28L0f link-color--blue-dark__09f24__2DRa0 link-size--default__09f24__3xWLF"
                          :href="getDetailRestaurantUrl() "
                        ><img
                          v-lazy="`${getRestaurantPhotoUrl()}`"
                          class=" photo-box-img__09f24__3F3c5"
                          height="200px"
                          width="100%"
                          draggable="true"
                        ></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class=" arrange-unit__09f24__1gZC1 arrange-unit-fill__09f24__O6JFU border-color--default__09f24__R1nRO">
          <div class=" border-color--default__09f24__R1nRO">
            <div class=" scrollablePhotos__09f24__1PpB8 arrange__09f24__AiSIM border-color--default__09f24__R1nRO">
              <div class=" mainAttributes__09f24__26-vh arrange-unit__09f24__1gZC1 arrange-unit-fill__09f24__O6JFU border-color--default__09f24__R1nRO">
                <div class=" border-color--default__09f24__R1nRO">
                  <div class=" border-color--default__09f24__R1nRO">
                    <div class=" businessName__09f24__3Wql2 display--inline-block__09f24__FsgS4 border-color--default__09f24__R1nRO">
                      <div class=" border-color--default__09f24__R1nRO">
                        <h4 class=" heading--h4__09f24__2ijYq alternate__09f24__39r7c">
                          <span
                            class=" text__09f24__2tZKC text-color--black-regular__09f24__1QxyO text-align--left__09f24__3Drs0 text-weight--bold__09f24__WGVdT text-size--inherit__09f24__2rwpp"
                          >
                            {{ index + 1 }}
                            <!-- -->.&nbsp;<a
                            class=" link__09f24__1kwXV link-color--inherit__09f24__3PYlA link-size--inherit__09f24__2Uj95"
                            :href="getDetailRestaurantUrl() "
                            :name="`${restaurant.displayName}`"
                            rel=""
                          >{{ restaurant.displayName }}</a>
                          </span>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div class=" border-color--default__09f24__R1nRO">
                    <div class=" display--inline-block__09f24__FsgS4 border-color--default__09f24__R1nRO">
                      <div class=" border-color--default__09f24__R1nRO">
                        <div class=" attribute__09f24__3znwq display--inline-block__09f24__FsgS4 margin-r1__09f24__BCulR border-color--default__09f24__R1nRO">
                          <span class=" display--inline__09f24__3iACj border-color--default__09f24__R1nRO">
                            <div
                              :class="getRateStarClassName()"
                              role="img"
                            />
                          </span>
                        </div>
                        <div class=" attribute__09f24__3znwq display--inline-block__09f24__FsgS4 border-color--default__09f24__R1nRO">
                          <span
                            class=" text__09f24__2tZKC reviewCount__09f24__EUXPN text-color--black-extra-light__09f24__38DtK text-align--left__09f24__3Drs0"
                          >{{ restaurant.reviewCount }}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class=" border-color--default__09f24__R1nRO">
                    <div class=" priceCategory__09f24__2IbAM display--inline-block__09f24__FsgS4 border-color--default__09f24__R1nRO">
                      <div class=" border-color--default__09f24__R1nRO">
                        <span class=" display--inline__09f24__3iACj border-color--default__09f24__R1nRO">
                          <span
                            class=" text__09f24__2tZKC priceRange__09f24__2O6le text-color--black-extra-light__09f24__38DtK text-align--left__09f24__3Drs0 text-bullet--after__09f24__1MWoX"
                          >$$</span>
                        </span>
                        <span
                          class=" display--inline__09f24__3iACj border-color--default__09f24__R1nRO"
                        >
                          <span
                            class=" display--inline__09f24__3iACj border-color--default__09f24__R1nRO"
                          >
                            <span
                              class=" text__09f24__2tZKC text-color--black-extra-light__09f24__38DtK text-align--left__09f24__3Drs0 text-size--inherit__09f24__2rwpp"
                            ><a
                              class=" link__09f24__1kwXV link-color--inherit__09f24__3PYlA link-size--default__09f24__3xWLF"
                            >{{ restaurant.address }}</a>
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
          <div class=" border-color--default__09f24__R1nRO">
            <div class=" display--inline-block__09f24__FsgS4 margin-t1__09f24__3OFkY border-color--default__09f24__R1nRO">
              <div class=" border-color--default__09f24__R1nRO">
                <div class=" arrange__09f24__AiSIM gutter-auto__09f24__2WJTk vertical-align-middle__09f24__zNCcM border-color--default__09f24__R1nRO">
                  <div class=" arrange-unit__09f24__1gZC1 arrange-unit-fill__09f24__O6JFU border-color--default__09f24__R1nRO">
                    <p class=" text__09f24__2tZKC text-color--black-extra-light__09f24__38DtK text-align--left__09f24__3Drs0">
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
