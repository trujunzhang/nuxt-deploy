<template>
  <div class=" content-inner__09f24__XokAs border-color--default__09f24__R1nRO">
    <!--  Header  -->
    <div class=" header__09f24__4Twcs border-color--default__09f24__R1nRO">
      <div class=" biz-header-title-container__09f24__zLyFq border-color--default__09f24__R1nRO">
        <a
          class=" link__09f24__1kwXV biz-header-title-link__09f24__1V84d link-color--blue-dark__09f24__2DRa0 link-size--default__09f24__3xWLF"
          :href="getRelatedDetailUrl()"
          target="_blank"
        >
          <h2 class=" heading--h2__09f24__VYQyn">
            {{ relatedModel.displayName }}
          </h2>
        </a>
      </div>
    </div>
    <!--  Form  -->
    <div class=" border-color--default__09f24__R1nRO">
      <div class="">
        <div class=" review-pseudo-input__09f24__2-Ehl border-color--default__09f24__R1nRO" role="presentation">
          <div
            class=" arrange__09f24__AiSIM gutter-auto__09f24__2WJTk layout-stack-small__09f24__Xn9Bk vertical-align-baseline__09f24__2xmCi margin-b3__09f24__1DQ9x margin-sm-b1__09f24__1Jpem border-color--default__09f24__R1nRO"
          >
            <div class=" arrange-unit__09f24__1gZC1 arrange-unit-fill__09f24__O6JFU border-color--default__09f24__R1nRO">
              <fieldset class=" rating-selector__09f24__3ghs1">
                <ul
                  :class="getRateStarClassName()"
                  role="radiogroup"
                  aria-label="Rating"
                >
                  <li class=" star__09f24__3iOZS">
                    <div
                      class=" input-wrapper__09f24__1MSFc border-color--default__09f24__R1nRO"
                      @click="()=>{onStarValueChanged(1)}"
                    >
                      <input
                        name="rating"
                        aria-labelledby="rating-input-label-0a7ae87c-52bb-4f9f-82c5-7cdb07c3158c"
                        aria-describedby="rating-input-description-b93635f6-0e8a-46c7-adca-539be36529a7"
                        class="input__09f24__30UUZ input__09f24__XYjJt"
                        type="radio"
                        placeholder=" "
                        value="1"
                      >
                      <div class=" custom-input__09f24__RE3Tv"></div>
                    </div>
                    <div id="rating-input-label-0a7ae87c-52bb-4f9f-82c5-7cdb07c3158c" class=" label__09f24__bNBrE border-color--default__09f24__R1nRO">1 star rating</div>
                    <div id="rating-input-description-b93635f6-0e8a-46c7-adca-539be36529a7" class=" label__09f24__bNBrE border-color--default__09f24__R1nRO">Not good</div>
                  </li>
                  <li class=" star__09f24__3iOZS">
                    <div
                      class=" input-wrapper__09f24__1MSFc border-color--default__09f24__R1nRO"
                      @click="()=>{onStarValueChanged(2)}"
                    >
                      <input
                        name="rating"
                        aria-labelledby="rating-input-label-088076c6-3c96-4f53-95bd-719d536fe111"
                        aria-describedby="rating-input-description-92bcdb78-9d53-4f50-bc8a-b6d3099b0843"
                        class="input__09f24__30UUZ input__09f24__XYjJt"
                        type="radio"
                        placeholder=" "
                        value="2"
                      >
                      <div class=" custom-input__09f24__RE3Tv"></div>
                    </div>
                    <div id="rating-input-label-088076c6-3c96-4f53-95bd-719d536fe111" class=" label__09f24__bNBrE border-color--default__09f24__R1nRO">2 star rating</div>
                    <div id="rating-input-description-92bcdb78-9d53-4f50-bc8a-b6d3099b0843" class=" label__09f24__bNBrE border-color--default__09f24__R1nRO">Could’ve been better</div>
                  </li>
                  <li class=" star__09f24__3iOZS">
                    <div
                      class=" input-wrapper__09f24__1MSFc border-color--default__09f24__R1nRO"
                      @click="()=>{onStarValueChanged(3)}"
                    >
                      <input
                        name="rating"
                        aria-labelledby="rating-input-label-9362f7f2-230b-4182-a722-50e99a59b61b"
                        aria-describedby="rating-input-description-b9ec4d6b-e86e-4dba-9215-fc4767c49b32"
                        class="input__09f24__30UUZ input__09f24__XYjJt"
                        type="radio"
                        placeholder=" "
                        value="3"
                      >
                      <div class=" custom-input__09f24__RE3Tv"></div>
                    </div>
                    <div id="rating-input-label-9362f7f2-230b-4182-a722-50e99a59b61b" class=" label__09f24__bNBrE border-color--default__09f24__R1nRO">3 star rating</div>
                    <div id="rating-input-description-b9ec4d6b-e86e-4dba-9215-fc4767c49b32" class=" label__09f24__bNBrE border-color--default__09f24__R1nRO">OK</div>
                  </li>
                  <li class=" star__09f24__3iOZS">
                    <div
                      class=" input-wrapper__09f24__1MSFc border-color--default__09f24__R1nRO"
                      @click="()=>{onStarValueChanged(4)}"
                    >
                      <input
                        name="rating"
                        aria-labelledby="rating-input-label-b9f95866-b5d1-450f-9b85-0d81e3e960fe"
                        aria-describedby="rating-input-description-fa859e73-7b05-4649-bba9-d064e114ad01"
                        class="input__09f24__30UUZ input__09f24__XYjJt"
                        type="radio"
                        placeholder=" "
                        value="4"
                      >
                      <div class=" custom-input__09f24__RE3Tv"></div>
                    </div>
                    <div id="rating-input-label-b9f95866-b5d1-450f-9b85-0d81e3e960fe" class=" label__09f24__bNBrE border-color--default__09f24__R1nRO">4 star rating</div>
                    <div id="rating-input-description-fa859e73-7b05-4649-bba9-d064e114ad01" class=" label__09f24__bNBrE border-color--default__09f24__R1nRO">Good</div>
                  </li>
                  <li class=" star__09f24__3iOZS">
                    <div
                      class=" input-wrapper__09f24__1MSFc border-color--default__09f24__R1nRO"
                      @click="()=>{onStarValueChanged(5)}"
                    >
                      <input
                        name="rating"
                        aria-labelledby="rating-input-label-0a20b74a-22a2-476f-be90-6d21bc58a372"
                        aria-describedby="rating-input-description-a4618e56-caab-4fd6-83cf-5bef91eac588"
                        class="input__09f24__30UUZ input__09f24__XYjJt"
                        type="radio"
                        placeholder=" "
                        value="5"
                      >
                      <div class=" custom-input__09f24__RE3Tv"></div>
                    </div>
                    <div id="rating-input-label-0a20b74a-22a2-476f-be90-6d21bc58a372" class=" label__09f24__bNBrE border-color--default__09f24__R1nRO">5 star rating</div>
                    <div id="rating-input-description-a4618e56-caab-4fd6-83cf-5bef91eac588" class=" label__09f24__bNBrE border-color--default__09f24__R1nRO">Great</div>
                  </li>
                </ul>
                <div class=" description__09f24__2ML01 border-color--default__09f24__R1nRO" aria-hidden="true">
                  <p
                    class=" text__09f24__2tZKC description-text--zero__09f24__1eZGS text-color--normal__09f24__3oebo text-align--left__09f24__3Drs0"
                  >
                    Select your rating
                  </p>
                </div>
              </fieldset>
            </div>
            <div class=" draft-auto-save-status__09f24__1BrZt arrange-unit__09f24__1gZC1 border-color--default__09f24__R1nRO nowrap__09f24__26e9i">
              <p
                class=" text__09f24__2tZKC text-color--inherit__09f24__1jgBv text-align--left__09f24__3Drs0"
              ></p>
            </div>
          </div>
          <textarea
            v-model="note"
            class="review_input__09f24__3zAWq"
            maxlength="5000"
            style="height: 88px;"
            placeholder="This spot is serving meal kits, as well as offering delivery during COVID. I’m so glad! Of course nothing beats the in-person experience, but delivery is a great second option right now. The food was a little cold, but I understand this is a new operation for them..."
          >
          </textarea>
          <div class=" alert-encouragement-wrapper__09f24__2Bt-P border-color--default__09f24__R1nRO">
            <span>
              <p
                class="text__09f24__2tZKC text-color--normal__09f24__3oebo text-align--left__09f24__3Drs0"
              >
                {{ alertMessage }}
              </p>
            </span>
            <div class=" border-color--default__09f24__R1nRO"></div>
          </div>
        </div>
        <div class=" margin-t4__09f24__3d1mz padding-b6__09f24__X0s2J border-color--default__09f24__R1nRO" style="max-width: 200px;">
          <button
            class="button__09f24__1hAjX primary__09f24__LBFK2 full__09f24__3ke2U"
            type="submit"
            value="submit"
            style="--mousedown-x:0px; --mousedown-y:0px; --button-width:0px;"
            @click="onSaveBtnClick"
          >
            <div class=" button-content__09f24__2SF6G border-color--default__09f24__R1nRO">
              <span
                class=" text__09f24__2tZKC button-content-text__09f24__3OonI text-color--inherit__09f24__1jgBv text-align--center__09f24__3NO89 text-weight--semibold__09f24__MTlNc text-size--large__09f24__3-9KJ text--truncated__09f24__2NCmr"
              >Post Review</span>
            </div>
          </button>
        </div>
      </div>
      <div></div>
    </div>
  </div>
</template>

<script lang="ts" src="./review_form.ts" />
