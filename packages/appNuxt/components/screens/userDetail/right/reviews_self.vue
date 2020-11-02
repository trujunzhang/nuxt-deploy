<template>
  <div class="lemon--div__09f24__1mboc sidebar-inner__09f24__3rZeA sidebar-inner border-color--default__09f24__1eOdn">
    <div class="lemon--div__09f24__1mboc border-color--default__09f24__1eOdn">
      <div class="lemon--div__09f24__1mboc u-space-t4 u-space-b2 border-color--default__09f24__1eOdn">
        <h2 class="lemon--h2__09f24__hjA2W heading--h2__09f24__1Jzlg alternate__09f24__1KjZF">
          Reviews
        </h2>
      </div>
      <!-- Review Items -->
      <ReviewItem
        v-for="(item) in items"
        :key="item.uniqueId"
        :review="item"
        :show-edit-btn="true"
      />
      <!-- infinite scroll -->
      <div v-waypoint="{ active: true, callback: onWaypoint}"></div>
      <div
        v-if="showEmptyText()"
      >
        <span>
          no Items!
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./reviews_self.ts"/>
