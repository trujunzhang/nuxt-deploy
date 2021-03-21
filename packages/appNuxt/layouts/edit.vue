<template>
  <Error404
    v-if="show404"
  />
  <div
    v-else
    class="responsive"
    style="margin: 0; padding: 0; border: 0; font-size: 100%; font: inherit; vertical-align: baseline; line-height: 1;">
    <div>
      <div class="lemon--div__09f24__1mboc war-compose-app logged-in border-color--default__09f24__1eOdn">
        <!--  header -->
        <EditHeader />
        <!-- Route -->
        <nuxt />
      </div>
    </div>
    <PhotoFooter />
  </div>
</template>

<script lang="ts" src="./edit.ts" />
