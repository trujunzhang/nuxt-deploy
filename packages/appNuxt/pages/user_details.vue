<template>
  <div>
    <!-- right -->
    <UserDefaultRight v-if="switchMenu('profile')" />
    <UserDetailPhotosSelf v-if="switchMenu('photos')" />
    <UserDetailRestaurantsSelf v-if="switchMenu('restaurants')" />
    <UserDetailReviewsSelf v-if="switchMenu('reviews')" />
  </div>
</template>

<script lang="ts" src="./user_details.ts" />
