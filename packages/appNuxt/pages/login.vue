<template>
  <div class="signup-wrapper">
    <div class="signup-flow on-flow-start" data-component-bound="true">
      <div class="login" data-component-bound="true">
        <div class="signup-form-container">
          <div class="header">
            <h2>Sign in to IEATTA</h2>
            <p class="subheading">New to IEATTA? </p>
            <p class="legal-copy">
              By logging in, you agree to IEATTA’s <a
              class="legal-link"
              href="https://www.yelp.com/static?p=tos"
            >Terms of
              Service</a> and <a class="legal-link" href="https://www.yelp.com/tos/privacy_policy">Privacy
              Policy</a>.
            </p>
          </div>
          <ul class="ylist">
            <li class="js-google-login" data-component-bound="true">
              <!--  google -->
              <GoogleLoginButton />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./login.ts" />
