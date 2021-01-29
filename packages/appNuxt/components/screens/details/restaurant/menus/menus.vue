<template>
  <!--   Line22   (menu) -->
  <section class="lemon--section__373c0__fNwDM margin-t4__373c0__1TRkQ padding-t4__373c0__3hVZ3 border-color--default__373c0__3-ifU">
    <div
      class="lemon--div__373c0__1mboc arrange__373c0__2C9bH gutter-auto__373c0__1Ep_j vertical-align-middle__373c0__1SDTo margin-b3__373c0__q1DuY border-color--default__373c0__3-ifU"
    >
      <div class="lemon--div__373c0__1mboc arrange-unit__373c0__o3tjT arrange-unit-fill__373c0__3Sfw1 border-color--default__373c0__3-ifU">
        <h4
          class="lemon--h4__373c0__1yd__ heading--h4__373c0__27bDo heading--inline__373c0__10ozy"
        >
          On the Menu
        </h4>
      </div>
    </div>
    <h5 class="lemon--h5__373c0__3evKh heading--h5__373c0__1WgmC">Popular Dishes</h5>
    <div class="lemon--div__373c0__1mboc margin-t2__373c0__1CFWK border-color--default__373c0__3-ifU">
      <div class="lemon--div__373c0__1mboc outerContainer__373c0__2M9_G border-color--default__373c0__3-ifU">
        <div class="lemon--div__373c0__1mboc innerContainer__373c0__rp6qn border-color--default__373c0__3-ifU">
          <div class="lemon--div__373c0__1mboc scrollContainer__373c0__3nnaG border-color--default__373c0__3-ifU nowrap__373c0__35McF">
            <!--  recipe items  -->
            <div
              v-for="(item) in items"
              :key="item.uniqueId"
              class="lemon--div__373c0__1mboc display--inline-block__373c0__1ZKqC margin-r2__373c0__1MwD- border-color--default__373c0__3-ifU"
              style="white-space: normal; vertical-align: top;"
            >
              <div class="lemon--div__373c0__1mboc dishWrapper__373c0__2DGAl border-color--default__373c0__3-ifU">
                <div class="lemon--div__373c0__1mboc dish__373c0__SkM-8 border-color--default__373c0__3-ifU">
                  <a
                    class="lemon--a__373c0__IEZFH link__373c0__1G70M link-color--blue-dark__373c0__85-Nu link-size--default__373c0__7tls6"
                    href="javascript:;"
                    target=""
                    name=""
                    rel=""
                    role="link"
                  >
                    <div class="lemon--div__373c0__1mboc dishPassport__373c0__2J1D1 border-color--default__373c0__3-ifU background-color--white__373c0__2uyKj">
                      <div class="lemon--div__373c0__1mboc dishPhoto__373c0__uq3ZD border-color--default__373c0__3-ifU">
                        <div
                          class="lemon--div__373c0__1mboc dishPhotoBackground__373c0__2JKs_"
                          style="background-image: url(&quot;https://s3-media0.fl.yelpcdn.com/bphoto/yU02a3EC2kQnF65gHiQMtg/258s.jpg&quot;);"
                        >
                          <img
                            class="lemon--img__373c0__3GQUb dishImage__373c0__2aSSy"
                            src="https://s3-media0.fl.yelpcdn.com/bphoto/yU02a3EC2kQnF65gHiQMtg/258s.jpg"
                            alt="Soy Cured Egg"
                          ></div>
                      </div>
                      <div class="lemon--div__373c0__1mboc  border-color--default__373c0__3-ifU">
                        <div class="lemon--div__373c0__1mboc  border-color--default__373c0__3-ifU nowrap__373c0__35McF">
                          <div class="lemon--div__373c0__1mboc border-color--default__373c0__3-ifU">
                            <p
                              class="lemon--p__373c0__3Qnnj text__373c0__2Kxyz text-color--normal__373c0__3xep9 text-align--left__373c0__2XGa- text-weight--bold__373c0__1elNz text-size--large__373c0__3t60B text--truncated__373c0__3sLaf"
                            >
                              {{ item.displayName }}
                            </p>
                          </div>
                          <span class="lemon--span__373c0__3997G text__373c0__2Kxyz text-color--subtle__373c0__3DZpi text-align--left__373c0__2XGa-">14 Photos&nbsp;</span><span
                          class="lemon--span__373c0__3997G text__373c0__2Kxyz text-color--subtle__373c0__3DZpi text-align--left__373c0__2XGa- text-bullet--before__373c0__VC-O0"
                        >41 Reviews</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          v-if="false"
          class="lemon--div__373c0__1mboc button__373c0__IT_bJ left__373c0__13zzY inactive__373c0__3U8Om border-color--default__373c0__3-ifU" style="top: 75px;">
          <div class="lemon--div__373c0__1mboc icon__373c0__1WoJW border-color--default__373c0__3-ifU" role="button" aria-label="Previous" tabindex="0">
            <span
              aria-hidden="true"
              class="icon--24-chevron-left-v2 css-21pvts"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                class="icon_svg"
              >
                <path
                  d="M14.25 17.58a1 1 0 01-.71-.3L9 12.7a1 1 0 010-1.4l4.5-4.58A1 1 0 0115 6.7a1 1 0 010 1.42L11.15 12 15 15.88a1 1 0 010 1.42 1 1 0 01-.75.28z"
                ></path>
              </svg>
            </span>
          </div>
        </div>
        <div
          v-if="false"
          class="lemon--div__373c0__1mboc button__373c0__IT_bJ right__373c0__K70fs active__373c0__1Vrlp border-color--default__373c0__3-ifU" style="top: 75px;">
          <div class="lemon--div__373c0__1mboc icon__373c0__1WoJW border-color--default__373c0__3-ifU" role="button" aria-label="Next" tabindex="0">
            <span
              aria-hidden="true"
              class="icon--24-chevron-right-v2 css-1bbgc59"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                class="icon_svg"
              >
                <path
                  d="M9.75 17.58a1 1 0 01-.7-.28 1 1 0 010-1.42l3.8-3.88L9 8.12a1 1 0 111.41-1.42L15 11.3a1 1 0 010 1.4l-4.5 4.58a1 1 0 01-.75.3z"
                ></path>
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" src="./menus.ts" />
