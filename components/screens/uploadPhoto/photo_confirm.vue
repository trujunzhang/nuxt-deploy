<template>
  <div>
    <div class="lemon--div__09f24__1mboc u-space-b3 border-color--default__09f24__1eOdn">
      <div class="lemon--div__09f24__1mboc border-color--default__09f24__1eOdn">
        <div class="lemon--div__09f24__1mboc border-color--default__09f24__1eOdn">
          <div class="lemon--div__09f24__1mboc display--none__09f24__3UPdI border-color--default__09f24__1eOdn"><input type="file" multiple="" accept=".tiff,.bmp,.png,.jpeg,.jpg"></div>
          <div class="lemon--div__09f24__1mboc border-color--default__09f24__1eOdn">
            <div class="lemon--div__09f24__1mboc u-padding-t4 u-padding-b2 border-color--default__09f24__1eOdn">
              <div class="lemon--div__09f24__1mboc display--inline-block__09f24__3L1EB responsive-hidden-small u-space-r6 u-space-b2 u-space-l6 border-color--default__09f24__1eOdn">
                <h2
                  class="lemon--h2__09f24__hjA2W heading--h2__09f24__1Jzlg alternate__09f24__1KjZF"
                >
                  Almost done! Write a description and upload.
                </h2>
              </div>
            </div>
            <div class="lemon--div__09f24__1mboc photo-list-wrapper__09f24__3z6AW photo-list-wrapper-stacked__09f24__1-E-I border-color--default__09f24__1eOdn overflow--scrolly__09f24__1akr-">
              <div class="lemon--div__09f24__1mboc arrange__09f24__2v3uJ gutter-6__09f24__2Egju layout-wrap__09f24__C__Jd layout-4-units__09f24__2kI_0 border-color--default__09f24__1eOdn">
                <div class="lemon--div__09f24__1mboc photo-list-arrange-item__09f24__1c-DT arrange-unit__09f24__3IxLD border-color--default__09f24__1eOdn">
                  <div class="lemon--div__09f24__1mboc border-color--default__09f24__1eOdn">
                    <div class="lemon--div__09f24__1mboc border-color--default__09f24__1eOdn">
                      <div class="lemon--div__09f24__1mboc spinner-container__09f24__vc1Pp spinner-container__09f24__iXNyM border-color--default__09f24__1eOdn" aria-live="polite" role="region">
                        <div
                          class="lemon--div__09f24__1mboc on-click-container photo-box__09f24__30Ue6 photo-box-interactive__09f24__D6iPx photo-box-background__09f24__2QSLp border-color--default__09f24__1eOdn"
                        >
                          <img
                            class="lemon--img__09f24__3GQUb photo-box-img__09f24__3mj0s"
                            style="opacity:100;"
                            :src="image"
                            alt=""
                            height="210"
                            width="210"
                          >
                          <div class="lemon--div__09f24__1mboc photo-box-actions__09f24__3LTkq photo-box-actions-right__09f24__3OEzD border-color--default__09f24__1eOdn">
                            <div class="lemon--div__09f24__1mboc border-color--default__09f24__1eOdn">
                              <span
                                class="lemon--span__09f24__3997G type--media-minimal__09f24__115O9 display--inline__09f24__EhyFv border-color--default__09f24__1eOdn"
                              ><a
                                class="lemon--a__09f24__IEZFH link__09f24__1MGLa link--media__09f24__sRBFb link-color--blue-dark__09f24__tK18E link-size--default__09f24__QvrjA"
                                href=""
                                target=""
                                rel=""
                                role="button"
                              ><div class="lemon--div__09f24__1mboc action-link-icon-wrapper__09f24__14UwF border-color--default__09f24__1eOdn"><div
                                class="lemon--div__09f24__1mboc border-color--default__09f24__1eOdn"
                              ><span
                                class="lemon--span__09f24__3997G icon__09f24__ehCWV icon--24-trash icon--currentColor__09f24__x-sG2"
                                aria-hidden="false"
                                aria-label="Delete"
                                style="width: 24px; height: 24px;"
                              ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="icon_svg"><path
                                d="M5 7V5a1 1 0 0 1 1-1h4V3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1h4a1 1 0 0 1 1 1v2H5zm13 12a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V8h12v11zm-8-8H9v8h1v-8zm5 0h-1v8h1v-8z"
                              ></path></svg></span></div></div></a></span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="lemon--div__09f24__1mboc caption-container__09f24__36gwC u-space-t3 u-sm-space-t1 border-color--default__09f24__1eOdn">
                      <div class="lemon--div__09f24__1mboc border-color--default__09f24__1eOdn">
                        <label class="lemon--label__09f24__2BjWI label__09f24__23EB0" for="textarea-state-idle"><span
                          class="lemon--span__09f24__3997G text__09f24__1RhSS text-color--normal__09f24__3mwlT text-align--left__09f24__ceIWW text-weight--bold__09f24__37wBe"
                        >Caption</span><span
                          class="lemon--span__09f24__3997G help-text--inline__09f24__25GG1 display--inline__09f24__EhyFv border-color--default__09f24__1eOdn"
                        ><span
                          class="lemon--span__09f24__3997G text__09f24__1RhSS text-color--subtle__09f24__2VYkF text-align--left__09f24__ceIWW text-size--small__09f24__I8np9"
                        >Optional</span></span></label>
                        <div class="lemon--div__09f24__1mboc textarea-wrapper__09f24__38YT8 border-color--default__09f24__1eOdn">
                          <textarea
                            v-model="note"
                            id="textarea-state-idle"
                            rows="2"
                            maxlength="140"
                            class="textarea__09f24__3F7d7 textarea-resize--vertical__09f24__1BRXb no-margin__09f24__3aFrL"
                            placeholder="Captions help others identify what's in the photo."
                          ></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="lemon--div__09f24__1mboc responsive border-color--default__09f24__1eOdn">
              <div class="lemon--div__09f24__1mboc responsive-hidden-small border-color--default__09f24__1eOdn">
                <div
                  class="lemon--div__09f24__1mboc u-padding-t4 u-padding-r6 u-padding-b4 u-padding-l6 border--top__09f24__8W8ca border-color--default__09f24__1eOdn background-color--white__09f24__3aspp"
                >
                  <div class="lemon--div__09f24__1mboc arrange__09f24__2v3uJ vertical-align-middle__09f24__1tXIr border-color--default__09f24__1eOdn">
                    <div class="lemon--div__09f24__1mboc arrange-unit__09f24__3IxLD arrange-unit-fill__09f24__1v_h4 border-color--default__09f24__1eOdn">
                      <div class="lemon--div__09f24__1mboc display--inline-block__09f24__3L1EB u-space-r1 border-color--default__09f24__1eOdn">
                        <p class="lemon--p__09f24__3Qnnj text__09f24__1RhSS text-color--normal__09f24__3mwlT text-align--left__09f24__ceIWW">
                          <button
                            @click="onToggleFormStep"
                            class="link__09f24__3OPFW"
                            type="submit"
                            value="submit"
                            style="--mousedown-x:0px; --mousedown-y:0px; --button-width:0px;"
                          >
                            <div class="lemon--div__09f24__1mboc button-content__09f24__2pi7R border-color--default__09f24__1eOdn">
                              <span
                                class="lemon--span__09f24__3997G text__09f24__1RhSS button-content-text__09f24__2MxzI text-color--inherit__09f24__GVMzL text-align--center__09f24__3uzgA text-size--inherit__09f24__1CbOX text--truncated__09f24__1gXXn"
                                style="color: #0073bb;font-size: 14px;"
                              >Browse</span>
                            </div>
                          </button>
                        </p>
                      </div>
                      <span class="lemon--span__09f24__3997G text__09f24__1RhSS text-color--normal__09f24__3mwlT text-align--left__09f24__ceIWW">or drag and drop more photos</span>
                    </div>
                    <div class="lemon--div__09f24__1mboc arrange-unit__09f24__3IxLD border-color--default__09f24__1eOdn">
                      <div class="lemon--div__09f24__1mboc arrange__09f24__2v3uJ vertical-align-middle__09f24__1tXIr border-color--default__09f24__1eOdn">
                        <div class="lemon--div__09f24__1mboc arrange-unit__09f24__3IxLD border-color--default__09f24__1eOdn"></div>
                        <div class="lemon--div__09f24__1mboc arrange-unit__09f24__3IxLD border-color--default__09f24__1eOdn">
                          <button class="button__09f24__x6eud primary__09f24__APzmn" type="button" style="--mousedown-x:0px; --mousedown-y:0px; --button-width:0px;">
                            <div class="lemon--div__09f24__1mboc button-content__09f24__2pi7R border-color--default__09f24__1eOdn">
                              <span
                                @click="onUploadClick"
                                class="lemon--span__09f24__3997G text__09f24__1RhSS button-content-text__09f24__2MxzI text-color--inherit__09f24__GVMzL text-align--center__09f24__3uzgA text-size--inherit__09f24__1CbOX text--truncated__09f24__1gXXn"
                                style="color: white;"
                              >Upload</span>
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="lemon--div__09f24__1mboc display--none__09f24__3UPdI responsive-small-display-block border-color--default__09f24__1eOdn">
                <div
                  class="lemon--div__09f24__1mboc u-padding-t4 u-padding-r3 u-padding-b4 u-padding-l3 border-color--default__09f24__1eOdn background-color--white__09f24__3aspp text-align--center__09f24__1P1jK"
                >
                  <button class="button__09f24__x6eud primary__09f24__APzmn full__09f24__1PYEI" type="button" style="--mousedown-x:0px; --mousedown-y:0px; --button-width:0px;">
                    <div class="lemon--div__09f24__1mboc button-content__09f24__2pi7R border-color--default__09f24__1eOdn">
                      <span
                        class="lemon--span__09f24__3997G text__09f24__1RhSS button-content-text__09f24__2MxzI text-color--inherit__09f24__GVMzL text-align--center__09f24__3uzgA text-size--inherit__09f24__1CbOX text--truncated__09f24__1gXXn"
                      >Upload</span>
                    </div>
                  </button>
                  <div class="lemon--div__09f24__1mboc u-padding-t3 border-color--default__09f24__1eOdn">
                    <button class="button__09f24__x6eud secondary__09f24__3FJPl full__09f24__1PYEI" type="button" style="--mousedown-x:0px; --mousedown-y:0px; --button-width:0px;">
                      <div class="lemon--div__09f24__1mboc button-content__09f24__2pi7R border-color--default__09f24__1eOdn">
                        <span
                          class="lemon--span__09f24__3997G text__09f24__1RhSS button-content-text__09f24__2MxzI text-color--inherit__09f24__GVMzL text-align--center__09f24__3uzgA text-size--inherit__09f24__1CbOX text--truncated__09f24__1gXXn"
                        >Add More</span>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="lemon--div__09f24__1mboc u-padding-t4 u-padding-r6 u-padding-b4 u-padding-l6 border-color--default__09f24__1eOdn text-align--center__09f24__1P1jK"></div>
  </div>
</template>

<script lang="ts" src="./photo_confirm.ts"/>
