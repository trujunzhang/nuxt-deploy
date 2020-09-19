"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routePage = {
    // Review
    ORGANIZATION_NEW_REVIEW: `ORGANIZATION_NEW_REVIEW`,
    ORGANIZATION_EDIT_REVIEW: `ORGANIZATION_EDIT_REVIEW`,
    REVIEWS_LIST_FOR_MODELS_PAGE: `REVIEWS_LIST_FOR_MODELS_PAGE`,
    // Restaurant
    RESTAURANT_SINGLE_PAGE: `RESTAURANT_SINGLE_PAGE`,
    RESTAURANT_EDIT_PAGE: `RESTAURANT_EDIT_PAGE`,
    RESTAURANT_ONE_PHOTO_PAGE: `RESTAURANT_ONE_PHOTO_PAGE`,
    RESTAURANT_RECIPES_LIST_PAGE: `RESTAURANT_RECIPES_LIST_PAGE`,
    // Restaurant (Recipe)
    ORGANIZATION_NEW_RECIPE: `ORGANIZATION_NEW_RECIPE`,
    ORGANIZATION_EDIT_RECIPE: `ORGANIZATION_EDIT_RECIPE`,
    // Event
    EVENT_SINGLE_PAGE: `EVENT_SINGLE_PAGE`,
    EVENT_NEW_PAGE: `EVENT_NEW_PAGE`,
    EVENT_EDIT_PAGE: `EVENT_EDIT_PAGE`,
    EVENT_ORGANIZATION_FOR_USER_PAGE: `EVENT_ORGANIZATION_FOR_USER_PAGE`,
    // Recipe
    RECIPE_SINGLE_PAGE: `RECIPE_SINGLE_PAGE`,
    RECIPE_ONE_PHOTO_PAGE: `RECIPE_ONE_PHOTO_PAGE`,
    // People In Event
    PEOPLE_IN_EVENT_PAGE: `PEOPLE_IN_EVENT_PAGE`,
    // User Profile
    USER_PROFILE_SINGLE_PAGE: `USER_PROFILE_SINGLE_PAGE`,
    USER_PROFILE_EDIT_PAGE: `USER_PROFILE_EDIT_PAGE`,
    USER_PROFILE_REVIEWS_LIST_PAGE: `USER_PROFILE_REVIEWS_LIST_PAGE`,
    USER_PROFILE_EVENTS_LIST_PAGE: `USER_PROFILE_EVENTS_LIST_PAGE`,
    USER_PROFILE_RECIPES_LIST_PAGE: `USER_PROFILE_RECIPES_LIST_PAGE`,
    USER_PROFILE_ONE_PHOTO_PAGE: `USER_PROFILE_ONE_PHOTO_PAGE`
};
const routeVariables = {
    forObjectUniqueId: ':forObjectUniqueId',
    modelType: ':modelType'
};
exports.routePageMap = {
    // Review
    ORGANIZATION_NEW_REVIEW: {
        pathname: `reviewNew`,
        pattern: `/new/review/${routeVariables.modelType}/${routeVariables.forObjectUniqueId}`
    },
    ORGANIZATION_EDIT_REVIEW: {
        pathname: `reviewEdit`,
        pattern: `/edit/review/${routeVariables.modelType}/${routeVariables.forObjectUniqueId}/:reviewUniqueId`
    },
    REVIEWS_LIST_FOR_MODELS_PAGE: {
        pathname: `reviewsList`,
        pattern: `/reviews/${routeVariables.modelType}/${routeVariables.forObjectUniqueId}/:forObjectDisplayName`
    },
    // Restaurant
    RESTAURANT_SINGLE_PAGE: {
        pathname: `restaurantSingle`,
        pattern: `/biz/${routeVariables.forObjectUniqueId}/:rslug`
    },
    RESTAURANT_EDIT_PAGE: {
        pathname: `editRestaurantForm`,
        pattern: `/edit/biz/${routeVariables.forObjectUniqueId}/:rslug`
    },
    RESTAURANT_ONE_PHOTO_PAGE: {
        pathname: `restaurantOnePhotoPage`,
        pattern: `/biz_photos/${routeVariables.forObjectUniqueId}/:rslug`
    },
    RESTAURANT_RECIPES_LIST_PAGE: {
        pathname: `restaurantRecipesPage`,
        pattern: `/biz_recipes/${routeVariables.forObjectUniqueId}/:rslug`
    },
    // Restaurant (Recipe)
    ORGANIZATION_NEW_RECIPE: {
        pathname: `newRecipeForm`,
        pattern: `/organization/recipe/new/${routeVariables.modelType}/${routeVariables.forObjectUniqueId}`
    },
    ORGANIZATION_EDIT_RECIPE: {
        pathname: `editRecipeForm`,
        pattern: `/organization/recipe/edit/${routeVariables.modelType}/${routeVariables.forObjectUniqueId}/:recipeUniqueId`
    },
    // Event
    EVENT_SINGLE_PAGE: {
        pathname: `eventSingle`,
        pattern: `/events/${routeVariables.forObjectUniqueId}/:eslug`
    },
    EVENT_NEW_PAGE: {
        pathname: `editEventForm`,
        pattern: `/organization/event/new/${routeVariables.modelType}/:forObjectId`
    },
    EVENT_EDIT_PAGE: {
        pathname: `eventEdit`,
        pattern: `/edit/event/${routeVariables.forObjectUniqueId}/:eslug`
    },
    EVENT_ORGANIZATION_FOR_USER_PAGE: {
        pathname: `organizationEventForUser`,
        pattern: `/organization/event/users/${routeVariables.forObjectUniqueId}`
    },
    // Recipe
    RECIPE_SINGLE_PAGE: {
        pathname: `recipeSingle`,
        pattern: `/orderedrecipe/${routeVariables.forObjectUniqueId}/:oslug`
    },
    RECIPE_ONE_PHOTO_PAGE: {
        pathname: `recipeOnePhotoPage`,
        pattern: `/recipe_photos/${routeVariables.forObjectUniqueId}/:oslug`
    },
    // People In Event
    PEOPLE_IN_EVENT_PAGE: {
        pathname: `orderedUserSingle`,
        pattern: `/ordereduser/:peopleInEventId`
    },
    // User Profile
    USER_PROFILE_SINGLE_PAGE: {
        pathname: `userProfileSingle`,
        pattern: `/user_details/:uid/:uslug`
    },
    USER_PROFILE_EDIT_PAGE: {
        pathname: 'userEditPage',
        pattern: '/profile'
    },
    USER_PROFILE_REVIEWS_LIST_PAGE: {
        pathname: `userProfileSingle`,
        pattern: `/user_details_reviews_self/:uid/:uslug`
    },
    USER_PROFILE_EVENTS_LIST_PAGE: {
        pathname: `userProfileSingle`,
        pattern: `/user_details_events/:uid/:uslug`
    },
    USER_PROFILE_RECIPES_LIST_PAGE: {
        pathname: `userProfileSingle`,
        pattern: `/user_details_recipes/:uid/:uslug`
    },
    USER_PROFILE_ONE_PHOTO_PAGE: {
        pathname: `userProfileOnePhotoPage`,
        pattern: `/user_local_photos/:uid/:uslug`
    }
};
