<template>
  <div class="clearfix layout-block layout-full">
    <div class="column column-alpha ">
      <div class="upload upload--photos js-html5-uploader hidden" data-component-bound="true" style="display: block;">
        <div class="file-drop file-drop--small js-file-drop" data-component-bound="true">
          <div class="file-drop_area">
            <div class="file-drop_area-inner">
              <h1>Drag and drop your photos here</h1>
              <fieldset class="hr-line" aria-hidden="true">
                <legend align="center">OR</legend>
              </fieldset>
              <div class="file-browser js-file-browser" data-component-bound="true">
                <input class="file-browser_input hidden" type="file" multiple="" aria-label="Select A File To Upload">
                <button
                  type="submit"
                  value="submit"
                  class="ybtn ybtn--primary file-browser_button"
                  style="color: white;"
                  @click="$refs.file.click()"
                >
                  <span>Browse Files</span>
                  <input
                    ref="file"
                    style="width: 100%; height: 100%;display: none;"
                    title="your text"
                    name="files"
                    type="file"
                    accept="image/jpg,image/jpeg,image/png,image/gif"
                    @change="onFileChanged"
                  >
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./photo_form.ts" />
