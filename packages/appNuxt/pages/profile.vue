<template>
  <div class="main-content-wrap main-content-wrap--full">
    <div id="super-container" class="content-container">
      <div class="clearfix layout-block layout-n column--responsive account-settings_container">
        <div class="column column-beta column--responsive">
          <div class="account-settings_content">
            <div class="section-header clearfix">
              <h2>Profile</h2>
            </div>

            <div
              v-if="shouldShowUser()"
              class="profile-bio yform yform-vertical-spacing"
            >
              <div class="profile-bio">
                <div class="ysection">
                  <h4>
                    Your Profile Photo
                    <strong>
                      <a
                        :href="getUserAddPhotoUrl()"
                      >(Add/Edit)</a></strong>
                  </h4>

                  <div class="photo-box pb-m">
                    <a
                      class="js-analytics-click"
                      :href="getUserAddPhotoUrl()"
                    >
                      <img
                        class="photo-box-img"
                        :src="getUserPhotoUrl()"
                        width="120"
                        height="120"
                      >
                    </a>
                  </div>
                </div>
                <label for="first_name">First Name</label>

                <span class="help-block">This field is required.</span>
                <input
                  id="first_name"
                  v-model="firstName"
                  maxlength="32"
                  name="first_name"
                  placeholder=""
                  size="30"
                  type="text"
                  style="background-repeat: no-repeat; background-attachment: scroll; background-size: 16px 18px; background-position: 98% 50%; cursor: auto;"
                >

                <label for="last_name">Last Name</label>

                <span class="help-block">This field is required. Only your last initial will show on your profile.</span>
                <input
                  id="last_name"
                  v-model="lastName"
                  maxlength="32"
                  name="last_name"
                  placeholder=""
                  size="30"
                  type="text"
                >

                <button
                  type="submit"
                  value="submit"
                  class="ybtn ybtn--primary ybtn-full-responsive-small"
                  @click="onSaveUserBtnClick"
                >
                  <span>Save Changes</span>
                </button>
                <a
                  style="cursor: pointer;"
                  :href="getCancelUrl()"
                >Cancel</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./profile.ts" />
