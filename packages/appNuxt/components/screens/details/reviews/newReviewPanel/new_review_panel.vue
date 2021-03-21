<template>
  <div
    v-if="user"
    class=" margin-b5__373c0__2ErL8 border-color--default__373c0__3-ifU">
    <div
      class=" war-container__373c0__2o39o padding-t3__373c0__1gw9E padding-r3__373c0__57InZ padding-b3__373c0__342DA padding-l3__373c0__1scQ0 border-color--default__373c0__3-ifU shadow--inline__373c0__2099Z"
    >
      <div
        class=" arrange__373c0__2C9bH gutter-3__373c0__nws1y grid__373c0__1Pz7f layout-stack-small__373c0__27wVp vertical-align-middle__373c0__1SDTo border-color--default__373c0__3-ifU"
      >
        <div class=" arrange-unit__373c0__o3tjT arrange-unit-grid-column--6__373c0__iqF-j border-color--default__373c0__3-ifU">
          <!--  User Info -->
          <div
            class=" border-color--default__373c0__3-ifU"
            role="region"
            :aria-label="getUserTitle()"
          >
            <div class=" arrange__373c0__2C9bH gutter-1-5__373c0__2vL-3 vertical-align-middle__373c0__1SDTo border-color--default__373c0__3-ifU">
              <div class=" arrange-unit__373c0__o3tjT border-color--default__373c0__3-ifU">
                <div class=" avatar__373c0__3kiBW border-color--default__373c0__3-ifU">
                  <div class=" on-click-container border-color--default__373c0__3-ifU">
                    <a
                      class=" link__373c0__1G70M photo-box-link__373c0__1YC9Y link-color--blue-dark__373c0__85-Nu link-size--default__373c0__7tls6"
                      :href="getUserProfileUrl()"
                    >
                      <img
                        v-lazy="`${getUserPhotoUrl()}`"
                        class=" photo-box-img__373c0__35y5v"
                        height="64"
                        width="64"
                      >
                    </a>
                  </div>
                </div>
              </div>
              <div class=" arrange-unit__373c0__o3tjT arrange-unit-fill__373c0__3Sfw1 border-color--default__373c0__3-ifU">
                <div class=" user-passport-info border-color--default__373c0__3-ifU">
                  <span
                    class=" text__373c0__2Kxyz fs-block text-color--black-regular__373c0__2vGEn text-align--left__373c0__2XGa- text-weight--bold__373c0__1elNz text-size--large__373c0__3t60B"
                  >
                    <a
                      class=" link__373c0__1G70M link-color--inherit__373c0__3dzpk link-size--inherit__373c0__1VFlE"
                      :href="getUserProfileUrl()"
                    >
                      {{ getUserTitle() }}
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class=" arrange-unit__373c0__o3tjT arrange-unit-grid-column--6__373c0__iqF-j border-color--default__373c0__3-ifU">
          <div class=" margin-b1__373c0__1khoT border-color--default__373c0__3-ifU">
            <fieldset class=" rating-selector__373c0__d5jUP">
              <ul class=" i-stars__373c0__1BRrc i-stars--large-0__373c0__1_3c4 stars__373c0__2xqxb" role="radiogroup" aria-label="Rating">
                <li class=" star__373c0__2Qely">
                  <div class=" css-19sk4h4 display--inline-block__373c0__1ZKqC border-color--default__373c0__3-ifU">
                    <div class=" input-wrapper__373c0__15CgZ border-color--default__373c0__3-ifU" aria-describedby="229650c6-de9f-4b82-a66b-0c4c754131fd">
                      <input
                        name="rating"
                        aria-labelledby="rating-input-label-c91e2b8e-7676-48d8-b0fd-0994ed51d95c"
                        aria-describedby="rating-input-description-eeeebf8e-604d-4aab-b346-9cbe4ff0c1cd"
                        class="input__373c0__1kQwh input__373c0__3qblJ"
                        type="radio"
                        placeholder=" "
                        value="1"
                      >
                      <div class=" custom-input__373c0__3cqNb"></div>
                    </div>
                  </div>
                  <div id="rating-input-label-c91e2b8e-7676-48d8-b0fd-0994ed51d95c" class=" label__373c0__1n8yc border-color--default__373c0__3-ifU">1 star rating</div>
                  <div id="rating-input-description-eeeebf8e-604d-4aab-b346-9cbe4ff0c1cd" class=" label__373c0__1n8yc border-color--default__373c0__3-ifU">
                    Eek! Methinks
                    not.
                  </div>
                </li>
                <li class=" star__373c0__2Qely">
                  <div class=" css-19sk4h4 display--inline-block__373c0__1ZKqC border-color--default__373c0__3-ifU">
                    <div class=" input-wrapper__373c0__15CgZ border-color--default__373c0__3-ifU" aria-describedby="a0a9bab5-101d-4646-b353-a3b56609f9eb">
                      <input
                        name="rating"
                        aria-labelledby="rating-input-label-d593c777-9e6a-4a55-a1d5-1bd4c76f44d3"
                        aria-describedby="rating-input-description-9a1ebc4f-cc22-4dae-bf92-4aa0aefabbc2"
                        class="input__373c0__1kQwh input__373c0__3qblJ"
                        type="radio"
                        placeholder=" "
                        value="2"
                      >
                      <div class=" custom-input__373c0__3cqNb"></div>
                    </div>
                  </div>
                  <div id="rating-input-label-d593c777-9e6a-4a55-a1d5-1bd4c76f44d3" class=" label__373c0__1n8yc border-color--default__373c0__3-ifU">2 star rating</div>
                  <div id="rating-input-description-9a1ebc4f-cc22-4dae-bf92-4aa0aefabbc2" class=" label__373c0__1n8yc border-color--default__373c0__3-ifU">
                    Meh. I've
                    experienced better.
                  </div>
                </li>
                <li class=" star__373c0__2Qely">
                  <div class=" css-19sk4h4 display--inline-block__373c0__1ZKqC border-color--default__373c0__3-ifU">
                    <div class=" input-wrapper__373c0__15CgZ border-color--default__373c0__3-ifU" aria-describedby="1bdc51d5-31f5-4cce-bc65-2a16182c8fd1">
                      <input
                        name="rating"
                        aria-labelledby="rating-input-label-b2538af3-5a74-4608-9e67-6981d9db18a4"
                        aria-describedby="rating-input-description-638ece57-ef5c-4746-8409-71ef46773d30"
                        class="input__373c0__1kQwh input__373c0__3qblJ"
                        type="radio"
                        placeholder=" "
                        value="3"
                      >
                      <div class=" custom-input__373c0__3cqNb"></div>
                    </div>
                  </div>
                  <div id="rating-input-label-b2538af3-5a74-4608-9e67-6981d9db18a4" class=" label__373c0__1n8yc border-color--default__373c0__3-ifU">3 star rating</div>
                  <div id="rating-input-description-638ece57-ef5c-4746-8409-71ef46773d30" class=" label__373c0__1n8yc border-color--default__373c0__3-ifU">A-OK.</div>
                </li>
                <li class=" star__373c0__2Qely">
                  <div class=" css-19sk4h4 display--inline-block__373c0__1ZKqC border-color--default__373c0__3-ifU">
                    <div class=" input-wrapper__373c0__15CgZ border-color--default__373c0__3-ifU" aria-describedby="4c0bab85-3e1e-49e1-b347-72ccc1cf7e20">
                      <input
                        name="rating"
                        aria-labelledby="rating-input-label-0b506528-6cce-4b23-bc31-ee0f62b7b2fb"
                        aria-describedby="rating-input-description-f937ad41-e361-4058-8291-0d8358d36361"
                        class="input__373c0__1kQwh input__373c0__3qblJ"
                        type="radio"
                        placeholder=" "
                        value="4"
                      >
                      <div class=" custom-input__373c0__3cqNb"></div>
                    </div>
                  </div>
                  <div id="rating-input-label-0b506528-6cce-4b23-bc31-ee0f62b7b2fb" class=" label__373c0__1n8yc border-color--default__373c0__3-ifU">4 star rating</div>
                  <div id="rating-input-description-f937ad41-e361-4058-8291-0d8358d36361" class=" label__373c0__1n8yc border-color--default__373c0__3-ifU">
                    Yay! I'm a fan.
                  </div>
                </li>
                <li class=" star__373c0__2Qely">
                  <div class=" css-19sk4h4 display--inline-block__373c0__1ZKqC border-color--default__373c0__3-ifU">
                    <div class=" input-wrapper__373c0__15CgZ border-color--default__373c0__3-ifU" aria-describedby="2d11e9a4-f3a3-4cc1-a8e3-d74021490982">
                      <input
                        name="rating"
                        aria-labelledby="rating-input-label-ab456def-342e-4496-856f-75c23b03afb9"
                        aria-describedby="rating-input-description-bb4d90bd-6d0d-49a9-906f-79a910fbaa84"
                        class="input__373c0__1kQwh input__373c0__3qblJ"
                        type="radio"
                        placeholder=" "
                        value="5"
                      >
                      <div class=" custom-input__373c0__3cqNb"></div>
                    </div>
                  </div>
                  <div id="rating-input-label-ab456def-342e-4496-856f-75c23b03afb9" class=" label__373c0__1n8yc border-color--default__373c0__3-ifU">5 star rating</div>
                  <div id="rating-input-description-bb4d90bd-6d0d-49a9-906f-79a910fbaa84" class=" label__373c0__1n8yc border-color--default__373c0__3-ifU">
                    Woohoo! As good as
                    it gets!
                  </div>
                </li>
              </ul>
            </fieldset>
          </div>
          <a
            class=" link__373c0__1G70M link-color--blue-dark__373c0__85-Nu link-size--default__373c0__7tls6"
            :href="getWriteReviewLink()"
            target=""
            name=""
            rel=""
            role="link"
          >
            <span
              class=" war-link__373c0__6wz9H raw__373c0__3rcx7"
            >Start your review of <strong>
              {{ getTitle() }}
            </strong>.</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./new_review_panel.ts" />
