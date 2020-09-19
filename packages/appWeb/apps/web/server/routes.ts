export const routes = require('next-routes')()

export const { Link, Router } = routes

import {
  EventsPages,
  OrganizationPages,
  PhotosPages,
  RecipesPages,
  RestaurantsPages,
  ReviewsPages,
  UsersPages
} from './routesModels'

routes

  // =====================================
  // Restaurants =========================
  // =====================================
  .add(RestaurantsPages.home)
  .add(RestaurantsPages.edit)
  .add(RestaurantsPages.newForm)
  .add(RestaurantsPages.photosBrowser)
  .add(RestaurantsPages.recipes)

  // =====================================
  // Events ==============================
  // =====================================
  .add(EventsPages.home)
  .add(EventsPages.edit)
  .add(EventsPages.orderedUser)

  // =====================================
  // Recipes =============================
  // =====================================
  .add(RecipesPages.home)
  // .add(RecipesPages.edit)
  .add(RecipesPages.photosBrowser)
  .add(ReviewsPages.edit)
  .add(ReviewsPages.newForm)
  .add(ReviewsPages.list)

  // =====================================
  // Users ===============================
  // =====================================
  .add(UsersPages.home)
  .add(UsersPages.reviewsList)
  .add(UsersPages.eventsList)
  .add(UsersPages.photosList)
  .add(UsersPages.recipesList)

  // =====================================
  // Organization ========================
  // =====================================
  .add(EventsPages.eventNew)
  .add(EventsPages.eventsForUser)
  .add(OrganizationPages.recipeNew)
  .add(OrganizationPages.recipeEdit)

  // =====================================
  // Photo ===============================
  // =====================================
  .add(PhotosPages.addPhoto)
  .add(PhotosPages.browserForRecipe)

  // =====================================
  // User ================================
  // =====================================
  .add(UsersPages.editForm)
