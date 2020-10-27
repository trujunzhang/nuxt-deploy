<template>
  <div class="lemon--div__373c0__1mboc outerMenu__373c0__3CdjA border-color--default__373c0__3-ifU">
    <menu
      class="lemon--menu__373c0__3fJQ8 menu__373c0__35yNN innerMenu__373c0__-bbVR padding-t2__373c0__11Iek padding-r2__373c0__28zpp padding-b2__373c0__34gV1 padding-l2__373c0__1Dr82 border-color--default__373c0__3-ifU"
    >
      <button class="menu-item__373c0__3Vezz menu-item--highlight-auto__373c0__2vEUJ menu-item--active__373c0__38GBA" type="submit" aria-disabled="false" tabindex="0">
        <div class="lemon--div__373c0__1mboc padding-t1__373c0__2aTOb padding-r1__373c0__1xqrz padding-b1__373c0__3erWW padding-l1__373c0__1UBqt border-color--default__373c0__3-ifU">
          <div class="lemon--div__373c0__1mboc menu-item-inner__373c0__gv1Ar border-color--default__373c0__3-ifU">
            <div class="lemon--div__373c0__1mboc menu-item-content-container__373c0__17dmW display--table-cell__373c0__3otg8 border-color--default__373c0__3-ifU">
              <span
                class="lemon--span__373c0__3997G text__373c0__2Kxyz text__373c0__3UkLB text-color--inherit__373c0__1lczC text-align--left__373c0__2XGa-"
                @click="onSortItemClick('default')"
              >Yelp Sort</span>
            </div>
          </div>
        </div>
      </button>
      <button class="menu-item__373c0__3Vezz menu-item--highlight-auto__373c0__2vEUJ" type="submit" aria-disabled="false" tabindex="0">
        <div class="lemon--div__373c0__1mboc padding-t1__373c0__2aTOb padding-r1__373c0__1xqrz padding-b1__373c0__3erWW padding-l1__373c0__1UBqt border-color--default__373c0__3-ifU">
          <div class="lemon--div__373c0__1mboc menu-item-inner__373c0__gv1Ar border-color--default__373c0__3-ifU">
            <div class="lemon--div__373c0__1mboc menu-item-content-container__373c0__17dmW display--table-cell__373c0__3otg8 border-color--default__373c0__3-ifU">
              <span
                class="lemon--span__373c0__3997G text__373c0__2Kxyz text__373c0__3UkLB text-color--inherit__373c0__1lczC text-align--left__373c0__2XGa-"
                @click="onSortItemClick('date_desc')"
              >
                Newest First
              </span>
            </div>
          </div>
        </div>
      </button>
      <button class="menu-item__373c0__3Vezz menu-item--highlight-auto__373c0__2vEUJ" type="submit" aria-disabled="false" tabindex="0">
        <div class="lemon--div__373c0__1mboc padding-t1__373c0__2aTOb padding-r1__373c0__1xqrz padding-b1__373c0__3erWW padding-l1__373c0__1UBqt border-color--default__373c0__3-ifU">
          <div class="lemon--div__373c0__1mboc menu-item-inner__373c0__gv1Ar border-color--default__373c0__3-ifU">
            <div class="lemon--div__373c0__1mboc menu-item-content-container__373c0__17dmW display--table-cell__373c0__3otg8 border-color--default__373c0__3-ifU">
              <span
                class="lemon--span__373c0__3997G text__373c0__2Kxyz text__373c0__3UkLB text-color--inherit__373c0__1lczC text-align--left__373c0__2XGa-"
                @click="onSortItemClick('date_asc')"
              >Oldest First</span>
            </div>
          </div>
        </div>
      </button>
      <button class="menu-item__373c0__3Vezz menu-item--highlight-auto__373c0__2vEUJ" type="submit" aria-disabled="false" tabindex="0">
        <div class="lemon--div__373c0__1mboc padding-t1__373c0__2aTOb padding-r1__373c0__1xqrz padding-b1__373c0__3erWW padding-l1__373c0__1UBqt border-color--default__373c0__3-ifU">
          <div class="lemon--div__373c0__1mboc menu-item-inner__373c0__gv1Ar border-color--default__373c0__3-ifU">
            <div class="lemon--div__373c0__1mboc menu-item-content-container__373c0__17dmW display--table-cell__373c0__3otg8 border-color--default__373c0__3-ifU">
              <span
                class="lemon--span__373c0__3997G text__373c0__2Kxyz text__373c0__3UkLB text-color--inherit__373c0__1lczC text-align--left__373c0__2XGa-"
                @click="onSortItemClick('rating_desc')"
              >Highest Rated</span>
            </div>
          </div>
        </div>
      </button>
      <button class="menu-item__373c0__3Vezz menu-item--highlight-auto__373c0__2vEUJ" type="submit" aria-disabled="false" tabindex="0">
        <div class="lemon--div__373c0__1mboc padding-t1__373c0__2aTOb padding-r1__373c0__1xqrz padding-b1__373c0__3erWW padding-l1__373c0__1UBqt border-color--default__373c0__3-ifU">
          <div class="lemon--div__373c0__1mboc menu-item-inner__373c0__gv1Ar border-color--default__373c0__3-ifU">
            <div class="lemon--div__373c0__1mboc menu-item-content-container__373c0__17dmW display--table-cell__373c0__3otg8 border-color--default__373c0__3-ifU">
              <span
                class="lemon--span__373c0__3997G text__373c0__2Kxyz text__373c0__3UkLB text-color--inherit__373c0__1lczC text-align--left__373c0__2XGa-"
                @click="onSortItemClick('rating_asc')"
              >Lowest Rated</span>
            </div>
          </div>
        </div>
      </button>
    </menu>
  </div>
</template>

<script lang="ts" src="./review_pop.ts" />
