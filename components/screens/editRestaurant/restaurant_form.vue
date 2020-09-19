<template>
  <div style="margin-right: 20px;">
    <div
      v-if="showAlertMessage"
      class="alert alert-error"
    >
      <p class="alert-message">
        A required field was not filled.
      </p>
    </div>
    <ul>
      <li class="BusinessName">
        <label class="u-nowrap" for="attr_BusinessName">Business Name</label>

        <input
          id="attr_BusinessName"
          v-model="displayName"
          class="text"
          name="BusinessName"
          placeholder="Mel’s Diner"
          type="text"
        >
      </li>

      <li class="biz-edit-description js-biz-description">
        <label class="" for="biz_description">note:</label>
        <textarea
          id="biz_description"
          v-model="note"
          name="description"
        />
        <span class="info-field">&nbsp;</span>
      </li>
    </ul>

    <div class="form-footer">
      <button
        id="submit-biz-details-changes"
        name="action_submit"
        class="ybtn ybtn--primary"
        style="color: white"
        @click="onSaveBtnClick"
      >
        <span>Submit Changes</span>
      </button>
      <a :href="getDetailRestaurantUrl()">Cancel</a>
    </div>
  </div>
</template>

<script lang="ts" src="./restaurant_form.ts" />
