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
        <label class="u-nowrap" for="attr_DisplayName">Event Name</label>

        <input
          id="attr_DisplayName"
          v-model="displayName"
          class="text"
          name="displayName"
          placeholder="Mel’s Diner"
          type="text"
        >
      </li>

      <li class="BusinessName">
        <label class="u-nowrap" for="attr_Want">Want</label>

        <textarea
          id="attr_Want"
          v-model="want"
          class="text"
          name="want"
          placeholder=""
          type="text"
        />
      </li>

      <li class="BusinessName">
        <label class="u-nowrap" for="attr_Want">Start Date</label>

        <VueCtkDateTimePicker v-model="starDate" />
      </li>

      <li class="BusinessName">
        <label class="u-nowrap" for="attr_Want">End Date</label>

        <VueCtkDateTimePicker v-model="endDate" />
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
      <a :href="getDetailEventUrl()">Cancel</a>
    </div>
  </div>
</template>

<script lang="ts" src="./event_form.ts" />
