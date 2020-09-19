<template>
  <div>
    <div class="lemon--div__09f24__1mboc arrange__09f24__2v3uJ vertical-align-middle__09f24__1tXIr border-color--default__09f24__1eOdn">
      <div class="lemon--div__09f24__1mboc arrange-unit__09f24__3IxLD arrange-unit-fill__09f24__1v_h4 border-color--default__09f24__1eOdn">
        <div class="lemon--div__09f24__1mboc display--inline-block__09f24__3L1EB u-space-r1 border-color--default__09f24__1eOdn">
          <h2 class="lemon--h2__09f24__hjA2W heading--h2__09f24__1Jzlg">
            <a
              class="lemon--a__09f24__IEZFH link__09f24__1MGLa link-color--blue-dark__09f24__tK18E link-size--inherit__09f24__3Javq"
              :href="getDetailRestaurantUrl()"
              target=""
              rel=""
              role="link"
            >{{ getTitle() }}</a>
            <span class="lemon--span__09f24__3997G text__09f24__1RhSS text-color--blue-dark__09f24__VaREV text-align--left__09f24__ceIWW text-size--inherit__09f24__1CbOX">:</span>
            Add Photos
          </h2>
        </div>
      </div>
    </div>
    <div class="lemon--div__09f24__1mboc arrange__09f24__2v3uJ u-space-b3 border-color--default__09f24__1eOdn">
      <div class="lemon--div__09f24__1mboc arrange-unit__09f24__3IxLD border-color--default__09f24__1eOdn">
        <div class="lemon--div__09f24__1mboc display--inline-block__09f24__3L1EB u-space-r1 border-color--default__09f24__1eOdn">
          <a
            class="lemon--a__09f24__IEZFH link__09f24__1MGLa link-color--blue-dark__09f24__tK18E link-size--default__09f24__QvrjA"
            :href="getSeeAllLink()"
            target=""
            rel=""
            role="link"
          >View All Photos</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./restaurant_title.ts" />
