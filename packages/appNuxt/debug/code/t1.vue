<template>
  <div class="lemon--div__09f24__1mboc container__09f24__g4i9Y content_container__09f24__rgB-V">
    <div class="lemon--div__09f24__1mboc content__09f24__2byvy">
      <div class="lemon--div__09f24__1mboc content_inner__09f24__3vmCP border-color--default__09f24__1eOdn">
        <div class="lemon--div__09f24__1mboc header__09f24__B__Su border-color--default__09f24__1eOdn">
          <div class="lemon--div__09f24__1mboc biz-header-title-container__09f24__1cVIc border-color--default__09f24__1eOdn">
            <a
              class="lemon--a__09f24__IEZFH link__09f24__1MGLa biz-header-title-link__09f24__3ELtv link-color--blue-dark__09f24__tK18E link-size--default__09f24__QvrjA"
              :href="getDetailRestaurantUrl()"
              target="_blank"
              role="link"
            >
              <h1 class="lemon--h1__09f24__2ZHSL heading--h1__09f24__2TDjk">
                {{ restaurant.displayName }}
              </h1>
            </a>
          </div>
        </div>
        <div class="lemon--div__09f24__1mboc border-color--default__09f24__1eOdn">
          <div class="lemon--form__09f24__2fChY">
            <div
              class="lemon--div__09f24__1mboc review-pseudo-input__09f24__38nDi border-color--default__09f24__1eOdn"
              role="presentation"
            >
              <div class="lemon--div__09f24__1mboc arrange__09f24__2v3uJ layout-stack-small__09f24__2GcmG vertical-align-baseline__09f24__3QGj0 u-space-b3 border-color--default__09f24__1eOdn">
                <div class="lemon--div__09f24__1mboc arrange-unit__09f24__3IxLD arrange-unit-fill__09f24__1v_h4 border-color--default__09f24__1eOdn">
                  <fieldset class="lemon--fieldset__09f24__27qjf rating-selector__09f24__3XM1-">
                    <ul
                      :class="getRateStarClassName()"
                      role="radiogroup"
                      aria-label="Rating"
                    >
                      <li
                        class="lemon--li__09f24__1r9wz star__09f24__1h_Kk"
                      >
                        <div
                          class="lemon--div__09f24__1mboc border-color--default__09f24__1eOdn"
                          @click="()=>{onStarValueChanged(1)}"
                        >
                          <input
                            type="radio"
                            name="rating"
                            value="1"
                            aria-labelledby="rating-input-label-426e0a98-0d76-4bb1-a39d-f942bd4500ed"
                            aria-describedby="rating-input-description-9fe8eaa7-beaa-4c34-9e78-e50d3395e6c7"
                            class="input__09f24__2JSL7 input__09f24__3NS4F"
                            placeholder=" "
                          >
                        </div>
                        <div
                          id="rating-input-label-426e0a98-0d76-4bb1-a39d-f942bd4500ed"
                          class="lemon--div__09f24__1mboc label__09f24__2KM4r border-color--default__09f24__1eOdn"
                        >
                          1 star rating
                        </div>
                        <div
                          id="rating-input-description-9fe8eaa7-beaa-4c34-9e78-e50d3395e6c7"
                          class="lemon--div__09f24__1mboc label__09f24__2KM4r border-color--default__09f24__1eOdn"
                        >
                          Eek!
                          Methinks not.
                        </div>
                      </li>
                      <li
                        class="lemon--li__09f24__1r9wz star__09f24__1h_Kk"
                        @click="()=>{onStarValueChanged(2)}"
                      >
                        <div class="lemon--div__09f24__1mboc border-color--default__09f24__1eOdn">
                          <input
                            type="radio"
                            name="rating"
                            value="2"
                            aria-labelledby="rating-input-label-0d3c655a-12b2-4b51-a36f-f91f86b21f75"
                            aria-describedby="rating-input-description-1a1d332b-79ad-411f-a4e5-61b6676bdd9a"
                            class="input__09f24__2JSL7 input__09f24__3NS4F"
                            placeholder=" "
                          >
                        </div>
                        <div
                          id="rating-input-label-0d3c655a-12b2-4b51-a36f-f91f86b21f75"
                          class="lemon--div__09f24__1mboc label__09f24__2KM4r border-color--default__09f24__1eOdn"
                        >
                          2 star rating
                        </div>
                        <div
                          id="rating-input-description-1a1d332b-79ad-411f-a4e5-61b6676bdd9a"
                          class="lemon--div__09f24__1mboc label__09f24__2KM4r border-color--default__09f24__1eOdn"
                        >
                          Meh. I've
                          experienced better.
                        </div>
                      </li>
                      <li
                        class="lemon--li__09f24__1r9wz star__09f24__1h_Kk"
                        @click="()=>{onStarValueChanged(3)}"
                      >
                        <div class="lemon--div__09f24__1mboc border-color--default__09f24__1eOdn">
                          <input
                            type="radio"
                            name="rating"
                            value="3"
                            aria-labelledby="rating-input-label-dd2aba39-3cb0-4bb1-a860-61db00050632"
                            aria-describedby="rating-input-description-38844259-577a-4f3e-8dfe-70090660664e"
                            class="input__09f24__2JSL7 input__09f24__3NS4F"
                            placeholder=" "
                          >
                        </div>
                        <div
                          id="rating-input-label-dd2aba39-3cb0-4bb1-a860-61db00050632"
                          class="lemon--div__09f24__1mboc label__09f24__2KM4r border-color--default__09f24__1eOdn"
                        >
                          3 star rating
                        </div>
                        <div
                          id="rating-input-description-38844259-577a-4f3e-8dfe-70090660664e"
                          class="lemon--div__09f24__1mboc label__09f24__2KM4r border-color--default__09f24__1eOdn"
                        >
                          A-OK.
                        </div>
                      </li>
                      <li
                        class="lemon--li__09f24__1r9wz star__09f24__1h_Kk"
                        @click="()=>{onStarValueChanged(4)}"
                      >
                        <div class="lemon--div__09f24__1mboc border-color--default__09f24__1eOdn">
                          <input
                            type="radio"
                            name="rating"
                            value="4"
                            aria-labelledby="rating-input-label-cf2fd2c2-1e45-4c54-8747-b5bf1d00b0f0"
                            aria-describedby="rating-input-description-0692ffff-d3d0-4a47-85ef-74a70639e07a"
                            class="input__09f24__2JSL7 input__09f24__3NS4F"
                            placeholder=" "
                          >
                        </div>
                        <div
                          id="rating-input-label-cf2fd2c2-1e45-4c54-8747-b5bf1d00b0f0"
                          class="lemon--div__09f24__1mboc label__09f24__2KM4r border-color--default__09f24__1eOdn"
                        >
                          4 star rating
                        </div>
                        <div
                          id="rating-input-description-0692ffff-d3d0-4a47-85ef-74a70639e07a"
                          class="lemon--div__09f24__1mboc label__09f24__2KM4r border-color--default__09f24__1eOdn"
                        >
                          Yay! I'm a
                          fan.
                        </div>
                      </li>
                      <li
                        class="lemon--li__09f24__1r9wz star__09f24__1h_Kk"
                        @click="()=>{onStarValueChanged(5)}"
                      >
                        <div class="lemon--div__09f24__1mboc border-color--default__09f24__1eOdn">
                          <input
                            type="radio"
                            name="rating"
                            value="5"
                            aria-labelledby="rating-input-label-6db6e2bd-b894-4220-b5c2-24a3ec465205"
                            aria-describedby="rating-input-description-198e89fe-fc71-4d8f-ada7-7abb07fe42b4"
                            class="input__09f24__2JSL7 input__09f24__3NS4F"
                            placeholder=" "
                          >
                        </div>
                        <div
                          id="rating-input-label-6db6e2bd-b894-4220-b5c2-24a3ec465205"
                          class="lemon--div__09f24__1mboc label__09f24__2KM4r border-color--default__09f24__1eOdn"
                        >
                          5 star rating
                        </div>
                        <div
                          id="rating-input-description-198e89fe-fc71-4d8f-ada7-7abb07fe42b4"
                          class="lemon--div__09f24__1mboc label__09f24__2KM4r border-color--default__09f24__1eOdn"
                        >
                          Woohoo! As
                          good as it gets!
                        </div>
                      </li>
                    </ul>
                    <span
                      class="lemon--span__09f24__3997G description__09f24__1ChtL display--inline__09f24__EhyFv border-color--default__09f24__1eOdn"
                      aria-hidden="true"
                    >
                      <p
                        class="lemon--p__09f24__3Qnnj text__09f24__1RhSS description-text__09f24__2gwqD text-color--normal__09f24__3mwlT text-align--left__09f24__ceIWW"
                      >Select your rating</p>
                    </span>
                  </fieldset>
                </div>
                <div class="lemon--div__09f24__1mboc autosave-status-selenium arrange-unit__09f24__3IxLD border-color--default__09f24__1eOdn nowrap__09f24__29i9N">
                  <p
                    class="lemon--p__09f24__3Qnnj text__09f24__1RhSS text-color--subtle__09f24__2VYkF text-align--left__09f24__ceIWW"
                  ></p>
                </div>
              </div>
              <textarea
                v-model="note"
                class="review_input__09f24__22ELB"
                placeholder="This spot is serving meal kits, as well as offering delivery. I’m so glad! Of course nothing beats the in-person experience, but delivery is a great second option right now. The food was a little cold, but I understand this is a new operation for them..."
                maxlength="5000"
                style="height: 100px;"
              />

              <div class="lemon--div__09f24__1mboc alert-encouragement-wrapper__09f24__1VGlU border-color--default__09f24__1eOdn">
                <span>
                  <p
                    class="lemon--p__09f24__3Qnnj text__09f24__1RhSS text-color--normal__09f24__3mwlT text-align--left__09f24__ceIWW appear-active__09f24__3tqtJ"></p>
                  <div
                    class="lemon--div__09f24__1mboc alert-container__09f24__1qUM5 border-color--default__09f24__1eOdn">
                    {{ alertMessage }}
                  </div>
                </span>
              </div>
            </div>
            <div class="lemon--div__09f24__1mboc display--inline-block__09f24__3L1EB u-space-t4 u-padding-b6 border-color--default__09f24__1eOdn">
              <div class="lemon--div__09f24__1mboc writeareview-footer__09f24__16NL3 border-color--default__09f24__1eOdn">
                <button
                  class="button__09f24__x6eud large__09f24__1sUPW primary__09f24__APzmn post-button__09f24__3gJSl"
                  style="--mousedown-x:0px;--mousedown-y:0px;--button-width:0px"
                  @click="onSaveBtnClick"
                >
                  <div class="lemon--div__09f24__1mboc button-content__09f24__2pi7R border-color--default__09f24__1eOdn">
                    <span
                      class="lemon--span__09f24__3997G text__09f24__1RhSS button-content-text__09f24__2MxzI text-color--inherit__09f24__GVMzL text-align--center__09f24__3uzgA text-size--inherit__09f24__1CbOX text--truncated__09f24__1gXXn"
                    >
                      <span
                        class="lemon--span__09f24__3997G display--inline__09f24__EhyFv border-color--default__09f24__1eOdn"
                      >
                        <span
                          class="lemon--span__09f24__3997G post-button-text__09f24__2lrws display--inline__09f24__EhyFv border-color--default__09f24__1eOdn"
                          style="color: white;"
                        >Post Review</span>
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
</template>

<script lang="ts" src="./review_form.ts" />
