<template>
  <!-- photo horizon -->
  <div
    class="lemon--div__373c0__1mboc photoHeader__373c0__YdvQE border-color--default__373c0__3-ifU"
  >
    <div class="lemon--div__373c0__1mboc carousel__373c0__ccjCD border-color--default__373c0__3-ifU">
      <div
        class="lemon--div__373c0__1mboc scrollContainer__373c0__2h-gG border-color--default__373c0__3-ifU nowrap__373c0__35McF"
      >
        <div
          v-for="(item) in items"
          :key="item.uniqueId"
          class="lemon--div__373c0__1mboc photo-header-media__373c0__1fmzx photo-header-media--4__373c0__1CGN1 display--inline-block__373c0__1ZKqC border-color--default__373c0__3-ifU"
        >
          <a
            class="lemon--a__373c0__IEZFH link__373c0__1G70M link-color--blue-dark__373c0__85-Nu link-size--default__373c0__7tls6"
            :href="getImageLink(item)"
            target=""
          ><img
            v-lazy="getPhotoUrl(item)"
            class="lemon--img__373c0__3GQUb"
          ></a>
        </div>
      </div>
    </div>
    <div
      v-if="photosLen"
      class="lemon--div__373c0__1mboc photo-header-buttons__373c0__3sXqc border-color--default__373c0__3-ifU"
    >
      <span
        class="lemon--span__373c0__3997G display--inline__373c0__3JqBP margin-l2__373c0__wvUpT border-color--default__373c0__3-ifU"
      ><a
        class="lemon--a__373c0__IEZFH button__373c0__3lYgT secondary-white__373c0__2OPxz"
        style="--mousedown-x:0px;--mousedown-y:0px;--button-width:0px"
        :href="getSeeAllLink()"
      ><div
        class="lemon--div__373c0__1mboc button-content__373c0__1QNtB border-color--default__373c0__3-ifU"
      ><span
        class="lemon--span__373c0__3997G text__373c0__2Kxyz button-content-text__373c0__Z-7FO text-color--inherit__373c0__1lczC text-align--center__373c0__3VrfZ text-weight--semibold__373c0__2l0fe text-size--large__373c0__3t60B text--truncated__373c0__3sLaf"
      >{{ getPhotosLen() }}</span></div></a></span>
    </div>
  </div>
</template>

<script lang="ts" src="./photos_header.ts" />
