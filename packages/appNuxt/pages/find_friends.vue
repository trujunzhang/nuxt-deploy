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
                        style="background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAfBJREFUWAntVk1OwkAUZkoDKza4Utm61iP0AqyIDXahN2BjwiHYGU+gizap4QDuegWN7lyCbMSlCQjU7yO0TOlAi6GwgJc0fT/fzPfmzet0crmD7HsFBAvQbrcrw+Gw5fu+AfOYvgylJ4TwCoVCs1ardYTruqfj8fgV5OUMSVVT93VdP9dAzpVvm5wJHZFbg2LQ2pEYOlZ/oiDvwNcsFoseY4PBwMCrhaeCJyKWZU37KOJcYdi27QdhcuuBIb073BvTNL8ln4NeeR6NRi/wxZKQcGurQs5oNhqLshzVTMBewW/LMU3TTNlO0ieTiStjYhUIyi6DAp0xbEdgTt+LE0aCKQw24U4llsCs4ZRJrYopB6RwqnpA1YQ5NGFZ1YQ41Z5S8IQQdP5laEBRJcD4Vj5DEsW2gE6s6g3d/YP/g+BDnT7GNi2qCjTwGd6riBzHaaCEd3Js01vwCPIbmWBRx1nwAN/1ov+/drgFWIlfKpVukyYihtgkXNp4mABK+1GtVr+SBhJDbBIubVw+Cd/TDgKO2DPiN3YUo6y/nDCNEIsqTKH1en2tcwA9FKEItyDi3aIh8Gl1sRrVnSDzNFDJT1bAy5xpOYGn5fP5JuL95ZjMIn1ya7j5dPGfv0A5eAnpZUY3n5jXcoec5J67D9q+VuAPM47D3XaSeL4AAAAASUVORK5CYII=&quot;); background-repeat: no-repeat; background-attachment: scroll; background-size: 16px 18px; background-position: 98% 50%; cursor: auto;"
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
                    <span class="throbber show-on-submit">Sending email invites...</span>
                  </div>
                </div>
                <input type="hidden" name="fsid" value="aXOXAHazRvZp_9MF__Ammw">
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PhotoFooter />
    </div>
  </div>
</template>

<script lang="ts" src="./find_friends.ts"/>
