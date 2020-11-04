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
              v-if="user"
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
                  style="background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAfBJREFUWAntVk1OwkAUZkoDKza4Utm61iP0AqyIDXahN2BjwiHYGU+gizap4QDuegWN7lyCbMSlCQjU7yO0TOlAi6GwgJc0fT/fzPfmzet0crmD7HsFBAvQbrcrw+Gw5fu+AfOYvgylJ4TwCoVCs1ardYTruqfj8fgV5OUMSVVT93VdP9dAzpVvm5wJHZFbg2LQ2pEYOlZ/oiDvwNcsFoseY4PBwMCrhaeCJyKWZU37KOJcYdi27QdhcuuBIb073BvTNL8ln4NeeR6NRi/wxZKQcGurQs5oNhqLshzVTMBewW/LMU3TTNlO0ieTiStjYhUIyi6DAp0xbEdgTt+LE0aCKQw24U4llsCs4ZRJrYopB6RwqnpA1YQ5NGFZ1YQ41Z5S8IQQdP5laEBRJcD4Vj5DEsW2gE6s6g3d/YP/g+BDnT7GNi2qCjTwGd6riBzHaaCEd3Js01vwCPIbmWBRx1nwAN/1ov+/drgFWIlfKpVukyYihtgkXNp4mABK+1GtVr+SBhJDbBIubVw+Cd/TDgKO2DPiN3YUo6y/nDCNEIsqTKH1en2tcwA9FKEItyDi3aIh8Gl1sRrVnSDzNFDJT1bAy5xpOYGn5fP5JuL95ZjMIn1ya7j5dPGfv0A5eAnpZUY3n5jXcoec5J67D9q+VuAPM47D3XaSeL4AAAAASUVORK5CYII=&quot;); background-repeat: no-repeat; background-attachment: scroll; background-size: 16px 18px; background-position: 98% 50%; cursor: auto;"
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
