<template>
  <div class="lemon--div__09f24__1mboc sidebar__09f24__2Kpze responsive-hidden-medium border-color--default__09f24__1eOdn">
    <div class="lemon--div__09f24__1mboc sidebar-inner__09f24__3rZeA sidebar-inner border-color--default__09f24__1eOdn">
      <div class="lemon--div__09f24__1mboc border-color--default__09f24__1eOdn">
        <div class="lemon--div__09f24__1mboc u-space-t4 u-space-b2 border-color--default__09f24__1eOdn">
          <h2 class="lemon--h2__09f24__hjA2W heading--h2__09f24__1Jzlg alternate__09f24__1KjZF">
            Recent
            Reviews
          </h2>
        </div>
        <!-- Review Items -->
        <ReviewItem
          v-for="(item) in items"
          :key="item.uniqueId"
          :review="item"
          :show-edit-btn="false"
        />
        <div
          v-if="showEmptyText()"
        >
          <span>
            no Items!
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./review_right.ts" />
