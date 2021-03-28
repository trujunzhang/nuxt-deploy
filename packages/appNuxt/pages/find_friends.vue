<template>
  <div class="main-content-wrap main-content-wrap--full">
    <div id="super-container" class="content-container">
      <div class="container find-friends_container">
        <div class="clearfix layout-block layout-n equalize-columns">
          <div class="column column-beta column--responsive">
            <div id="msf-step-container" class="find-friends inner-content clearfix">
              <span id="step-name" class="hidden">email_invite</span>
              <div class="section-header">
                <h2>Send Yelp Invites To These Email Addresses:</h2>
              </div>

              <div class="yform email-invite-form">
                <input type="hidden" name="csrftok" class="csrftok" value="6529d4098023940ecd51223eb9c7d9db03694f9667642e8db9fd4b525fb807a5">
                <div class="content-field">
                  <ul id="emails">
                    <li>
                      <label for="email-invite-0">Email address</label>
                      <input
                        id="email-invite-0"
                        type="email"
                        name="contacts"
                        placeholder="e.g. bob@email.com"
                        style="background-repeat: no-repeat; background-attachment: scroll; background-size: 16px 18px; background-position: 98% 50%; cursor: auto;"
                      >
                    </li>
                    <li>
                      <label class="u-offscreen" for="email-invite-1">Email address</label>
                      <input id="email-invite-1" type="email" name="contacts">
                    </li>
                    <li>
                      <label class="u-offscreen" for="email-invite-2">Email address</label>
                      <input id="email-invite-2" type="email" name="contacts">
                    </li>
                  </ul>
                  <div id="more-emails" class="clearfix">
                    <span class="pseudoLink">Add another email address</span>
                  </div>
                </div>
                <div class="content-field">
                  <div class="action-buttons">
                    <button type="submit" value="submit" class="ybtn ybtn--primary disable-on-submit"><span>Send Email Invites</span></button>
                    <span
                      v-if="isSending"
                      class="throbber show-on-submit"
                    >Sending email invites...</span>
                  </div>
                </div>
                <input type="hidden" name="fsid" value="aXOXAHazRvZp_9MF__Ammw">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <PhotoFooter />
  </div>
</template>

<script lang="ts" src="./find_friends.ts" />
