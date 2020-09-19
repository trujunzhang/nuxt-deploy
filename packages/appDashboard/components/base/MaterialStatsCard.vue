<template>
  <base-material-card
    :icon="icon"
    class="v-card--material-stats"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <template v-slot:after-heading>
      <div class="ml-auto text-right">
        <div
          class="body-3 grey--text font-weight-light"
          v-text="title"
        />

        <h3 class="display-2 font-weight-light text--primary">
          {{ value }} <small>{{ smallValue }}</small>
        </h3>
      </div>
    </template>

    <v-col
      cols="12"
      class="px-0"
    >
      <v-divider />
    </v-col>

    <v-icon
      :color="subIconColor"
      size="16"
      class="ml-2 mr-1"
    >
      {{ subIcon }}
    </v-icon>

    <span
      :class="subTextColor"
      class="caption grey--text font-weight-light"
      v-text="subText"
    />
  </base-material-card>
</template>

<script lang="ts" src="./MaterialStatsCard.ts"/>

<style lang="sass" src="./MaterialStatsCard.sass"/>
