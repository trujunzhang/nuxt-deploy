<template>
  <div
    v-if="user"
    class="main-content-wrap main-content-wrap--full">
    <!-- top -->
    <UserTop :user="user" />
    <div id="super-container" class="content-container">
      <div class="clearfix layout-block layout-n user-details_container">
        <!-- left -->
        <UserLeft :user="user" />
        <!-- right -->
        <UserDefaultRight :user="user" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./user_details.ts"/>
