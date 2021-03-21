<template>
  <div>
    <!--  Section2[People Also Viewed]    -->
    <RecipesList :recipes="items" :show-title="true" />
    <div
      v-if="showEmptyHint()"
      class="feeds feed-module activity-feed"
    >
      <ul
        class="content-list"
      >
        <li data-section-id="self">
          <p class="no-recent-activity nobtm">
            You don't have any menus right now.
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" src="./menus.ts" />
