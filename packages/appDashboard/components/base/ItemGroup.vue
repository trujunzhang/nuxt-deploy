<template>
  <v-list-group
    :group="group"
    :prepend-icon="item.icon"
    :sub-group="subGroup"
    append-icon="mdi-menu-down"
    :color="barColor !== 'rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.7)' ? 'white' : 'grey darken-1'"
  >
    <template v-slot:activator>
      <v-list-item-icon
        v-if="text"
        class="v-list-item__icon--text"
        v-text="computedText"
      />

      <v-list-item-avatar
        v-else-if="item.avatar"
        class="align-self-center"
        color="grey"
      >
        <v-img src="https://demos.creative-tim.com/material-dashboard-pro/assets/img/faces/avatar.jpg" />
      </v-list-item-avatar>

      <v-list-item-content>
        <v-list-item-title v-text="item.title" />
      </v-list-item-content>
    </template>

    <template v-for="(child, i) in children">
      <base-item-sub-group
        v-if="child.children"
        :key="`sub-group-${i}`"
        :item="child"
      />

      <base-item
        v-else
        :key="`item-${i}`"
        :item="child"
        text
      />
    </template>
  </v-list-group>
</template>

<script lang="ts" src="./ItemGroup.ts"/>

<style lang="sass" src="./ItemGroup.sass"/>
