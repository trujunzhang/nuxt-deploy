declare interface IRouterSearchPattern {
  search?: string
}

declare interface IRouterReviewSearchPattern {
  query?: string
  topicId?: string
}

declare interface IRouterForObjectUniqueIdPattern {
  forObjectUniqueId: string
}

declare interface IRouterForObjectUniqueIdWithModelTypePattern
  extends IRouterForObjectUniqueIdPattern {
  modelType: string
}

// =====================================
// Restaurants =========================
// =====================================

declare interface IRouterRestaurantHomePattern extends IRouterForObjectUniqueIdPattern {
  rslug: string
}

declare interface IRouterRecipesListForRestaurantPattern extends IRouterForObjectUniqueIdPattern {
  rslug: string
  page?: number
}

declare interface IRouterRestaurantEditPattern extends IRouterForObjectUniqueIdPattern {
  rslug: string
}

// =====================================
// Events ==============================
// =====================================
declare interface IRouterEventHomePattern extends IRouterForObjectUniqueIdPattern {
  eslug: string
}

declare interface IRouterEventEditPattern extends IRouterForObjectUniqueIdPattern {
  eslug: string
}

declare interface IRouterOrderedUserPagePattern {
  peopleInEventId: string
}

// =====================================
// Recipes =============================
// =====================================
declare interface IRouterOrderedRecipePagePattern extends IRouterForObjectUniqueIdPattern {
  oslug: string
}

// =====================================
// Photo ===============================
// =====================================
declare interface IRouterAddPhotoPagePattern extends IRouterForObjectUniqueIdPattern {
  modelType: string
}

declare interface IRouterBrowserPhotoForRestaurantPagePattern
  extends IRouterForObjectUniqueIdPattern {
  rslug: string
}

declare interface IRouterBrowserPhotoForUserPagePattern {
  uid: string
  uslug: string
}

declare interface IRouterBrowserPhotoForRecipePagePattern extends IRouterForObjectUniqueIdPattern {
  oslug: string
}

// =====================================
// Review ==============================
// =====================================
declare interface IRouterReviewsListPagePattern extends IRouterForObjectUniqueIdPattern {
  modelType: string
  forObjectDisplayName: string
  page?: number
}

// =====================================
// Organization ========================
// =====================================

declare interface IRouterOrganizationPageEditRecipePattern extends IRouterForObjectUniqueIdPattern {
  modelType: string
  recipeUniqueId: string
}
declare interface IRouterOrganizationPageNewRecipePattern extends IRouterForObjectUniqueIdPattern {
  modelType: string
}

declare interface IRouterOrganizationPageNewReviewPattern
  extends IRouterForObjectUniqueIdWithModelTypePattern {}

declare interface IRouterOrganizationPageGetDetailedReviewLinkPattern
  extends IRouterForObjectUniqueIdWithModelTypePattern {
  reviewUniqueId: string
}

declare interface IRouterOrganizationPageNewEventPattern {
  modelType: string
  forObjectId: string
}

declare interface IRouterOrganizationPageEventsForUserPattern
  extends IRouterForObjectUniqueIdPattern {}

declare interface IRouterOrganizationPageEventsForUserSelectedUserPattern
  extends IRouterForObjectUniqueIdPattern {
  userId: string
}

// declare interface IRouterPattern{
