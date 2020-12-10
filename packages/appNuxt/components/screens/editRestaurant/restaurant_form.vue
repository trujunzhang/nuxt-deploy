<template>
  <div style="margin-right: 20px;">
    <div
      v-if="showAlertMessage"
      class="alert alert-error"
    >
      <p class="alert-message">
        A required field was not filled.
      </p>
    </div>
    <!-- Restaurant thumbnail -->
    <div class="lemon--div__373c0__1mboc arrange-unit__373c0__o3tjT border-color--default__373c0__3-ifU">
      <div class="lemon--div__373c0__1mboc border-color--default__373c0__3-ifU">
        <div class="lemon--div__373c0__1mboc display--inline-block__373c0__1ZKqC margin-r3__373c0__r37sx border-color--default__373c0__3-ifU">
          <div class="lemon--div__373c0__1mboc border-color--default__373c0__3-ifU">
            <div class="lemon--div__373c0__1mboc container__373c0__1sAOA dontTriggerCardClick__373c0__GpqIc container--responsive__373c0__KpQnU border-color--default__373c0__3-ifU">
              <div class="lemon--div__373c0__1mboc container__373c0__3EC6S border-color--default__373c0__3-ifU">
                <div class="lemon--div__373c0__1mboc child__373c0__1DxWZ border-color--default__373c0__3-ifU" style="transition: transform 150ms ease-in-out 0s;">
                  <div class="lemon--div__373c0__1mboc on-click-container border-color--default__373c0__3-ifU">
                    <a
                      class="lemon--a__373c0__IEZFH link__373c0__1G70M photo-box-link__373c0__1YC9Y link-color--blue-dark__373c0__85-Nu link-size--default__373c0__7tls6"
                    ><img
                      v-lazy="getCoverUrl()"
                      height="100%"
                      width="100%"
                      class="lemon--img__373c0__3GQUb photo-box-img__373c0__35y5v"
                    ></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ul>
      <li class="BusinessName">
        <label class="u-nowrap" for="attr_BusinessName">Business Name</label>

        <input
          id="attr_BusinessName"
          v-model="displayName"
          class="text"
          name="BusinessName"
          placeholder="Mel’s Diner"
          type="text"
        >
      </li>

      <li class="biz-edit-description js-biz-description">
        <label class="" for="biz_description">note:</label>
        <textarea
          id="biz_description"
          v-model="note"
          name="description"
        />
        <span class="info-field">&nbsp;</span>
      </li>
    </ul>

    <!-- Photos -->
    <div
      v-if="showCoverSection()"
      class="media-landing js-media-landing"
    >
      <h2>
        Select cover
      </h2>

      <div class="media-landing_gallery photos">
        <ul
          class="photo-box-grid photo-box-grid--highlight photo-box-grid--small clearfix lightbox-media-parent"
        >
          <li
            v-for="(item) in items"
            :key="item.uniqueId"
          >
            <div
              class="photo-box photo-box--interactive"
              @click="onSelectCoverClick(item)"
            >
              <img
                v-lazy="getPhotoUrl(item)"
                class="photo-box-img"
                width="226"
                height="226"
              >

              <a
                style="display: block;position: absolute;top: 0;right: 0;width: 30px;height: 30px;"
              >

                <div
                  v-if="showSelectCoverIcon(item)"
                  class="photo-box_status-icon photo-box_status-icon--success photo-box_status-indicator--success u-pull-right"
                >
                  <span
                    style="width: 24px; height: 24px;"
                    class="icon icon--24-checkmark icon--size-24 icon--inverse icon--fallback-inverted"
                  >
                    <svg role="img" class="icon_svg">
                      <use xlink:href="#24x24_checkmark">
                        <svg id="24x24_checkmark" height="24" viewBox="0 0 24 24" width="24"><path
                          d="M19.698 7.748L9.895 17.994 4.292 12.14a1.07 1.07 0 0 1 0-1.464.96.96 0 0 1 1.4 0l4.203 4.39 8.403-8.782a.96.96 0 0 1 1.4 0c.387.405.387 1.06 0 1.464z"
                        ></path></svg>
                      </use>
                    </svg>
                  </span>
                </div>

              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <div class="form-footer">
      <button
        id="submit-biz-details-changes"
        name="action_submit"
        class="ybtn ybtn--primary"
        style="color: white"
        @click="onSaveBtnClick"
      >
        <span>Submit Changes</span>
      </button>
      <a :href="getDetailRestaurantUrl()">Cancel</a>
    </div>
  </div>
</template>

<script lang="ts" src="./restaurant_form.ts" />
