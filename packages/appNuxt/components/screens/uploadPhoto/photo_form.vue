<template>
  <div>
    <div class="lemon--div__09f24__1mboc u-space-b3 border-color--default__09f24__1eOdn">
      <div class="lemon--div__09f24__1mboc border-color--default__09f24__1eOdn">
        <div class="lemon--div__09f24__1mboc border-color--default__09f24__1eOdn">
          <div class="lemon--div__09f24__1mboc display--none__09f24__3UPdI border-color--default__09f24__1eOdn"><input type="file" multiple="" accept=".tiff,.bmp,.png,.jpeg,.jpg"></div>
          <div
            class="lemon--div__09f24__1mboc drag-and-drop-area__09f24__3L-Qs responsive-small-display-block responsive-medium-display-block u-space-t6 u-space-r6 u-space-b6 u-space-l6 u-sm-space-t6 u-sm-space-r3 u-sm-space-b6 u-sm-space-l3 u-padding-t6 u-padding-r6 u-padding-b6 u-padding-l6 border--top__09f24__8W8ca border--right__09f24__1u7Gt border--bottom__09f24__xdij8 border--left__09f24__rwKIa border-color--default__09f24__1eOdn text-align--center__09f24__1P1jK"
          >
            <div
              class="lemon--div__09f24__1mboc arrange__09f24__2v3uJ vertical-align-middle__09f24__1tXIr border-color--default__09f24__1eOdn"
            >
              <div class="lemon--div__09f24__1mboc arrange-unit__09f24__3IxLD border-color--default__09f24__1eOdn">
                <img
                  class="lemon--img__09f24__3GQUb illustration-img__09f24__36U5X"
                  src="~/assets/images/illustration_drag_n_drop.yji-559d678b096be4c3c8e93f0724b76e9a.png"
                >
                <div class="lemon--div__09f24__1mboc display--none__09f24__3UPdI responsive-small-display-block u-space-b3 border-color--default__09f24__1eOdn">
                  <h3
                    class="lemon--h3__09f24__sQmiG heading--h3__09f24__2-flz alternate__09f24__1KjZF"
                  >
                    Select photos to upload
                  </h3>
                </div>
                <div class="lemon--div__09f24__1mboc u-space-b1 border-color--default__09f24__1eOdn">
                  <button class="button__09f24__x6eud primary__09f24__APzmn" style="--mousedown-x:0px;--mousedown-y:0px;--button-width:0px" type="button">
                    <div class="lemon--div__09f24__1mboc button-content__09f24__2pi7R border-color--default__09f24__1eOdn">
                      <span
                        class="lemon--span__09f24__3997G text__09f24__1RhSS button-content-text__09f24__2MxzI text-color--inherit__09f24__GVMzL text-align--center__09f24__3uzgA text-size--inherit__09f24__1CbOX text--truncated__09f24__1gXXn"
                        style="color: white;"
                        @click="$refs.file.click()"
                      >
                        Browse Files

                      </span>
                      <input
                        ref="file"
                        style="width: 100%; height: 100%;display: none;"
                        title="your text"
                        name="files"
                        type="file"
                        accept="image/jpg,image/jpeg,image/png,image/gif"
                        @change="onFileChanged"
                      >
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="lemon--div__09f24__1mboc display--none__09f24__3UPdI responsive-hidden-small responsive-hidden-medium u-space-b1 border-color--default__09f24__1eOdn">
            <button
              class="button__09f24__x6eud primary__09f24__APzmn full__09f24__1PYEI button--icon__09f24__2DFsr upload-photo-responsive"
              style="--mousedown-x:0px;--mousedown-y:0px;--button-width:0px"
              type="button"
            >
              <div class="lemon--div__09f24__1mboc button-content__09f24__2pi7R border-color--default__09f24__1eOdn">
                <span
                  class="lemon--span__09f24__3997G display--inline__09f24__EhyFv u-space-r1 border-color--default__09f24__1eOdn"
                ><span
                  class="lemon--span__09f24__3997G icon__09f24__ehCWV icon--18-add-photo icon--currentColor__09f24__x-sG2"
                  aria-hidden="true"
                  style="width:18px;height:18px"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  class="icon_svg"
                ><path
                  d="M15 15H3a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2h2a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2zM9 4.75a4.25 4.25 0 1 0 0 8.5 4.25 4.25 0 0 0 0-8.5zM11 10h-1v1a1 1 0 0 1-2 0v-1H7a1 1 0 0 1 0-2h1V7a1 1 0 0 1 2 0v1h1a1 1 0 0 1 0 2z"
                ></path></svg></span></span><span
                  class="lemon--span__09f24__3997G text__09f24__1RhSS button-content-text__09f24__2MxzI text-color--inherit__09f24__GVMzL text-align--center__09f24__3uzgA text-size--inherit__09f24__1CbOX text--truncated__09f24__1gXXn"
                >Upload photos</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="lemon--div__09f24__1mboc u-padding-t4 u-padding-r6 u-padding-b4 u-padding-l6 border-color--default__09f24__1eOdn text-align--center__09f24__1P1jK">
      <div class="lemon--div__09f24__1mboc test-image-container arrange__09f24__2v3uJ layout-equal__09f24__kONX- border-color--default__09f24__1eOdn">
        <div class="lemon--div__09f24__1mboc arrange-unit__09f24__3IxLD border-color--default__09f24__1eOdn">
          <img
            class="lemon--img__09f24__3GQUb"
            src="https://s3-media0.fl.yelpcdn.com/assets/public/shaky.yji-882475dcd052c9976f4eeb998b7d897d.png"
          >
          <div class="lemon--div__09f24__1mboc u-padding-t1 u-padding-r4 u-padding-b6 u-padding-l4 border-color--default__09f24__1eOdn">
            <p
              class="lemon--p__09f24__3Qnnj text__09f24__1RhSS text-color--subtle__09f24__2VYkF text-align--center__09f24__3uzgA"
            >
              Refrain from posting shaky or out of focus photos.
            </p>
          </div>
        </div>
        <div class="lemon--div__09f24__1mboc arrange-unit__09f24__3IxLD border-color--default__09f24__1eOdn">
          <img
            class="lemon--img__09f24__3GQUb"
            src="https://s3-media0.fl.yelpcdn.com/assets/public/camera-flash.yji-fa6ae3a94ca7b53b83d80faaee285a9a.png"
          >
          <div class="lemon--div__09f24__1mboc u-padding-t1 u-padding-r4 u-padding-b6 u-padding-l4 border-color--default__09f24__1eOdn">
            <p
              class="lemon--p__09f24__3Qnnj text__09f24__1RhSS text-color--subtle__09f24__2VYkF text-align--center__09f24__3uzgA"
            >
              Your photos should be well lit and bright. Don’t be afraid to use the
              flash on your camera.
            </p>
          </div>
        </div>
        <div class="lemon--div__09f24__1mboc arrange-unit__09f24__3IxLD border-color--default__09f24__1eOdn">
          <img
            class="lemon--img__09f24__3GQUb"
            src="https://s3-media0.fl.yelpcdn.com/assets/public/filters.yji-5ac6cb0f2678272568a2a313cdeaf74e.png"
          >
          <div class="lemon--div__09f24__1mboc u-padding-t1 u-padding-r4 u-padding-b6 u-padding-l4 border-color--default__09f24__1eOdn">
            <p
              class="lemon--p__09f24__3Qnnj text__09f24__1RhSS text-color--subtle__09f24__2VYkF text-align--center__09f24__3uzgA"
            >
              If you’re applying filters, don’t overdo them. Subtlety is key.
            </p>
          </div>
        </div>
        <div class="lemon--div__09f24__1mboc arrange-unit__09f24__3IxLD border-color--default__09f24__1eOdn">
          <img
            class="lemon--img__09f24__3GQUb"
            src="https://s3-media0.fl.yelpcdn.com/assets/public/biz-photos.yji-babf51178afb1756c61c1cc92cd52abf.png"
          >
          <div class="lemon--div__09f24__1mboc u-padding-t1 u-padding-r4 u-padding-b6 u-padding-l4 border-color--default__09f24__1eOdn">
            <p
              class="lemon--p__09f24__3Qnnj text__09f24__1RhSS text-color--subtle__09f24__2VYkF text-align--center__09f24__3uzgA"
            >
              Lastly, please only post photos of the business.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./photo_form.ts" />
