<template>
  <div class="top-shelf top-shelf-grey">
    <div class="content-container">
      <div class="user-profile_container">
        <div class="user-profile_avatar">
          <div class="photo-slideshow photo-slideshow--full-width photo-slideshow--rounded js-photo-slideshow-user-details">
            <div
              class="photo-slideshow_slide is-active"
            >
              <div>
                <img
                  class="photo-box-img"
                  width="250"
                  height="250"
                  :src="getUserUrl()"
                >
              </div>
            </div>
          </div>
        </div>
        <div class="user-profile_content-wrapper arrange arrange--bottom arrange--30">
          <div class="user-profile_avatar-dummy arrange_unit" aria-hidden="true"></div>
          <div class="user-profile_info arrange_unit">
            <h1>{{ user.username }}</h1>
            <h3 v-if="false" class="user-location alternate">Manhattan, NY</h3>
            <div class="clearfix">
              <ul class="user-passport-stats">
                <li class="friend-count">
                  <span aria-hidden="true" style="fill: #f15c00; width: 24px; height: 24px;" class="icon icon--24-friends icon--size-24">
                    <svg role="img" class="icon_svg">
                      <use xlink:href="#24x24_friends">
                        <svg id="24x24_friends" height="24" viewBox="0 0 24 24" width="24"><g><path d="M10.824 13.817l-2.482 5.946c-.69 1.65-2.995 1.65-3.684 0l-2.482-5.946C1.618 12.48 2.586 11 4.018 11h4.964c1.432 0 2.4 1.48 1.842 2.817zM6.5 9a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"></path><path d="M21.824 13.817l-2.482 5.946c-.69 1.65-2.995 1.65-3.684 0l-2.482-5.946c-.558-1.337.41-2.817 1.842-2.817h4.964c1.432 0 2.4 1.48 1.842 2.817zM17.5 9a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" opacity=".502"></path></g></svg>
                      </use>
                    </svg>
                  </span>
                  <strong>0</strong> Friends
                </li>
                <li class="review-count">
                  <span aria-hidden="true" style="fill: #f15c00; width: 24px; height: 24px;" class="icon icon--24-review icon--size-24">
                    <svg role="img" class="icon_svg">
                      <use xlink:href="#24x24_review">
                        <svg id="24x24_review" height="24" viewBox="0 0 24 24" width="24"><path d="M21 6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6zm-5.88 10.428l-3.16-1.938-3.05 2.01.59-3.457L7 10.596l3.457-.505L11.96 6.5l1.582 3.59 3.458.506-2.5 2.447.62 3.385z"></path></svg>
                      </use>
                    </svg>
                  </span>
                  <strong>0</strong> Reviews
                </li>
                <li class="photo-count">
                  <span aria-hidden="true" style="fill: #f15c00; width: 24px; height: 24px;" class="icon icon--24-camera icon--size-24">
                    <svg role="img" class="icon_svg">
                      <use xlink:href="#24x24_camera">
                        <svg id="24x24_camera" height="24" viewBox="0 0 24 24" width="24"><path d="M19 20H5a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h2.184A2.99 2.99 0 0 1 10 4h4a2.99 2.99 0 0 1 2.816 2H19a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3zM12.005 8.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9zm0 7a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"></path></svg>
                      </use>
                    </svg>
                  </span>
                  <strong>0</strong> Photos
                </li>
              </ul>
            </div>
          </div>
          <div class="user-profile_actions arrange_unit">
            <ul class="action-link-list">
              <li>
                <a class="arrange arrange--middle" href="/user_photos/add" rel="">
                  <div class="action-link_icon arrange_unit">
                    <span aria-hidden="true" style="width: 18px; height: 18px;" class="icon icon--18-add-photo icon--size-18 icon--currentColor">
                      <svg role="img" class="icon_svg">
                        <use xlink:href="#18x18_add_photo">
                          <svg id="18x18_add_photo" height="18" viewBox="0 0 18 18" width="18"><path d="M15 15H3a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2h2a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2zM9 4.75a4.25 4.25 0 1 0 0 8.5 4.25 4.25 0 0 0 0-8.5zM11 10h-1v1a1 1 0 0 1-2 0v-1H7a1 1 0 0 1 0-2h1V7a1 1 0 0 1 2 0v1h1a1 1 0 0 1 0 2z"></path></svg>
                        </use>
                      </svg>
                    </span>
                  </div>
                  <div class="action-link_label arrange_unit arrange_unit--fill">
                    Add Profile Photos
                  </div>
                </a>
              </li>

              <li>
                <a class="arrange arrange--middle" href="/profile?return_url=/user_details?userid=kIEHaO2vd6Lic4rwkMgH6Q" rel="">
                  <div class="action-link_icon arrange_unit">
                    <span aria-hidden="true" style="width: 18px; height: 18px;" class="icon icon--18-feed icon--size-18 icon--currentColor">
                      <svg role="img" class="icon_svg">
                        <use xlink:href="#18x18_feed">
                          <svg id="18x18_feed" height="18" viewBox="0 0 18 18" width="18"><path d="M14 3H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zM4 6.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-3zM14 12H4v-1h10v1zm0-5h-4V6h4v1zm0 2h-4V8h4v1z"></path></svg>
                        </use>
                      </svg>
                    </span>
                  </div>
                  <div class="action-link_label arrange_unit arrange_unit--fill">
                    Update Your Profile
                  </div>
                </a>
              </li>

              <li>
                <a class="arrange arrange--middle" href="/find_friends" rel="">
                  <div class="action-link_icon arrange_unit">
                    <span aria-hidden="true" style="width: 18px; height: 18px;" class="icon icon--18-add-friend icon--size-18 icon--currentColor">
                      <svg role="img" class="icon_svg">
                        <use xlink:href="#18x18_add_friend">
                          <svg id="18x18_add_friend" height="18" viewBox="0 0 18 18" width="18"><g><path d="M5.827 9.647l-2.013 4.127c-.448.922-1.18.915-1.628-.007L.173 9.65C-.275 8.73.178 8 1.18 8h3.64c1.002 0 1.455.725 1.007 1.647zM3 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"></path><path d="M12.827 9.647l-2.013 4.127c-.448.922-1.18.915-1.628-.007L7.173 9.65C6.725 8.73 7.178 8 8.18 8h3.64c1.002 0 1.455.725 1.007 1.647zM10 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" opacity=".502"></path><path d="M18 14h-2v-2h-2v2h-2v2h2v2h2v-2h2v-2z"></path></g></svg>
                        </use>
                      </svg>
                    </span>
                  </div>
                  <div class="action-link_label arrange_unit arrange_unit--fill">
                    Find Friends
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./user_top.ts"/>
