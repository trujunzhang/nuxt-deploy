<template>
  <div
    v-if="showSectionPage()"
    class=" border-color--default__373c0__3-ifU"
    style="position:relative;min-height:0px"
  >
    <section class=" margin-t4__373c0__1TRkQ padding-t4__373c0__3hVZ3 border--top__373c0__3gXLy border-color--default__373c0__3-ifU" aria-label="Recommended Reviews">
      <div class=" arrange__373c0__2C9bH gutter-auto__373c0__1Ep_j vertical-align-middle__373c0__1SDTo margin-b3__373c0__q1DuY border-color--default__373c0__3-ifU">
        <div class=" arrange-unit__373c0__o3tjT arrange-unit-fill__373c0__3Sfw1 border-color--default__373c0__3-ifU">
          <h4
            class=" heading--h4__373c0__27bDo heading--inline__373c0__10ozy"
          >
            Ordered Recipes
          </h4>
        </div>
      </div>
      <div class=" css-79elbk border-color--default__373c0__3-ifU" aria-live="polite" role="region">
        <div
          v-if="showEmptyHint()"
          class="feeds feed-module activity-feed"
        >
          <ul
            class="content-list"
          >
            <li data-section-id="self">
              <p class="no-recent-activity nobtm">
                You don't have any ordered recipes right now.
              </p>
            </li>
          </ul>
        </div>
        <div class=" border-color--default__373c0__3-ifU">
          <ul class=" undefined list__373c0__3GI_T">
            <li
              v-for="(item) in peopleInEvents"
              :key="item.uniqueId"
              class=" margin-b5__373c0__2ErL8 border-color--default__373c0__3-ifU"
            >
              <OrderedRecipes :people-in-event="item" :recipes="recipes" :user="getOrderedUser(item)" />
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts" src="./ordered_people.ts" />
