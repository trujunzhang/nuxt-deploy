<template>
  <v-card class="text-center v-card--testimony">
    <div class="pt-6">
      <v-icon
        color="black"
        x-large
      >
        mdi-format-quote-close
      </v-icon>
    </div>

    <v-card-text
      class="display-1 font-weight-light font-italic mb-3"
      v-text="blurb"
    />

    <div
      class="display-2 font-weight-light mb-2"
      v-text="author"
    />

    <div
      class="body-2 text-uppercase grey--text"
      v-text="handle"
    />

    <v-avatar
      class="elevation-12"
      color="grey"
      size="100"
    >
      <v-img
        :alt="`${author} Testimonial`"
        :src="avatar"
      />
    </v-avatar>

    <div />
  </v-card>
</template>

<script lang="ts" src="./MaterialTestimony.ts"/>

<style lang="sass" src="./MaterialTestimony.sass"/>
