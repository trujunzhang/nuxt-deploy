<template>
  <div class="main-content-wrap main-content-wrap--full">
    <div
      v-if="shouldShowPage()"
      id="super-container"
      class="content-container"
    >
      <div class="container">
        <div
          id="update-biz-details"
          class="clearfix layout-block layout-full"
        >
          <div
            class="column column-alpha "
          >
            <h2>Recipe Details</h2>

            <div
              id="biz_attrib_form"
              class="biz-attrib-form yform"
            >
              <div
                class="lemon--div__373c0__1mboc mainContentContainer__373c0__32Mqa verticalFilterPanelEnabled__373c0__3lDVF border-color--default__373c0__3-ifU"
              >
                <div class="lemon--div__373c0__1mboc leftRailContainer__373c0__390Ky border-color--default__373c0__3-ifU">
                  <!-- form -->
                  <RecipeForm
                    :is-new-recipe="isNewRecipe"
                    :recipe="recipe"
                  />
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./recipe_attribute.ts" />
