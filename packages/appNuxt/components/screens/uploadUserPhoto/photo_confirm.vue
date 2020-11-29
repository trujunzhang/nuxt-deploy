<template>
  <div class="clearfix layout-block layout-full">
    <div class="column column-alpha ">
      <div class="upload upload--photos js-html5-uploader" style="display: block;">
        <div class="file-drop file-drop--small js-file-drop">
          <div class="file-drop_info">
            <div class="file-drop_uploading">
              <div class="section-header">
                <div class="section-header_throbber">
                  <h3 class="section-header_text">Uploading...</h3>
                </div>
              </div>
            </div>

            <ul class="upload-previews" style="min-height: 226px;max-width: 226px;">
              <li class="upload-preview photo-box--bordered">
                <div class="photo-box photo-box--interactive">
                  <div
                    class="photo-box-img photo-box--background"
                    style="min-height: 226px;"
                    role="presentation"
                  >
                    <img
                      class="lemon--img__09f24__3GQUb photo-box-img__09f24__3mj0s"
                      style="opacity:100;"
                      :src="image"
                      alt=""
                      height="210"
                      width="210"
                    >
                  </div>
                  <div class="photo-box_status">
                    <div class="media-progress-bar">
                      <div class="media-progress-bar_fill"></div>
                    </div>
                    <div
                      v-if="false"
                      class="photo-box_status-icon photo-box_status-icon--success photo-box_status-indicator--success u-pull-right"
                    >
                      <span
                        style="width: 24px; height: 24px;"
                        class="icon icon--24-checkmark icon--size-24 icon--inverse icon--fallback-inverted"
                      >
                        <svg role="img" class="icon_svg">
                          <use xlink:href="#24x24_checkmark">
                            <svg id="24x24_checkmark" height="24" viewBox="0 0 24 24" width="24"><path d="M19.698 7.748L9.895 17.994 4.292 12.14a1.07 1.07 0 0 1 0-1.464.96.96 0 0 1 1.4 0l4.203 4.39 8.403-8.782a.96.96 0 0 1 1.4 0c.387.405.387 1.06 0 1.464z"></path></svg>
                          </use>
                        </svg>
                      </span>
                    </div>
                    <div
                      v-if="showAlertMessage"
                      class="photo-box_status-icon photo-box_status-indicator--error u-pull-right"
                    >
                      <span
                        style="width: 24px; height: 24px;"
                        class="icon icon--24-exclamation icon--size-24 icon--inverse icon--fallback-inverted"
                      >
                        <svg role="img" class="icon_svg">
                          <use xlink:href="#24x24_exclamation">
                            <svg id="24x24_exclamation" height="24" viewBox="0 0 24 24" width="24"><path d="M12 15a2 2 0 0 1-2-2V4a2 2 0 0 1 4 0v9a2 2 0 0 1-2 2zm0 3a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"></path></svg>
                          </use>
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>

                <div
                  v-if="showAlertMessage"
                  class="upload-preview_info upload-preview_info--error yform-help-inline yform-help-invalid"
                >
                  <div>An error has occured in the upload, please try again later.</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div
          v-if="showAlertMessage"
          class="upload-fail-area"
        >
          Some of your photos were not uploaded successfully.
          <a href="/user_photos/add" class="ybtn ybtn--primary ybtn--small upload-continue-button">Continue</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./photo_confirm.ts" />
