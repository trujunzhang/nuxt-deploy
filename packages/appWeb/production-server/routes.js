"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = require('next-routes')();
exports.Link = exports.routes.Link, exports.Router = exports.routes.Router;
const routesModels_1 = require("./routesModels");
exports.routes
    // =====================================
    // Restaurants =========================
    // =====================================
    .add(routesModels_1.RestaurantsPages.home)
    .add(routesModels_1.RestaurantsPages.edit)
    .add(routesModels_1.RestaurantsPages.newForm)
    .add(routesModels_1.RestaurantsPages.photosBrowser)
    .add(routesModels_1.RestaurantsPages.recipes)
    // =====================================
    // Events ==============================
    // =====================================
    .add(routesModels_1.EventsPages.home)
    .add(routesModels_1.EventsPages.edit)
    .add(routesModels_1.EventsPages.orderedUser)
    // =====================================
    // Recipes =============================
    // =====================================
    .add(routesModels_1.RecipesPages.home)
    // .add(RecipesPages.edit)
    .add(routesModels_1.RecipesPages.photosBrowser)
    .add(routesModels_1.ReviewsPages.edit)
    .add(routesModels_1.ReviewsPages.newForm)
    .add(routesModels_1.ReviewsPages.list)
    // =====================================
    // Users ===============================
    // =====================================
    .add(routesModels_1.UsersPages.home)
    .add(routesModels_1.UsersPages.reviewsList)
    .add(routesModels_1.UsersPages.eventsList)
    .add(routesModels_1.UsersPages.photosList)
    .add(routesModels_1.UsersPages.recipesList)
    // =====================================
    // Organization ========================
    // =====================================
    .add(routesModels_1.EventsPages.eventNew)
    .add(routesModels_1.EventsPages.eventsForUser)
    .add(routesModels_1.OrganizationPages.recipeNew)
    .add(routesModels_1.OrganizationPages.recipeEdit)
    // =====================================
    // Photo ===============================
    // =====================================
    .add(routesModels_1.PhotosPages.addPhoto)
    .add(routesModels_1.PhotosPages.browserForRecipe)
    // =====================================
    // User ================================
    // =====================================
    .add(routesModels_1.UsersPages.editForm);
