<template>
  <div class="error-page">
    <Header404 />
    <div class="error-wrap">
      <div class="content-container content-container--error clearfix">
        <div class="media-body">
          <h2 class="headline">
            <span class="page-status">404 error.</span>
            Doggone it! The page you’re looking for cannot be found.
          </h2>

          <p class="message">
            Detective Darwin is hot on the case of the missing webpage!
            While he's sniffing out the problem, you should either <a href="/">go home</a> or search for what you need below. Elementary, my dear Yelper.
          </p>
        </div>
      </div>
    </div>
    <PhotoFooter />
  </div>
</template>

<script lang="ts" src="./404_error.ts" />

<style lang="css" src="./maintenance-pkg.css" />
