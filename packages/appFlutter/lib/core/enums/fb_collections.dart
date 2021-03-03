enum FBCollections {
  Restaurants,
  Events,
  PeopleInEvent,
  Photos,
  Recipes,
  Users,
  Reviews,
}

fbCollectionToString(FBCollections path) {
  switch (path) {
    case FBCollections.Restaurants:
      return "restaurants";
    case FBCollections.Events:
      return "events";
    case FBCollections.PeopleInEvent:
      return "peopleinevents";
    case FBCollections.Photos:
      return "photos";
    case FBCollections.Recipes:
      return "recipes";
    case FBCollections.Users:
      return "users";
    case FBCollections.Reviews:
      return "reviews";
    default:
      return "none";
  }
}

enum PhotoType {
  Restaurant,
  Recipe,
  Waiter,
}

photoTypeToString(PhotoType path) {
  switch (path) {
    case PhotoType.Restaurant:
      return "restaurant";
    case PhotoType.Recipe:
      return "recipe";
    case PhotoType.Waiter:
      return "waiter";
    default:
      return "none";
  }
}

enum ReviewType {
  None,
  Restaurant,
  Event,
  Recipe,
}

String reviewTypeToString(ReviewType path) {
  switch (path) {
    case ReviewType.Restaurant:
      return "restaurant";
    case ReviewType.Event:
      return "event";
    case ReviewType.Recipe:
      return "recipe";
    default:
      return "none";
  }
}

ReviewType stringToReviewType(String reviewType) {
  if (reviewType == reviewTypeToString(ReviewType.Restaurant)) {
    return ReviewType.Restaurant;
  }
  if (reviewType == reviewTypeToString(ReviewType.Event)) {
    return ReviewType.Event;
  }
  if (reviewType == reviewTypeToString(ReviewType.Recipe)) {
    return ReviewType.Recipe;
  }
  return ReviewType.None;
}
