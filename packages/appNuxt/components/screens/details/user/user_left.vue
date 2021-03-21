<template>
  <div class="column column-alpha user-details_sidebar">
    <div class="ysection">
      <div class="titled-nav js-titled-nav">
        <input id="titled-nav-cfe096a4-9989-42d9-a411-fea3262f2d96" class="titled-nav-dropdown_handler" type="checkbox" role="presentation">

        <div class="titled-nav_menus">
          <div class="titled-nav_menu">
            <div class="titled-nav-header">
              <div class="arrange arrange--top">
                <div class="arrange_unit arrange_unit--fill">
                  <div class="titled-nav-header_content">
                    <h3>{{ getLeftTitle() }}</h3>
                  </div>
                </div>
              </div>
            </div>

            <ul class="titled-nav_items">
              <li class="titled-nav_item">
                <a
                  :class="getMenuClassName('profile')"
                  style="cursor:pointer;"
                  @click="onMenuClick('profile')"
                >
                  <div class="titled-nav_link-content arrange arrange--middle arrange--6">

                    <div class="arrange_unit">
                      <span aria-hidden="true" style="width: 24px; height: 24px;" class="icon icon--24-profile icon--size-24 titled-nav_icon">
                        <svg role="img" class="icon_svg">
                          <use xlink:href="#24x24_profile">
                            <svg id="24x24_profile" height="24" viewBox="0 0 24 24" width="24"><path
                              d="M4.37 22c.278-4.762 3.587-8 7.63-8 4.043 0 7.352 3.238 7.63 8H4.37zM12 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10z"
                            ></path></svg>
                          </use>
                        </svg>
                      </span>
                    </div>

                    <div class="arrange_unit arrange_unit--fill">
                      <span class="titled-nav_link-label">Profile Overview</span>
                    </div>

                  </div>

                </a>
              </li>

              <li class="titled-nav_item">
                <a
                  :class="getMenuClassName('restaurants')"
                  style="cursor:pointer;"
                  @click="onMenuClick('restaurants')"
                >
                  <div class="titled-nav_link-content arrange arrange--middle arrange--6">

                    <div class="arrange_unit">
                      <span aria-hidden="true" style="width: 24px; height: 24px;" class="icon icon--24-friends icon--size-24 titled-nav_icon">
                        <svg role="img" class="icon_svg">
                          <use xlink:href="#24x24_friends">
                            <svg id="24x24_friends" height="24" viewBox="0 0 24 24" width="24"><g><path
                              d="M10.824 13.817l-2.482 5.946c-.69 1.65-2.995 1.65-3.684 0l-2.482-5.946C1.618 12.48 2.586 11 4.018 11h4.964c1.432 0 2.4 1.48 1.842 2.817zM6.5 9a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"
                            ></path><path
                              d="M21.824 13.817l-2.482 5.946c-.69 1.65-2.995 1.65-3.684 0l-2.482-5.946c-.558-1.337.41-2.817 1.842-2.817h4.964c1.432 0 2.4 1.48 1.842 2.817zM17.5 9a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"
                              opacity=".502"
                            ></path></g></svg>
                          </use>
                        </svg>
                      </span>
                    </div>

                    <div class="arrange_unit arrange_unit--fill">
                      <span class="titled-nav_link-label">Restaurants</span>
                    </div>

                  </div>

                </a>
              </li>

              <li class="titled-nav_item">
                <a
                  :class="getMenuClassName('reviews')"
                  style="cursor:pointer;"
                  @click="onMenuClick('reviews')"
                >
                  <div class="titled-nav_link-content arrange arrange--middle arrange--6">

                    <div class="arrange_unit">
                      <span aria-hidden="true" style="width: 24px; height: 24px;" class="icon icon--24-review icon--size-24 titled-nav_icon">
                        <svg role="img" class="icon_svg">
                          <use xlink:href="#24x24_review">
                            <svg id="24x24_review" height="24" viewBox="0 0 24 24" width="24"><path
                              d="M21 6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6zm-5.88 10.428l-3.16-1.938-3.05 2.01.59-3.457L7 10.596l3.457-.505L11.96 6.5l1.582 3.59 3.458.506-2.5 2.447.62 3.385z"
                            ></path></svg>
                          </use>
                        </svg>
                      </span>
                    </div>

                    <div class="arrange_unit arrange_unit--fill">
                      <span class="titled-nav_link-label">Reviews</span>
                    </div>

                  </div>

                </a>
              </li>

              <li class="titled-nav_item">
                <a
                  :class="getMenuClassName('photos')"
                  style="cursor:pointer;"
                  @click="onMenuClick('photos')"
                >
                  <div class="titled-nav_link-content arrange arrange--middle arrange--6">

                    <div class="arrange_unit">
                      <span aria-hidden="true" style="width: 24px; height: 24px;" class="icon icon--24-bookmark icon--size-24 titled-nav_icon">
                        <svg role="img" class="icon_svg">
                          <use xlink:href="#24x24_bookmark">
                            <svg id="24x24_bookmark" height="24" viewBox="0 0 24 24" width="24"><path
                              d="M16 2H8a3 3 0 0 0-3 3v17l7-5 7 5V5a3 3 0 0 0-3-3zm-1.817 10.45l-2.21-1.357L9.837 12.5l.413-2.42L8.5 8.367l2.42-.353L11.973 5.5l1.107 2.514 2.42.353-1.75 1.713.433 2.37z"
                            ></path></svg>
                          </use>
                        </svg>
                      </span>
                    </div>

                    <div class="arrange_unit arrange_unit--fill">
                      <span class="titled-nav_link-label">Photos</span>
                    </div>

                  </div>

                </a>
              </li>
            </ul>
          </div>

          <div class="titled-nav-header responsive-hidden-large" role="presentation"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./user_left.ts" />
