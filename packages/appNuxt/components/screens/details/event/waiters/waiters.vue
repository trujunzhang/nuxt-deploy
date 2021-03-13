<template>
  <section
    v-if="showWaitersPage()"
    style="margin-top: 48px;"
    class=" margin-b6__373c0__2Azj6 border-color--default__373c0__3-ifU"
  >
    <div class=" arrange__373c0__2C9bH gutter-2__373c0__1DiLQ vertical-align-bottom__373c0__2xIbs margin-b3__373c0__q1DuY border-color--default__373c0__3-ifU">
      <div class=" arrange-unit__373c0__o3tjT arrange-unit-fill__373c0__3Sfw1 border-color--default__373c0__3-ifU">
        <h4 class=" heading--h4__373c0__27bDo heading--inline__373c0__10ozy">
          Waiters
        </h4>
      </div>
    </div>
    <div class=" outerContainer__373c0__2ew8Y border-color--default__373c0__3-ifU">
      <div class=" innerContainer__373c0__lIICP border-color--default__373c0__3-ifU">
        <div
          v-if="showEmptyHint()"
          class="feeds feed-module activity-feed"
        >
          <ul
            class="content-list"
          >
            <li data-section-id="self">
              <p class="no-recent-activity nobtm">
                You don't have any waiters right now.
              </p>
            </li>
          </ul>
        </div>
        <div class=" scrollContainer__373c0__17K5U border-color--default__373c0__3-ifU nowrap__373c0__35McF">
          <div
            v-for="(waiterId) in event.waiters"
            :key="waiterId"
            class=" itemContainer__373c0__1Sm6v display--inline-block__373c0__1ZKqC margin-r2__373c0__1MwD- border-color--default__373c0__3-ifU"
          >
            <!--  Waiter -->
            <WaiterItem :waiter="getWaiter(waiterId)" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" src="./waiters.ts" />
