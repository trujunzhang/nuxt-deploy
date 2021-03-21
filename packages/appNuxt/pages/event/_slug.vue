<template>
  <div
    v-if="shouldShowPage()"
  >
    <div
      class="main-content-wrap main-content-wrap--full"
    >
      <!--  top(info)  -->
      <EventInfo :event="event" />
      <!-- Body -->

      <div id="super-container" class="content-container">

        <!--  Container    -->
        <div class=" margin-t3__373c0__1l90z margin-b6__373c0__2Azj6 border-color--default__373c0__3-ifU">
          <div class="border-color--default__373c0__3-ifU">

            <div class=" biz-details-page-container-inner__373c0__2fjQF border-color--default__373c0__3-ifU">

              <EventActions :event="event" />
              <WaitersInEvent :event="event" />
              <OrderedPeopleInEvent :event="event" />

              <div class=" margin-b6__373c0__2Azj6 border-color--default__373c0__3-ifU">
                <div
                  class=" stickySidebar--heightContext__373c0__133M8 tableLayoutFixed__373c0__12cEm arrange__373c0__2C9bH padding-b4__373c0__uiolV border-color--default__373c0__3-ifU"
                >
                  <div class=" arrange-unit__373c0__o3tjT arrange-unit-grid-column--8__373c0__2dUx_ padding-r2__373c0__28zpp border-color--default__373c0__3-ifU">
                    <!--  Line3[Location & Hours]    -->

                    <!--  Line4[Recommended Reviews]    -->
                    <ReviewsList
                      :related-model="event"
                      :review-type="getReviewType()"
                      :related-id="getRelatedId()"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <PhotoFooter />
  </div>
</template>

<script lang="ts" src="./_slug.ts" />
